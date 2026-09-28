import { Link } from "react-router-dom";
import { contactInfo } from "../../data/siteData";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-top">
        <div className="footer-brand">
          <Link to="/" style={{ display: "inline-block" }}>
            <img
              src="/logo.png"
              alt="EdversseEDGE"
              style={{
                height: "50px",
                width: "auto",
                background: "#ffffff",
                padding: "6px 14px",
                borderRadius: "10px",
                display: "block",
              }}
            />
          </Link>
          <p>
            EdversseEDGE is Pune’s premier concept-first coaching institute for
            IIT-JEE, NEET-UG, and Board excellence. We limit batches to 28-30
            students, ensuring every learner gets 1-on-1 mentorship and measurable
            rank growth.
          </p>
          <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
            <a
              href={contactInfo.appDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-white"
            >
              📱 Download App
            </a>
            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-accent"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Academic Programs</h4>
          <ul className="footer-links-list">
            <li>
              <Link to="/courses">IIT-JEE 2-Year Integrated</Link>
            </li>
            <li>
              <Link to="/courses">NEET-UG Medical Excellence</Link>
            </li>
            <li>
              <Link to="/courses">Class 11th & 12th Boards + CET</Link>
            </li>
            <li>
              <Link to="/courses">Rank Booster Dropper Batch</Link>
            </li>
            <li>
              <Link to="/courses">Pre-Foundation (Class 9th & 10th)</Link>
            </li>
            <li>
              <Link to="/test-series">All India Test Series (AITS)</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Navigation</h4>
          <ul className="footer-links-list">
            <li>
              <Link to="/about">About Institute & Mentors</Link>
            </li>
            <li>
              <Link to="/results">Results & Hall of Fame</Link>
            </li>
            <li>
              <Link to="/scholarships">EDGE-SAT Scholarship Test</Link>
            </li>
            <li>
              <Link to="/enquire">Book Free Demo Class</Link>
            </li>
            <li>
              <Link to="/download">Student Mobile App</Link>
            </li>
            <li>
              <a
                href={contactInfo.webLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Student Web Portal
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Kondhwa, Pune Center</h4>
          <div className="footer-contact-item">
            <span>📍</span>
            <div>
              <p style={{ margin: 0 }}>
                {contactInfo.address}
              </p>
              <small style={{ color: "#94a3b8" }}>
                ({contactInfo.landmark})
              </small>
            </div>
          </div>
          <div className="footer-contact-item">
            <span>📞</span>
            <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}>
              {contactInfo.phoneFormatted}
            </a>
          </div>
          <div className="footer-contact-item">
            <span>✉️</span>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </div>
          <div className="footer-contact-item">
            <span>⏰</span>
            <span>{contactInfo.timing}</span>
          </div>
        </div>
      </div>

      <div className="page-container footer-bottom">
        <div>
          © {new Date().getFullYear()} EdversseEDGE Education Pvt. Ltd. All
          Rights Reserved.
        </div>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-admission">Terms of Admission</Link>
          <Link to="/contact">Pune Center Location</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

