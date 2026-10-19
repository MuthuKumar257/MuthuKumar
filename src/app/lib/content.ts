import cameraPortrait from '../../assets/hardik-camera.webp'
import cameraChip from '../../assets/hardik-camera-chip.webp'
import candid from '../../assets/hardik-candid.webp'
import subject from '../../assets/hardik-bench-subject.webp'
import benchScene from '../../assets/hardik-bench-scene.webp'
import { projects } from './projects'
import type { Endorsement } from './projects'
import type { ProjectId } from './routes.js'

export { projects }
export type { CaseStudy, Endorsement, Film, Flow, Metric, Project, Quote, Shot } from './projects'
export const photos = { cameraPortrait, cameraChip, candid, subject, benchScene }
export const email = 'muthukumar82508@gmail.com'
export const phone = { label: '+91 82485 48461', href: 'tel:+918248548461' }
export const profiles = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muthu-kumar-m' },
  { label: 'GitHub', href: 'https://github.com/muthu-kumar-m' },
]

export function projectById(id: ProjectId) {
  return projects.find((project) => project.id === id)!
}

export const projectNames = Object.fromEntries(projects.map((project) => [project.id, project.name]))
export const featuredProjects = projects.filter((project) => !project.earlier && !project.concept)

export const experience = [
  {
    role: 'Team Lead',
    company: 'Infanji Technologies, Coimbatore',
    dates: 'February 2026 – June 2026',
    highlights: [
      'Led software and technology project execution.',
      'Managed task allocation, planning, and team coordination.',
      'Supported collaboration, problem-solving, and process improvement.',
      'Contributed to strategic planning, process improvement, and operational decision-making.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Pinesphere, Coimbatore',
    dates: 'August 2025 – October 2025',
    highlights: [
      'Worked on web application development using Python and Django.',
      'Assisted with frontend and backend integration.',
      'Contributed to database operations and debugging tasks.',
      'Gained practical exposure to web development workflows.',
    ],
  },
]

export const education = [
  {
    degree: 'B.E. Computer Science and Engineering',
    school: 'Dr. N.G.P. Institute of Technology',
    dates: '2028 batch',
  },
  {
    degree: 'Higher Secondary Certificate (12th)',
    school: 'Karthick Vidya Mandir Matric School',
    dates: '2024',
  },
]

export const skills = [
  { group: 'Languages', items: ['C', 'Java', 'Python', 'Rust'] },
  { group: 'Frontend', items: ['React', 'React Native', 'MEAN stack'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'Django', 'FastAPI', 'REST APIs'] },
  { group: 'Databases', items: ['SQL', 'MySQL'] },
  { group: 'Tools & DevOps', items: ['Linux', 'Git', 'GitHub', 'Vercel'] },
  { group: 'Cloud', items: ['AWS'] },
  { group: 'Additional', items: ['Prompt Engineering'] },
  { group: 'Soft Skills', items: ['Leadership', 'Communication', 'Team Management'] },
]

export const practice = [
  {
    title: 'Full-Stack & Web',
    text: 'Building robust, scalable web applications and responsive cross-platform mobile apps with clean modular architecture.',
    tools: ['React', 'React Native', 'MEAN stack', 'REST APIs'],
  },
  {
    title: 'AI & Prompt Optimization',
    text: 'Designing low-latency middleware and prompt compression algorithms to slash token costs and optimize model inferences.',
    tools: ['Python', 'FastAPI', 'Prompt Engineering', 'AI Middleware'],
  },
  {
    title: 'Backend & Database Systems',
    text: 'Architecting reliable database systems, high-throughput REST APIs, and scalable server architectures with Node.js and Express.js.',
    tools: ['Node.js', 'Express.js', 'Django', 'FastAPI', 'REST APIs', 'SQL', 'MySQL', 'AWS'],
  },
]

export const about = {
  title: 'Solving real-world problems through clean code & technology.',
  intro: "Hi, I'm Muthu Kumar M, a Full Stack Developer passionate about building practical software products, AI-powered applications, and modern web experiences. I enjoy solving real-world problems through clean code, thoughtful design, and technology.",
  story: [
    {
      heading: 'Full-Stack Web Development',
      body: 'Passionate about engineering reliable web applications and intuitive interfaces using React, React Native, and the MEAN stack. I focus on clean component architectures, efficient state management, and intuitive digital interactions.',
    },
    {
      heading: 'Artificial Intelligence & Prompt Optimization',
      body: 'Dedicated to making AI practical and cost-effective. Through projects like TokTrim, I explore intelligent prompt compression, low-latency API middleware, and prompt engineering strategies that maximize output quality while cutting operational token costs.',
    },
    {
      heading: 'Backend Engineering & Database Systems (Node.js & Express.js)',
      body: 'Specializing in backend engineering with Node.js and Express.js, alongside Django, FastAPI, SQL, and MySQL. I architect robust server runtimes, high-throughput RESTful APIs, and optimized relational database schemas, prioritizing predictable API contracts, secure authentication, and query performance for scalable production workflows.',
    },
    {
      heading: 'Building Practical Software Products',
      body: 'From online coding exam platforms with proctoring safeguards to full-stack restaurant management systems with real-time rupee pricing and cricket boundary detection sensors, I enjoy turning concrete problems into working software products.',
    },
    {
      heading: 'Technical Leadership & Collaboration',
      body: 'Experienced in leading technical execution, coordinating task allocation, and aligning teams as Team Lead at Infanji Technologies and Technical Lead at NGP Infanji E-Cell.',
    },
  ],
  career: [
    {
      company: 'Infanji Technologies, Coimbatore',
      role: 'Team Lead',
      year: '2026',
      dates: 'February 2026 to June 2026',
      body: 'Led software and technology project execution, managed task allocation, planning, and team coordination, and supported collaboration and process improvement.',
    },
    {
      company: 'Pinesphere, Coimbatore',
      role: 'Full Stack Developer Intern',
      year: '2025',
      dates: 'August 2025 to October 2025',
      body: 'Worked on web application development using Python and Django, assisted with frontend and backend integration, and contributed to database operations and debugging.',
    },
  ],
}

export const interests = [
  { title: 'Full-Stack Web Development', text: 'Building practical web and mobile applications with React, React Native, and reactive state architectures.' },
  { title: 'AI & Prompt Optimization', text: 'Creating stateless middleware and techniques to minimize LLM token consumption and latency overhead.' },
  { title: 'Backend & Database Systems', text: 'Architecting scalable server runtimes and REST APIs with Node.js, Express.js, Django, FastAPI, and relational databases.' },
  { title: 'Building Practical Products', text: 'Turning everyday operational challenges into high-contrast, dependable digital tools and sensor hardware.' },
]

export const toolkit = [
  'Node.js',
  'Express.js',
  'Python',
  'FastAPI',
  'Django',
  'React',
  'React Native',
  'Rust',
  'C',
  'Java',
  'MEAN Stack',
  'SQL',
  'MySQL',
  'REST APIs',
  'Linux',
  'AWS',
  'Git',
  'GitHub',
  'Vercel',
  'Prompt Engineering',
]

export const endorsements: { featured: Endorsement & { more: string }; quotes: Endorsement[] } = {
  featured: {
    role: 'Team Lead · Infanji Technologies',
    text: 'Led a team in the development and execution of software and technology projects, ensuring quality and timely delivery.',
    highlight: 'development and execution of software and technology projects',
    more: 'Managed project planning, task allocation, team coordination, and contributed to strategic decision-making and process improvement.',
  },
  quotes: [
    {
      role: 'Technical Lead · NGP Infanji E-Cell',
      text: 'Led the Technical and Design team at NGP Infanji E-Cell, overseeing event branding, creative design, technical execution, and promotional campaigns.',
      highlight: 'event branding, creative design, technical execution',
    },
    {
      role: 'Organizer · IdeaFury & Illuminate',
      text: 'Organized IdeaFury startup pitching event for aspiring entrepreneurs and coordinated Illuminate, a startup-focused workshop fostering innovation.',
      highlight: 'Organized IdeaFury startup pitching event',
    },
    {
      role: 'Treasurer · IEEE & IEEE Computer Society',
      text: 'Served as Treasurer for IEEE and IEEE Computer Society, managing fiscal planning and supporting collegiate technical engineering initiatives.',
      highlight: 'Treasurer for IEEE and IEEE Computer Society',
    },
    {
      role: 'Director · Rotaract Club',
      text: 'Served as International Service Director at Rotaract Club, fostering leadership, community outreach, and international goodwill initiatives.',
      highlight: 'International Service Director at Rotaract Club',
    },
    {
      role: 'Achievements · E-Summit & KGISL',
      text: 'Qualified for and attended the finals of the E-Summit; Secured 3rd Prize in the IPL Auction Competition conducted by KGISL.',
      highlight: 'Secured 3rd Prize in the IPL Auction Competition',
    },
  ],
}

export const leadership = [
  {
    role: 'Technical and Design Team Lead',
    organization: 'NGP Infanji E-Cell',
    details: 'Led the Technical and Design team at NGP Infanji E-Cell, overseeing event branding, creative design, technical execution, and promotional campaigns for entrepreneurship programs.',
  },
  {
    role: 'Startup Event Organizer',
    organization: 'IdeaFury',
    details: 'Organized IdeaFury, a startup pitching event that provided a platform for aspiring entrepreneurs to present innovative business ideas.',
  },
  {
    role: 'Workshop Coordinator',
    organization: 'Illuminate',
    details: 'Coordinated Illuminate, a startup-focused workshop aimed at fostering entrepreneurial skills and innovation among students.',
  },
  {
    role: 'Treasurer',
    organization: 'IEEE & IEEE Computer Society',
    details: 'Managed financial allocations, budget tracking, and supported technical society initiatives.',
  },
  {
    role: 'International Service Director',
    organization: 'Rotaract Club',
    details: 'Spearheaded international service activities, cross-club collaborations, and community outreach programs.',
  },
]

export const achievements = [
  'Qualified for and attended the finals of the E-Summit, engaging with startup founders, investors, and industry leaders.',
  'Secured 3rd Prize in the IPL Auction Competition conducted by KGISL.',
  'Participated in Paper Presentation and Technical Quiz.',
]

export function splitChange(value: string) {
  const parts = value.split(' to ')
  return parts.length === 2 ? { from: parts[0], to: parts[1] } : null
}
