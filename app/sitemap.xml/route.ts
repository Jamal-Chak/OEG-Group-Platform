import { projects } from "../../components/project-data";
import { getSiteOrigin } from "../../lib/site-origin";

const publicPaths = [
  "",
  "/about",
  "/leadership",
  "/businesses",
  "/businesses/twineengine",
  "/businesses/twinecapital",
  "/projects",
  "/capabilities",
  "/partnerships",
  "/contact",
];

export function GET(request: Request) {
  const origin = getSiteOrigin(request.url);

  if (!origin) {
    return new Response("Set SITE_URL to the production origin to generate the sitemap.", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const urls = [
    ...publicPaths.map((path) => new URL(path, origin).toString()),
    ...projects.map((project) =>
      new URL(`/projects/${project.slug}`, origin).toString(),
    ),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
