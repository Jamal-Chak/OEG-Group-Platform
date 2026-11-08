import Image from "next/image";

const screens = [
  {
    src: "/images/twinecapital-dashboard-preview.png",
    alt: "TwineCapital dashboard in its empty setup state, with account details hidden.",
    label: "DASHBOARD · SETUP STATE",
    width: 1427,
    height: 768,
  },
  {
    src: "/images/twinecapital-invoices-redacted.png",
    alt: "TwineCapital invoice workspace with client, invoice, and amount details redacted.",
    label: "INVOICE WORKSPACE · DETAILS REDACTED",
    width: 1079,
    height: 755,
  },
];

export function TwineCapitalShowcase() {
  return (
    <section
      className="product-screenshot-showcase"
      aria-labelledby="twinecapital-preview-title"
    >
      <div className="section-wrap">
        <div className="product-screenshot-heading">
          <p className="section-label">
            <span className="section-label-number">APPLICATION</span>
            <span>INTERFACE PREVIEW</span>
          </p>
          <h2 id="twinecapital-preview-title">
            An accounting workspace,
            <br />
            <em>taking shape.</em>
          </h2>
          <p>
            Current interface views from the TwineCapital application. The
            dashboard is shown in its empty setup state, and private invoice
            details are obscured.
          </p>
        </div>
        <div className="product-screenshot-grid">
          {screens.map((screen) => (
            <figure className="product-screenshot" key={screen.src}>
              <div className="product-screenshot-image">
                <Image
                  alt={screen.alt}
                  className="product-screenshot-img"
                  height={screen.height}
                  sizes="(max-width: 700px) 100vw, (max-width: 1248px) 50vw, 600px"
                  src={screen.src}
                  width={screen.width}
                />
              </div>
              <figcaption>{screen.label}</figcaption>
            </figure>
          ))}
        </div>
        <p className="product-screenshot-disclosure">
          TwineCapital is under development. These images show interface
          appearance only and do not verify calculations, invoice delivery,
          bank integrations, or production readiness. Customer names, invoice
          numbers, dates, and financial amounts have been obscured.
        </p>
      </div>
    </section>
  );
}
