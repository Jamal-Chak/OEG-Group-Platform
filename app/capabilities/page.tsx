import Link from "next/link";
import { ArrowIcon } from "../../components/icons";
import { ContactPanel, PageHero } from "../../components/page-sections";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata(
  "Capabilities",
  "Explore On-Eaglewings Group's focus areas in software and digital engineering, financial technology, automation and technology solutions.",
);

const capabilityAreas = [
  {
    number: "01",
    title: "Software & digital engineering",
    business: "TwineEngine",
    description:
      "Custom software, websites and web applications, mobile applications and IT consulting. Work begins with understanding the problem and shaping a digital solution around it.",
    href: "/businesses/twineengine",
  },
  {
    number: "02",
    title: "Financial technology",
    business: "TwineCapital",
    description:
      "Accounting software, financial management, reporting and business financial workflows, with a long-term interest in more connected financial intelligence.",
    href: "/businesses/twinecapital",
  },
  {
    number: "03",
    title: "Business automation & systems",
    business: "Across the group",
    description:
      "Process automation and connected systems that can help reduce repetitive work and make business processes more consistent.",
    href: "/businesses",
  },
  {
    number: "04",
    title: "Technology solutions & innovation",
    business: "Across the group",
    description:
      "A practical approach to exploring new technologies, digital products and ways to address changing business needs.",
    href: "/about",
  },
];

export default function CapabilitiesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="CAPABILITIES"
        title="Technology shaped"
        accent="around real needs."
        description="Our areas of focus span software, digital solutions, financial technology and the systems that support business."
        number="03"
      />
      <section className="capabilities-page section-wrap">
        <div className="capabilities-page-intro">
          <p className="section-label">
            <span className="section-label-number">01</span>
            <span>AREAS OF FOCUS</span>
          </p>
          <p>
            The capabilities below describe the group&apos;s focus areas and
            intentions. Specific scope depends on the needs of each enquiry.
          </p>
        </div>
        <div className="capabilities-page-list">
          {capabilityAreas.map((area) => (
            <article className="capability-page-item" key={area.number}>
              <span className="capability-number">{area.number}</span>
              <div className="capability-page-content">
                <p>{area.business}</p>
                <h2>{area.title}</h2>
                <p className="capability-page-description">
                  {area.description}
                </p>
              </div>
              <Link
                aria-label={`Learn more about ${area.title}`}
                className="capability-page-link"
                href={area.href}
              >
                <ArrowIcon diagonal />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <ContactPanel
        eyebrow="DISCUSS YOUR NEEDS"
        title="Start with"
        accent="the problem."
        description="Tell us what you are exploring, and we can direct your enquiry to the relevant group initiative."
        linkText="Make an enquiry"
      />
    </main>
  );
}
