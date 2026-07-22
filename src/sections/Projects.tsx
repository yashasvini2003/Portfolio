import { ArrowUpRight, ExternalLink, Layers3 } from "lucide-react";
import { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import ScrollMarker from "../components/ScrollMarker";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "../data/projects";

type Filter = "All" | ProjectCategory;

function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const visibleProjects = useMemo(() => {
    const matching =
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter);

    return [...matching].sort(
      (first, second) => Number(Boolean(second.featured)) - Number(Boolean(first.featured)),
    );
  }, [filter]);

  return (
    <section id="projects" className="content-section projects-section">
      <ScrollMarker number="04" label="Projects" />
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          description="Explore all 17 public project repositories, including full-stack applications, analytics workflows, cloud identity, Linux networking, automation, and academic foundations."
        />

        <div className="project-toolbar" aria-label="Filter projects by category">
          {projectCategories.map((category) => (
            <button
              type="button"
              key={category}
              className={filter === category ? "active" : ""}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
            >
              {category}
            </button>
          ))}
          <span className="project-count">{visibleProjects.length} projects</span>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <article
              className={`glass-card project-card ${project.featured ? "featured" : ""}`}
              key={project.repository}
            >
              <div className="project-card-top">
                <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-icon" aria-hidden="true">
                <Layers3 size={25} />
              </div>
              <h3>{project.title}</h3>
              {project.recognition && (
                <span className="recognition-badge">{project.recognition}</span>
              )}
              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="repository-link"
                  aria-label={`Open ${project.title} GitHub repository`}
                >
                  <span className="repository-link-icon" aria-hidden="true">
                    <FaGithub size={18} />
                  </span>
                  <span>Repository</span>
                  <ArrowUpRight className="repository-link-arrow" size={17} aria-hidden="true" />
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="live-demo-link"
                  >
                    <ExternalLink size={17} /> Live demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
