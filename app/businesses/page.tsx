import { BusinessCard } from "../../components/business-card";
import { businesses } from "../../components/business-data";
import { ContactPanel, PageHero } from "../../components/page-sections";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata(
  "Our Businesses",
  "Meet TwineEngine and TwineCapital, distinct business initiatives within On-Eaglewings Group.",
);

export default function BusinessesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="OUR BUSINESSES"
        title="Two initiatives."
        accent="A shared direction."
        description="TwineEngine and TwineCapital bring distinct perspectives to software, digital solutions and financial technology."
        number="02"
      />
      <section className="business-overview section-wrap">
        <div className="business-overview-intro">
          <p className="section-label">
            <span className="section-label-number">01</span>
            <span>GROUP BUSINESS INITIATIVES</span>
          </p>
          <p>
            Each initiative has its own area of focus, with a shared interest
            in solving practical business problems through technology.
          </p>
        </div>
        <div className="business-grid">
          {businesses.map((business, index) => (
            <BusinessCard
              business={business}
              key={business.name}
              number={`0${index + 1}`}
            />
          ))}
        </div>
      </section>
      <section className="business-connection section-wrap">
        <p className="section-label">
          <span className="section-label-number">02</span>
          <span>ONE GROUP PERSPECTIVE</span>
        </p>
        <h2>
          Engineering and finance,
          <br />
          <em>in conversation.</em>
        </h2>
        <p>
          Software and financial systems shape how businesses operate. The
          group brings these disciplines together while keeping each
          initiative&apos;s purpose clear.
        </p>
      </section>
      <ContactPanel
        eyebrow="START A CONVERSATION"
        title="Which direction"
        accent="are you exploring?"
        description="Tell us whether your interest is in digital engineering, financial technology or a wider collaboration."
        linkText="Contact the group"
      />
    </main>
  );
}
