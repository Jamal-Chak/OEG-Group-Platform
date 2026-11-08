import Link from "next/link";
import type { Project } from "./project-data";
import { ArrowIcon } from "./icons";
import { ProjectVisual } from "./project-visual";
import { ContactPanel } from "./page-sections";
import { RepairDeskShowcase } from "./twineengine-showcase";
import { MineralLinkShowcase } from "./minerallink-showcase";
import { TwineCapitalShowcase } from "./twinecapital-showcase";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <main id="main-content">
      <section
        className="project-detail-hero"
        aria-labelledby="project-title"
      >
        <div className="section-wrap project-detail-hero-inner">
          <div className="project-detail-copy">
            <p className="section-label section-label--light">
              <span className="section-label-number">PORTFOLIO</span>
              <span>{project.portfolioType}</span>
            </p>
            <h1 id="project-title">{project.name}</h1>
            <p className="project-detail-category">{project.category}</p>
            <p className="project-detail-description">{project.description}</p>
            <div className="project-detail-status">
              <span aria-hidden="true" />
              {project.status}
            </div>
          </div>
          <div className="project-detail-artwork">
            <ProjectVisual slug={project.slug} />
            <span>CONCEPT DIAGRAM · NOT A PRODUCT SCREEN</span>
          </div>
        </div>
      </section>

      {project.slug === "repair-desk" && (
        <section
          className="product-screenshot-showcase"
          aria-labelledby="repair-desk-preview-heading"
        >
          <div className="section-wrap">
            <h2 className="project-preview-heading" id="repair-desk-preview-heading">
              Pilot workspace preview
            </h2>
            <RepairDeskShowcase />
          </div>
        </section>
      )}

      {project.slug === "minerallink" && <MineralLinkShowcase />}

      {project.slug === "twinecapital" && <TwineCapitalShowcase />}

      <section className="project-detail-overview section-wrap">
        <div>
          <p className="section-label">
            <span className="section-label-number">01</span>
            <span>PROJECT PURPOSE</span>
          </p>
          <h2>
            Designed around
            <br />
            <em>an intended need.</em>
          </h2>
        </div>
        <div className="project-detail-overview-copy">
          <p>{project.purpose}</p>
          <p>
            This portfolio entry describes the project&apos;s stated direction
            and development status. It does not imply unlisted functionality
            or operational availability.
          </p>
        </div>
      </section>

      <section className="project-detail-focus">
        <div className="section-wrap project-detail-focus-inner">
          <div>
            <p className="section-label section-label--light">
              <span className="section-label-number">02</span>
              <span>AREAS OF FOCUS</span>
            </p>
            <h2>
              A direction
              <br />
              <em>taking shape.</em>
            </h2>
            <p>
              The areas below summarize the project brief; they are not claims
              that these capabilities are already live.
            </p>
          </div>
          <ul>
            {project.focus.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="project-detail-status-section section-wrap">
        <div>
          <p className="section-label">
            <span className="section-label-number">03</span>
            <span>DEVELOPMENT STATUS</span>
          </p>
          <h2>{project.status}</h2>
        </div>
        <div>
          <p>
            Specific implementation details, technical stack and external
            destinations have not been supplied for publication. This page
            will be updated as confirmed project information becomes
            available.
          </p>
          {project.relatedHref && project.relatedLabel && (
            <Link className="text-link" href={project.relatedHref}>
              {project.relatedLabel} <ArrowIcon />
            </Link>
          )}
        </div>
      </section>

      <div className="project-back-link section-wrap">
        <Link className="text-link" href="/projects">
          <span aria-hidden="true">←</span> Back to the projects portfolio
        </Link>
      </div>
      <ContactPanel
        eyebrow="PROJECT & PARTNERSHIP ENQUIRIES"
        title="Interested in"
        accent="this direction?"
        description="For a project or collaboration enquiry, contact On-Eaglewings Group."
        linkText="Go to contact"
      />
    </main>
  );
}
