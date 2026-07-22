# Yashasvini Bhanuraj | Portfolio

A responsive, interactive portfolio presenting my work in software development,
business analysis, UI/UX design, and project analysis. It brings together my
professional experience, projects, technical skills, achievements,
certifications, volunteering, resume, and contact information.

## Highlights

- Cinematic animated homepage introduction with synchronized audio and video
- Browser-safe autoplay behavior with a visible mute/unmute control
- Responsive layouts for desktop, laptop, tablet, and mobile
- Light and dark themes with the preference saved in the browser
- Filterable projects with direct GitHub repository links
- Categorized achievements, certifications, and volunteering experience
- Certificate and badge previews
- Downloadable resume
- Contact form connected to my portfolio email through FormSubmit
- Accessible controls and reduced-motion support

## Technologies

| Technology | Purpose |
| --- | --- |
| React 19 | Component-based user interface |
| TypeScript | Type-safe, maintainable source code |
| Vite | Local development and optimized production builds |
| CSS | Responsive layout, themes, animation, and visual styling |
| Lucide React | Interface icons |
| React Icons | GitHub and LinkedIn icons |
| Intersection Observer API | Homepage video and section visibility behavior |
| Local Storage | Remembers the selected theme |
| FormSubmit | Delivers contact-form messages without a database |
| Vercel | Builds and hosts the production website |

## Project Structure

```text
Yashasvini-Portfolio/
├── public/
│   ├── credentials/             # Certificates and achievement images
│   ├── Yashasvini_Bhanuraj_Resume.pdf
│   ├── yashasvini-cinematic-intro-4k.mp4
│   └── yashasvini-cinematic-poster-4k.webp
├── src/
│   ├── components/              # Navigation, video, and shared components
│   ├── data/                    # Navigation and project data
│   ├── sections/                # Portfolio sections
│   ├── App.tsx                  # Application composition and theme state
│   ├── index.css                # Global themes and responsive styling
│   └── main.tsx                 # Browser entry point
├── index.html                   # HTML entry and portfolio metadata
├── package.json                 # Dependencies and commands
├── tsconfig.json                # TypeScript configuration
├── vercel.json                  # Vercel build configuration
└── vite.config.ts               # Vite configuration
```

## Run Locally

Requirements:

- Node.js 22
- npm

From the project folder, run:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, normally:

```text
http://localhost:5173/
```

Press `Ctrl + C` to stop the server.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Type-checks and creates the production build in `dist` |
| `npm run preview` | Previews the completed production build locally |

## Homepage Video

`src/components/VideoIntro.tsx` loads the optimized MP4 and poster from
`public`. Audio and animation are contained in the same MP4, preserving lip
synchronization. The component restarts when the homepage becomes active,
pauses after the visitor leaves it, and provides a mute/unmute button.

Most browsers block audible autoplay before the visitor interacts with a page.
When this happens, the video begins muted and the visitor can enable sound with
the sound button. This is browser behavior and cannot be bypassed by a website.

## Contact Form

The contact form submits directly to FormSubmit and does not use a database.
The first submission may trigger a one-time FormSubmit activation email for the
configured recipient address. After activation, messages are delivered to that
email.

## Deploy to Vercel

This repository is already configured for Vercel:

- Framework: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 22.x

After pushing the files to GitHub, import the repository into Vercel or
redeploy the existing Vercel project. `vercel.json` supplies the required build
and output settings.

## Data and Privacy

- Visitors do not need an account or ChatGPT sign-in.
- The portfolio does not use a database.
- Theme preference is stored only in the visitor's browser.
- Contact messages are sent through FormSubmit.
- No passwords, API keys, or authentication tokens are included.

---

Designed and built by **Yashasvini Bhanuraj**.
