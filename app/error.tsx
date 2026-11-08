"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="not-found-page" id="main-content">
      <div className="not-found-content" role="alert">
        <p className="eyebrow">Something went wrong</p>
        <h1>
          We couldn&apos;t load
          <br />
          <em>this page.</em>
        </h1>
        <p>Please try again, or return to the homepage.</p>
        <div className="not-found-actions">
          <button className="button button--gold" onClick={reset} type="button">
            Try again
          </button>
          <Link className="button button--outline" href="/">
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
