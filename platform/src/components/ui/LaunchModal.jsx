import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { contactInfo } from "../../data/siteData";

function LaunchModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const shown = sessionStorage.getItem("launchModalShown");
      if (!shown) {
        // Show after 1.5 seconds on first visit
        const timer = setTimeout(() => setOpen(true), 1500);
        sessionStorage.setItem("launchModalShown", "1");
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
              background: "#eff6ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <img
              src="/icons/android.svg"
              alt="EdversseEDGE App"
              style={{ width: "36px", height: "36px" }}
            />
          </div>
          <div>
            <span className="badge badge-gold" style={{ marginBottom: "6px" }}>
              ⭐ Official Android App
            </span>
            <h3 id="modal-title" style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: "1.3rem", color: "var(--brand-navy)" }}>
              Take EdversseEDGE Everywhere
            </h3>
          </div>
        </div>

        <p style={{ color: "#475569", lineHeight: 1.6, margin: "0 0 20px" }}>
          Access live & recorded video lectures, daily practice problems (DPP),
          adaptive test analytics, and 1-on-1 mentor doubt resolution directly on
          your Android device.
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a
            href={contactInfo.appDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            <span>Get on Google Play</span>
            <span>→</span>
          </a>
          <Link
            to="/enquire"
            className="btn btn-ghost"
            onClick={() => setOpen(false)}
          >
            Book Free Demo
          </Link>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setOpen(false)}
            style={{ marginLeft: "auto" }}
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}

export default LaunchModal;

