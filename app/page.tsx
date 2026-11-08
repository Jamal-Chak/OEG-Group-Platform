import Link from "next/link";
import { BusinessCard } from "../components/business-card";
import { businesses } from "../components/business-data";
import { ArrowIcon } from "../components/icons";
import { ContactPanel } from "../components/page-sections";
import { createPageMetadata } from "../lib/metadata";

export const metadata = createPageMetadata(
  "On-Eaglewings Group",
  "Discover On-Eaglewings Group, TwineEngine and TwineCapital: business initiatives focused on engineering, digital solutions and financial technology.",
);

const capabilities = [
  {
    number: "01",
    title: "Software & digital engineering",
    description:
      "Software development, digital products and technology consulting.",
  },
  {
    number: "02",
    title: "Financial technology",
    description:
      "Accounting software, financial workflows and business intelligence.",
  },
  {
    number: "03",
    title: "Automation & systems",
    description:
      "Practical automation and connected systems for business processes.",
  },
];

function HeroArtwork() {
  return (
    <div className="hero-artwork" aria-hidden="true">
      <div className="artwork-caption">
        <span>ENGINEERED FOR WHAT&apos;S NEXT</span>
        <span className="artwork-caption-line" />
      </div>
      <svg
        className="architecture-art"
        fill="none"
        viewBox="0 0 640 680"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="structure"
            x1="120"
            x2="526"
            y1="170"
            y2="575"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F7F7F4" stopOpacity=".88" />
            <stop offset="1" stopColor="#C6A66B" stopOpacity=".44" />
          </linearGradient>
          <linearGradient
            id="glow"
            x1="307"
            x2="421"
            y1="198"
            y2="557"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C6A66B" stopOpacity=".18" />
            <stop offset="1" stopColor="#C6A66B" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="345" cy="355" r="220" stroke="#F7F7F4" strokeOpacity=".09" />
        <circle cx="345" cy="355" r="171" stroke="#C6A66B" strokeOpacity=".22" />
        <path d="M120 577h454M168 534h358M207 491h273M245 448h188" stroke="#F7F7F4" strokeOpacity=".13" />
        <path d="M188 534V266l157-119 157 119v268M238 534V290l107-80 107 80v244M288 534V316l57-44 57 44v218" stroke="url(#structure)" strokeWidth="1.5" />
        <path d="m188 266 157 112 157-112M238 290l107 80 107-80M288 316l57 43 57-43" stroke="#F7F7F4" strokeOpacity=".46" />
        <path d="M345 210v324M238 370h214M188 400h314" stroke="#C6A66B" strokeOpacity=".42" />
        <path d="M288 534V316l57-44 57 44v218H288Z" fill="url(#glow)" />
        <path d="M345 359v175" stroke="#F7F7F4" strokeOpacity=".8" />
        <circle cx="345" cy="359" r="4" fill="#C6A66B" />
        <path d="M345 359 479 225M345 359l-125 85M345 359l153 78" stroke="#C6A66B" strokeOpacity=".42" strokeDasharray="3 7" />
        <circle cx="479" cy="225" r="3" fill="#C6A66B" />
        <circle cx="220" cy="444" r="3" fill="#C6A66B" />
        <circle cx="498" cy="437" r="3" fill="#C6A66B" />
      </svg>
      <div className="artwork-index">
        <span>PEOPLE</span>
        <span>IDEAS</span>
        <span>TECHNOLOGY</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="eyebrow-mark" />
              ON-EAGLEWINGS GROUP
            </p>
            <h1 id="hero-heading">
              Technology for
              <br />
              <span>business in motion.</span>
            </h1>
            <p className="hero-description">
              Bringing engineering, digital solutions and financial technology
              together to help businesses move forward.
            </p>
            <div className="hero-actions">
              <Link className="button button--gold" href="/businesses">
                Explore our businesses <ArrowIcon diagonal />
              </Link>
              <Link className="text-link text-link--light" href="/about">
                Discover the group <ArrowIcon />
              </Link>
            </div>
          </div>
          <HeroArtwork />
        </div>
        <a
          className="hero-scroll"
          href="#group"
          aria-label="Scroll to about the group"
        >
          <span />
          SCROLL TO EXPLORE
        </a>
      </section>

      <section className="intro-section section-wrap" id="group">
        <div className="section-label">
          <span className="section-label-number">01</span>
          <span>THE GROUP</span>
        </div>
        <div className="intro-content">
          <h2>
            Different disciplines.
            <br />
            <span>One forward view.</span>
          </h2>
          <div className="intro-copy">
            <p>
              On-Eaglewings Group brings together business initiatives at the
              intersection of technology and finance.
            </p>
            <p>
              Through TwineEngine and TwineCapital, we focus on the systems,
              tools and intelligence that help businesses adapt and progress.
            </p>
            <Link className="text-link" href="/about">
              About the group <ArrowIcon />
            </Link>
          </div>
        </div>
        <div className="intro-rule" />
        <div className="intro-signature">
          <span>ENGINEERING</span>
          <span className="signature-plus">+</span>
          <span>FINANCIAL TECHNOLOGY</span>
          <span className="signature-equals">=</span>
          <span>BUSINESS PROGRESS</span>
        </div>
      </section>

      <section
        className="business-section section-wrap"
        aria-labelledby="business-heading"
      >
        <div className="section-heading">
          <div>
            <div className="section-label">
              <span className="section-label-number">02</span>
              <span>OUR BUSINESSES</span>
            </div>
            <h2 id="business-heading">
              Focused expertise.
              <br />
              <span>Connected ambition.</span>
            </h2>
          </div>
          <Link className="text-link" href="/businesses">
            View all businesses <ArrowIcon />
          </Link>
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

      <section className="capabilities-section" aria-labelledby="capabilities-heading">
        <div className="section-wrap capabilities-wrap">
          <div className="capabilities-intro">
            <div className="section-label section-label--light">
              <span className="section-label-number">03</span>
              <span>WHAT WE WORK ON</span>
            </div>
            <h2 id="capabilities-heading">
              Technology with
              <br />
              <em>purpose.</em>
            </h2>
            <p>
              Our areas of focus span the tools, systems and insight modern
              businesses rely on.
            </p>
            <Link className="text-link text-link--light" href="/capabilities">
              Explore our capabilities <ArrowIcon />
            </Link>
          </div>
          <div className="capability-list">
            {capabilities.map((capability) => (
              <article className="capability-item" key={capability.number}>
                <span className="capability-number">{capability.number}</span>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
                <span className="capability-indicator" aria-hidden="true">
                  +
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vision-section section-wrap" aria-labelledby="vision-heading">
        <div className="vision-mark" aria-hidden="true">
          OEG
        </div>
        <div className="vision-copy">
          <p className="section-label">
            <span className="section-label-number">04</span>
            <span>OUR VISION</span>
          </p>
          <h2 id="vision-heading">
            Build with intent.
            <br />
            <em>Move business forward.</em>
          </h2>
          <p>
            We see technology as a practical means to create clearer systems,
            more useful products and better ways for businesses to operate.
            Our long-term view is to keep bringing thoughtful engineering and
            financial technology closer to the needs of business.
          </p>
        </div>
      </section>

      <section className="home-partnership section-wrap" aria-label="Partnerships">
        <div>
          <p className="section-label">
            <span className="section-label-number">05</span>
            <span>PARTNERSHIPS</span>
          </p>
          <h2>
            Shared thinking.
            <br />
            <em>Practical progress.</em>
          </h2>
        </div>
        <div className="home-partnership-copy">
          <p>
            We welcome conversations around strategic partnerships, technology
            collaboration and new business opportunities.
          </p>
          <Link className="button button--gold" href="/partnerships">
            Explore partnerships <ArrowIcon diagonal />
          </Link>
        </div>
      </section>

      <section className="home-project-invitation section-wrap">
        <div>
          <p className="section-label">
            <span className="section-label-number">06</span>
            <span>PROJECT PORTFOLIO</span>
          </p>
          <h2>
            Ideas taking shape.
            <br />
            <em>Work in progress.</em>
          </h2>
        </div>
        <div>
          <p>
            Explore group initiatives and selected digital projects, with
            development status made clear.
          </p>
          <Link className="text-link" href="/projects">
            View the project portfolio <ArrowIcon />
          </Link>
        </div>
      </section>

      <ContactPanel
        eyebrow="CONTACT ON-EAGLEWINGS GROUP"
        title="Have a question"
        accent="or an idea?"
        description="Reach out to discuss our businesses, capabilities or a potential collaboration."
        linkText="Go to contact"
      />
    </main>
  );
}
