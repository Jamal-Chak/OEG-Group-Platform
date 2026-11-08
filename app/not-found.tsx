import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page" id="main-content">
      <div className="not-found-content">
        <p className="eyebrow">404 · Page not found</p>
        <h1>
          This page has
          <br />
          <em>moved beyond reach.</em>
        </h1>
        <p>
          The page may have moved or the address may be incorrect. Return to the
          homepage or explore the group&apos;s businesses.
        </p>
        <div className="not-found-actions">
          <Link className="button button--gold" href="/">
            Return home
          </Link>
          <Link className="button button--outline" href="/businesses">
            Explore businesses
          </Link>
        </div>
      </div>
    </main>
  );
}
