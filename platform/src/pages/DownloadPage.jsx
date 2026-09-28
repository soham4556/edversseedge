import { contactInfo } from "../data/siteData";

function DownloadPage() {
  return (
    <div className="section page-container">
      <div className="section-heading text-center">
        <span className="section-tag">Learning on the Go</span>
        <h1 className="section-title">
          Download the <span className="text-gradient">EdversseEDGE App</span>
        </h1>
        <p className="section-subtitle">
          Your complete study companion. Access live classes, recorded lecture
          archives, chapter-wise test series, and 1-on-1 faculty chat right from
          your phone.
        </p>
      </div>

      <div className="app-banner" style={{ marginTop: "24px" }}>
        <div>
          <span className="badge badge-gold" style={{ marginBottom: "12px" }}>
            ⭐ Official Android App
          </span>
          <h3>Empower Your Preparation 24/7</h3>
          <p>
            Whether revising late at night or practicing chapter tests while
            traveling, the EdversseEDGE app ensures your academic momentum never
            breaks.
          </p>

          <div style={{ display: "grid", gap: "12px", marginBottom: "28px" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ color: "#34d399", fontWeight: 900 }}>✓</span>
              <span><strong>Recorded Lecture Archive:</strong> Re-watch any class in 4K resolution at 1.5x/2x speed.</span>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ color: "#34d399", fontWeight: 900 }}>✓</span>
              <span><strong>Daily DPP with Video Solutions:</strong> Solve practice sets with step-by-step video breakdowns.</span>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ color: "#34d399", fontWeight: 900 }}>✓</span>
              <span><strong>Instant Doubt Chat:</strong> Upload photos of difficult numericals for fast teacher resolution.</span>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ color: "#34d399", fontWeight: 900 }}>✓</span>
              <span><strong>Parent Attendance & Progress Portal:</strong> Track test rankings and lecture attendance live.</span>
            </div>
          </div>

          <div className="app-btn-row">
            <a
              href={contactInfo.appDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="google-play-btn"
            >
              <img src="/icons/android.svg" alt="Google Play" />
              <div className="google-play-text">
                <span>GET IT ON</span>
                <strong>Google Play Store</strong>
              </div>
            </a>
            <a
              href={contactInfo.webLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              💻 Open Web Portal (PC / Laptop)
            </a>
          </div>
        </div>

        <div className="app-mockup-frame">
          <div className="phone-device">
            <div className="phone-screen">
              <img src="/icons/unnamed.webp" alt="EdversseEDGE App Interface" />
            </div>
          </div>
        </div>
      </div>

      {/* Login & Org Code Guide */}
      <div
        style={{
          marginTop: "48px",
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "24px",
          padding: "36px",
          boxShadow: "var(--shadow-sm)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "28px",
        }}
      >
        <div>
          <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "8px" }}>🔑</span>
          <h3 style={{ margin: "0 0 8px", color: "var(--brand-navy)" }}>
            Login Instructions
          </h3>
          <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
            Once admitted, you will receive an SMS with your student ID. Download
            the app from Google Play, enter your registered mobile number, and
            verify via OTP to instantly access your batches.
          </p>
        </div>

        <div>
          <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "8px" }}>💻</span>
          <h3 style={{ margin: "0 0 8px", color: "var(--brand-navy)" }}>
            Web Portal Access
          </h3>
          <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
            Prefer studying on a large laptop or desktop monitor? Visit our Web
            Portal at <strong>web.classplusapp.com</strong>. When prompted for
            Org Code, enter: <strong style={{ color: "#2563eb" }}>eiyild</strong>.
          </p>
        </div>

        <div>
          <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "8px" }}>🆘</span>
          <h3 style={{ margin: "0 0 8px", color: "var(--brand-navy)" }}>
            Technical Support
          </h3>
          <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>
            Facing any issue with OTP or video streaming? Reach out to our IT
            helpdesk at <strong>info@edversseedge.com</strong> or call our
            helpline at <strong>{contactInfo.phoneFormatted}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
