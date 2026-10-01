import { useState } from "react";
import { contactInfo, puneAreas } from "../data/siteData";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    studentClass: "Class 11",
    format: "1-to-1 Home Tuition",
    subject: "Physics & Chemistry",
    area: "",
    message: "",
  });

  const popularAreas = [
    "Magarpatta City",
    "Amanora Park Town",
    "Hadapsar",
    "Kharadi",
    "Viman Nagar",
    "Kalyani Nagar",
    "Baner",
    "Balewadi",
    "Aundh",
    "Wakad",
    "Kothrud",
    "Model Colony",
  ];

  const quickSubjects = [
    "Physics",
    "Chemistry",
    "Mathematics",
    "Biology",
    "Physics & Chemistry",
    "Complete Science & Maths",
    "JEE Main / Adv",
    "NEET Medical",
  ];

  const faqs = [
    {
      q: "Is the first home tuition demo class really free?",
      a: "Yes, absolutely. The introductory session is 100% free with zero obligation. It allows the student to experience Sudhaanshu Sir's concept-first pedagogy and helps us assess the student's foundation level before finalizing the study schedule.",
    },
    {
      q: "How soon can home tuition begin after we submit this enquiry?",
      a: "Once you submit your details or message us on WhatsApp, Sudhaanshu Sir typically responds within 30 minutes. Following a brief 15-minute diagnostic phone discussion, we can schedule the in-person home demo within 24 to 48 hours based on your preferred time slot.",
    },
    {
      q: "Can we choose the days and timings for our child's home tuition?",
      a: "Yes. Flexible scheduling is one of the biggest advantages of 1-to-1 Home Tuition. We coordinate morning or post-school evening slots (typically 4:30 PM to 8:30 PM) so learning does not conflict with school hours or extracurricular commitments.",
    },
    {
      q: "Who conducts the classes — Sudhaanshu Sir or junior teachers?",
      a: "Unlike generic tutor agencies or aggregator platforms that assign unverified college students, all high-stakes Physics, Chemistry, and competitive classes (Classes 8–12, CBSE, JEE & NEET) are personally taught or directly supervised by Founder Sudhaanshu Srivastavaa (12+ Yrs Exp, M.Tech Bharati Vidyapeeth).",
    },
    {
      q: "Do you provide regular progress updates and test assessments to parents?",
      a: "Yes. After every chapter completion, a structured evaluation test is conducted. Parents receive transparent bi-weekly feedback on problem-solving speed, numerical accuracy, and weak conceptual areas.",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormatSelect = (fmt) => {
    setFormData((prev) => ({ ...prev, format: fmt }));
  };

  const handleSubjectSelect = (subj) => {
    setFormData((prev) => ({ ...prev, subject: subj }));
  };

  const handleAreaSelect = (areaName) => {
    setFormData((prev) => ({ ...prev, area: areaName }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter Student/Parent Name and Phone Number.");
      return;
    }

    const msg =
      `*New Tuition Enquiry — EdversseEDGE Pune*\n\n` +
      `👤 *Student / Parent:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `🎓 *Class:* ${formData.studentClass}\n` +
      `🏠 *Preferred Format:* ${formData.format}\n` +
      `📚 *Subject(s):* ${formData.subject}\n` +
      `📍 *Pune Locality:* ${formData.area || "Pune (Not specified)"}\n` +
      (formData.message ? `💬 *Requirement / Notes:* ${formData.message}\n\n` : `\n`) +
      `_Sent via edversseedge.com contact form_`;

    const url = `https://wa.me/919766715666?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setSent(true);
  };

  return (
    <div className="page-shell contact-page">
      {/* 1. Header Banner */}
      <section className="contact-hero-banner">
        <div className="page-container">
          <span className="badge badge-gold">📍 Personalised Tuition Across Pune</span>
          <h1 className="banner-title">
            Connect Directly With <span className="gold-shimmer-text">Sudhaanshu Sir</span>
          </h1>
          <p className="banner-desc">
            Personalised Home &amp; Small Group Tuition for Classes 8–12, CBSE, JEE &amp; NEET. No sales agents or tutor brokers—discuss your child's academic roadmap directly with an experienced educator.
          </p>
          <div className="contact-banner-trust-row">
            <span className="contact-trust-pill">
              <span className="pill-dot"></span> Direct Educator Mentorship
            </span>
            <span className="contact-trust-pill">
              <span className="pill-dot"></span> In-Home Doorstep Assessment
            </span>
            <span className="contact-trust-pill">
              <span className="pill-dot"></span> Free Introductory Demo
            </span>
            <span className="contact-trust-pill">
              <span className="pill-dot"></span> 30-Min Fast WhatsApp Response
            </span>
          </div>
        </div>
      </section>

      {/* 2. Top Quick Action Contact Cards */}
      <section className="tuition-section pt-0">
        <div className="page-container">
          <div className="contact-cards-grid">
            {/* Card 1: Direct Phone */}
            <div className="contact-quick-card">
              <div className="quick-card-header">
                <div className="quick-card-icon">📞</div>
                <div>
                  <div className="quick-card-title">Direct Calling Line</div>
                  <h3 className="quick-card-subtitle">Sudhaanshu Sir</h3>
                </div>
              </div>
              <div className="quick-card-body">
                <a href={`tel:${contactInfo.phoneRaw}`} className="quick-card-val">
                  {contactInfo.phoneFormatted}
                </a>
                <p className="quick-card-note">
                  Available Mon–Sun: 8:00 AM – 9:30 PM for parent academic consultations.
                </p>
              </div>
              <a href={`tel:${contactInfo.phoneRaw}`} className="quick-card-btn btn-call">
                📞 Call Directly Now
              </a>
            </div>

            {/* Card 2: WhatsApp Chat (Featured) */}
            <div className="contact-quick-card featured-wa">
              <span className="card-top-badge">Fastest Response</span>
              <div className="quick-card-header">
                <div className="quick-card-icon">💬</div>
                <div>
                  <div className="quick-card-title">WhatsApp Consultation</div>
                  <h3 className="quick-card-subtitle">Direct Chat</h3>
                </div>
              </div>
              <div className="quick-card-body">
                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-card-val"
                >
                  +91 97667 15666
                </a>
                <p className="quick-card-note">
                  Share syllabus, recent exam marks or schedule questions for instant guidance.
                </p>
              </div>
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-card-btn btn-wa"
              >
                💬 Chat on WhatsApp →
              </a>
            </div>

            {/* Card 3: In-Home Doorstep Tuition */}
            <div className="contact-quick-card">
              <div className="quick-card-header">
                <div className="quick-card-icon">🏠</div>
                <div>
                  <div className="quick-card-title">Doorstep Home Visits</div>
                  <h3 className="quick-card-subtitle">Pune Coverage</h3>
                </div>
              </div>
              <div className="quick-card-body">
                <div className="quick-card-val">East, West &amp; Central</div>
                <p className="quick-card-note">
                  Hadapsar, Magarpatta, Baner, Wakad, Aundh, Kothrud, Kalyani Nagar &amp; nearby.
                </p>
              </div>
              <a href="#pune-coverage" className="quick-card-btn btn-area">
                📍 View Locality Radar ↓
              </a>
            </div>
          </div>

          {/* 3. Main Workspace Split: Educator Profile + Enquiry Form */}
          <div className="contact-workspace-grid">
            {/* Left Column: Educator Profile, Process Roadmap & Area Picker */}
            <div className="contact-info-column">
              {/* Educator Credibility Card */}
              <div className="contact-mentor-prestige-card">
                <div className="mentor-profile-header">
                  <div className="mentor-avatar-badge">SS</div>
                  <div className="mentor-title-block">
                    <h3>Sudhaanshu Srivastavaa</h3>
                    <span className="mentor-role">Founder &amp; Head Educator, EdversseEDGE</span>
                    <div className="mentor-creds">
                      12+ Years Teaching Experience | M.Tech (Bharati Vidyapeeth Pune)
                    </div>
                  </div>
                </div>

                <div className="mentor-quote-box">
                  "Every student learns at their own pace. When parents call me, we don't pitch generic packages—we identify where the conceptual block is and create a structured study routine that builds confidence."
                </div>

                <div className="mentor-stats-grid">
                  <div className="mentor-stat-item">
                    <div className="stat-num">12+</div>
                    <span className="stat-label">Years Mentoring</span>
                  </div>
                  <div className="mentor-stat-item">
                    <div className="stat-num">800+</div>
                    <span className="stat-label">Students Guided</span>
                  </div>
                  <div className="mentor-stat-item">
                    <div className="stat-num">100%</div>
                    <span className="stat-label">Concept Focus</span>
                  </div>
                </div>
              </div>

              {/* 3 Simple Steps Roadmap */}
              <div className="contact-steps-card">
                <h3 className="card-inner-title">What Happens After You Inquire?</h3>
                <p className="card-inner-sub">
                  A transparent 3-step pathway tailored for your child's success:
                </p>
                <div className="consult-steps-list">
                  <div className="consult-step-item">
                    <div className="step-num-badge">1</div>
                    <div className="step-content">
                      <h4>15-Minute Diagnostic Call</h4>
                      <p>
                        We discuss the student's current board syllabus, past exam scores, and target goals (CBSE Boards, JEE, or NEET).
                      </p>
                    </div>
                  </div>
                  <div className="consult-step-item">
                    <div className="step-num-badge">2</div>
                    <div className="step-content">
                      <h4>Tailored Study Plan &amp; Slot Selection</h4>
                      <p>
                        Choose 1-to-1 Home Tuition at your residence or a Small Group batch (6–8 students) with convenient days and timings.
                      </p>
                    </div>
                  </div>
                  <div className="consult-step-item">
                    <div className="step-num-badge">3</div>
                    <div className="step-content">
                      <h4>Free In-Person Trial Demo</h4>
                      <p>
                        Experience the interactive teaching clarity firsthand at home before confirming admissions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clickable Area Chips for Quick Auto-Fill */}
              <div className="contact-areas-picker-card">
                <h3 className="card-inner-title">Pune Localities We Visit</h3>
                <p className="card-inner-sub">
                  Click your locality below to auto-fill the enquiry form:
                </p>
                <div className="locality-chips-cloud">
                  {popularAreas.map((area) => (
                    <button
                      key={area}
                      type="button"
                      className={`loc-pick-chip ${formData.area === area ? "active" : ""}`}
                      onClick={() => handleAreaSelect(area)}
                    >
                      📍 {area}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: High-Converting Consultation & Demo Booking Form */}
            <div className="contact-form-wrapper">
              <div className="contact-form-header">
                <span className="badge badge-navy">Book a Free Session</span>
                <h3>Personalised Tuition Enquiry</h3>
                <p>
                  Fill out the details below. Sudhaanshu Sir will connect directly to confirm slot availability.
                </p>
              </div>

              {sent ? (
                <div className="contact-success-box">
                  <div className="success-badge-icon">✓</div>
                  <h3>Enquiry Dispatched Successfully!</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. We have opened WhatsApp with your details for <strong>{formData.studentClass} ({formData.format})</strong>. Sudhaanshu Sir will reply shortly.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "340px", margin: "0 auto" }}>
                    <a
                      href={contactInfo.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-submit-btn-wa"
                    >
                      💬 Reopen WhatsApp Chat
                    </a>
                    <button
                      type="button"
                      className="btn btn-ghost"
                      onClick={() => setSent(false)}
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-actual-form">
                  {/* Learning Format Selector */}
                  <div className="learning-format-selector">
                    <label className="format-segment-label">Select Learning Format</label>
                    <div className="format-pills-row">
                      <button
                        type="button"
                        className={`format-pill-btn ${formData.format === "1-to-1 Home Tuition" ? "active" : ""}`}
                        onClick={() => handleFormatSelect("1-to-1 Home Tuition")}
                      >
                        🏠 Home Tuition (1-to-1)
                      </button>
                      <button
                        type="button"
                        className={`format-pill-btn ${formData.format === "Small Group Tuition" ? "active" : ""}`}
                        onClick={() => handleFormatSelect("Small Group Tuition")}
                      >
                        👥 Small Group (6–8)
                      </button>
                      <button
                        type="button"
                        className={`format-pill-btn ${formData.format === "Online Tuition" ? "active" : ""}`}
                        onClick={() => handleFormatSelect("Online Tuition")}
                      >
                        💻 Online 1-to-1
                      </button>
                    </div>
                  </div>

                  {/* Student / Parent Name */}
                  <div className="form-group">
                    <div className="form-label-with-icon">
                      <label className="form-label">
                        Student / Parent Name <span className="req">*</span>
                      </label>
                      <span className="field-helper-hint">Parent or student name</span>
                    </div>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Anand Kulkarni"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-input-field"
                    />
                  </div>

                  {/* Phone / WhatsApp and Class */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <div className="form-label-with-icon">
                        <label className="form-label">
                          WhatsApp Number <span className="req">*</span>
                        </label>
                        <span className="field-helper-hint">For quick response</span>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="contact-input-field"
                      />
                    </div>

                    <div className="form-group">
                      <div className="form-label-with-icon">
                        <label className="form-label">
                          Student Class <span className="req">*</span>
                        </label>
                        <span className="field-helper-hint">Target standard</span>
                      </div>
                      <select
                        name="studentClass"
                        value={formData.studentClass}
                        onChange={handleChange}
                        className="contact-input-field"
                      >
                        <option value="Class 8">Class 8 (CBSE / ICSE)</option>
                        <option value="Class 9">Class 9 (CBSE / ICSE)</option>
                        <option value="Class 10">Class 10 (Board Exam)</option>
                        <option value="Class 11">Class 11 (Science PCM/PCB)</option>
                        <option value="Class 12">Class 12 (Board Prep)</option>
                        <option value="JEE Main & Advanced">JEE Main &amp; Advanced</option>
                        <option value="NEET Medical">NEET Medical Prep</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject Quick Selector */}
                  <div className="subjects-quick-group">
                    <div className="form-label-with-icon">
                      <label className="form-label">Select Target Subject(s)</label>
                      <span className="field-helper-hint">Click to choose</span>
                    </div>
                    <div className="subj-chips-row">
                      {quickSubjects.map((subj) => (
                        <button
                          key={subj}
                          type="button"
                          className={`subj-chip-btn ${formData.subject === subj ? "active" : ""}`}
                          onClick={() => handleSubjectSelect(subj)}
                        >
                          {subj}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Locality in Pune */}
                  <div className="form-group">
                    <div className="form-label-with-icon">
                      <label className="form-label">Locality / Area in Pune</label>
                      <span className="field-helper-hint">For home visit scheduling</span>
                    </div>
                    <input
                      type="text"
                      name="area"
                      placeholder="e.g. Magarpatta City, Baner, Wakad, Kalyani Nagar..."
                      value={formData.area}
                      onChange={handleChange}
                      className="contact-input-field"
                    />
                  </div>

                  {/* Message / Academic Focus */}
                  <div className="form-group">
                    <div className="form-label-with-icon">
                      <label className="form-label">Learning Need / Academic Focus</label>
                      <span className="field-helper-hint">Optional</span>
                    </div>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="e.g. Student finds Physics numericals challenging, looking for 3 sessions/week at home..."
                      value={formData.message}
                      onChange={handleChange}
                      className="contact-input-field"
                    ></textarea>
                  </div>

                  {/* Submit Action */}
                  <div style={{ marginTop: "24px" }}>
                    <button type="submit" className="contact-submit-btn-wa">
                      🚀 Book Free Demo via WhatsApp
                    </button>
                  </div>

                  <div className="contact-privacy-guarantee">
                    <span>🔒</span> 100% Privacy. No spam or third-party sharing. Direct conversation with Sudhaanshu Sir.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pune Coverage Radar Directory */}
      <section className="pune-coverage-section" id="pune-coverage">
        <div className="page-container">
          <div className="text-center" style={{ maxWidth: "700px", margin: "0 auto" }}>
            <span className="badge badge-navy">Pune Operational Footprint</span>
            <h2 className="section-title">
              Doorstep Home Tuition Across <span className="gold-shimmer-text">Key Pune Localities</span>
            </h2>
            <p className="section-subtitle">
              We travel directly to your residence in all major residential societies across East, West, and Central Pune.
            </p>
          </div>

          <div className="pune-zones-grid">
            {/* East Pune */}
            <div className="pune-zone-box">
              <div className="pune-zone-header">
                <div className="zone-marker-dot"></div>
                <h4>East Pune Hub</h4>
              </div>
              <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "14px" }}>
                Primary doorstep coverage for residential societies:
              </p>
              <div className="zone-loc-tags">
                <span className="zone-loc-tag">Hadapsar</span>
                <span className="zone-loc-tag">Magarpatta City</span>
                <span className="zone-loc-tag">Amanora Park Town</span>
                <span className="zone-loc-tag">Kharadi</span>
                <span className="zone-loc-tag">Viman Nagar</span>
                <span className="zone-loc-tag">Kalyani Nagar</span>
                <span className="zone-loc-tag">Koregaon Park</span>
                <span className="zone-loc-tag">Fatima Nagar</span>
                <span className="zone-loc-tag">Wanowrie</span>
              </div>
            </div>

            {/* West Pune */}
            <div className="pune-zone-box">
              <div className="pune-zone-header">
                <div className="zone-marker-dot"></div>
                <h4>West Pune Hub</h4>
              </div>
              <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "14px" }}>
                High-density student coverage across IT corridors:
              </p>
              <div className="zone-loc-tags">
                <span className="zone-loc-tag">Baner</span>
                <span className="zone-loc-tag">Balewadi</span>
                <span className="zone-loc-tag">Aundh</span>
                <span className="zone-loc-tag">Wakad</span>
                <span className="zone-loc-tag">Hinjewadi (Ph 1-3)</span>
                <span className="zone-loc-tag">Pashan</span>
                <span className="zone-loc-tag">Bavdhan</span>
                <span className="zone-loc-tag">Pimple Saudagar</span>
              </div>
            </div>

            {/* Central Pune */}
            <div className="pune-zone-box">
              <div className="pune-zone-header">
                <div className="zone-marker-dot"></div>
                <h4>Central Pune Hub</h4>
              </div>
              <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "14px" }}>
                Established educational districts:
              </p>
              <div className="zone-loc-tags">
                <span className="zone-loc-tag">Kothrud</span>
                <span className="zone-loc-tag">Deccan Gymkhana</span>
                <span className="zone-loc-tag">Model Colony</span>
                <span className="zone-loc-tag">Shivajinagar</span>
                <span className="zone-loc-tag">Camp / Pune Cantt</span>
                <span className="zone-loc-tag">Erandwane</span>
                <span className="zone-loc-tag">Senapati Bapat Road</span>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <p style={{ fontSize: "0.88rem", color: "#64748b", margin: 0 }}>
              Living outside these areas? We also conduct high-interaction <strong>Live Online 1-to-1 Classes</strong> with digital whiteboard screen sharing and recorded sessions.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Parent Booking FAQs */}
      <section className="contact-faqs-section">
        <div className="page-container-narrow">
          <div className="text-center" style={{ marginBottom: "28px" }}>
            <span className="badge badge-gold">Common Inquiries</span>
            <h2 className="section-title">
              Frequently Asked <span className="gold-shimmer-text">Questions</span>
            </h2>
            <p className="section-subtitle">
              Clear answers to help you book the right tuition format for your child.
            </p>
          </div>

          <div className="contact-faq-wrapper">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`contact-faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="contact-faq-trigger"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-chevron">{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && (
                    <div className="contact-faq-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
