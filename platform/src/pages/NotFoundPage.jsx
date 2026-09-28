import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="section page-container" style={{ textAlign: "center", padding: "80px 20px" }}>
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "24px",
          padding: "48px 32px",
          maxWidth: "560px",
          margin: "0 auto",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <span style={{ fontSize: "3.5rem", display: "block", marginBottom: "12px" }}>
          🧭
        </span>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "2rem",
            fontWeight: 800,
            color: "var(--brand-navy)",
            margin: "0 0 10px",
          }}
        >
          Page Not Found
        </h1>
        <p style={{ color: "#64748b", margin: "0 0 24px", lineHeight: 1.6 }}>
          The page or course you are looking for may have moved or no longer
          exists. Let’s get you back on track!
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/" className="btn btn-primary">
            Go Back to Home →
          </Link>
          <Link to="/courses" className="btn btn-secondary">
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
