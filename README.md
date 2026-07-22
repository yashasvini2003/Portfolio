# Yashasvini Bhanuraj | Portfolio

A responsive personal portfolio showcasing my work across software development,
business analysis, UI/UX design, and project analysis. The website brings
together my professional experience, academic and client projects, technical
skills, achievements, certifications, volunteering, resume, and contact
information in one interactive experience.

## Portfolio Highlights

- Cinematic animated introduction on the homepage
- Synchronized voice and character lip movement in the introduction video
- Automatic video playback when the homepage becomes visible
- Sound-first playback with a mute/unmute control and browser-safe fallback
- Responsive layouts for desktop, laptop, tablet, and mobile screens
- Light and dark themes with the selected preference saved in the browser
- Smooth section navigation and active-section indicators
- Filterable project cards with direct GitHub repository links
- Categorized achievements, certifications, and volunteering experience
- Certificate and badge previews
- Downloadable resume
- Functional contact form with clear success and error messages
- Accessible labels, keyboard-friendly controls, and reduced-motion support

## Technologies Used

| Technology | Purpose |
| --- | --- |
| React 19 | Builds the portfolio interface from reusable components |
| TypeScript | Adds type safety and improves maintainability |
| Vite | Provides the local development server and fast module updates |
| Vinext | Connects the React interface to the current application structure and production build |
| CSS | Controls the responsive layout, themes, animations, glass effects, and visual styling |
| Lucide React | Supplies consistent interface icons |
| React Icons | Supplies branded GitHub and LinkedIn icons |
| Intersection Observer API | Detects when sections and the homepage video enter or leave the viewport |
| Local Storage | Remembers the visitor's selected light or dark theme |
| FormSubmit | Sends contact-form messages to the configured portfolio email address |

## How the Website Works

### Application Structure

`app/page.tsx` loads the main portfolio component from `src/App.tsx`.
`src/App.tsx` combines the navigation and seven portfolio sections:

1. Home
2. About
3. Professional Experience
4. Projects
5. Skills
6. Achievements and Recognition
7. Contact

Each section is kept in its own component under `src/sections`, while shared
interface elements such as the navigation bar, section headings, scroll
markers, and homepage video are stored under `src/components`.

### Homepage Video

The homepage introduction is handled by
`src/components/VideoIntro.tsx`. The component:

- loads the optimized MP4 video and matching poster image from `public`;
- attempts to start the introduction with sound;
- falls back safely when a browser blocks audible autoplay;
- starts sound after the visitor's first interaction when required;
- provides a visible mute/unmute button;
- restarts the introduction when the homepage becomes active again; and
- pauses the video after the visitor leaves the homepage.

The audio and video are stored together in the same MP4 file, which preserves
the intended lip synchronization.

> Modern browsers may block audible autoplay until the visitor interacts with
> the page. This is a browser security rule, not a website error. The portfolio
> handles it by enabling sound on the first click/tap or through the sound
> button.

### Responsive Design

Responsive rules in `app/globals.css` adjust typography, navigation, section
spacing, cards, buttons, the homepage composition, and video framing across
different screen sizes. The mobile navigation is controlled through React
state in `src/App.tsx` and `src/components/Navbar.tsx`.

### Theme Selection

Light mode is the default theme. Visitors can switch between light and dark
themes from the navigation bar. The selected theme is stored in the browser
under `portfolio-theme-v2`, so it remains selected on the visitor's device.

### Projects and Achievements

Project information is stored in `src/data/projects.ts`. The project and
achievement toolbars use React state to filter the visible cards without
reloading the page. Repository buttons open the corresponding GitHub projects
in a new tab.

### Contact Form

The contact form submits the visitor's name, email address, and message to
FormSubmit. Messages are delivered to the email address configured in
`src/sections/Contact.tsx`. The form does not store submissions in this
repository and does not require a database.

## Project Structure

```text
Yashasvini-Portfolio/
├── app/
│   ├── globals.css              # Global themes, responsive rules, and animations
│   ├── layout.tsx               # Page metadata and document layout
│   └── page.tsx                 # Portfolio page entry
├── public/
│   ├── credentials/             # Certificates, badges, and achievement images
│   ├── Yashasvini_Bhanuraj_Resume.pdf
│   ├── yashasvini-cinematic-intro-4k.mp4
│   └── yashasvini-cinematic-poster-4k.webp
├── src/
│   ├── components/              # Shared interface components
│   ├── data/                    # Navigation, highlights, and project data
│   ├── sections/                # Portfolio page sections
│   ├── App.tsx                  # Main application composition and theme state
│   └── main.tsx                 # Client entry
├── tests/                       # Rendered-page verification
├── package.json                 # Dependencies and project commands
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts               # Development and build configuration
```

## Run Locally

### Requirements

- Node.js 22.13 or newer
- npm

### Commands

```bash
npm install
npx vite
```

Open the local address displayed in the terminal, normally:

```text
http://localhost:5173/
```

Press `Ctrl + C` in the terminal to stop the local server.

Do not open the source files directly and do not use the VS Code Live Server
extension. The project should be started through Vite.

## Available Commands

| Command | Description |
| --- | --- |
| `npx vite` | Starts the local development server |
| `npm test` | Builds and verifies the rendered portfolio |
| `npm run build` | Creates and validates the production build |
| `npm run lint` | Checks the source for code-quality issues |

## Data and Privacy

- Visitors do not need an account to view a public deployment of this portfolio.
- The portfolio does not use a user database.
- Theme preference is stored only in the visitor's browser.
- Contact-form submissions are sent through FormSubmit to the configured email.
- No passwords, authentication tokens, or private API keys are included in the repository.

## Deployment

The portfolio can be made publicly available through a hosting provider. A
public deployment link can be opened directly by recruiters and other visitors
without requiring an account. Hosting-specific build settings should be checked
before deployment because providers may use different output formats.

---

Designed and built by **Yashasvini Bhanuraj**.
