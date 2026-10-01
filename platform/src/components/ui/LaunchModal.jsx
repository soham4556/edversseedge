import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { contactInfo } from "../../data/siteData";

function LaunchModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const shown = sessionStorage.getItem("tuitionDemoModalShown");
      if (!shown) {
        // Show after 3.5 seconds on first visit
        const timer = setTimeout(() => setOpen(true), 3500);
        sessionStorage.setItem("tuitionDemoModalShown", "1");
        return () => clearTimeout(timer);
      }
    } catch {
      setOpen(false);
    }
  }, []);

  if (!open) return null;

  return (
    <div
      className="launch-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={() => setOpen(false)}
    >
      <div className="launch-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="launch-close"
          onClick={() => setOpen(false)}
          aria-label="Close dialog"
        >
          ✕
        </button>

        <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #0b1f3a, #1e3a8a)",
              color: "#fbbf24",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.75rem",
              flexShrink: 0,
            }}
          >
            🏠
          </div>
          <div>
            <span className="badge badge-gold" style={{ marginBottom: "4px" }}>
              ⭐ Personalised Academic Support in Pune
            </span>
            <h3 id="modal-title" style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--brand-navy)" }}>
              Need a Home Tutor for Your Child?
            </h3>
          </div>
        </div>

        <p style={{ color: "#475569", lineHeight: 1.6, margin: "0 0 20px", fontSize: "0.95rem" }}>
          Get 1-to-1 dedicated attention or small-group learning for <strong>Classes 8–12 (CBSE & State Board)</strong> in Pune. Focused conceptual teaching in Physics, Chemistry & Maths with <strong>Sudhaanshu Srivastavaa</strong> (12+ Yrs Exp).
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
          <Link
            to="/enquire"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            <span>Book a Free Demo</span>
            <span>→</span>
          </Link>
          <a
            href={contactInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp-subtle"
            onClick={() => setOpen(false)}
          >
            💬 WhatsApp Us
          </a>
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={() => setOpen(false)}
            style={{ marginLeft: "auto", color: "#64748b" }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default LaunchModal;
