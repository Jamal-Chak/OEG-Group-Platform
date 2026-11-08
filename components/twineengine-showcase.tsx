import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./icons";

export function RepairDeskShowcase() {
  return (
    <figure className="repairdesk-showcase">
      <div className="repairdesk-showcase-image">
        <Image
          alt="Repair Desk pilot workspace preview showing a service enquiry form, request fields and follow-up steps."
          className="repairdesk-showcase-img"
          height={768}
          sizes="(max-width: 700px) 100vw, 1000px"
          src="/images/repair-desk-pilot-preview.png"
          width={1426}
        />
      </div>
      <figcaption>REPAIR DESK · PILOT WORKSPACE PREVIEW</figcaption>
      <p className="repairdesk-showcase-disclosure">
        The interface is a pilot preview. Enquiry submission, secure storage
        and follow-up workflows have not been verified here. Do not enter real
        personal information or use this preview for emergencies.
      </p>
    </figure>
  );
}

export function TwineEngineShowcase() {
  return (
    <section
      className="product-screenshot-showcase"
      aria-labelledby="twineengine-preview-title"
    >
      <div className="section-wrap">
        <div className="product-screenshot-heading">
          <p className="section-label">
            <span className="section-label-number">PREVIEW</span>
            <span>APPLICATION DIRECTION</span>
          </p>
          <h2 id="twineengine-preview-title">
            TwineEngine products,
            <br />
            <em>taking shape.</em>
          </h2>
          <p>
            Product directions and interface previews from TwineEngine,
            including software architecture analysis and the Repair Desk
            service-enquiry workspace.
          </p>
        </div>
        <figure className="product-screenshot">
          <div className="product-screenshot-image">
            <Image
              alt="TwineEngine application interface preview showing project overview, dependency graph and architecture rule results."
              className="product-screenshot-img"
              height={768}
              priority
              sizes="(max-width: 700px) 100vw, 1000px"
              src="/images/twineengine-app-preview.png"
              width={1433}
            />
          </div>
          <figcaption>SOFTWARE ARCHITECTURE APP · INTERFACE PREVIEW</figcaption>
        </figure>
        <p className="product-screenshot-disclosure">
          This is a development screenshot. Metrics, scan results, cloud-sync
          state and other displayed interface details are not independently
          verified and do not indicate production readiness or live service
          availability.
        </p>
        <div className="repairdesk-product-intro">
          <div className="product-screenshot-heading">
            <p className="section-label">
              <span className="section-label-number">PRODUCT INITIATIVE</span>
              <span>BY TWINEENGINE</span>
            </p>
            <h2>
              Repair Desk
              <br />
              <em>Service requests, better structured.</em>
            </h2>
            <p>
              A pilot-workspace concept for collecting repair and service
              enquiries and giving teams a clearer starting point for review
              and follow-up.
            </p>
            <Link className="text-link" href="/projects/repair-desk">
              Explore Repair Desk <ArrowIcon diagonal />
            </Link>
          </div>
          <RepairDeskShowcase />
        </div>
      </div>
    </section>
  );
}
