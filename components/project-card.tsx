import Link from "next/link";
import type { Project } from "./project-data";
import { ArrowIcon } from "./icons";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className={`project-card project-card--${project.slug}`}>
      <Link
        aria-label={`View ${project.name} project details`}
        className="project-card-visual-link"
        href={`/projects/${project.slug}`}
      >
        <ProjectVisual slug={project.slug} />
        <span className="project-card-index">
          PROJECT / {String(index + 1).padStart(2, "0")}
        </span>
      </Link>
      <div className="project-card-body">
        <div className="project-card-meta">
          <span>{project.category}</span>
          <span className="project-status">
            <span aria-hidden="true" />
            {project.status}
          </span>
        </div>
        <p className="project-card-type">{project.portfolioType}</p>
        <h2>
          <Link href={`/projects/${project.slug}`}>{project.name}</Link>
        </h2>
        <p className="project-card-description">{project.description}</p>
        <Link className="project-card-link" href={`/projects/${project.slug}`}>
          Explore project <ArrowIcon diagonal />
        </Link>
      </div>
    </article>
  );
}
