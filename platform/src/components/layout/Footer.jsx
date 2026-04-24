import { NavLink } from "react-router-dom";
import { contactInfo } from "../../data/siteData";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-grid">
        <section>
          <h4>Visit Us</h4>
          <p>{contactInfo.address}</p>
        </section>

        <section>
          <h4>Contact</h4>
          <p>
            <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}>
              {contactInfo.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </p>
        </section>

        <section>
          <h4>Quick Links</h4>
          <div className="footer-links">
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/results">Results</NavLink>
            <NavLink to="/scholarships">Scholarships</NavLink>
            <NavLink to="/enquire">Admissions</NavLink>
          </div>
        </section>
      </div>

      <p className="copyright page-container">
        © 2026 All Rights Reserved | EdversseEDGE
      </p>
    </footer>
  );
}

export default Footer;
