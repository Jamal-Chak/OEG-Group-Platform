import Image from "next/image";

export function MineralLinkShowcase() {
  return (
    <section
      className="product-screenshot-showcase"
      aria-labelledby="minerallink-preview-title"
    >
      <div className="section-wrap">
        <div className="product-screenshot-heading">
          <p className="section-label">
            <span className="section-label-number">PREVIEW</span>
            <span>SUPPLIER INTELLIGENCE</span>
          </p>
          <h2 id="minerallink-preview-title">
            A clearer view
            <br />
            <em>of sourcing activity.</em>
          </h2>
          <p>
            A supplied MineralLink dashboard preview exploring an overview for
            supplier intelligence and mineral sourcing workflows.
          </p>
        </div>
        <figure className="product-screenshot">
          <div className="product-screenshot-image">
            <Image
              alt="MineralLink supplier intelligence dashboard preview with sample supplier and verified counts, explicitly marked as fictional data."
              className="product-screenshot-img"
              height={625}
              sizes="(max-width: 700px) 100vw, 1000px"
              src="/images/minerallink-dashboard-preview.png"
              width={1241}
            />
          </div>
          <figcaption>MINERALLINK · LOCAL DASHBOARD PREVIEW</figcaption>
        </figure>
        <p className="product-screenshot-disclosure">
          Development preview only. All displayed records and figures are
          fictional. Actions are simulations held in the page&apos;s memory;
          refreshing clears them. This preview does not sign in users, grant
          roles or access business records.
        </p>
      </div>
    </section>
  );
}
