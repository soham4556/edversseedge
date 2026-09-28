import { Link } from "react-router-dom";
import { contactInfo, leadMentor } from "../data/siteData";

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
          Founded in Pune by passionate IITians, engineering educators, and medical mentors who believe
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
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <span className="badge badge-blue" style={{ marginBottom: "12px" }}>
            The Genesis
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", color: "var(--brand-navy)", fontSize: "1.8rem", margin: "0 0 16px" }}>
            Why We Replaced Factory Coaching with Dedicated Mentorship
          </h2>
          <p style={{ color: "#334155", lineHeight: 1.7, fontSize: "1.02rem", marginBottom: "16px" }}>
            Over the past decade, entrance coaching across India evolved into massive commercial
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

      {/* ==========================================================================
          CHIEF MENTOR SPOTLIGHT: ER. SUDHAANSHU SRIVASTAVAA
          ========================================================================== */}
      <div className="mentor-spotlight-card">
        <div className="mentor-hero-grid">
          {/* Main Info & Motivation */}
          <div>
            <div className="mentor-top-badge">
              ⭐ Chief Academic Director & Master Mentor
            </div>

            <h2 className="mentor-name-title">
              <span>{leadMentor.name}</span>
            </h2>

            <div className="mentor-designation">
              <span>{leadMentor.role}</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>
              <span style={{ color: "#fbbf24", fontSize: "0.95rem" }}>Master Educator & Strategist</span>
            </div>

            {/* Credential Pills */}
            <div className="mentor-creds-container">
              <div className="mentor-cred-chip highlight">
                🎓 M.Tech in Computer Engineering
              </div>
              <div className="mentor-cred-chip">
                🏛️ Bharati Vidyapeeth, Pune
              </div>
              <div className="mentor-cred-chip gold">
                ⏳ In Teaching Field Since 2010 (15+ Years)
              </div>
              <div className="mentor-cred-chip">
                📍 Pune Academic Pioneer
              </div>
            </div>

            {/* Inspiring Quote Box */}
            <div className="mentor-quote-wrapper">
              <p className="mentor-quote-text">
                "{leadMentor.quote}"
              </p>
              <div className="mentor-quote-author">
                — Er. Sudhaanshu Srivastavaa (M.Tech, Bharati Vidyapeeth Pune)
              </div>
            </div>

            {/* Motivation Message */}
            <p className="mentor-motivation-para">
              {leadMentor.motivation}
            </p>

            {/* Quick Stats Grid */}
            <div className="mentor-stats-row">
              <div className="mentor-stat-box">
                <span className="mentor-stat-num">2010</span>
                <span className="mentor-stat-lbl">Teaching Since</span>
              </div>
              <div className="mentor-stat-box">
                <span className="mentor-stat-num" style={{ color: "#fbbf24" }}>15+ Yrs</span>
                <span className="mentor-stat-lbl">Mentoring Legacy</span>
              </div>
              <div className="mentor-stat-box">
                <span className="mentor-stat-num" style={{ color: "#38bdf8" }}>M.Tech</span>
                <span className="mentor-stat-lbl">Computer Engg</span>
              </div>
              <div className="mentor-stat-box">
                <span className="mentor-stat-num">1-on-1</span>
                <span className="mentor-stat-lbl">Personal Doubts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Showcase & CTA Card */}
          <div className="mentor-profile-card">
            <div className="mentor-avatar-badge">
              <div className="mentor-avatar-inner">
                <span className="mentor-initials">SS</span>
              </div>
              <div className="mentor-verified-badge" title="Verified Master Mentor">✓</div>
            </div>

            <h3 className="mentor-card-name">{leadMentor.name}</h3>
            <div className="mentor-card-deg">
              M.Tech (Computer Engg) • Bharati Vidyapeeth
            </div>

            <div className="mentor-card-note">
              <strong style={{ color: "#ffffff", display: "block", marginBottom: "4px" }}>
                "No Student Is Invisible"
              </strong>
              Personal mentoring sessions, weekly score diagnostic audits & entrance test psychology.
            </div>

            <div className="mentor-actions">
              <Link to="/enquire" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                🎯 Book 1-on-1 Mentorship
              </Link>
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  borderColor: "rgba(255,255,255,0.25)"
                }}
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Core Mentorship Pillars */}
        <div className="mentor-pillars-section">
          <h3 className="mentor-pillars-title">
            The 4 Core Pillars of Sir's Mentorship Philosophy
          </h3>
          <div className="mentor-pillars-grid">
            {leadMentor.pillars.map((pillar, idx) => (
              <div key={idx} className="mentor-pillar-card">
                <span className="mentor-pillar-icon">{pillar.icon}</span>
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </div>
            ))}
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
