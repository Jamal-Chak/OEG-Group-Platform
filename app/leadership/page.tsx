import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../../components/icons";
import { ContactPanel } from "../../components/page-sections";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata(
  "Leadership",
  "Meet Jonathan Chakombera, Founder and Technology Lead of On-Eaglewings Group.",
);

const focusAreas = [
  {
    number: "01",
    title: "Software engineering",
    description:
      "Building and shaping software with a focus on practical business use.",
  },
  {
    number: "02",
    title: "Digital platforms",
    description:
      "Developing digital products and platforms around clear user and business needs.",
  },
  {
    number: "03",
    title: "Financial technology",
    description:
      "Exploring accounting, financial management and more intelligent financial workflows.",
  },
  {
    number: "04",
    title: "Business innovation",
    description:
      "Applying technology and product thinking to operational challenges and new ideas.",
  },
];

export default function LeadershipPage() {
  return (
    <main id="main-content">
      <section className="leadership-hero" aria-labelledby="founder-name">
        <div className="section-wrap leadership-hero-inner">
          <div className="leadership-hero-copy">
            <p className="section-label section-label--light">
              <span className="section-label-number">LEADERSHIP</span>
              <span>ON-EAGLEWINGS GROUP</span>
            </p>
            <h1 id="founder-name">
              Jonathan
              <br />
              <em>Chakombera.</em>
            </h1>
            <p className="leadership-role">
              Founder &amp; Technology Lead
              <span>— On-Eaglewings Group</span>
            </p>
            <p className="leadership-hero-description">
              A technology entrepreneur and software developer focused on
              building practical digital solutions and technology-driven
              business initiatives.
            </p>
          </div>
          <figure className="founder-portrait">
            <Image
              alt="Jonathan Chakombera, Founder and Technology Lead of On-Eaglewings Group"
              className="founder-portrait-image"
              fill
              priority
              sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1248px) 31vw, 390px"
              src="/images/jonathan-chakombera.png"
            />
          </figure>
        </div>
      </section>

      <section className="leadership-intro section-wrap">
        <div>
          <p className="section-label">
            <span className="section-label-number">01</span>
            <span>FOUNDER INTRODUCTION</span>
          </p>
          <span className="leadership-initial" aria-hidden="true">
            J.
          </span>
        </div>
        <div className="leadership-intro-copy">
          <h2>
            Technology grounded
            <br />
            <em>in practical purpose.</em>
          </h2>
          <p>
            Jonathan Chakombera is a technology entrepreneur and software
            developer focused on building practical digital solutions and
            technology-driven business initiatives.
          </p>
          <p>
            As Founder &amp; Technology Lead at On-Eaglewings Group, he leads
            the group&apos;s technology vision, product development and
            digital innovation efforts.
          </p>
          <p>
            His work spans software engineering, financial technology, business
            automation and digital platforms. Through initiatives such as
            TwineEngine, TwineCapital and MineralLink, he is working towards
            building technology solutions that help businesses operate more
            efficiently, solve practical challenges and create opportunities
            for growth.
          </p>
          <p>
            His long-term vision is to build a group of innovative,
            technology-led ventures with a strong foundation in practical
            problem-solving, purposeful innovation and sustainable growth.
          </p>
        </div>
      </section>

      <section className="leadership-philosophy">
        <div className="section-wrap leadership-philosophy-inner">
          <div>
            <p className="section-label section-label--light">
              <span className="section-label-number">02</span>
              <span>TECHNOLOGY & INNOVATION</span>
            </p>
            <h2>
              Build with intent.
              <br />
              <em>Keep it useful.</em>
            </h2>
          </div>
          <div className="leadership-philosophy-copy">
            <p>
              Technology should serve a defined purpose. That means starting
              with the business context, understanding the challenge and
              considering what a useful digital response could look like.
            </p>
            <p>
              Innovation is approached as a way to explore better systems,
              products and workflows—not as an end in itself.
            </p>
          </div>
        </div>
      </section>

      <section className="leadership-focus section-wrap">
        <div className="leadership-focus-heading">
          <p className="section-label">
            <span className="section-label-number">03</span>
            <span>AREAS OF FOCUS</span>
          </p>
          <h2>
            Connected fields.
            <br />
            <em>Distinct possibilities.</em>
          </h2>
        </div>
        <div className="leadership-focus-grid">
          {focusAreas.map((area) => (
            <article key={area.number}>
              <span>{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="leadership-businesses">
        <div className="section-wrap leadership-businesses-inner">
          <div>
            <p className="section-label section-label--light">
              <span className="section-label-number">04</span>
              <span>THE GROUP & ITS INITIATIVES</span>
            </p>
            <h2>
              One direction.
              <br />
              <em>Two areas of focus.</em>
            </h2>
            <p>
              On-Eaglewings Group is the parent corporate identity. TwineEngine
              is its software engineering and digital solutions brand, while
              TwineCapital is its financial technology and accounting software
              initiative. MineralLink is a digital platform initiative
              presented in the group&apos;s project portfolio.
            </p>
          </div>
          <div className="leadership-brand-list">
            <Link href="/about">
              <span>01 / PARENT GROUP</span>
              <strong>On-Eaglewings Group</strong>
              <ArrowIcon diagonal />
            </Link>
            <Link href="/businesses/twineengine">
              <span>02 / ENGINEERING & DIGITAL</span>
              <strong>TwineEngine</strong>
              <ArrowIcon diagonal />
            </Link>
            <Link href="/businesses/twinecapital">
              <span>03 / FINANCIAL TECHNOLOGY</span>
              <strong>TwineCapital</strong>
              <ArrowIcon diagonal />
            </Link>
            <Link href="/projects/minerallink">
              <span>04 / DIGITAL PLATFORM INITIATIVE</span>
              <strong>MineralLink</strong>
              <ArrowIcon diagonal />
            </Link>
          </div>
        </div>
      </section>

      <section className="leadership-vision section-wrap">
        <p className="section-label">
          <span className="section-label-number">05</span>
          <span>FOUNDER VISION</span>
        </p>
        <h2>
          Develop independent
          <br />
          <em>technology and fintech initiatives.</em>
        </h2>
        <p>
          The long-term vision is to shape focused initiatives that can address
          practical business needs through software, digital platforms and
          financial technology. This is a direction for continued development,
          not a claim of completed milestones.
        </p>
      </section>

      <section className="leadership-invitation section-wrap">
        <div>
          <p className="section-label">
            <span className="section-label-number">06</span>
            <span>COLLABORATION</span>
          </p>
          <h2>
            Good ideas grow
            <br />
            <em>through exchange.</em>
          </h2>
        </div>
        <div>
          <p>
            Jonathan welcomes professional conversations about technology
            collaboration, partnerships and opportunities connected to the
            group&apos;s areas of focus.
          </p>
          <Link className="text-link" href="/partnerships">
            Explore partnerships <ArrowIcon />
          </Link>
        </div>
      </section>
      <ContactPanel
        eyebrow="PARTNERSHIPS & COLLABORATION"
        title="Start a"
        accent="conversation."
        description="Get in touch with On-Eaglewings Group about a potential partnership, collaboration or opportunity."
        linkText="Contact the group"
      />
    </main>
  );
}
