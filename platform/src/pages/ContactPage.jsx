import { useState } from "react";
import { contactInfo } from "../data/siteData";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "IIT-JEE Batch Admission Inquiry",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanNumber = (contactInfo.whatsapp || "919766715666").replace(/[^0-9]/g, "");
    const message = `📩 *New Contact Query - EdversseEDGE*

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email || "Not Provided"}
📌 *Subject / Query:* ${formData.subject}
${formData.message ? `💬 *Message:* ${formData.message}\n` : ""}
📍 *Campus:* Kondhwa Center, Pune`;

    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    setWhatsappRedirectUrl(url);
    setSent(true);

    // Direct immediate redirect to WhatsApp
    window.location.href = url;
  };

  return (
    <div className="section page-container">
      <div className="section-heading text-center">
        <span className="section-tag">Get in Touch</span>
        <h1 className="section-title">
          Contact <span className="text-gradient">EdversseEDGE Pune</span>
        </h1>
        <p className="section-subtitle">
          Have questions about courses, batches, or scholarship tests? Walk into
          our Kondhwa center or contact our academic counselors directly.
        </p>
      </div>

      <div className="contact-layout">
        {/* Left Side: Contact Information Panel */}
        <div className="contact-info-panel">
          <div className="contact-method">
            <div className="contact-icon-box">📍</div>
            <div className="contact-details">
              <h4>Kondhwa Center Location</h4>
              <p>{contactInfo.address}</p>
              <small style={{ color: "#64748b", display: "block", marginTop: "4px" }}>
                Landmark: {contactInfo.landmark}
              </small>
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", marginTop: "8px", fontWeight: 700 }}
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>

          <div className="contact-method">
            <div className="contact-icon-box">📞</div>
            <div className="contact-details">
              <h4>Admissions Hotline</h4>
              <p>Direct counseling and queries:</p>
              <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} style={{ fontSize: "1.05rem" }}>
                {contactInfo.phoneFormatted}
              </a>
            </div>
          </div>

          <div className="contact-method">
            <div className="contact-icon-box">💬</div>
            <div className="contact-details">
              <h4>WhatsApp Support</h4>
              <p>Instant query assistance on WhatsApp:</p>
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#16a34a", fontWeight: 700 }}
              >
                Chat on WhatsApp (+91 97667 15666) →
              </a>
            </div>
          </div>

          <div className="contact-method">
            <div className="contact-icon-box">✉️</div>
            <div className="contact-details">
              <h4>Official Email</h4>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </div>
          </div>

          <div className="contact-method">
            <div className="contact-icon-box">⏰</div>
            <div className="contact-details">
              <h4>Office Hours</h4>
              <p>{contactInfo.timing}</p>
              <small style={{ color: "#64748b" }}>
                Center open all 7 days for parent visits & student counseling.
              </small>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="enquiry-form-card">
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--brand-navy)", margin: "0 0 8px" }}>
            Send Us a Message
          </h2>
          <p style={{ color: "#64748b", margin: "0 0 24px", fontSize: "0.92rem" }}>
            Leave your query and an academic counselor will reach out within 2 hours.
          </p>

          {sent ? (
            <div className="toast-success" style={{ padding: "24px", borderRadius: "16px" }}>
              <div>
                <strong style={{ fontSize: "1.1rem" }}>Inquiry Submitted! Redirecting to WhatsApp... 🎉</strong>
                <p style={{ margin: "8px 0 16px", fontSize: "0.92rem", lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.name}</strong>. Your query is being sent directly to Sir's WhatsApp ({contactInfo.phoneFormatted}).
                </p>
                <a
                  href={whatsappRedirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-white"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  <span>💬 Open WhatsApp Now</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="contactName">Your Name</label>
                <input
                  id="contactName"
                  className="form-input"
                  required
                  placeholder="e.g. Rahul Deshmukh"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contactPhone">Mobile Number</label>
                <input
                  id="contactPhone"
                  className="form-input"
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div className="form-group full-width">
                <label className="form-label" htmlFor="contactEmail">Email ID</label>
                <input
                  id="contactEmail"
                  className="form-input"
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="form-group full-width">
                <label className="form-label" htmlFor="contactSubject">Subject / Query Type</label>
                <select
                  id="contactSubject"
                  className="form-select"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                >
                  <option>IIT-JEE Batch Admission Inquiry</option>
                  <option>NEET-UG Medical Batch Inquiry</option>
                  <option>Class 11/12 Board Coaching</option>
                  <option>Scholarship Test (EDGE-SAT) Details</option>
                  <option>Schedule In-Person Center Visit</option>
                  <option>General Information</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label className="form-label" htmlFor="contactMessage">Your Message / Student Background</label>
                <textarea
                  id="contactMessage"
                  className="form-textarea"
                  rows={4}
                  placeholder="Tell us about your current school/college and your target academic goals..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <div className="form-group full-width" style={{ marginTop: "8px" }}>
                <button type="submit" className="btn btn-primary btn-block btn-lg">
                  Send Inquiry Now →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
