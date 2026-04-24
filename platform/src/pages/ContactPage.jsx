import { contactInfo } from "../data/siteData";

function ContactPage() {
  return (
    <section className="section page-container">
      <div className="section-heading">
        <h2>Contact</h2>
        <p>Talk to our team for guidance and admissions</p>
      </div>

      <div className="contact-grid">
        <div className="contact-left">
          <img
            src="/icons/contact.svg"
            alt=""
            className="contact-icon"
          />
          <h3>Visit Our Office</h3>
          <p className="muted">{contactInfo.address}</p>
          <p>
            <a
              className="text-link"
              href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
            >
              {contactInfo.phone}
            </a>
          </p>
          <p>
            <a className="text-link" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>
          </p>
        </div>

        <form className="enquiry-form contact-form">
          <label>Name</label>
          <input placeholder="Your name" />

          <label>Phone / WhatsApp</label>
          <input placeholder="Mobile number" />

          <label>Message</label>
          <textarea rows={4} placeholder="How can we help?" />

          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn btn-primary">Send Message</button>
            <a className="btn btn-ghost" href="/enquire">
              Enquire
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
