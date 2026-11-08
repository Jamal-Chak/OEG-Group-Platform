import Link from "next/link";
import type { Business } from "./business-data";
import { ArrowIcon } from "./icons";

export function BusinessVisual({ theme }: { theme: Business["theme"] }) {
  if (theme === "engine") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 240 120">
        <path d="M15 90h58V60h50V32h102" />
        <path d="M15 40h45v25h55v25h80" />
        <path d="M35 105V78h52V47h61V18" />
        <circle cx="73" cy="60" r="4" />
        <circle cx="123" cy="32" r="4" />
        <circle cx="183" cy="90" r="4" />
        <path d="M15 112h210M15 12h210" className="visual-grid" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 240 120">
      <path d="M19 97h202M37 97V70h33v27M91 97V51h33v46M145 97V34h33v63M199 97V20h14v77" />
      <path d="m25 59 44-20 39 15 46-31 50-8" />
      <circle cx="69" cy="39" r="3.5" />
      <circle cx="108" cy="54" r="3.5" />
      <circle cx="154" cy="23" r="3.5" />
      <path d="M20 108h200M20 12h200" className="visual-grid" />
    </svg>
  );
}

export function BusinessCard({
  business,
  number,
}: {
  business: Business;
  number: string;
}) {
  return (
    <article
      className={`business-card business-card--${business.theme} business-card--linked`}
    >
      <div className="business-card-top">
        <span>{business.category}</span>
        <span className="business-number">{number}</span>
      </div>
      <BusinessVisual theme={business.theme} />
      <div className="business-card-main">
        <p className="business-parent">A GROUP BUSINESS INITIATIVE</p>
        <h3>{business.name}</h3>
        <p className="business-description">{business.summary}</p>
        <ul className="business-services">
          {business.focus.slice(0, 3).map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
      <Link className="business-link" href={business.route}>
        <span>Explore {business.name}</span>
        <ArrowIcon diagonal />
      </Link>
    </article>
  );
}
