import { useState } from "react";
import { scholarshipTiers } from "../data/siteData";

function ScholarshipsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    currentClass: "Class 10 moving to 11",
    mode: "Offline (Kondhwa Center)",
    date: "Upcoming Sunday",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section page-container">
      <div className="section-heading text-center">
        <span className="section-tag">Empowering Merit</span>
        <h1 className="section-title">
          EDGE-SAT <span className="text-gradient">Scholarship Program</span>
        </h1>
        <p className="section-subtitle">
          Up to 100% Tuition Fee Waivers for meritorious and hardworking students.
          We believe financial constraints should never stand between an aspiring
          ranker and premier coaching.
        </p>
      </div>

      {/* Scholarship Tiers Grid */}
      <div className="scholarship-grid">
        {scholarshipTiers.map((tier, idx) => (
          <div
            className={`scholar-tier-card ${idx === 0 ? "top-tier" : ""}`}
            key={tier.badge}
          >
            <div>
              <span
                style={{
                  background: idx === 0 ? "#fef3c7" : "#eff6ff",
                  color: idx === 0 ? "#b45309" : "#1d4ed8",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  display: "inline-block",
                  marginBottom: "6px",
                }}
              >
                {tier.badge}
              </span>
              <div className="scholar-waiver">{tier.waiver}</div>
            </div>

            <div>
              <strong style={{ display: "block", color: "var(--brand-navy)", fontSize: "0.95rem" }}>
                Eligibility Criteria:
              </strong>
              <p style={{ margin: "2px 0 0", color: "#475569", fontSize: "0.88rem" }}>
                {tier.criteria}
              </p>
            </div>

            <div>
              <strong style={{ display: "block", color: "var(--brand-navy)", fontSize: "0.95rem" }}>
                Included Benefits:
              </strong>
              <p style={{ margin: "2px 0 0", color: "#64748b", fontSize: "0.85rem" }}>
                {tier.perks}
              </p>
            </div>

            <div>
              <a href="#register-test" className="btn btn-primary btn-sm">
                Apply →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Test Format & Registration Form */}
      <div
        id="register-test"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "40px",
          marginTop: "64px",
          alignItems: "start",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "24px",
            padding: "36px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <span className="badge badge-gold" style={{ marginBottom: "12px" }}>
            ⭐ Test Pattern & Syllabus
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", color: "var(--brand-navy)", margin: "0 0 16px" }}>
            About EDGE-SAT 2026-27
          </h2>
          <p style={{ color: "#475569", lineHeight: 1.6, margin: "0 0 20px" }}>
            The EdversseEDGE Scholarship & Aptitude Test evaluates conceptual
            grasp, logical problem solving, and analytical thinking rather than
            rote memory.
          </p>

          <div style={{ display: "grid", gap: "12px", fontSize: "0.92rem" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              <span>⏱️</span>
              <div>
                <strong>Duration:</strong> 90 Minutes (60 MCQs)
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <span>📚</span>
              <div>
                <strong>Subjects:</strong> Physics, Chemistry, Math/Bio, & Mental Ability (MAT)
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <span>📍</span>
              <div>
                <strong>Modes:</strong> Both Online (From Home) & Offline (Kondhwa Center)
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <span>💰</span>
              <div>
                <strong>Registration Fee:</strong> 100% Free (No Examination Charges)
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <span>🏆</span>
              <div>
                <strong>Results & Scholarship Letter:</strong> Within 48 Hours
              </div>
            </div>
          </div>
        </div>

        {/* Instant Registration Form */}
        <div className="enquiry-form-card">
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--brand-navy)", margin: "0 0 8px" }}>
            Register for Free EDGE-SAT
          </h2>
          <p style={{ color: "#64748b", margin: "0 0 20px", fontSize: "0.92rem" }}>
            Fill in your details below to receive your test admit card & sample question paper.
          </p>

          {submitted ? (
            <div className="toast-success">
              <div>
                <strong>Registration Confirmed! 🎉</strong>
                <p style={{ margin: "4px 0 0", fontSize: "0.88rem" }}>
                  Thank you, {form.name}. Our academic counselor will call you on{" "}
                  {form.phone} with your test login credentials and slot timings.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-grid">
              <div className="form-group full-width">
                <label className="form-label" htmlFor="studentName">Student Full Name</label>
                <input
                  id="studentName"
                  className="form-input"
                  required
                  placeholder="e.g. Atharva Joshi"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="studentPhone">Mobile / WhatsApp Number</label>
                <input
                  id="studentPhone"
                  className="form-input"
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="studentEmail">Email ID</label>
                <input
                  id="studentEmail"
                  className="form-input"
                  type="email"
                  required
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="currentClassSelect">Current Grade / Goal</label>
                <select
                  id="currentClassSelect"
                  className="form-select"
                  value={form.currentClass}
                  onChange={(e) =>
                    setForm({ ...form, currentClass: e.target.value })
                  }
                >
                  <option>Class 8 moving to 9</option>
                  <option>Class 9 moving to 10</option>
                  <option>Class 10 moving to 11 (JEE / NEET)</option>
                  <option>Class 11 moving to 12 (Target Batch)</option>
                  <option>Class 12 Passed (Repeater / Dropper)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modeSelect">Preferred Test Mode</label>
                <select
                  id="modeSelect"
                  className="form-select"
                  value={form.mode}
                  onChange={(e) => setForm({ ...form, mode: e.target.value })}
                >
                  <option>Offline (Kondhwa Center, Pune)</option>
                  <option>Online (From Home)</option>
                </select>
              </div>

              <div className="form-group full-width" style={{ marginTop: "10px" }}>
                <button type="submit" className="btn btn-primary btn-block btn-lg">
                  Submit Free Registration →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScholarshipsPage;
