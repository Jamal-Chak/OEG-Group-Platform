import Link from "next/link";
import { ArrowIcon } from "../../components/icons";
import { PageHero } from "../../components/page-sections";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata(
  "Contact",
  "Contact On-Eaglewings Group about its business initiatives, technology capabilities and partnership opportunities.",
);

const enquiryTypes = [
  {
    number: "01",
    title: "TwineEngine",
    description:
      "Software, websites and applications, IT consulting, automation or digital transformation.",
    href: "/businesses/twineengine",
  },
  {
    number: "02",
    title: "TwineCapital",
    description:
      "Financial technology, accounting software, product direction or related collaboration.",
    href: "/businesses/twinecapital",
  },
  {
    number: "03",
    title: "Partnerships",
    description:
      "Strategic partnerships, technology collaboration, business opportunities or product development.",
    href: "/partnerships",
  },
];

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="CONTACT"
        title="Start a"
        accent="conversation."
        description="Whether your enquiry is about a group business, our areas of focus or a potential partnership, begin by identifying the topic that fits best."
        number="05"
      />
      <section className="contact-page section-wrap">
        <div className="contact-page-intro">
          <p className="section-label">
            <span className="section-label-number">01</span>
            <span>ENQUIRY AREAS</span>
          </p>
          <h2>
            Where would
            <br />
            you like to begin?
          </h2>
          <p>
            Choose the area most relevant to your enquiry, then reach out
            directly using the group&apos;s published contact details below.
          </p>
        </div>
        <div className="enquiry-list">
          {enquiryTypes.map((enquiry) => (
            <article className="enquiry-item" key={enquiry.number}>
              <span className="capability-number">{enquiry.number}</span>
              <div>
                <h3>{enquiry.title}</h3>
                <p>{enquiry.description}</p>
              </div>
              <Link
                aria-label={`View ${enquiry.title} information`}
                className="capability-page-link"
                href={enquiry.href}
              >
                <ArrowIcon diagonal />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="contact-details">
        <div className="section-wrap contact-details-inner">
          <div>
            <p className="section-label section-label--light">
              <span className="section-label-number">02</span>
              <span>OFFICIAL CONTACT DETAILS</span>
            </p>
            <h2>
              Let&apos;s start
              <br />
              <em>a conversation.</em>
            </h2>
            <p>
              For business, technology and partnership enquiries, contact the
              group directly by email or telephone. No enquiry form is shown
              because submissions are not connected to a backend.
            </p>
          </div>
          <div className="contact-placeholder">
            <span>EMAIL</span>
            <strong>
              <a href="mailto:info@on-eaglewingsgroup.com">
                info@on-eaglewingsgroup.com
              </a>
            </strong>
            <span>BUSINESS TELEPHONE</span>
            <strong>
              <a href="tel:+27659029010">+27 65 902 9010</a>
            </strong>
            <span>ADDRESS</span>
            <strong>Atholbrook, Benoni, South Africa</strong>
          </div>
        </div>
      </section>
      <div className="contact-back-link section-wrap">
        <Link className="text-link" href="/about">
          Learn about the group <ArrowIcon />
        </Link>
      </div>
    </main>
  );
}
