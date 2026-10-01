import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { contactInfo } from "../../data/siteData";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Home Tuition", to: "/home-tuition-pune" },
  { label: "Group Tuition", to: "/group-tuition-pune" },
  { label: "Classes & Subjects", to: "/classes" },
  { label: "JEE / NEET", to: "/jee-neet" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="announcement-bar">
        <div className="page-container announcement-content">
          <div className="announcement-ticker">
            <span className="pulse-dot"></span>
            <span>
              <strong>Pune Home Tuition Available</strong> — Selected Areas Across Pune
            </span>
          </div>
          <div className="announcement-links">
            <a
              href={`tel:${contactInfo.phoneRaw}`}
              className="announcement-link"
              title="Call directly"
            >
              📞 <span>{contactInfo.phoneFormatted}</span>
            </a>
            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="announcement-link announcement-wa"
              title="Chat on WhatsApp"
            >
              💬 <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="navbar-shell">
        <div className="page-container navbar">
          <Link to="/" className="brand-link" onClick={() => setIsOpen(false)}>
            <img src="/logo.png" alt="EdversseEDGE" className="brand-logo" />
          </Link>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>

          <nav
            id="primary-nav"
            className={`nav-links ${isOpen ? "open" : ""}`}
            aria-label="Primary Navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <div className="nav-mobile-actions" style={{ display: isOpen ? "flex" : "none" }}>
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-subtle"
                onClick={() => setIsOpen(false)}
              >
                💬 WhatsApp Us
              </a>
              <Link
                to="/enquire"
                className="nav-cta-btn"
                onClick={() => setIsOpen(false)}
              >
                Book a Free Demo
              </Link>
            </div>
          </nav>

          <div className="nav-actions">
            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm nav-wa-btn"
              title="Quick WhatsApp Chat"
            >
              <span>💬 WhatsApp</span>
            </a>
            <Link to="/enquire" className="nav-cta-btn">
              <span>Book a Free Demo</span>
              <span className="cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
