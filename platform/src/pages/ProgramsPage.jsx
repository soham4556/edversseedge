import { Link } from "react-router-dom";
import { programs } from "../data/siteData";

function ProgramsPage() {
  return (
    <div className="section page-container">
      <div className="section-heading text-center">
        <span className="section-tag">Structured Pedagogy</span>
        <h1 className="section-title">
          Academic <span className="text-gradient">Programs & Pathways</span>
        </h1>
        <p className="section-subtitle">
          Our four-phase academic roadmap systematically transitions a student
          from foundational concepts to all-India rank-level speed and accuracy.
        </p>
      </div>

      {/* Phase Roadmap Cards */}
      <div style={{ display: "grid", gap: "24px", maxWidth: "980px", margin: "0 auto 48px" }}>
        {programs.map((program, index) => (
          <article
            key={program.title}
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "var(--shadow-sm)",
              display: "grid",
              gridTemplateColumns: "140px 1fr",
              gap: "24px",
              alignItems: "start",
            }}
          >
            <div>
              <span
                style={{
                  display: "inline-block",
                  background: "#eff6ff",
                  color: "#1d4ed8",
                  fontWeight: 800,
                  fontSize: "0.82rem",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  border: "1px solid #bfdbfe",
                  marginBottom: "8px",
                }}
              >
                {program.phase}
              </span>
              <div style={{ color: "#64748b", fontWeight: 700, fontSize: "0.88rem" }}>
                {program.duration}
              </div>
            </div>

            <div>
              <h2
                style={{
                  margin: "0 0 4px",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.35rem",
                  color: "var(--brand-navy)",
                  fontWeight: 800,
                }}
              >
                {program.title}
              </h2>
              <p style={{ color: "#2563eb", fontWeight: 700, fontSize: "0.92rem", margin: "0 0 16px" }}>
                {program.tagline}
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "10px" }}>
                {program.points.map((pt) => (
                  <li
                    key={pt}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      color: "#334155",
                      fontSize: "0.94rem",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "#10b981", fontWeight: 900 }}>✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* Daily Routine of an EDGE Ranker */}
      <div
        style={{
          background: "linear-gradient(145deg, #0b1f3a 0%, #16325c 100%)",
          borderRadius: "28px",
          padding: "40px",
          color: "#ffffff",
          boxShadow: "0 20px 40px rgba(11, 31, 58, 0.25)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span className="badge badge-gold" style={{ marginBottom: "10px" }}>
            ⭐ Disciplined Blueprint
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: 800, margin: 0 }}>
            Daily Routine of an EdversseEDGE Ranker
          </h2>
          <p style={{ color: "#cbd5e1", marginTop: "8px" }}>
            Consistency beats intensity. Here is how our students structure their preparation hours:
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={{ background: "rgba(255,255,255,0.08)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.12)" }}>
            <span style={{ color: "#f59e0b", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase" }}>
              Morning Session
            </span>
            <h4 style={{ margin: "8px 0 6px" }}>Concept Lectures</h4>
            <p style={{ margin: 0, fontSize: "0.86rem", color: "#cbd5e1", lineHeight: 1.5 }}>
              4 hours of in-depth classroom teaching focusing on derivations, intuition, and NCERT theory.
            </p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.08)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.12)" }}>
            <span style={{ color: "#38bdf8", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase" }}>
              Afternoon Session
            </span>
            <h4 style={{ margin: "8px 0 6px" }}>Supervised DPP Drill</h4>
            <p style={{ margin: 0, fontSize: "0.86rem", color: "#cbd5e1", lineHeight: 1.5 }}>
              Solve 30-40 targeted questions per subject immediately after class under mentor supervision.
            </p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.08)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.12)" }}>
            <span style={{ color: "#34d399", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase" }}>
              Late Afternoon
            </span>
            <h4 style={{ margin: "8px 0 6px" }}>1-on-1 Doubt Clinics</h4>
            <p style={{ margin: 0, fontSize: "0.86rem", color: "#cbd5e1", lineHeight: 1.5 }}>
              Zero backlog rule. Sit across from the faculty to solve unanswered questions before heading home.
            </p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.08)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.12)" }}>
            <span style={{ color: "#a78bfa", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase" }}>
              Evening / Night
            </span>
            <h4 style={{ margin: "8px 0 6px" }}>App Revision & Test</h4>
            <p style={{ margin: 0, fontSize: "0.86rem", color: "#cbd5e1", lineHeight: 1.5 }}>
              Quick 15-minute diagnostic quiz on the mobile app to reinforce retention and speed.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <Link to="/enquire" className="btn btn-accent btn-lg">
            Join Our Next Program Batch →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProgramsPage;
