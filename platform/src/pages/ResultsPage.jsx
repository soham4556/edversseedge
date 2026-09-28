import { useState } from "react";
import { Link } from "react-router-dom";
import { results, stats } from "../data/siteData";

function ResultsPage() {
  const [filter, setFilter] = useState("all");

  const filteredResults =
    filter === "all"
      ? results
      : results.filter((r) =>
          r.exam.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div className="section page-container">
      <div className="section-heading text-center">
        <span className="section-tag">Hall of Fame</span>
        <h1 className="section-title">
          Our Results Speak For <span className="text-gradient">Our Pedagogy</span>
        </h1>
        <p className="section-subtitle">
          Consistent top percentiles and selections into IIT Bombay, IIT Delhi,
          BJ Government Medical College, and COEP Pune powered by disciplined,
          concept-first coaching.
        </p>
      </div>

      {/* Stats Counter Strip */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "18px",
          marginBottom: "40px",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "18px",
              padding: "24px",
              textAlign: "center",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2.4rem",
                fontWeight: 900,
                color: "#1d4ed8",
                lineHeight: 1.1,
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                color: "var(--brand-navy)",
                fontSize: "0.95rem",
                margin: "6px 0 2px",
              }}
            >
              {s.label}
            </div>
            <small style={{ color: "#64748b" }}>{s.note}</small>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        <button
          type="button"
          className={`tab-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Ranks
        </button>
        <button
          type="button"
          className={`tab-btn ${filter === "jee" ? "active" : ""}`}
          onClick={() => setFilter("jee")}
        >
          IIT-JEE Top Rankers
        </button>
        <button
          type="button"
          className={`tab-btn ${filter === "neet" ? "active" : ""}`}
          onClick={() => setFilter("neet")}
        >
          NEET-UG Medical
        </button>
        <button
          type="button"
          className={`tab-btn ${filter === "mht" ? "active" : ""}`}
          onClick={() => setFilter("mht")}
        >
          MHT-CET Top Percentiles
        </button>
        <button
          type="button"
          className={`tab-btn ${filter === "board" ? "active" : ""}`}
          onClick={() => setFilter("board")}
        >
          Class 12 Boards (95%+)
        </button>
      </div>

      {/* Results Cards Grid */}
      <div className="results-grid">
        {filteredResults.map((r) => (
          <article className="result-card" key={r.name}>
            <div className="result-card-top">
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div className="result-avatar">{r.avatar}</div>
                <div className="result-header-text">
                  <h4>{r.name}</h4>
                  <span className="result-exam-pill">{r.exam}</span>
                </div>
              </div>
              <span className="result-rank-badge">{r.badge}</span>
            </div>

            <div className="result-score-banner">
              <span className="result-main-score">{r.score}</span>
              <span className="result-college">📍 {r.college}</span>
              <div style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "4px" }}>
                🎯 {r.subjectHighlights}
              </div>
            </div>

            <p className="result-quote">“{r.quote}”</p>
          </article>
        ))}
      </div>

      {/* Join the Hall of Fame CTA */}
      <div
        style={{
          marginTop: "54px",
          background: "linear-gradient(135deg, #0b1f3a 0%, #16325c 100%)",
          borderRadius: "24px",
          padding: "44px 32px",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", margin: "0 0 14px" }}>
          You Could Be Our Next Top Ranker
        </h2>
        <p style={{ color: "#cbd5e1", maxWidth: "600px", margin: "0 auto 24px", lineHeight: 1.6 }}>
          With the right mentor, structured practice, and consistent doubt
          resolution, top ranks are predictable. Take the first step today.
        </p>
        <Link to="/enquire" className="btn btn-accent btn-lg">
          Start Your Preparation with EdversseEDGE →
        </Link>
      </div>
    </div>
  );
}

export default ResultsPage;
