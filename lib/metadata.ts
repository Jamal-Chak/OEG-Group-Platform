import type { Metadata } from "next";

const siteName = "On-Eaglewings Group";

export function createPageMetadata(
  title: string,
  description: string,
): Metadata {
  const pageTitle =
    title === siteName
      ? `${siteName} | Technology for Business in Motion`
      : `${title} | ${siteName}`;

  return {
    title:
      title === siteName
        ? { absolute: pageTitle }
        : title,
    description,
    openGraph: {
      type: "website",
      locale: "en",
      siteName,
      title: pageTitle,
      description,
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description,
    },
  };
}
