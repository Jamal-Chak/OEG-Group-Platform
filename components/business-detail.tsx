import Link from "next/link";
import type { Business } from "./business-data";
import { BusinessVisual } from "./business-card";
import { ArrowIcon } from "./icons";
import { ContactPanel, SectionHeading } from "./page-sections";
import { TwineCapitalShowcase } from "./twinecapital-showcase";
import { TwineEngineShowcase } from "./twineengine-showcase";

export function BusinessDetail({ business }: { business: Business }) {
  const isEngine = business.theme === "engine";

  return (
    <main id="main-content">
      <section
        className={`business-hero business-hero--${business.theme}`}
        aria-labelledby="business-title"
      >
        <div className="section-wrap business-hero-grid">
          <div className="business-hero-copy">
            <p className="section-label section-label--light">
              <span className="section-label-number">↗</span>
              <span>ON-EAGLEWINGS GROUP BUSINESS INITIATIVE</span>
            </p>
            <h1 id="business-title">
              {business.name}
              <br />
              <em>
                {isEngine
                  ? "Software & digital solutions"
                  : "Intelligent Financial Operating System"}
              </em>
            </h1>
            <p className="business-hero-description">
              {business.description}
            </p>
            <Link className="button button--gold" href="/contact">
              {isEngine ? "Discuss a project" : "Product & partnership enquiries"}
              <ArrowIcon diagonal />
            </Link>
          </div>
          <div className="business-hero-visual">
            <span className="business-visual-label">
              {isEngine ? "DIGITAL SYSTEMS / 01" : "FINANCIAL INTELLIGENCE / 02"}
            </span>
            <BusinessVisual theme={business.theme} />
            <span className="business-visual-caption">
              {isEngine
                ? "ENGINEERING · PRODUCTS · AUTOMATION"
                : "ACCOUNTING · WORKFLOWS · INSIGHT"}
            </span>
          </div>
        </div>
      </section>

      {isEngine ? <TwineEngineShowcase /> : <TwineCapitalShowcase />}

      <section className="business-purpose section-wrap">
        <div>
          <SectionHeading
            eyebrow="PURPOSE"
            title={isEngine ? "Useful technology." : "Financial clarity."}
            accent={isEngine ? "Practical outcomes." : "Connected thinking."}
            number="01"
          />
        </div>
        <div className="business-purpose-copy">
          <p>{business.purpose}</p>
          {isEngine ? (
            <p>
              From improving existing operations to building a digital product,
              the focus is on selecting and shaping technology around a
              practical problem.
            </p>
          ) : (
            <p>
              The initiative considers the needs of small businesses as well as
              organizations managing multiple entities, with an ambition to
              bring financial work and understanding into a more connected
              operating system.
            </p>
          )}
        </div>
      </section>

      <section
        className="business-focus"
        aria-labelledby="business-focus-heading"
      >
        <div className="section-wrap business-focus-wrap">
          <div className="business-focus-intro">
            <p className="section-label section-label--light">
              <span className="section-label-number">02</span>
              <span>AREAS OF FOCUS</span>
            </p>
            <h2 id="business-focus-heading">
              {isEngine ? "Built around" : "A clearer view of"}
              <br />
              <em>{isEngine ? "real needs." : "business finance."}</em>
            </h2>
            <p>
              {isEngine
                ? "A connected set of engineering and consulting disciplines for digital business challenges."
                : "An evolving fintech direction. These focus areas describe the initiative's ambitions, not a claim that products or integrations are currently available."}
            </p>
          </div>
          <ul className="focus-list">
            {business.focus.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{item}</span>
                <ArrowIcon diagonal />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="business-outcome section-wrap">
        <p className="section-label">
          <span className="section-label-number">03</span>
          <span>{isEngine ? "OUR APPROACH" : "PRODUCT VISION"}</span>
        </p>
        <h2>
          {isEngine ? (
            <>
              Better operations.
              <br />
              <em>Ideas made practical.</em>
            </>
          ) : (
            <>
              Intelligent Financial
              <br />
              <em>Operating System.</em>
            </>
          )}
        </h2>
        <p>
          {isEngine
            ? "TwineEngine brings problem-solving, engineering and digital delivery into the same conversation. The aim is to help businesses improve operations, build digital products and address practical challenges with fit-for-purpose technology."
            : "TwineCapital's long-term vision is to explore an intelligent financial operating system: a connected foundation for accounting, business financial workflows and financial intelligence. Product availability, integrations and regulatory status are not represented here."}
        </p>
      </section>

      {isEngine ? (
        <>
          <section className="engagement-section" aria-labelledby="engagement-heading">
            <div className="section-wrap engagement-wrap">
              <div className="engagement-intro">
                <p className="section-label">
                  <span className="section-label-number">04</span>
                  <span>A PRACTICAL STARTING POINT</span>
                </p>
                <h2 id="engagement-heading">
                  From first
                  <br />
                  <em>conversation onward.</em>
                </h2>
                <p>
                  Every opportunity is different. These are useful steps for
                  framing a project discussion, not a prescribed delivery
                  promise.
                </p>
              </div>
              <ol className="engagement-steps">
                <li>
                  <span>01</span>
                  <div>
                    <h3>Understand the need</h3>
                    <p>Discuss goals, users, workflows and current challenges.</p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <h3>Shape a direction</h3>
                    <p>Clarify the problem and consider an appropriate solution scope.</p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <h3>Plan the work</h3>
                    <p>Align on priorities, requirements and a practical next step.</p>
                  </div>
                </li>
                <li>
                  <span>04</span>
                  <div>
                    <h3>Build toward the outcome</h3>
                    <p>Discuss development, validation and future improvements as relevant.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>
          <section className="technology-section section-wrap">
            <div className="section-label">
              <span className="section-label-number">05</span>
              <span>TECHNOLOGY & CAPABILITIES</span>
            </div>
            <h2>
              Choose tools
              <br />
              <em>for the work at hand.</em>
            </h2>
            <p className="technology-intro">
              Technology choices depend on the requirements, context and
              constraints of each project. Areas of focus include:
            </p>
            <ul className="technology-list">
              <li>Websites and web applications</li>
              <li>Custom software and digital products</li>
              <li>Mobile application concepts</li>
              <li>Business systems and automation</li>
              <li>Technology consulting and transformation</li>
            </ul>
          </section>
        </>
      ) : (
        <section className="intended-users-section" aria-labelledby="users-heading">
          <div className="section-wrap intended-users-wrap">
            <div>
              <p className="section-label">
                <span className="section-label-number">04</span>
                <span>INTENDED USERS</span>
              </p>
              <h2 id="users-heading">
                Designed around
                <br />
                <em>business realities.</em>
              </h2>
              <p>
                These are the audiences TwineCapital intends to serve as the
                initiative develops. This does not imply product availability.
              </p>
            </div>
            <div className="intended-user-cards">
              <article>
                <span>01 / SMALL BUSINESS</span>
                <h3>Small businesses</h3>
                <p>
                  Financial operations and reporting needs that call for clear,
                  useful ways to manage business information.
                </p>
              </article>
              <article>
                <span>02 / MULTI-ENTITY</span>
                <h3>Multi-entity groups</h3>
                <p>
                  Organizations seeking a more connected view of financial
                  activity across multiple entities.
                </p>
              </article>
            </div>
          </div>
        </section>
      )}

      <ContactPanel
        eyebrow={isEngine ? "TWINEENGINE ENQUIRIES" : "TWINCAPITAL ENQUIRIES"}
        title={isEngine ? "Have a challenge" : "Interested in the"}
        accent={isEngine ? "worth engineering?" : "financial technology vision?"}
        description={
          isEngine
            ? "Start a conversation about software, digital solutions, consulting or a business process."
            : "Get in touch about the initiative, product direction or potential collaboration."
        }
        linkText={isEngine ? "Discuss a project" : "Make a product enquiry"}
      />
    </main>
  );
}
