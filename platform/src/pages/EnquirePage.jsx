import { useState } from "react";
import { Link } from "react-router-dom";
import { contactInfo, courses } from "../data/siteData";

function EnquirePage() {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    parentOrStudent: "Student",
    targetExam: courses[0].title,
    currentStandard: "Class 10 (Moving to 11)",
    preferredMode: "Classroom (Kondhwa Center)",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanNumber = (contactInfo.whatsapp || "919766715666").replace(/[^0-9]/g, "");
    const message = `🎓 *New Free Demo & Admission Enquiry - EdversseEDGE*

👤 *Name:* ${form.name}
📱 *Phone:* ${form.phone}
✉️ *Email:* ${form.email || "Not Provided"}
👥 *Role:* ${form.parentOrStudent}
🎯 *Target Course / Exam:* ${form.targetExam}
📚 *Current Class:* ${form.currentStandard}
🏫 *Preferred Learning Mode:* ${form.preferredMode}
${form.notes ? `📝 *Specific Query / Goals:* ${form.notes}\n` : ""}
📍 *Campus:* Kondhwa Center, Pune`;

    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    setWhatsappRedirectUrl(url);
    setSubmitted(true);

    // Direct immediate redirect to WhatsApp
    window.location.href = url;
  };

  return (
    <div className="section page-container-narrow">
      <div className="section-heading text-center">
        <span className="section-tag">Admissions 2026-27</span>
        <h1 className="section-title">
          Book Free Demo & <span className="text-gradient">Academic Counseling</span>
        </h1>
        <p className="section-subtitle">
          Experience 2 days of real classroom teaching and take our diagnostic
          assessment before making any admission decision.
        </p>
      </div>

      <div className="enquiry-form-card">
        {submitted ? (
          <div style={{ textAlign: "center", padding: "32px 16px" }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "#dcfce7",
                color: "#15803d",
                fontSize: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              ✓
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", color: "var(--brand-navy)", fontSize: "1.8rem", margin: "0 0 10px" }}>
              Enquiry Submitted Successfully!
            </h2>
            <p style={{ color: "#475569", maxWidth: "540px", margin: "0 auto 24px", lineHeight: 1.6 }}>
              Thank you, <strong>{form.name}</strong>. We have registered your
              request for <strong>{form.targetExam}</strong>. Our senior academic
              director will call you on <strong>{form.phone}</strong> within 2 hours
              to schedule your free trial session.
            </p>

            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                padding: "20px",
                maxWidth: "480px",
                margin: "0 auto 24px",
                textAlign: "left",
              }}
            >
              <h4 style={{ margin: "0 0 10px", color: "var(--brand-navy)" }}>
                What happens next?
              </h4>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "#64748b", fontSize: "0.9rem", display: "grid", gap: "6px" }}>
                <li>Counselor confirms your trial lecture date and batch slot.</li>
                <li>You receive a free diagnostic test paper to evaluate weak spots.</li>
                <li>Visit our Kondhwa center to meet faculty directors in person.</li>
              </ul>
            </div>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/" className="btn btn-secondary">
                Return to Home
              </Link>
              <a
                href={whatsappRedirectUrl || contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                💬 Open in WhatsApp Now →
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-group">
              <label className="form-label" htmlFor="studentFullName">Full Name *</label>
              <input
                id="studentFullName"
                className="form-input"
                required
                placeholder="Student or Parent Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="enquiryPhone">Mobile Number (WhatsApp Preferred) *</label>
              <input
                id="enquiryPhone"
                className="form-input"
                type="tel"
                required
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="enquiryEmail">Email Address</label>
              <input
                id="enquiryEmail"
                className="form-input"
                type="email"
                placeholder="name@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="roleSelect">I am a *</label>
              <select
                id="roleSelect"
                className="form-select"
                value={form.parentOrStudent}
                onChange={(e) =>
                  setForm({ ...form, parentOrStudent: e.target.value })
                }
              >
                <option>Student</option>
                <option>Parent / Guardian</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label className="form-label" htmlFor="targetCourseSelect">Target Program / Exam *</label>
              <select
                id="targetCourseSelect"
                className="form-select"
                value={form.targetExam}
                onChange={(e) =>
                  setForm({ ...form, targetExam: e.target.value })
                }
              >
                {courses.map((c) => (
                  <option key={c.id} value={c.title}>
                    {c.title} ({c.duration})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="standardSelect">Current Standard / Class *</label>
              <select
                id="standardSelect"
                className="form-select"
                value={form.currentStandard}
                onChange={(e) =>
                  setForm({ ...form, currentStandard: e.target.value })
                }
              >
                <option>Class 8 (Moving to 9)</option>
                <option>Class 9 (Moving to 10)</option>
                <option>Class 10 (Moving to 11)</option>
                <option>Class 11 (Moving to 12)</option>
                <option>Class 12 (Board Appearing)</option>
                <option>Class 12 Passed (Dropper / Repeater)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="preferredModeSelect">Preferred Learning Mode</label>
              <select
                id="preferredModeSelect"
                className="form-select"
                value={form.preferredMode}
                onChange={(e) =>
                  setForm({ ...form, preferredMode: e.target.value })
                }
              >
                <option>Classroom Coaching (Kondhwa Center, Pune)</option>
                <option>Hybrid (Classroom + App Recorded)</option>
                <option>Online Live Classes</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label className="form-label" htmlFor="enquiryNotes">Questions or Specific Learning Goals</label>
              <textarea
                id="enquiryNotes"
                className="form-textarea"
                rows={3}
                placeholder="Tell us about past scores, subject challenges (e.g. Physics numericals), or specific questions..."
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />
            </div>

            <div className="form-group full-width" style={{ marginTop: "12px" }}>
              <button type="submit" className="btn btn-primary btn-block btn-lg">
                Submit Enquiry & Book Free Demo →
              </button>
              <p style={{ textAlign: "center", color: "#64748b", fontSize: "0.82rem", margin: "10px 0 0" }}>
                🔒 Your privacy is respected. No spam calls. Your data is strictly used for academic counseling.
              </p>
            </div>
          </form>
        )}
      </div>

      {/* Direct Call / Contact Banner below form */}
      <div
        style={{
          marginTop: "32px",
          textAlign: "center",
          padding: "20px",
          background: "#ffffff",
          borderRadius: "16px",
          border: "1px solid #e2e8f0",
        }}
      >
        <span style={{ color: "#64748b", fontSize: "0.92rem" }}>
          Need urgent assistance? Call our Admissions Desk directly:{" "}
        </span>
        <a
          href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
          style={{
            fontWeight: 800,
            color: "#2563eb",
            textDecoration: "none",
            fontSize: "1.05rem",
          }}
        >
          {contactInfo.phoneFormatted}
        </a>
      </div>
    </div>
  );
}

export default EnquirePage;
