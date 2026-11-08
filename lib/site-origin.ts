export function getSiteOrigin(requestUrl: string): string | null {
  const configuredOrigin = process.env.SITE_URL;

  if (!configuredOrigin) {
    return process.env.NODE_ENV === "production"
      ? null
      : new URL(requestUrl).origin;
  }

  const parsedOrigin = new URL(configuredOrigin);
  if (
    parsedOrigin.username ||
    parsedOrigin.password ||
    parsedOrigin.pathname !== "/" ||
    parsedOrigin.search ||
    parsedOrigin.hash ||
    (process.env.NODE_ENV === "production" && parsedOrigin.protocol !== "https:")
  ) {
    throw new Error(
      "SITE_URL must be an origin without credentials, path, query, or fragment, and must use HTTPS in production.",
    );
  }

  return parsedOrigin.origin;
}
