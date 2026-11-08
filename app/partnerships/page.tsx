import Link from "next/link";
import { ArrowIcon } from "../../components/icons";
import { ContactPanel, PageHero } from "../../components/page-sections";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata(
  "Partnerships",
  "Explore strategic partnerships, technology collaboration, business opportunities and product innovation with On-Eaglewings Group.",
);

const partnershipAreas = [
  {
    number: "01",
    title: "Strategic partnerships",
    description:
      "Explore shared interests, complementary expertise and opportunities to work toward mutual business goals.",
  },
  {
    number: "02",
    title: "Technology collaboration",
    description:
      "Discuss technology, engineering and digital collaboration around a defined need or opportunity.",
  },
  {
    number: "03",
    title: "Business opportunities",
    description:
      "Bring forward an idea, opportunity or market perspective relevant to the group's areas of focus.",
  },
  {
    number: "04",
    title: "Innovation & product development",
    description:
      "Share a product concept or explore how thoughtful innovation could address a practical business problem.",
  },
  {
    number: "05",
    title: "Commercial relationships",
    description:
      "Discuss a potential commercial relationship aligned with the group's business initiatives and areas of focus.",
  },
];

export default function PartnershipsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="PARTNERSHIPS"
        title="Build meaningful"
        accent="work together."
        description="On-Eaglewings Group welcomes conversations with people and organizations interested in technology collaboration, product development and new business opportunities."
        number="04"
      />
      <section className="partnerships-page section-wrap">
        <div className="partnerships-intro">
          <p className="section-label">
            <span className="section-label-number">01</span>
            <span>AREAS OF INTEREST</span>
          </p>
          <h2>
            Open to a thoughtful
            <br />
            <em>conversation.</em>
          </h2>
          <p>
            We are interested in opportunities aligned with the group&apos;s
            focus on software, digital solutions and financial technology.
          </p>
          <Link className="text-link" href="/contact">
            Introduce an opportunity <ArrowIcon />
          </Link>
        </div>
        <div className="partnership-list">
          {partnershipAreas.map((area) => (
            <article className="partnership-item" key={area.number}>
              <span>{area.number}</span>
              <div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="partnership-note">
        <div className="section-wrap partnership-note-inner">
          <p className="section-label section-label--light">
            <span className="section-label-number">02</span>
            <span>HOW TO BEGIN</span>
          </p>
          <p>
            Share a little about your organization, the opportunity and the
            kind of collaboration you have in mind. We can then identify the
            most relevant next conversation.
          </p>
        </div>
      </section>
      <ContactPanel
        eyebrow="PARTNERSHIPS & OPPORTUNITIES"
        title="Have something"
        accent="in mind?"
        description="We welcome a first conversation about a shared opportunity or area of interest."
        linkText="Contact the group"
      />
    </main>
  );
}
