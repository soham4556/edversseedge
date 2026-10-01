import { Link } from "react-router-dom";
import { contactInfo, puneAreas, seoLandingPages } from "../../data/siteData";

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
                height: "48px",
                width: "auto",
                background: "#ffffff",
                padding: "6px 14px",
                borderRadius: "10px",
                display: "block",
              }}
            />
          </Link>
          <p className="footer-brand-desc">
            <strong>EdversseEDGE</strong> provides personalised home tuition and small group tuition in Pune for Classes 8–12, CBSE, and competitive exam preparation including JEE and NEET. Mentored by experienced educator Sudhaanshu Srivastavaa.
          </p>
          <div className="footer-brand-actions">
            <Link to="/enquire" className="btn btn-sm btn-accent">
              🎓 Book a Free Demo
            </Link>
            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-whatsapp-subtle"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Learning Options</h4>
          <ul className="footer-links-list">
            <li>
              <Link to="/home-tuition-pune">1-to-1 Home Tuition (Pune)</Link>
            </li>
            <li>
              <Link to="/group-tuition-pune">Small Group Tuition</Link>
            </li>
            <li>
              <Link to="/online-tuition">Online Interactive Tuition</Link>
            </li>
            <li>
              <Link to="/classes">Classes 8–10 (Maths & Science)</Link>
            </li>
            <li>
              <Link to="/classes">Classes 11–12 (PCM / PCB)</Link>
            </li>
            <li>
              <Link to="/jee-neet">JEE & NEET Focused Prep</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Pune Tuition Areas</h4>
          <p className="footer-area-note">Doorstep tutor availability across key Pune locations:</p>
          <div className="footer-areas-cloud">
            {puneAreas.map((area) => (
              <span key={area.name} className="area-pill-tag">
                {area.name}
              </span>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Direct Contact</h4>
          <div className="footer-contact-details">
            <p>
              <strong>Educator & Founder:</strong><br />
              Sudhaanshu Srivastavaa
            </p>
            <p>
              <strong>Call / WhatsApp:</strong><br />
              <a href={`tel:${contactInfo.phoneRaw}`} className="footer-direct-link">
                📞 {contactInfo.phoneFormatted}
              </a>
            </p>
            <p>
              <strong>Email Enquiries:</strong><br />
              <a href={`mailto:${contactInfo.email}`} className="footer-direct-link">
                ✉️ {contactInfo.email}
              </a>
            </p>
            <p>
              <strong>Service Availability:</strong><br />
              Mon – Sun: 8:00 AM – 9:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* SEO Quick Landing Pages Strip */}
      <div className="footer-seo-strip">
        <div className="page-container">
          <div className="seo-strip-header">Popular Searches in Pune:</div>
          <div className="seo-strip-links">
            {seoLandingPages.map((item) => (
              <Link key={item.path} to={item.path} className="seo-strip-link">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="page-container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} EdversseEDGE. Personalised Home & Group Tuition in Pune. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="dot">•</span>
            <Link to="/terms-of-admission">Terms & Conditions</Link>
            <span className="dot">•</span>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
