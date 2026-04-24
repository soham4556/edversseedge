import { results } from "../data/siteData";

function ResultsPage() {
  return (
    <section className="section page-container">
      <div className="section-heading">
        <h2>Results</h2>
        <p>Consistent results powered by disciplined preparation</p>
      </div>

      <div className="results-wrap">
        <aside className="results-hero">
          <img
            src="/icons/results.svg"
            alt=""
            className="results-hero-icon"
          />
          <h3>Proven outcomes</h3>
          <p>
            Our students consistently achieve top ranks through data-driven
            coaching.
          </p>
        </aside>

        <div className="result-grid">
          {results.map((entry) => (
            <article
              className="result-card premium"
              key={`${entry.name}-${entry.exam}`}
            >
              <h4>{entry.name}</h4>
              <p className="muted">{entry.exam}</p>
              <strong className="result-score">{entry.score}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResultsPage;
