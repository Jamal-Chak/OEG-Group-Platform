import Link from "next/link";
import { ArrowIcon } from "../../components/icons";
import { ContactPanel, PageHero } from "../../components/page-sections";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata(
  "About the Group",
  "Learn about On-Eaglewings Group, its purpose and its focus on technology, innovation and useful business solutions.",
);

const principles = [
  {
    number: "01",
    title: "Technology with purpose",
    description:
      "Start with a real business need and consider technology as a means to a useful outcome.",
  },
  {
    number: "02",
    title: "Independent disciplines, shared direction",
    description:
      "Bring software engineering and financial technology into one group perspective while respecting their distinct focus.",
  },
  {
    number: "03",
    title: "Build for what comes next",
    description:
      "Keep learning, adapting and exploring better ways to solve practical business problems.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="ABOUT ON-EAGLEWINGS GROUP"
        title="A group built"
        accent="for forward thinking."
        description="On-Eaglewings Group brings together business initiatives focused on technology, innovation and practical solutions for business."
        number="01"
      />

      <section className="about-intro section-wrap">
        <div className="about-intro-aside">
          <p className="section-label">
            <span className="section-label-number">01</span>
            <span>WHO WE ARE</span>
          </p>
          <span className="about-monogram" aria-hidden="true">
            OEG
          </span>
        </div>
        <div className="about-intro-copy">
          <h2>
            One group.
            <br />
            <em>Distinct areas of focus.</em>
          </h2>
          <p>
            On-Eaglewings Group is a parent brand for business initiatives
            working across technology and finance. Its current initiatives are
            TwineEngine, focused on software engineering and digital solutions,
            and TwineCapital, focused on financial technology and accounting
            software.
          </p>
          <p>
            The group&apos;s purpose is to develop useful business solutions by
            combining thoughtful problem-solving with technology that responds
            to real needs.
          </p>
          <Link className="text-link" href="/businesses">
            Explore the businesses <ArrowIcon />
          </Link>
        </div>
      </section>

      <section className="principles-section" aria-labelledby="principles-heading">
        <div className="section-wrap principles-wrap">
          <div className="principles-heading">
            <p className="section-label section-label--light">
              <span className="section-label-number">02</span>
              <span>OUR PHILOSOPHY</span>
            </p>
            <h2 id="principles-heading">
              Progress is
              <br />
              <em>purposeful.</em>
            </h2>
            <p>
              Innovation matters when it makes something clearer, more useful
              or more possible for a business.
            </p>
          </div>
          <div className="principles-list">
            {principles.map((principle) => (
              <article className="principle-item" key={principle.number}>
                <span className="capability-number">{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-vision section-wrap">
        <div className="section-label">
          <span className="section-label-number">03</span>
          <span>LONG-TERM VISION</span>
        </div>
        <h2>
          Keep building toward
          <br />
          <em>better business systems.</em>
        </h2>
        <p>
          Our long-term vision is to bring practical technology, considered
          innovation and financial intelligence closer to the everyday needs
          of businesses. It is a direction to work toward, not a claim of
          completed achievements.
        </p>
      </section>
      <ContactPanel
        eyebrow="LEARN MORE"
        title="Explore what"
        accent="we're building."
        description="Get to know the businesses and areas of focus across On-Eaglewings Group."
        linkText="View our businesses"
      />
    </main>
  );
}
