import { Link } from "react-router-dom";
import { contactInfo } from "../../data/siteData";

function MobileStickyBar() {
  return (
    <aside className="mobile-sticky-bar" aria-label="Quick mobile contact actions">
      <a
        href={`tel:${contactInfo.phoneRaw}`}
        className="mobile-sticky-btn mobile-call-btn"
        aria-label="Call EdversseEDGE"
      >
        <span className="sticky-icon">📞</span>
        <span className="sticky-label">Call Now</span>
      </a>

      <a
        href={contactInfo.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-sticky-btn mobile-wa-btn"
        aria-label="WhatsApp EdversseEDGE"
      >
        <span className="sticky-icon">💬</span>
        <span className="sticky-label">WhatsApp</span>
      </a>

      <Link
        to="/enquire"
        className="mobile-sticky-btn mobile-demo-btn"
        aria-label="Book a Free Demo"
      >
        <span className="sticky-icon">🎓</span>
        <span className="sticky-label">Book Demo</span>
      </Link>
    </aside>
  );
}

export default MobileStickyBar;
