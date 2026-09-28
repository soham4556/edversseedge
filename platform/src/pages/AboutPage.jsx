import { Link } from "react-router-dom";
import { contactInfo } from "../data/siteData";

function AboutPage() {
  return (
    <div className="section page-container">
      {/* Header */}
      <div className="section-heading text-center">
        <span className="section-tag">Our Story & Mission</span>
        <h1 className="section-title">
          About <span className="text-gradient">EdversseEDGE</span>
        </h1>
        <p className="section-subtitle">
          Founded in Pune by passionate IITians and medical educators who believe
          every student deserves personal mentorship, not anonymous auditorium seats.
        </p>
      </div>

      {/* Story Narrative Card */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "24px",
          padding: "clamp(24px, 4vw, 44px)",
          boxShadow: "var(--shadow-sm)",
          marginBottom: "48px",
        }}
      >
        <div style={{ maxWidth: "840px", margin: "0 auto" }}>
          <span className="badge badge-blue" style={{ marginBottom: "12px" }}>
            The Genesis
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", color: "var(--brand-navy)", fontSize: "1.8rem", margin: "0 0 16px" }}>
            Why We Replaced Factory Coaching with Mentorship
          </h2>
          <p style={{ color: "#334155", lineHeight: 1.7, fontSize: "1.02rem", marginBottom: "16px" }}>
            Over the past decade, coaching in India evolved into massive commercial
            factories. Students are herded into halls with 150 to 200 peers. If a
            student falls behind by just 2 chapters, they are often forgotten and
            branded as "average."
          </p>
          <p style={{ color: "#334155", lineHeight: 1.7, fontSize: "1.02rem", marginBottom: "24px" }}>
            <strong>EdversseEDGE was founded with a singular conviction:</strong>{" "}
            Students don’t fail because they lack intelligence; they fail because
            their personal doubts remain unresolved. By capping batches at 28
            students and assigning every aspirant a dedicated personal mentor, we
            provide the exact strategic guidance that turns hard work into top ranks.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              paddingTop: "20px",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            <div>
              <strong style={{ color: "#2563eb", fontSize: "1.1rem" }}>Our Mission</strong>
              <p style={{ margin: "4px 0 0", color: "#64748b", fontSize: "0.88rem" }}>
                To deliver measurable score leaps through concept-first teaching and weekly recovery clinics.
              </p>
            </div>
            <div>
              <strong style={{ color: "#10b981", fontSize: "1.1rem" }}>Our Vision</strong>
              <p style={{ margin: "4px 0 0", color: "#64748b", fontSize: "0.88rem" }}>
                To make Pune a benchmark for stress-free, high-yielding entrance exam excellence.
              </p>
            </div>
            <div>
              <strong style={{ color: "#f59e0b", fontSize: "1.1rem" }}>Our Promise</strong>
              <p style={{ margin: "4px 0 0", color: "#64748b", fontSize: "0.88rem" }}>
                No invisible students. Every teacher knows your name and tracks your rank progression.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Campus Infrastructure */}
      <div
        style={{
          background: "linear-gradient(145deg, #0b1f3a 0%, #16325c 100%)",
          borderRadius: "28px",
          padding: "44px 36px",
          color: "#ffffff",
          boxShadow: "0 20px 40px rgba(11, 31, 58, 0.25)",
          marginBottom: "48px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span className="badge badge-gold" style={{ marginBottom: "10px" }}>
            ⭐ Pune Learning Center
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", margin: 0 }}>
            State-of-the-Art Infrastructure in Kondhwa
          </h2>
          <p style={{ color: "#cbd5e1", marginTop: "8px" }}>
            Designed to foster focused concentration, collaboration, and high academic stamina.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={{ background: "rgba(255,255,255,0.08)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.12)" }}>
            <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "8px" }}>🖥️</span>
            <h4 style={{ margin: "0 0 6px" }}>Smart Tech Classrooms</h4>
            <p style={{ margin: 0, fontSize: "0.86rem", color: "#cbd5e1", lineHeight: 1.5 }}>
              Acoustically treated, air-conditioned rooms equipped with digital interactive boards for 3D physics and biology visualizations.
            </p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.08)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.12)" }}>
            <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "8px" }}>💬</span>
            <h4 style={{ margin: "0 0 6px" }}>1-on-1 Doubt Cabins</h4>
            <p style={{ margin: 0, fontSize: "0.86rem", color: "#cbd5e1", lineHeight: 1.5 }}>
              Dedicated private booths where students sit directly with teachers to dissect tricky numerical problems.
            </p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.08)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.12)" }}>
            <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "8px" }}>⌨️</span>
            <h4 style={{ margin: "0 0 6px" }}>Computer Testing Lab</h4>
            <p style={{ margin: 0, fontSize: "0.86rem", color: "#cbd5e1", lineHeight: 1.5 }}>
              CBT exam terminals simulating exact NTA JEE Main and Advanced interfaces with countdown timers.
            </p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.08)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.12)" }}>
            <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "8px" }}>📖</span>
            <h4 style={{ margin: "0 0 6px" }}>Reference Library</h4>
            <p style={{ margin: 0, fontSize: "0.86rem", color: "#cbd5e1", lineHeight: 1.5 }}>
              Quiet, distraction-free self-study reading room stocked with 15+ years of entrance question archives and reference textbooks.
            </p>
          </div>
        </div>
      </div>

      {/* Center Location & Visit CTA */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "24px",
          padding: "36px",
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div>
          <span className="badge badge-emerald" style={{ marginBottom: "8px" }}>
            📍 Visit Us in Person
          </span>
          <h3 style={{ margin: "4px 0 6px", color: "var(--brand-navy)" }}>
            Experience Our Classrooms in Kondhwa, Pune
          </h3>
          <p style={{ margin: 0, color: "#64748b" }}>
            {contactInfo.address} ({contactInfo.landmark})
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a
            href={contactInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Open in Google Maps ↗
          </a>
          <Link to="/enquire" className="btn btn-primary">
            Schedule Center Visit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
