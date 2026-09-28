import { Link } from "react-router-dom";

function TestSeriesPage() {
  return (
    <div className="section page-container">
      <div className="section-heading text-center">
        <span className="section-tag">Assessment Excellence</span>
        <h1 className="section-title">
          All India <span className="text-gradient">Test Series (AITS)</span>
        </h1>
        <p className="section-subtitle">
          Exam temperament cannot be built in a day. Experience real NTA-pattern
          computer-based tests, timed negative marking, and deep AI-driven
          diagnostic analytics.
        </p>
      </div>

      {/* 3 Core Pillars of Test Series */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
          marginBottom: "48px",
        }}
      >
        <article className="course-card">
          <div className="course-header">
            <div className="course-icon-box">
              <span style={{ fontSize: "1.8rem" }}>📝</span>
            </div>
            <div>
              <span className="course-category">Weekly Rhythm</span>
              <h3 className="course-title">Chapter Part Tests</h3>
            </div>
          </div>
          <p className="course-desc">
            Rigorous 45-minute tests conducted after every completed chapter.
            Catches retention gaps early before moving on to the next unit.
          </p>
          <ul className="course-features-list">
            <li>
              <span className="feature-check">✓</span>
              <span>Subject-wise breakdown (Physics, Chemistry, Math/Bio)</span>
            </li>
            <li>
              <span className="feature-check">✓</span>
              <span>Same-day answer keys with detailed video solutions</span>
            </li>
            <li>
              <span className="feature-check">✓</span>
              <span>Automatic trigger for 1-on-1 recovery clinic if score &lt; 65%</span>
            </li>
          </ul>
        </article>

        <article className="course-card featured">
          <span className="course-ribbon">Most Critical</span>
          <div className="course-header">
            <div className="course-icon-box">
              <span style={{ fontSize: "1.8rem" }}>🖥️</span>
            </div>
            <div>
              <span className="course-category">Full Exam Simulation</span>
              <h3 className="course-title">NTA JEE / NEET Mocks</h3>
            </div>
          </div>
          <p className="course-desc">
            Exact 3-hour mock exams mirroring the actual computer-based JEE
            interface and NEET OMR sheets with all-India percentile ranking.
          </p>
          <ul className="course-features-list">
            <li>
              <span className="feature-check">✓</span>
              <span>Real exam hall psychological conditioning</span>
            </li>
            <li>
              <span className="feature-check">✓</span>
              <span>Sectional timers and negative mark risk analysis</span>
            </li>
            <li>
              <span className="feature-check">✓</span>
              <span>Benchmarked against thousands of aspirants across India</span>
            </li>
          </ul>
        </article>

        <article className="course-card">
          <div className="course-header">
            <div className="course-icon-box">
              <span style={{ fontSize: "1.8rem" }}>📈</span>
            </div>
            <div>
              <span className="course-category">Actionable Insights</span>
              <h3 className="course-title">AI Diagnostic Heatmaps</h3>
            </div>
          </div>
          <p className="course-desc">
            Go beyond simple marks. Our software shows where you lost time,
            which silly mistakes occurred, and exactly which topics need revision.
          </p>
          <ul className="course-features-list">
            <li>
              <span className="feature-check">✓</span>
              <span>Speed vs. Accuracy quadrant matrix</span>
            </li>
            <li>
              <span className="feature-check">✓</span>
              <span>Question-by-question time tracking</span>
            </li>
            <li>
              <span className="feature-check">✓</span>
              <span>Automated parent report card sent via EdversseEDGE App</span>
            </li>
          </ul>
        </article>
      </div>

      {/* Test Analytics Sample Report Showcase */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "24px",
          padding: "36px",
          boxShadow: "var(--shadow-md)",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "36px",
          alignItems: "center",
          marginBottom: "48px",
        }}
      >
        <div>
          <span className="badge badge-blue" style={{ marginBottom: "10px" }}>
            ⭐ Diagnostic Intelligence
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", color: "var(--brand-navy)", margin: "0 0 14px" }}>
            Eliminate Negative Marks with Surgical Precision
          </h2>
          <p style={{ color: "#475569", lineHeight: 1.6, margin: "0 0 20px" }}>
            In competitive exams like JEE and NEET, 80% of dropped ranks come
            from negative marks on familiar questions. Our diagnostic engine
            categorizes your errors into:
          </p>
          <div style={{ display: "grid", gap: "10px" }}>
            <div style={{ background: "#fef2f2", border: "1px solid #fecaca", padding: "10px 14px", borderRadius: "10px", color: "#991b1b", fontSize: "0.9rem" }}>
              ⚠️ <strong>Silly Calculation Errors:</strong> Questions you knew but hurried through
            </div>
            <div style={{ background: "#fffbeb", border: "1px solid #fde68a", padding: "10px 14px", borderRadius: "10px", color: "#92400e", fontSize: "0.9rem" }}>
              ⏳ <strong>Time Traps:</strong> Questions that consumed &gt; 3.5 minutes without yielding answers
            </div>
            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "10px 14px", borderRadius: "10px", color: "#166534", fontSize: "0.9rem" }}>
              🎯 <strong>High-Yield Sweet Spots:</strong> Topics where your accuracy is 100%
            </div>
          </div>
        </div>

        <div
          style={{
            background: "#f8fafc",
            border: "1px solid #cbd5e1",
            borderRadius: "20px",
            padding: "24px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #e2e8f0", paddingBottom: "12px", marginBottom: "16px" }}>
            <span style={{ fontWeight: 800, color: "#0b1f3a" }}>AITS Mock Test 04 Diagnostic</span>
            <span className="badge badge-emerald">Percentile: 98.6%</span>
          </div>

          <div style={{ display: "grid", gap: "12px", fontSize: "0.9rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Physics Accuracy:</span>
              <strong style={{ color: "#15803d" }}>88% (22/25 Correct)</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Chemistry Accuracy:</span>
              <strong style={{ color: "#15803d" }}>92% (23/25 Correct)</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Maths / Biology Accuracy:</span>
              <strong style={{ color: "#b45309" }}>76% (Recovery Scheduled)</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #e2e8f0", paddingTop: "12px" }}>
              <span>Negative Marks Avoidable:</span>
              <strong style={{ color: "#dc2626" }}>-12 Marks</strong>
            </div>
          </div>

          <div style={{ marginTop: "18px", textAlign: "center" }}>
            <Link to="/enquire" className="btn btn-primary btn-block">
              Register for Free Mock Test
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Strip */}
      <div style={{ textAlign: "center" }}>
        <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--brand-navy)" }}>
          Ready to experience the All India Test Series?
        </h3>
        <p style={{ color: "#64748b", maxWidth: "600px", margin: "0 auto 20px" }}>
          External students can also enroll for our standalone AITS package with
          app access and video explanations.
        </p>
        <Link to="/enquire" className="btn btn-accent btn-lg">
          Enroll in AITS Test Series →
        </Link>
      </div>
    </div>
  );
}

export default TestSeriesPage;
