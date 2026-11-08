import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  number,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  number: string;
}) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="section-wrap page-hero-inner">
        <p className="section-label section-label--light">
          <span className="section-label-number">{number}</span>
          <span>{eyebrow}</span>
        </p>
        <h1 id="page-title">
          {title}
          <br />
          <em>{accent}</em>
        </h1>
        <p className="page-hero-description">{description}</p>
      </div>
      <span className="page-hero-index" aria-hidden="true">
        OEG / {number}
      </span>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  number,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  number: string;
  dark?: boolean;
}) {
  return (
    <div className={`page-section-heading${dark ? " page-section-heading--dark" : ""}`}>
      <p className="section-label">
        <span className="section-label-number">{number}</span>
        <span>{eyebrow}</span>
      </p>
      <h2>
        {title}
        {accent && (
          <>
            <br />
            <em>{accent}</em>
          </>
        )}
      </h2>
    </div>
  );
}

export function ContactPanel({
  eyebrow = "LET'S CONNECT",
  title = "Good work begins",
  accent = "with a conversation.",
  description = "For business, product or partnership enquiries, contact On-Eaglewings Group.",
  linkText = "Visit our contact page",
}: {
  eyebrow?: string;
  title?: string;
  accent?: string;
  description?: string;
  linkText?: string;
}) {
  return (
    <section className="section-wrap contact-section" aria-label="Contact">
      <div className="contact-panel">
        <div className="contact-copy">
          <div className="section-label section-label--light">
            <span className="section-label-number">↗</span>
            <span>{eyebrow}</span>
          </div>
          <h2>
            {title}
            <br />
            <em>{accent}</em>
          </h2>
          <p>{description}</p>
        </div>
        <Link className="button button--outline" href="/contact">
          {linkText}
          <span aria-hidden="true">↗</span>
        </Link>
        <div className="contact-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
