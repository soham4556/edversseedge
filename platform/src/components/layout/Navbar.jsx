import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Programs", to: "/programs" },
  { label: "Test Series", to: "/test-series" },
  { label: "Results", to: "/results" },
  { label: "Scholarships", to: "/scholarships" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-shell">
      <nav className="navbar page-container" aria-label="Main navigation">
        <NavLink to="/" className="brand-link" onClick={() => setIsOpen(false)}>
          <img src="/logo.png" alt="EdversseEDGE" className="brand-logo" />
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="primary-nav"
        >
          Menu
        </button>

        <div id="primary-nav" className={`nav-links ${isOpen ? "open" : ""}`}>
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

          <a
            href="https://web.classplusapp.com/login?orgCode=eiyild"
            className="nav-cta"
            onClick={() => setIsOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
