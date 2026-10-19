import { useEffect } from 'react'

let sharedAudio: HTMLAudioElement | null = null
let hasStarted = false
let hasEnded = false
let isPlayingPromise: Promise<void> | null = null
let unlockCleanups: (() => void) | null = null

export function getBackgroundAudio(): HTMLAudioElement | null {
  if (typeof window === 'undefined') return null
  if (!sharedAudio) {
    const isFile = window.location.protocol === 'file:'
    const base = isFile ? '.' : (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
    const audioSrc = base ? `${base}/assets/MK%20Intro%20Song.mp3` : '/assets/MK%20Intro%20Song.mp3'

    const audio = new Audio()
    audio.preload = 'auto'
    audio.loop = false
    audio.volume = 1.0
    audio.src = audioSrc

    audio.addEventListener('ended', () => {
      hasEnded = true
      cleanUpUnlockListeners()
    }, { once: true })

    audio.addEventListener('error', () => {
      if (!hasEnded && audio.src !== '/assets/MK%20Intro%20Song.mp3') {
        audio.src = '/assets/MK%20Intro%20Song.mp3'
        audio.load()
        if (hasStarted) {
          audio.play().catch(() => {})
        }
      }
    }, { once: true })

    audio.load()
    sharedAudio = audio

    if (typeof window !== 'undefined') {
      ;(window as any).__audio = audio
      ;(window as any).__playMusic = playBackgroundMusic
    }
  }
  return sharedAudio
}

function cleanUpUnlockListeners() {
  if (unlockCleanups) {
    unlockCleanups()
    unlockCleanups = null
  }
}

export function setupUnlockListeners() {
  if (unlockCleanups || hasEnded || hasStarted) return

  const onUserGesture = () => {
    if (hasEnded || hasStarted) {
      cleanUpUnlockListeners()
      return
    }
    const audio = getBackgroundAudio()
    if (!audio) return

    if (isPlayingPromise) return
    const promise = audio.play()
    if (promise !== undefined) {
      isPlayingPromise = promise
      promise
        .then(() => {
          hasStarted = true
          isPlayingPromise = null
          cleanUpUnlockListeners()
        })
        .catch(() => {
          isPlayingPromise = null
          // Keep listeners active until successful playback
        })
    }
  }

  // Capture user activation on window to prevent duplicate handlers or stopped propagation
  const events = ['pointerdown', 'touchstart', 'mousedown', 'keydown', 'click'] as const
  const handlers: [string, () => void][] = events.map((event) => {
    const handler = () => onUserGesture()
    window.addEventListener(event, handler, { capture: true, passive: true })
    return [event, handler]
  })

  unlockCleanups = () => {
    handlers.forEach(([event, handler]) => {
      window.removeEventListener(event, handler, { capture: true } as EventListenerOptions)
    })
  }
}

export function playBackgroundMusic() {
  if (hasStarted || hasEnded) return
  const audio = getBackgroundAudio()
  if (!audio || audio.ended) return

  if (isPlayingPromise) return
  const promise = audio.play()
  if (promise !== undefined) {
    isPlayingPromise = promise
    promise
      .then(() => {
        hasStarted = true
        isPlayingPromise = null
        cleanUpUnlockListeners()
      })
      .catch((_error) => {
        isPlayingPromise = null
        // Autoplay policy prevented playback without gesture.
        // Listen for user gesture without displaying controls or artificial delays.
        setupUnlockListeners()
      })
  }
}

export function BackgroundMusic() {
  useEffect(() => {
    // Arm unlock listeners immediately on render so any early user gesture unlocks audio
    setupUnlockListeners()

    // Start playback immediately when the main portfolio page has rendered successfully,
    // without artificial delays or timers.
    playBackgroundMusic()

    return () => {
      // Keep listeners active across React re-renders until playback successfully starts
    }
  }, [])

  return null
}
