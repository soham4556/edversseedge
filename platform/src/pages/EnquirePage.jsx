import { useState } from "react";
import { Link } from "react-router-dom";
import { contactInfo, puneAreas } from "../data/siteData";

function EnquirePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    studentClass: "Class 11",
    format: "1-to-1 Home Tuition",
    subject: "Physics, Chemistry & Maths",
    area: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAreaClick = (areaName) => {
    setForm((prev) => ({ ...prev, area: areaName }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert("Please provide Name and Phone Number.");
      return;
    }

    const message = `*Book a Free Demo Enquiry — EdversseEDGE*\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `🎓 *Class:* ${form.studentClass}\n` +
      `🏠 *Format:* ${form.format}\n` +
      `📚 *Subjects:* ${form.subject}\n` +
      `📍 *Pune Area:* ${form.area || "Not specified"}\n` +
      (form.message ? `💬 *Message:* ${form.message}` : "");

    const url = `https://wa.me/919766715666?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="page-shell enquire-page">
      <section className="page-header-banner">
        <div className="page-container-narrow text-center">
          <span className="badge badge-gold">Introductory Demo</span>
          <h1 className="banner-title">
            Book a Free Demo &amp; <span className="gold-shimmer-text">Check Availability</span>
          </h1>
          <p className="banner-desc">
            Tell us your child's class, subjects and location. We'll help you identify the suitable learning option (Home, Small Group or Online) and arrange an introductory session.
          </p>
        </div>
      </section>

      <section className="tuition-section">
        <div className="page-container-narrow">
          <div className="enquiry-card-wrapper">
            {submitted ? (
              <div className="enquiry-success-message text-center p-5">
                <div className="success-icon">🎉</div>
                <h2>Demo Request Received!</h2>
                <p>
                  Thank you, <strong>{form.name}</strong>. Sudhaanshu Sir / our team will connect with you on <strong>{form.phone}</strong> to confirm the demo slot in your area (<strong>{form.area || "Pune"}</strong>).
                </p>
                <div className="mt-4 flex-center gap-3">
                  <a
                    href={contactInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    💬 WhatsApp Us Right Away
                  </a>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="tuition-enquiry-form full-width-form">
                <h3 className="form-header-title">Student &amp; Tuition Details</h3>

                <div className="form-group">
                  <label className="form-label">
                    Parent / Student Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Anand Kulkarni (Parent)"
                    value={form.name}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">
                      Phone Number (WhatsApp) <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 97667 15666"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Student's Class <span className="req">*</span>
                    </label>
                    <select
                      name="studentClass"
                      value={form.studentClass}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="Class 8">Class 8</option>
                      <option value="Class 9">Class 9</option>
                      <option value="Class 10">Class 10</option>
                      <option value="Class 11">Class 11 (Science)</option>
                      <option value="Class 12">Class 12 (Science)</option>
                      <option value="JEE Main & Advanced">JEE Main &amp; Advanced</option>
                      <option value="NEET Medical">NEET Medical</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Learning Format</label>
                    <select
                      name="format"
                      value={form.format}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="1-to-1 Home Tuition">1-to-1 Home Tuition (At Your Residence)</option>
                      <option value="Small Group Tuition">Small Group Tuition (3-6 Students)</option>
                      <option value="Online Tuition">Online Tuition (Live Interactive)</option>
                      <option value="Open to recommendations">Open to recommendations</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subjects Required</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="e.g. Physics, Chemistry, Maths, All"
                      value={form.subject}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Area / Locality in Pune <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    name="area"
                    required
                    placeholder="e.g. Magarpatta City, Hadapsar, Kharadi, Baner, Wakad..."
                    value={form.area}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {/* Quick Pune Area Selector Pills */}
                  <div className="quick-area-pills mt-2">
                    <span className="pills-label">Quick select:</span>
                    {puneAreas.slice(0, 8).map((a) => (
                      <button
                        key={a.name}
                        type="button"
                        className={`area-mini-pill ${form.area === a.name ? "selected" : ""}`}
                        onClick={() => handleAreaClick(a.name)}
                      >
                        {a.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Special Notes / Message (Optional)</label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Share any specific chapter doubts, school board, or target goals..."
                    value={form.message}
                    onChange={handleChange}
                    className="form-control"
                  ></textarea>
                </div>

                <div className="form-action-buttons-stack">
                  <button type="submit" className="btn btn-primary btn-lg btn-block">
                    BOOK A FREE DEMO →
                  </button>

                  <div className="or-divider-row">
                    <span>or</span>
                  </div>

                  <a
                    href={contactInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-lg btn-block"
                  >
                    💬 WHATSAPP US
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default EnquirePage;
