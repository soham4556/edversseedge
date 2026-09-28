import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { contactInfo } from "../../data/siteData";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Programs", to: "/programs" },
  { label: "Test Series", to: "/test-series" },
  { label: "Free Mock Test", to: "/free-mock-test" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="announcement-bar">
        <div className="page-container announcement-content">
          <div className="announcement-ticker">
            <span className="pulse-dot"></span>
            <span>
              <strong></strong>
            </span>
          </div>
          <div className="announcement-links">
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
              className="announcement-link"
            >
              📞 <span>{contactInfo.phoneFormatted}</span>
            </a>
            <a
              href={contactInfo.appDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="announcement-link"
            >
              📱 <span>Get Android App</span>
            </a>
          </div>
        </div>
      </div>

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
                href={contactInfo.webLoginUrl}
                className="nav-login-btn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Student Login
              </a>
              <Link
                to="/enquire"
                className="nav-cta-btn"
                onClick={() => setIsOpen(false)}
              >
                Book Free Demo
              </Link>
            </div>
          </nav>

          <div className="nav-actions">
            <a
              href={contactInfo.webLoginUrl}
              className="nav-login-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Student Login
            </a>
            <Link to="/enquire" className="nav-cta-btn">
              <span>Book Free Demo</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

