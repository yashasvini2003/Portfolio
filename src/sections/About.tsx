import { BookOpen, BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ScrollMarker from "../components/ScrollMarker";

const coursework = [
  "Business requirements analysis & UML",
  "Database design, SQL & NoSQL",
  "Web applications and services",
  "Object-oriented C/C++ development",
  "Cloud computing and deployment",
  "UI/UX and human-computer interaction",
  "System analysis and enterprise architecture",
  "Research methods and parallel algorithms",
];

function About() {
  return (
    <section id="about" className="content-section about-section">
      <ScrollMarker number="02" label="About" />
      <div className="section-shell">
        <SectionHeader
          eyebrow="About Me"
          description="My background combines hands-on software development with client-facing design and business analysis experience, helping me move comfortably from discovery and requirements to implementation and reporting."
        />

        <div className="about-grid">
          <article className="glass-card about-story">
            <span className="card-icon">
              <BriefcaseBusiness size={24} />
            </span>
            <h3>Building useful solutions, not technology for its own sake</h3>
            <p>
              I am an upcoming August 2026 Software Development graduate based
              in Toronto. During my Ontario Public Service co-op, I supported
              project intake, workflow analysis, stakeholder coordination,
              financial reconciliation, and executive reporting. My earlier
              UI/UX co-op strengthened my ability to translate client needs
              into practical user journeys, process flows, and designs.
            </p>
            <p>
              Across my projects, I enjoy turning ambiguous problems into
              structured, testable solutions, including full-stack applications and
              analytics dashboards to Linux and operational automation labs.
            </p>

            <div className="availability-note">
              <MapPin size={18} />
              <span>Toronto, Ontario · Open to full-time opportunities from September 2026</span>
            </div>
          </article>

          <article className="glass-card education-card">
            <div className="education-heading">
              <span className="card-icon">
                <GraduationCap size={24} />
              </span>
              <div>
                <span className="card-label">Education</span>
                <h3>Honours Bachelor of Technology: Software Development</h3>
              </div>
            </div>

            <a
              className="school-link"
              href="https://www.senecapolytechnic.ca/programs/fulltime/BSD.html"
              target="_blank"
              rel="noreferrer"
            >
              Seneca Polytechnic · Newnham Campus
            </a>

            <div className="education-stats">
              <div>
                <strong>3.6/4.0</strong>
                <span>Program GPA</span>
              </div>
              <div>
                <strong>Aug 2026</strong>
                <span>Expected graduation</span>
              </div>
              <div>
                <strong>8 semesters</strong>
                <span>Four-year degree</span>
              </div>
              <div>
                <strong>2 co-ops</strong>
                <span>Work-integrated learning</span>
              </div>
            </div>

            <div className="coursework-heading">
              <BookOpen size={19} />
              <h4>Selected academic focus</h4>
            </div>
            <div className="tag-cloud">
              {coursework.map((course) => (
                <span key={course}>{course}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
