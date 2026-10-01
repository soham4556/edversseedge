import { useState, useId } from "react";
import { Link } from "react-router-dom";
import {
  contactInfo,
  trustHighlights,
  learningOptions,
  classesAndSubjects,
  whyEdversseEdge,
  founderEducator,
  howItWorksSteps,
  puneAreas,
  testimonials,
  faqs,
} from "../data/siteData";

function HomePage() {
  const [activeFormat, setActiveFormat] = useState("home-tuition");
  const [activeClassTab, setActiveClassTab] = useState("classes-11-12");
  const [openFaq, setOpenFaq] = useState(0);
  const [areaSearch, setAreaSearch] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  // Enquiry Form State
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    studentClass: "Class 11",
    format: "1-to-1 Home Tuition",
    subject: "Physics & Chemistry",
    area: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [zoneFilter, setZoneFilter] = useState("All");

  // Filtered Pune areas with Zone filter & text search
  const filteredAreas = puneAreas.filter((a) => {
    const matchesSearch =
      a.name.toLowerCase().includes(areaSearch.toLowerCase()) ||
      a.zone.toLowerCase().includes(areaSearch.toLowerCase());
    const matchesZone = zoneFilter === "All" || a.zone.includes(zoneFilter);
    return matchesSearch && matchesZone;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAreaSelect = (areaName) => {
    setSelectedArea(areaName);
    setFormData((prev) => ({ ...prev, area: areaName }));
    const formEl = document.getElementById("enquiry-form-section");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) {
      alert("Please provide Parent/Student Name and Phone Number.");
      return;
    }

    // Construct WhatsApp message
    const waText = encodeURIComponent(
      `*New Tuition Enquiry — EdversseEDGE*\n` +
      `👤 *Name:* ${formData.parentName}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `🎓 *Class:* ${formData.studentClass}\n` +
      `📚 *Subjects:* ${formData.subject}\n` +
      `🏠 *Learning Format:* ${formData.format}\n` +
      `📍 *Pune Area:* ${formData.area || "Not specified"}\n` +
      (formData.message ? `💬 *Note:* ${formData.message}` : "")
    );

    // Open WhatsApp
    window.open(`https://wa.me/919766715666?text=${waText}`, "_blank");
    setFormSubmitted(true);
  };

  const activeOptionData = learningOptions.find((o) => o.id === activeFormat) || learningOptions[0];
  const activeClassData = classesAndSubjects.find((c) => c.id === activeClassTab) || classesAndSubjects[1];

  return (
    <div className="home-tuition-page">
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="tuition-hero-section">
        <div className="hero-glow-blob hero-glow-1"></div>
        <div className="hero-glow-blob hero-glow-2"></div>

        <div className="page-container tuition-hero-grid">
          <div className="tuition-hero-content">
            <div className="hero-top-badges">
              <div className="hero-pill-badge">
                <span className="pulse-dot"></span>
                <span>Personalised Home & Group Tuition in Pune</span>
              </div>
              <div className="hero-rating-ribbon">
                <span className="stars">★★★★★</span>
                <span className="rating-score">4.9/5</span>
                <span className="rating-sub">Trusted by 250+ Pune Parents</span>
              </div>
            </div>

            <h1 className="tuition-hero-title">
              Home & Group Tuition that helps students{" "}
              <span className="gold-shimmer-text">learn better.</span>
            </h1>

            <p className="tuition-hero-lead">
              Personalised academic support for Classes 8–12, CBSE and competitive exam preparation—with focused teaching, regular assessments and meaningful parent communication.
            </p>

            {/* Quick Highlights Checkmarks */}
            <div className="tuition-hero-checks">
              <div className="hero-check-item">
                <span className="check-icon">✓</span>
                <span className="check-text"><strong>Home Tuition</strong> (Doorstep)</span>
              </div>
              <div className="hero-check-item">
                <span className="check-icon">✓</span>
                <span className="check-text"><strong>Small Groups</strong> (Micro-Batches)</span>
              </div>
              <div className="hero-check-item">
                <span className="check-icon">✓</span>
                <span className="check-text"><strong>Online Options</strong> (Live Interactive)</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="tuition-hero-actions">
              <a href="#enquiry-form-section" className="btn btn-primary btn-lg pulse-hover">
                <span>BOOK A FREE DEMO</span>
                <span className="btn-arrow">→</span>
              </a>
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <span>💬 WHATSAPP US</span>
              </a>
            </div>

            {/* Founder mini endorsement in Hero */}
            <div className="hero-mentor-strip">
              <div className="mentor-avatar-badge">SS</div>
              <div className="mentor-strip-text">
                <strong>Mentored by Sudhaanshu Srivastavaa</strong>
                <span>Founder & Educator • M.Tech • 12+ Years Teaching in Pune</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual: Interactive Tuition Preference Card */}
          <div className="tuition-hero-visual">
            <div className="hero-interactive-card">
              <div className="hero-card-header">
                <span className="card-badge">Bespoke Academic Care</span>
                <span className="card-status">● Enrolments Open</span>
              </div>

              <h3 className="hero-card-title">Choose Your Learning Preference</h3>
              <p className="hero-card-desc">Select how your child learns most effectively:</p>

              {/* Format Selection Tabs */}
              <div className="hero-format-switch">
                {learningOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`format-switch-btn ${activeFormat === opt.id ? "active" : ""}`}
                    onClick={() => setActiveFormat(opt.id)}
                  >
                    <span className="btn-opt-icon">{opt.icon}</span>
                    <span className="btn-opt-title">{opt.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Format Showcase Preview */}
              <div className="hero-format-preview">
                <div className="preview-badge-row">
                  <span className="preview-badge">{activeOptionData.badge}</span>
                  <span className="preview-location">📍 Available across Pune</span>
                </div>
                <h4 className="preview-heading">{activeOptionData.title}</h4>
                <p className="preview-text">{activeOptionData.summary}</p>
                <ul className="preview-points">
                  {activeOptionData.features.slice(0, 3).map((f, i) => (
                    <li key={i}>
                      <span className="point-bullet">✦</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="preview-card-cta">
                  <a href="#enquiry-form-section" className="btn btn-outline-gold btn-block">
                    Check Availability in My Area →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Highlights Bar */}
        <div className="tuition-trust-bar">
          <div className="page-container tuition-trust-grid">
            {trustHighlights.map((item, idx) => (
              <div key={idx} className="trust-item">
                <span className="trust-icon">{item.icon}</span>
                <div className="trust-meta">
                  <strong className="trust-label">{item.label}</strong>
                  <span className="trust-sub">{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PROGRAMS / LEARNING OPTIONS (Detailed 3-Column Display)
          ========================================================================= */}
      <section className="tuition-section section-learning-options" id="programs">
        <div className="page-container">
          <div className="section-head text-center">
            <span className="badge badge-gold">Structured For Individual Success</span>
            <h2 className="section-title">
              Our Core <span className="text-gradient">Tuition Programmes</span>
            </h2>
            <p className="section-subtitle">
              Every student learns at a different velocity. Whether you need an expert tutor visiting your home or a focused micro-batch, we provide structured, disciplined guidance.
            </p>
          </div>

          <div className="learning-options-grid">
            {learningOptions.map((opt) => (
              <div key={opt.id} className={`tuition-program-card ${opt.id === "home-tuition" ? "featured-program" : ""}`}>
                {opt.id === "home-tuition" && (
                  <div className="top-recommendation-tag">⭐ Highly Requested in Pune</div>
                )}
                <div className="program-card-header">
                  <div className="program-icon-box">{opt.icon}</div>
                  <span className="program-badge">{opt.badge}</span>
                </div>

                <h3 className="program-title">{opt.title}</h3>
                <p className="program-tagline">{opt.tagline}</p>
                <p className="program-summary">{opt.summary}</p>

                <div className="program-divider"></div>

                <div className="program-features-list">
                  <h4 className="features-head">What's Included:</h4>
                  <ul>
                    {opt.features.map((feat, i) => (
                      <li key={i}>
                        <span className="feat-check">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="program-card-footer">
                  <p className="recommended-for-text">
                    <strong>Best for:</strong> {opt.recommendedFor}
                  </p>
                  <a
                    href="#enquiry-form-section"
                    onClick={() => setFormData((prev) => ({ ...prev, format: opt.title }))}
                    className={`btn ${opt.id === "home-tuition" ? "btn-primary" : "btn-secondary"} btn-block`}
                  >
                    Enquire for {opt.title} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CLASSES & SUBJECTS (Classes 8-10, Classes 11-12, JEE / NEET)
          ========================================================================= */}
      <section className="tuition-section section-classes-subjects" id="classes">
        <div className="page-container">
          <div className="section-head text-center">
            <span className="badge badge-navy">Academic Focus</span>
            <h2 className="section-title">
              Classes &amp; <span className="text-gradient">Subjects Taught</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive subject coverage from high-school conceptual foundation to competitive engineering & medical entrance exams.
            </p>
          </div>

          {/* Classes Navigation Tabs */}
          <div className="classes-tabs-wrap">
            {classesAndSubjects.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`class-tab-btn ${activeClassTab === item.id ? "active" : ""}`}
                onClick={() => setActiveClassTab(item.id)}
              >
                <span className="tab-badge">{item.badge}</span>
                <span className="tab-title">{item.title}</span>
              </button>
            ))}
          </div>

          {/* Active Class Details Card */}
          <div className="class-detail-card">
            <div className="class-detail-grid">
              <div className="class-detail-left">
                <span className="class-board-tag">{activeClassData.boards}</span>
                <h3 className="class-card-heading">{activeClassData.title}</h3>
                <h4 className="class-card-subheading">{activeClassData.subtitle}</h4>
                <p className="class-card-desc">{activeClassData.desc}</p>

                <div className="class-quick-meta">
                  <div className="meta-box">
                    <span className="meta-label">Curriculum Scope</span>
                    <strong className="meta-val">{activeClassData.boards}</strong>
                  </div>
                  <div className="meta-box">
                    <span className="meta-label">Programme Duration</span>
                    <strong className="meta-val">{activeClassData.duration}</strong>
                  </div>
                </div>

                <div className="class-action-group">
                  <a
                    href="#enquiry-form-section"
                    onClick={() => setFormData((prev) => ({ ...prev, studentClass: activeClassData.title }))}
                    className="btn btn-primary"
                  >
                    Book Demo for {activeClassData.title}
                  </a>
                  <a
                    href={contactInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp-subtle"
                  >
                    💬 Ask on WhatsApp
                  </a>
                </div>
              </div>

              <div className="class-detail-right">
                <h4 className="subjects-list-title">Subject Modules &amp; Coverage:</h4>
                <div className="subjects-grid">
                  {activeClassData.subjects.map((sub, i) => (
                    <div key={i} className="subject-box">
                      <div className="sub-num">0{i + 1}</div>
                      <div className="sub-content">
                        <strong className="sub-name">{sub.name}</strong>
                        <p className="sub-desc">{sub.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY EDVERSSEEDGE (6 Core Pillars)
          ========================================================================= */}
      <section className="tuition-section section-why-us">
        <div className="page-container">
          <div className="section-head text-center">
            <span className="badge badge-gold">Why Choose Us</span>
            <h2 className="section-title">
              Why Parents &amp; Students <span className="text-gradient">Trust EdversseEDGE</span>
            </h2>
            <p className="section-subtitle">
              Unlike commercial coaching factories where students get lost in crowded halls, we provide disciplined, caring, and result-oriented academic support.
            </p>
          </div>

          <div className="why-us-grid">
            {whyEdversseEdge.map((pillar, i) => (
              <div key={i} className="why-card">
                <div className="why-icon-bubble">{pillar.icon}</div>
                <h3 className="why-card-title">{pillar.title}</h3>
                <p className="why-card-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. FOUNDER & EDUCATOR SPOTLIGHT (Sudhaanshu Srivastavaa)
          ========================================================================= */}
      <section className="tuition-section section-founder" id="about-educator">
        <div className="page-container">
          <div className="founder-spotlight-card luxury-founder-card">
            <div className="founder-grid">
              {/* Left Column: Prestigious Educator Profile Card */}
              <div className="founder-visual-col">
                <div className="educator-prestige-card">
                  <div className="educator-avatar-wrapper">
                    <div className="educator-avatar-glow"></div>
                    <div className="educator-avatar-inner">
                      <span className="educator-icon-crest">🎓</span>
                      <span className="educator-monogram">SS</span>
                    </div>
                    <div className="educator-exp-badge">
                      <span className="exp-star">⭐</span>
                      <span className="exp-number">12+ Years</span>
                      <span className="exp-label">Teaching in Pune</span>
                    </div>
                  </div>

                  <h3 className="educator-card-name">Sudhaanshu Srivastavaa</h3>
                  <p className="educator-card-qual">M.Tech (Computer Engineering)<br />Bharati Vidyapeeth, Pune</p>

                  <div className="educator-verified-pill">
                    <span className="verified-check">✓</span>
                    <span>Verified Senior Educator</span>
                  </div>

                  <div className="founder-teaching-areas">
                    <span className="areas-header">Core Teaching Areas:</span>
                    <div className="areas-tags">
                      {founderEducator.teachingAreas.map((area, idx) => (
                        <span key={idx} className="area-tag">{area}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & Credentials */}
              <div className="founder-info-col">
                <div className="founder-badge-row">
                  <span className="badge badge-gold">Founder &amp; Educator</span>
                  <span className="badge badge-navy">M.Tech (Bharati Vidyapeeth, Pune)</span>
                  <span className="badge badge-emerald">Pune Home &amp; Group Tuition</span>
                </div>

                <h2 className="founder-name">{founderEducator.name}</h2>
                <h3 className="founder-role">{founderEducator.title}</h3>

                <p className="founder-bio-text">
                  {founderEducator.bio}
                </p>

                <blockquote className="founder-quote luxury-quote">
                  <span className="quote-mark">“</span>
                  <p>{founderEducator.quote}</p>
                </blockquote>

                {/* 4 Glass Stat Cards */}
                <div className="founder-highlights-grid luxury-stats-grid">
                  <div className="founder-stat-card">
                    <span className="stat-icon">🎓</span>
                    <strong className="stat-val">12+ Years</strong>
                    <span className="stat-lbl">Teaching Experience</span>
                  </div>
                  <div className="founder-stat-card">
                    <span className="stat-icon">🔬</span>
                    <strong className="stat-val">Physics, Chem &amp; Math</strong>
                    <span className="stat-lbl">Conceptual Specialization</span>
                  </div>
                  <div className="founder-stat-card">
                    <span className="stat-icon">💡</span>
                    <strong className="stat-val">Concept-First Logic</strong>
                    <span className="stat-lbl">Zero Rote Learning</span>
                  </div>
                  <div className="founder-stat-card">
                    <span className="stat-icon">🎯</span>
                    <strong className="stat-val">Classes 8–12 &amp; JEE/NEET</strong>
                    <span className="stat-lbl">Targeted Mentorship</span>
                  </div>
                </div>

                <div className="founder-cta-row">
                  <a href="#enquiry-form-section" className="btn btn-primary btn-lg">
                    Book an Introductory Session →
                  </a>
                  <a
                    href={`tel:${contactInfo.phoneRaw}`}
                    className="btn btn-ghost"
                  >
                    📞 Speak Directly: {contactInfo.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. HOW IT WORKS (01 Enquire -> 02 Discuss -> 03 Demo -> 04 Start)
          ========================================================================= */}
      <section className="tuition-section section-how-it-works">
        <div className="page-container">
          <div className="section-head text-center">
            <span className="badge badge-gold">Transparent Onboarding</span>
            <h2 className="section-title">
              How It Works: <span className="text-gradient">4 Simple Steps</span>
            </h2>
            <p className="section-subtitle">
              From your first enquiry to the first class, our onboarding is smooth, thoughtful, and tailored to your child's needs.
            </p>
          </div>

          <div className="how-it-works-grid">
            {howItWorksSteps.map((step) => (
              <div key={step.step} className="step-card">
                <div className="step-number-tag">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="how-it-works-cta text-center">
            <a href="#enquiry-form-section" className="btn btn-primary btn-lg">
              Begin Step 01: Enquire Now →
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. PUNE HOME TUITION LOCALITIES (Interactive Area Selector)
          ========================================================================= */}
      <section className="tuition-section section-pune-areas" id="pune-areas">
        <div className="page-container">
          <div className="section-head text-center">
            <span className="badge badge-navy">Pune Doorstep Tutoring</span>
            <h2 className="section-title">
              Home Tuition <span className="text-gradient">Available Across Pune</span>
            </h2>
            <p className="section-subtitle">
              Home tuition availability can be offered across selected Pune areas depending on tutor availability and schedule. Click your area to check availability:
            </p>
          </div>

          <div className="pune-areas-card">
            {/* Search Input for Areas */}
            <div className="area-search-bar">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search your Pune locality (e.g. Magarpatta, Baner, Kharadi, Wakad)..."
                value={areaSearch}
                onChange={(e) => setAreaSearch(e.target.value)}
                className="area-search-input"
              />
              {areaSearch && (
                <button
                  type="button"
                  className="area-search-clear"
                  onClick={() => setAreaSearch("")}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Zone Filter Tabs */}
            <div className="zone-filter-tabs">
              {["All", "East Pune", "West Pune", "Central Pune"].map((zone) => (
                <button
                  key={zone}
                  type="button"
                  className={`zone-pill-btn ${zoneFilter === zone ? "active" : ""}`}
                  onClick={() => setZoneFilter(zone)}
                >
                  {zone === "All" ? "📍 All Pune Localities" : zone}
                </button>
              ))}
            </div>

            {/* Areas Chips Cloud */}
            <div className="areas-chips-container">
              {filteredAreas.length > 0 ? (
                filteredAreas.map((area) => (
                  <button
                    key={area.name}
                    type="button"
                    className={`area-chip-btn ${selectedArea === area.name ? "selected" : ""}`}
                    onClick={() => handleAreaSelect(area.name)}
                    title={`Check home tuition availability in ${area.name}`}
                  >
                    <span className="chip-pin">📍</span>
                    <span className="chip-name">{area.name}</span>
                    <span className="chip-zone">{area.zone}</span>
                  </button>
                ))
              ) : (
                <p className="no-areas-found">
                  Area not listed? Don't worry! We also offer <strong>Live Online Tuition</strong> or custom slots.{" "}
                  <a href="#enquiry-form-section" className="gold-link">
                    Enquire directly here →
                  </a>
                </p>
              )}
            </div>

            <div className="area-card-bottom-info">
              <span className="info-icon">💡</span>
              <p>
                <strong>Live in another society or area?</strong> Please let us know your exact society/locality in the enquiry form, and we will confirm slot availability within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. TESTIMONIALS (Parent & Student Feedback)
          ========================================================================= */}
      <section className="tuition-section section-testimonials">
        <div className="page-container">
          <div className="section-head text-center">
            <span className="badge badge-gold">Parent &amp; Student Experiences</span>
            <h2 className="section-title">
              What Families Say About <span className="text-gradient">EdversseEDGE</span>
            </h2>
            <p className="section-subtitle">
              Authentic feedback from parents who chose personal attention over crowded classrooms.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">“{t.quote}”</p>
                <div className="testimonial-author-block">
                  <div className="author-avatar">{t.author.charAt(0)}</div>
                  <div className="author-meta">
                    <strong className="author-name">{t.author}</strong>
                    <span className="author-loc">📍 {t.location}</span>
                    <span className="author-subject">Subject: {t.subject}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-note-box text-center">
            <span className="note-lock">🔒</span>
            <span>All references and testimonials reflect verified student learning experiences.</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. FAQ (5 Key Questions)
          ========================================================================= */}
      <section className="tuition-section section-faqs" id="faqs">
        <div className="page-container-narrow">
          <div className="section-head text-center">
            <span className="badge badge-navy">Clear Answers</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Have questions about how our home tuition and small-group classes work? Here are clear, upfront answers.
            </p>
          </div>

          <div className="tuition-faq-accordion">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-card-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.question}</span>
                    <span className="faq-icon-indicator">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-pane">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="faq-more-help text-center">
            <p>Have a different question about your child's specific syllabus or board?</p>
            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-subtle"
            >
              💬 Ask Us on WhatsApp (+91 97667 15666)
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. LEAD GENERATION / CONTACT FORM SECTION
          ========================================================================= */}
      <section className="tuition-section section-enquiry" id="enquiry-form-section">
        <div className="page-container">
          <div className="enquiry-box-grid">
            {/* Left Info Column */}
            <div className="enquiry-info-pane">
              <span className="badge badge-gold">Let's Connect</span>
              <h2 className="enquiry-pane-title">
                Looking for the right tutor for your child?
              </h2>
              <p className="enquiry-pane-desc">
                Tell us your child's class, subjects and location. We'll help you identify the suitable learning option and schedule a free demo session.
              </p>

              <div className="enquiry-quick-contacts">
                <div className="contact-tile">
                  <span className="tile-icon">📞</span>
                  <div>
                    <span className="tile-label">Call or WhatsApp Directly:</span>
                    <a href={`tel:${contactInfo.phoneRaw}`} className="tile-val">
                      {contactInfo.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="contact-tile">
                  <span className="tile-icon">💬</span>
                  <div>
                    <span className="tile-label">Quick WhatsApp Chat:</span>
                    <a
                      href={contactInfo.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tile-val wa-accent"
                    >
                      Click to Chat on WhatsApp →
                    </a>
                  </div>
                </div>

                <div className="contact-tile">
                  <span className="tile-icon">📍</span>
                  <div>
                    <span className="tile-label">Serving Across Pune:</span>
                    <span className="tile-val">Hadapsar, Magarpatta, Kharadi, Baner, Wakad, Viman Nagar & More</span>
                  </div>
                </div>
              </div>

              <div className="enquiry-badges-row">
                <span className="guarantee-pill">✓ No Long-Term Lock In</span>
                <span className="guarantee-pill">✓ Free Introductory Demo</span>
                <span className="guarantee-pill">✓ Transparent Communication</span>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="enquiry-form-pane">
              {formSubmitted ? (
                <div className="enquiry-success-message">
                  <div className="success-icon">🎉</div>
                  <h3>Thank you for reaching out!</h3>
                  <p>
                    We have received your enquiry for <strong>{formData.studentClass}</strong> ({formData.format}). Sudhaanshu Sir / our academic team will contact you shortly on <strong>{formData.phone}</strong>.
                  </p>
                  <a
                    href={contactInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    💬 Continue Conversation on WhatsApp
                  </a>
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm mt-3"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="tuition-enquiry-form">
                  <h3 className="form-header-title">Book a Free Demo / Check Availability</h3>

                  <div className="form-group">
                    <label htmlFor="parentName" className="form-label">
                      Parent / Student Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      required
                      placeholder="e.g. Ramesh Kulkarni / Advait"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone / WhatsApp Number <span className="req">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="studentClass" className="form-label">
                        Student's Class <span className="req">*</span>
                      </label>
                      <select
                        id="studentClass"
                        name="studentClass"
                        value={formData.studentClass}
                        onChange={handleInputChange}
                        className="form-control"
                      >
                        <option value="Class 8">Class 8</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10</option>
                        <option value="Class 11">Class 11</option>
                        <option value="Class 12">Class 12</option>
                        <option value="JEE Preparation">JEE Preparation</option>
                        <option value="NEET Preparation">NEET Preparation</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="format" className="form-label">
                        Preferred Learning Format
                      </label>
                      <select
                        id="format"
                        name="format"
                        value={formData.format}
                        onChange={handleInputChange}
                        className="form-control"
                      >
                        <option value="1-to-1 Home Tuition">1-to-1 Home Tuition</option>
                        <option value="Small Group Tuition">Small Group Tuition</option>
                        <option value="Online Tuition">Online Tuition</option>
                        <option value="Undecided / Open to suggestion">Undecided / Need advice</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        Subject(s) Needed
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="e.g. Physics, Maths, Chemistry, All"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="area" className="form-label">
                      Your Area / Society in Pune
                    </label>
                    <input
                      type="text"
                      id="area"
                      name="area"
                      placeholder="e.g. Magarpatta City, Kharadi, Baner, Wakad..."
                      value={formData.area}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Any specific requirement or challenge? (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="2"
                      placeholder="e.g. Need help with Class 11 Physics numericals, upcoming unit tests, etc."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-control"
                    ></textarea>
                  </div>

                  <div className="form-submit-actions">
                    <button type="submit" className="btn btn-primary btn-block btn-lg">
                      <span>BOOK A FREE DEMO</span>
                      <span className="btn-arrow">→</span>
                    </button>

                    <div className="form-direct-wa">
                      <span>Or prefer immediate chat?</span>
                      <a
                        href={contactInfo.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wa-inline-btn"
                      >
                        💬 WhatsApp Us Directly
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
