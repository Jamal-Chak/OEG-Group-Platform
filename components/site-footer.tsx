import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "The group", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Businesses", href: "/businesses" },
  { label: "Our Projects", href: "/projects" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/on-eaglewings-group/",
    network: "linkedin",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61596067693075",
    network: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/oneaglewingsgroup/",
    network: "instagram",
  },
];

function SocialIcon({
  network,
}: {
  network: (typeof socialLinks)[number]["network"];
}) {
  if (network === "linkedin") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <circle cx="4.5" cy="5.5" fill="currentColor" r="1" />
        <path
          d="M4.5 9v10m5-10v10m0-6a3 3 0 0 1 6 0v6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (network === "facebook") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <path
          d="M14.2 20v-7.3h2.5l.4-3h-2.9V7.8c0-.9.3-1.5 1.5-1.5h1.5V3.6a20 20 0 0 0-2.2-.1c-2.2 0-3.8 1.4-3.8 4v2.2H8.7v3h2.5V20h3Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <rect
        height="16"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        width="16"
        x="4"
        y="4"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.8" fill="currentColor" r="1" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-wrap">
        <Link className="brand brand--footer" href="/">
          <svg
            aria-hidden="true"
            className="brand-mark"
            fill="none"
            viewBox="0 0 40 40"
          >
            <path d="M20 3 35 11.5v17L20 37 5 28.5v-17L20 3Z" />
            <path d="m11 25 9-14 9 14M14.4 20h11.2" />
            <path d="M20 25v6" />
          </svg>
          <span className="brand-wordmark">
            <span className="brand-name">ON-EAGLEWINGS</span>
            <span className="brand-descriptor">GROUP</span>
          </span>
        </Link>
        <p className="footer-positioning">
          Engineering progress.
          <br />
          Enabling better business.
        </p>
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="footer-bottom section-wrap">
        <span>© 2026 On-Eaglewings Group</span>
        <span>TwineEngine · TwineCapital</span>
        <nav className="footer-social" aria-label="Social media">
          {socialLinks.map(({ label, href, network }) => (
            <a
              aria-label={`On-Eaglewings Group on ${label}`}
              href={href}
              key={label}
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialIcon network={network} />
            </a>
          ))}
        </nav>
        <Link href="#top">Back to top ↑</Link>
      </div>
    </footer>
  );
}
