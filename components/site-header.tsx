"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function BrandMark() {
  return (
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
  );
}

const businessLinks = [
  { label: "All businesses", href: "/businesses" },
  { label: "TwineEngine", href: "/businesses/twineengine" },
  { label: "TwineCapital", href: "/businesses/twinecapital" },
];

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "The Group", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Our Projects", href: "/projects" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Partnerships", href: "/partnerships" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [businessesOpen, setBusinessesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        const mobileMenuButton = document.querySelector<HTMLButtonElement>(
          ".mobile-menu-toggle[aria-expanded='true']",
        );
        const businessMenuButton = document.querySelector<HTMLButtonElement>(
          ".nav-business-trigger[aria-expanded='true']",
        );

        if (mobileMenuButton) {
          mobileMenuButton.focus();
        } else if (businessMenuButton) {
          businessMenuButton.focus();
        } else {
          return;
        }

        setBusinessesOpen(false);
        setMobileOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const isBusinessRoute = pathname.startsWith("/businesses");
  const isProjectRoute = pathname.startsWith("/projects");

  function businessMenu() {
    return (
      <li className="nav-business-item">
        <button
          aria-current={isBusinessRoute ? "page" : undefined}
          aria-expanded={businessesOpen}
          aria-controls="business-navigation"
          className={`nav-link nav-business-trigger${isBusinessRoute ? " is-active" : ""}`}
          onClick={() => setBusinessesOpen((open) => !open)}
          type="button"
        >
          Businesses
          <svg aria-hidden="true" viewBox="0 0 12 12">
            <path d="m2 4.5 4 4 4-4" />
          </svg>
        </button>
        <ul
          className="business-dropdown"
          hidden={!businessesOpen}
          id="business-navigation"
        >
          {businessLinks.map((link) => (
            <li key={link.href}>
              <Link
                aria-current={pathname === link.href ? "page" : undefined}
                href={link.href}
                onClick={() => {
                  setBusinessesOpen(false);
                  setMobileOpen(false);
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="On-Eaglewings Group home">
          <BrandMark />
          <span className="brand-wordmark">
            <span className="brand-name">ON-EAGLEWINGS</span>
            <span className="brand-descriptor">GROUP</span>
          </span>
        </Link>
        <button
          aria-controls="primary-navigation"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          className="mobile-menu-toggle"
          onClick={() => setMobileOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
        </button>
        <nav
          aria-label="Main navigation"
          className={`primary-nav${mobileOpen ? " primary-nav--open" : ""}`}
          id="primary-navigation"
        >
          <ul>
            {mainLinks.slice(0, 3).map((link) => (
              <li key={link.href}>
                <Link
                  aria-current={
                    pathname === link.href ||
                    (link.href === "/projects" && isProjectRoute)
                      ? "page"
                      : undefined
                  }
                  className={`nav-link${pathname === link.href || (link.href === "/projects" && isProjectRoute) ? " is-active" : ""}`}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {businessMenu()}
            {mainLinks.slice(3).map((link) => (
              <li key={link.href}>
                <Link
                  aria-current={
                    pathname === link.href ||
                    (link.href === "/projects" && isProjectRoute)
                      ? "page"
                      : undefined
                  }
                  className={`nav-link${pathname === link.href || (link.href === "/projects" && isProjectRoute) ? " is-active" : ""}`}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          aria-current={pathname === "/contact" ? "page" : undefined}
          className={`header-contact${pathname === "/contact" ? " is-active" : ""}`}
          href="/contact"
          onClick={() => setMobileOpen(false)}
        >
          Contact <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
