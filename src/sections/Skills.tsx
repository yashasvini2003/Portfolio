import {
  BarChart3,
  Code2,
  Database,
  Palette,
  UsersRound,
  Wrench,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ScrollMarker from "../components/ScrollMarker";

const skillGroups = [
  {
    title: "Software Development",
    icon: Code2,
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "C",
      "C++",
      "Swift & iOS Development",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Flask",
      "REST APIs",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Software Testing",
    ],
  },
  {
    title: "Business Analysis & Delivery",
    icon: UsersRound,
    skills: [
      "Requirements gathering",
      "Business systems analysis",
      "UML & use cases",
      "Software Development Life Cycle",
      "Workflow & process mapping",
      "Stakeholder facilitation",
      "Project lifecycle support",
      "Risk, issue & action tracking",
      "Process improvement",
      "LEAN process improvement",
      "Agile & Scrum",
    ],
  },
  {
    title: "Data & Reporting",
    icon: BarChart3,
    skills: [
      "Power BI",
      "DAX",
      "Excel",
      "SQL",
      "KPI dashboards",
      "Data visualization",
      "Data validation",
      "Data reconciliation",
      "Financial reporting",
    ],
  },
  {
    title: "Systems, Cloud & DevOps",
    icon: Database,
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "AWS Cognito",
      "AWS EC2 & S3",
      "Microsoft Azure",
      "Cloud computing",
      "Docker",
      "GitHub Actions",
      "CI/CD pipelines",
      "Linux & shell scripting",
      "Computer networking",
      "Parallel computing",
      "OpenMP, MPI & CUDA",
      "Vercel",
      "Cloudflare",
    ],
  },
  {
    title: "Design & Experience",
    icon: Palette,
    skills: [
      "Figma",
      "Adobe XD",
      "Wireframing",
      "Interactive prototypes",
      "User journeys",
      "Responsive design",
      "UI/UX design",
      "Developer handoff",
    ],
  },
  {
    title: "Collaboration & Tools",
    icon: Wrench,
    skills: [
      "Jira",
      "Confluence",
      "SharePoint",
      "Visio",
      "PowerPoint",
      "Microsoft 365",
      "Git & GitHub",
      "Postman",
      "Technical documentation",
      "Research methods",
      "Presentation & facilitation",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="content-section skills-section">
      <ScrollMarker number="05" label="Skills" />
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          description="My strongest work happens at the intersection of structured analysis, clear communication, thoughtful design, reliable data, and hands-on implementation."
        />

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article className="glass-card skill-card" key={group.title}>
                <div className="skill-card-heading">
                  <span className="card-icon">
                    <Icon size={22} />
                  </span>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
