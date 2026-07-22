import { Building2, CalendarDays, MapPin } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ScrollMarker from "../components/ScrollMarker";

const experience = [
  {
    role: "Business Analyst Intern (Co-op)",
    organization:
      "Ontario Public Service, GovTechON, Health Services I&IT Cluster, CRM Branch",
    date: "Jan 2026 - Apr 2026",
    location: "Toronto, ON",
    summary:
      "Supported concurrent project and operational deliverables from intake through close-out across business and technology stakeholders.",
    bullets: [
      "Gathered requirements and tracked milestones, dependencies, risks, issues, actions, and decisions using Jira and Confluence.",
      "Prepared Account Plans, Monthly and Quarterly Business Review materials, governance presentations, meeting notes, and follow-up communications.",
      "Reconciled and validated more than $1M in initiative, resource, invoice, recovery, and approval records for leadership reporting.",
      "Improved a Power BI operational-plan dashboard by refining DAX measures, validating source data, and documenting KPI definitions.",
      "Mapped service-request workflows and analyzed ticket misdirection for a cross-functional LEAN process-improvement initiative.",
    ],
  },
  {
    role: "UI/UX Designer (Co-op)",
    organization: "Inspired Technologies & Business Solutions Inc.",
    date: "May 2025 - Aug 2025",
    location: "Toronto, ON",
    summary:
      "Worked directly with clients and development teams to turn business needs into clear, usable digital experiences.",
    bullets: [
      "Facilitated discovery and requirements-gathering conversations with client stakeholders.",
      "Created workflow maps, user journeys, process flows, wireframes, and implementation-ready Figma designs.",
      "Conducted competitive research and collaborated with developers on states, edge cases, and handoff details.",
    ],
  },
  {
    role: "Security Officer (Part-time)",
    organization: "Allied Universal, Client Site: Digital Realty (IBM Data Centre)",
    date: "Sep 2022 - Present",
    location: "Markham, ON",
    summary:
      "Support physical-security operations in a complex data-centre environment while maintaining accurate operational records.",
    bullets: [
      "Monitor physical security, document incidents, coordinate escalations, and liaise with client and operations teams.",
      "Use Excel and Power BI to report operational data, maintain records, and identify trends.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="content-section experience-section">
      <ScrollMarker number="03" label="Experience" />
      <div className="section-shell">
        <SectionHeader
          eyebrow="Professional Experience"
          description="Each role has strengthened a different part of how I work: structured analysis, client empathy, technical communication, careful documentation, and dependable execution."
        />

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.role}>
              <div className="timeline-rail" aria-hidden="true">
                <span />
              </div>
              <div className="glass-card experience-card">
                <div className="experience-topline">
                  <div>
                    <span className="card-label">{item.date}</span>
                    <h3>{item.role}</h3>
                  </div>
                  <Building2 size={25} />
                </div>

                <div className="experience-meta">
                  <span>
                    <Building2 size={15} /> {item.organization}
                  </span>
                  <span>
                    <MapPin size={15} /> {item.location}
                  </span>
                  <span className="mobile-date">
                    <CalendarDays size={15} /> {item.date}
                  </span>
                </div>

                <p className="experience-summary">{item.summary}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
