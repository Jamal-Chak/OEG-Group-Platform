import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { createPageMetadata } from "../lib/metadata";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  ...createPageMetadata(
    "On-Eaglewings Group",
    "On-Eaglewings Group brings together TwineEngine and TwineCapital across software engineering, digital solutions and financial technology.",
  ),
  title: {
    default: "On-Eaglewings Group | Technology for Business in Motion",
    template: "%s | On-Eaglewings Group",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrumentSerif.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
