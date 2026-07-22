export type ProjectCategory =
  | "Applications"
  | "Data & Operations"
  | "Systems"
  | "Academic";

export type Project = {
  title: string;
  repository: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  featured?: boolean;
  liveUrl?: string;
  recognition?: string;
};

const githubBase = "https://github.com/yashasvini2003";

export const projects: Project[] = [
  {
    title: "GridWise AI",
    repository: `${githubBase}/gridwise-ai`,
    description:
      "An interactive smart-EV charging dashboard that turns battery, departure, urgency, and simulated feeder data into a lower-stress charging plan, forecasts, risk views, and community incentives.",
    technologies: ["React", "TypeScript", "Recharts", "Framer Motion", "Tailwind CSS"],
    category: "Data & Operations",
    featured: true,
    recognition: "Energy Hackathon 2026 Finalist",
  },
  {
    title: "OpsResilience Automation Lab",
    repository: `${githubBase}/OpsResilience_Automation_Lab`,
    description:
      "A safe enterprise-operations simulation covering message classification, policy-based restart and failover, disaster-recovery validation, audit trails, and resilience metrics.",
    technologies: ["Node.js", "Express", "React", "SQLite", "Automated Testing"],
    category: "Data & Operations",
    featured: true,
  },
  {
    title: "HelpDesk Lite",
    repository: `${githubBase}/helpdesk-lite`,
    description:
      "A ticket intake, investigation, escalation, SLA, and reporting workflow supported by SQL analytics, Python automation, traceability documentation, automated tests, and CI validation.",
    technologies: ["Python", "Flask", "SQL", "SQLite", "GitHub Actions"],
    category: "Data & Operations",
    featured: true,
  },
  {
    title: "Schedulify",
    repository: `${githubBase}/schedulify`,
    description:
      "An intelligent school timetable manager with clash detection, recurring assignments, teacher and class views, browser persistence, workload visibility, and PDF exports.",
    technologies: ["Next.js", "TypeScript", "React", "Zustand", "Tailwind CSS"],
    category: "Applications",
    featured: true,
  },
  {
    title: "Incident Automation Dashboard",
    repository: `${githubBase}/incident-automation-dashboard`,
    description:
      "A full-stack incident-monitoring simulation that generates operational events, exposes REST endpoints, tracks incident status, and reports severity, trend, and MTTR metrics.",
    technologies: ["React", "Node.js", "Express", "SQLite", "Vite"],
    category: "Data & Operations",
    featured: true,
  },
  {
    title: "Met Museum Explorer",
    repository: `${githubBase}/metmuseum`,
    description:
      "A responsive collection explorer built around the Metropolitan Museum of Art API, with artwork search and detail experiences plus authenticated user flows supported by a companion API.",
    technologies: ["Next.js", "React", "SWR", "Jotai", "Bootstrap"],
    category: "Applications",
    featured: true,
  },
  {
    title: "MetUsers Authentication API",
    repository: `${githubBase}/metusers`,
    description:
      "The companion user-management API for the Met Museum application, providing password hashing and token-based authentication backed by MongoDB.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Passport"],
    category: "Applications",
  },
  {
    title: "Fragments Microservice",
    repository: `${githubBase}/fragments`,
    description:
      "A Node.js REST API foundation with Express middleware, structured Pino logging, linting and formatting standards, development tooling, and graceful server shutdown.",
    technologies: ["Node.js", "Express", "Pino", "ESLint", "REST API"],
    category: "Systems",
  },
  {
    title: "Fragments UI & Cognito",
    repository: `${githubBase}/fragments-ui`,
    description:
      "A browser client for the Fragments API that explores cloud identity, sign-up and sign-in flows, JWT-based authorization, and protected access using Amazon Cognito.",
    technologies: ["JavaScript", "Parcel", "AWS Cognito", "AWS Amplify", "JWT"],
    category: "Applications",
  },
  {
    title: "Linux Network Monitor",
    repository: `${githubBase}/network-monitor`,
    description:
      "A concurrent Linux monitoring system that reports interface health and traffic metrics through Unix-domain sockets, handles signals cleanly, and attempts automated interface recovery.",
    technologies: ["C++", "Linux", "Unix Sockets", "IPC", "Make"],
    category: "Systems",
  },
  {
    title: "Embedded UDP Logger",
    repository: `${githubBase}/Embedded-UDP-Logger`,
    description:
      "A thread-safe C++ logging client and centralized server using non-blocking UDP, runtime severity filtering, timestamped diagnostics, and controlled log collection.",
    technologies: ["C++", "UDP", "Multithreading", "Linux", "Make"],
    category: "Systems",
  },
  {
    title: "Veterinary Clinic System",
    repository: `${githubBase}/veterinary-clinic-system`,
    description:
      "A modular command-line clinic system for validated patient records and conflict-aware appointment scheduling, developed across three progressive C programming milestones.",
    technologies: ["C", "Data Structures", "Validation", "Modular Design"],
    category: "Academic",
  },
  {
    title: "Memory Challenge Game",
    repository: `${githubBase}/Game`,
    description:
      "A progressive memory-testing game that generates number sequences, scores each level, records cumulative results, and displays a persistent leaderboard.",
    technologies: ["Python", "Flask", "Templates", "Database", "Game Logic"],
    category: "Applications",
  },
  {
    title: "RoboLearn Portal",
    repository: `${githubBase}/robolearn-portal`,
    description:
      "A beginner-friendly robotics and coding learning portal with structured lessons, Arduino-style examples, an interactive quiz, troubleshooting guidance, and tutor support.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Applications",
    liveUrl: "https://robolearn-portal.vercel.app/",
  },
  {
    title: "Ice Cream Capstone Frontend",
    repository: `${githubBase}/capstone_icecream`,
    description:
      "A deployed team capstone frontend integrated with a remote API, environment-based configuration, CORS-aware communication, and a Vercel delivery workflow.",
    technologies: ["Next.js", "React", "Vercel", "REST API", "DigitalOcean"],
    category: "Applications",
    liveUrl: "https://capstone-icecream.vercel.app/",
  },
  {
    title: "IT Infrastructure Home Lab",
    repository: `${githubBase}/it-infrastructure-home-lab`,
    description:
      "A Linux-focused practice lab with a Bash diagnostics workflow for interface details, routing, connectivity tests, and DNS troubleshooting.",
    technologies: ["Bash", "Linux", "Networking", "Diagnostics"],
    category: "Systems",
  },
  {
    title: "BTS535 Workshop 3",
    repository: `${githubBase}/Workshop3_BTS535`,
    description:
      "A compact academic workshop repository maintained as an early software-development and source-control exercise.",
    technologies: ["Academic Lab", "Git", "GitHub"],
    category: "Academic",
  },
];

export const projectCategories = [
  "All",
  "Applications",
  "Data & Operations",
  "Systems",
  "Academic",
] as const;
