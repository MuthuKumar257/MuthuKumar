# Muthu Kumar M: Portfolio

A cinematic, scroll-led Full Stack Developer portfolio showcasing practical software products, backend engineering with Node.js and Express.js, and AI prompt optimization. Built with React 19, Vite, Tailwind CSS v4, GSAP (ScrollTrigger, SplitText), Lenis smooth scrolling, a ThreeUI Community canvas, Lucide icons, and a self-hosted Mona Sans variable font. It has no backend, makes no external requests, and never accesses the visitor's camera or microphone. The previous scroll story is preserved at [story.html](story.html) and the first-person desk experiment at [desk.html](desk.html).

## Run

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Check And Export

```sh
npm run check
npm run build
```

`check` type-checks the React app, syntax-checks the legacy scripts, and runs the route and journey tests. The build produces three independent, self-contained files: [dist/index.html](dist/index.html) for the portfolio, [dist/story/story.html](dist/story/story.html) for the previous scroll story, and [dist/desk/desk.html](dist/desk/desk.html) for the desk study. Each embeds its JavaScript, CSS, fonts, and images and opens directly from disk. The resume PDF ships beside the portfolio as `dist/Muthu_Kumar_M_Resume.pdf`.

## Password-Protected Case Study

Case studies with proprietary specifications are supported with client-side encryption. The readable source is `src/protected/portal/` (`case-study.json` plus its screens). That folder and `.env.local` are git-ignored and stay on this machine; keep a private backup of the folder.

1. Add the password to `.env.local`: `CASE_STUDY_PASSWORD=your-long-passphrase`. Use 12+ characters; a few random words work well.
2. Run `npm run seal`. It encrypts the case study and its screens with AES-256-GCM, using a key derived from the password with PBKDF2-SHA256 (600,000 iterations), into `src/app/lib/sealed-case-studies.json`.
3. Commit that sealed file. Run `npm run seal` again after editing `src/protected/` or changing the password. The production build stops if the seal is missing and warns when the source is newer than the seal.

Visitors see the public teaser and an NDA gate that asks for the password or offers an email request. The browser derives the key from the typed password and decrypts in memory; a wrong password fails the integrity check. Nothing is stored, so a reload asks again. Decryption uses Web Crypto, which needs https or localhost.

## Deploy To GitHub Pages

The build needs no secrets because it ships only the sealed copy. Routes use the hash and asset URLs are relative, so the site works at a user site root or a `/<repo>/` project path without a 404 fallback.

`npm run build:pages` is the hosted build. Unlike `npm run build`, it keeps JavaScript, CSS, fonts and images as separate hashed files, so the first visit downloads roughly a quarter of the single-file export: images load as they near the viewport, the browser fetches only the font subsets it needs, and the sealed case study loads only on its gate. The HTML preloads the display font and, when the URL opens the home page, both hero layers, so the first render matches the single-file build. Its `desk` and `story` exports are unchanged.

1. Push the repository to GitHub.
2. In Settings > Pages, set Source to GitHub Actions.
3. Push to `main`. [The workflow](.github/workflows/deploy-pages.yml) deploys every push automatically: it installs dependencies from the public npm registry, runs `npm run build:pages`, and publishes `dist`. To redeploy without a new commit, use Actions > Deploy to GitHub Pages > Run workflow.
4. With a custom domain, turn on Enforce HTTPS.

Before going live, remove `noindex, nofollow` from the HTML files if the site should appear in search.

## Portfolio

- **Opening.** An annotated magazine cover. Muthu Kumar M sits on the bench against a plain painted wall, and "MUTHU KUMAR M" runs across the top, passing behind his head through a registered cutout layer. From 1024px wide, a layout grid draws in and each body part is selected, pinned, and annotated like a design comp: Head (Backend & Databases), Eyes (Clean Architecture), Heart (AI & Prompt Optimization), Arm (Technical Leadership), and Buttons (Practical Software). Notes rest as a body-part tag and a title so the cover stays calm and scannable. Hovering, focusing, or tapping a note opens its detail, and pointing at the body part itself shows that part's selection bounds and opens its note; clicking keeps it open while the others step back, and clicking the note again, clicking the empty canvas, or pressing Escape closes it. Note cards stack beside their pins, clear of the name and intro copy, with room reserved for the opened detail; the lowest-priority notes drop on short screens. The photograph pulls into focus on load, and on fine pointers the name drifts against the photo for depth. On large screens, scrolling fades the notes, contracts the photograph into a window while the name parts, and "Engineering practical software. Driven by clean code & AI." arrives on either side. Phones and portrait screens set the name in front of the photo at the bottom without notes; short screens and reduced motion get the static cover with the same statement below it.
- **Approach.** A large statement fills in word by word as it scrolls, with an inline photo chip: "Software is problem solving. I turn complex ideas into practical applications, clean code, and modern products." Full-Stack & Web, AI & Prompt Optimization, and Backend & Database Systems follow with their toolkits.
- **Selected work.** The period in "Selected work." opens like a camera aperture onto featured software projects: TokTrim (AI prompt cost optimization), CodeExam (coding assessment platform), CashFlow AI (financial intelligence), Alumnyx (mobile networking), Kitchen Manager (POS & kitchen management), and Light Boundary System (IoT cricket boundary sensors). Projects stack as full-screen colour sheets; each shows the outcome headline, key impact figures, role, and a "Read case study" link beside a product interface screenshot. Each project page opens on the same cover with its impact figures, then an at-a-glance sidebar (role, team, timeline, scope), the problem, key insight, key architectural decisions with screens, results, and takeaways.
- **Experience, interests, contact.** Career rows highlighting leadership at Infanji Technologies and Pinesphere, a scroll-reactive toolkit marquee, personal interests, verified leadership/affiliations, and a closing contact screen over the ThreeUI Typography Vortex with a magnetic "Get in touch" button.
- **Pages.** `#work`, `#work/<id>`, `#about`, and `#resume` open reading pages behind a curtain transition that names the destination. Browser Back restores the previous scroll position, and Escape returns from a reading page. Legacy `#exhibition/<id>`, `#my-story`, `#my-approach`, `#selected-work`, and `#beyond-work` links still resolve. The resume page downloads Muthu Kumar M's resume, served from [public/Muthu_Kumar_M_Resume.pdf](public/Muthu_Kumar_M_Resume.pdf) at a stable URL next to the page; replace that file to update it.
- **Motion and access.** GSAP matchMedia gates the pinned sequences to screens at least 1024x620 without reduced motion. Content reveals use opacity so assistive technology can always read the text. Invisible controls are made non-interactive, and keyboard focus scrolls hidden story content into view. Lenis runs only for fine pointers without reduced motion.

## Design Tooling

- **ThreeUI:** `@designcodeio/threeui` (Community, MIT). Import individual components from `@designcodeio/threeui/components/<Name>`.
- **GSAP:** 3.15 with `@gsap/react`. ScrollTrigger and SplitText are registered in [src/app/lib/gsap.ts](src/app/lib/gsap.ts).
- **Tailwind CSS:** v4 with semantic tokens and custom animations.

## Previous Scroll Story

- The desktop opening layers a locally prepared portrait silhouette, two photographic windows, and expressive name typography. As the visitor scrolls, the secondary windows and type move away and the intact portrait expands. Work and resume are reachable immediately; the sticky header remains available throughout.
- Photographic window panes assemble with scroll progress as the story moves through engineering foundations, full-stack systems, and leadership.
- Project readers preserve ownership and outcomes before narrative and illustrative art. Back to story and Escape return to the corresponding chapter. Browser Back restores the previous story position. Sharing and resume PDF actions retain visible, announced feedback and never copy local machine paths.
- The Work page keeps the scannable comparison catalogue. About contains the supplied engineering story, communication approach, values, interests, and career history.

## Desk Study

The earlier experience is available at [desk.html](desk.html) during development. Its existing camera, telescope, paper, and monitor interactions are retained as an archived 3D experiment.

- Interviewers can go directly to Work, Resume, or Email from 48px corner shortcuts. Exploring the camera and personal objects is optional.
- The reading view has a scannable work index showing the problem, Muthu Kumar M's role, and a result for each project. Work, About, Resume, and the PDF download remain directly accessible while reading.
- The hanging nameplate introduces Muthu Kumar M and opens the clipped resume.
- The left monitor selects work; the right monitor presents it and states the engineering role.
- Daylight/evening lighting, reduced-motion support, keyboard controls, and explicit graphics-context recovery are included.

## Edit

- [index.html](index.html) and [src/app/main.tsx](src/app/main.tsx): portfolio entry point, theme bootstrap, fonts, and styles.
- [src/app/App.tsx](src/app/App.tsx): hash routes, history and scroll restoration, Lenis, curtain transitions, focus, and Escape handling.
- [src/app/sections](src/app/sections): homepage sections (hero sequence, approach, selected work, experience, interests).
- [src/app/pages](src/app/pages): Work, project, About, and Resume pages.
- [src/app/components](src/app/components): header, contact footer with the ThreeUI vortex, curtain, magnetic control, and page title.
- [src/app/lib/content.ts](src/app/lib/content.ts): adapts the shared project, resume, and story data for the app.
- [src/app/lib/routes.js](src/app/lib/routes.js) and [routes.test.js](src/app/lib/routes.test.js): allowlisted route parsing, including legacy links.
- [src/app/styles.css](src/app/styles.css): Tailwind v4 theme tokens, light and dark palettes, and the hero, aperture, and stack CSS.
- [PRODUCT.md](PRODUCT.md): agreed audience, direction, and scope.
