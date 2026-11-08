import { ProjectCard } from "../../components/project-card";
import { projects } from "../../components/project-data";
import { PageHero } from "../../components/page-sections";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata(
  "Projects & Technology Portfolio",
  "Explore selected group initiatives, digital platform concepts and website projects in the On-Eaglewings Group portfolio.",
);

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="PROJECTS & TECHNOLOGY PORTFOLIO"
        title="Ideas becoming"
        accent="digital work."
        description="A portfolio of group initiatives, platform concepts and selected software or website projects, each shown with its current development status."
        number="06"
      />
      <section className="projects-intro section-wrap">
        <div>
          <p className="section-label">
            <span className="section-label-number">01</span>
            <span>SELECTED PORTFOLIO</span>
          </p>
          <h2>
            Different briefs.
            <br />
            <em>Clear status.</em>
          </h2>
        </div>
        <div>
          <p>
            This portfolio brings together group initiatives and founder-led
            product or platform development with selected software and
            website work. The labels describe the type of work, not separate
            ownership or legal entities.
          </p>
          <p>
            Statuses reflect the information currently available. No live
            product functionality, client relationship or external project
            destination is implied.
          </p>
        </div>
      </section>
      <section className="projects-grid-section section-wrap" aria-label="Projects">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section className="projects-note section-wrap">
        <p className="section-label">
          <span className="section-label-number">02</span>
          <span>PORTFOLIO CONTEXT</span>
        </p>
        <p>
          TwineCapital is a group business initiative. Other entries represent
          projects and platform concepts. Repair Desk is a product initiative
          within TwineEngine; its portfolio entry, and the inclusion of other
          projects here, does not make them separate On-Eaglewings Group
          businesses.
        </p>
      </section>
    </main>
  );
}
