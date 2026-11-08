import type { MetadataRoute } from "next";
import { getSiteOrigin } from "../lib/site-origin";

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteOrigin(
    process.env.SITE_URL ?? "http://localhost:3000",
  );

  return {
    rules: { userAgent: "*", allow: "/" },
    ...(origin ? { sitemap: new URL("/sitemap.xml", origin).toString() } : {}),
  };
}
