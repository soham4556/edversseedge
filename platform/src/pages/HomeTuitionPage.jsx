import { useState } from "react";
import { Link } from "react-router-dom";
import { contactInfo, puneAreas, faqs } from "../data/siteData";

function HomeTuitionPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const homeTuitionFaqs = [
    {
      q: "How does 1-to-1 Home Tuition work?",
      a: "Our experienced educator visits your residence in Pune at scheduled hours. A customized study roadmap is created based on your child's syllabus, school pace, and learning gaps."
    },
    {
      q: "What areas in Pune do you cover for home tuition?",
      a: "We actively cater to Hadapsar, Magarpatta, Kharadi, Viman Nagar, Kalyani Nagar, Koregaon Park, Wanowrie, Baner, Aundh, Wakad, Pimple Saudagar, and Hinjawadi."
    },
    {
      q: "How are tests and progress reported to parents?",
      a: "Regular chapter-wise tests are administered, followed by transparent progress discussions with parents after each module."
    },
    {
      q: "Can we schedule a free demo session first?",
      a: "Yes! We encourage an introductory session/demo so you and your child can experience our concept-first teaching approach before confirming classes."
    }
  ];

  return (
    <div className="page-shell home-tuition-subpage">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="page-container">
          <span className="badge badge-gold">Pune Doorstep Tutoring</span>
          <h1 className="banner-title">
            1-to-1 Personalised <span className="gold-shimmer-text">Home Tuition in Pune</span>
          </h1>
          <p className="banner-desc">
            Dedicated one-on-one attention right in the comfort and safety of your home. Customized study plans for Classes 8–12 (CBSE & State Board), Physics, Chemistry, Maths & Biology.
          </p>

          <div className="banner-actions">
            <Link to="/enquire" className="btn btn-primary btn-lg">
              Book a Free Home Demo →
            </Link>
            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose 1-to-1 Home Tuition */}
      <section className="tuition-section">
        <div className="page-container">
          <div className="section-head text-center">
            <span className="badge badge-navy">Student-Centric Benefits</span>
            <h2 className="section-title">Why 1-to-1 Home Tuition Works Best</h2>
            <p className="section-subtitle">
              Unlike crowded coaching institutes where teachers speak to 100 students at once, 1-to-1 home tuition adapts completely to your child's learning pace.
            </p>
          </div>

          <div className="features-three-col-grid">
            <div className="feature-block-card">
              <div className="feature-icon-circle">🎯</div>
              <h3>100% Undivided Attention</h3>
              <p>Every minute of the session is dedicated to your child's specific doubts, eliminating confusion and building rock-solid concepts.</p>
            </div>

            <div className="feature-block-card">
              <div className="feature-icon-circle">⏰</div>
              <h3>Flexible Timings & Zero Travel</h3>
              <p>Save 2–3 hours of daily Pune traffic and fatigue. The student studies in their comfortable home environment with peak mental energy.</p>
            </div>

            <div className="feature-block-card">
              <div className="feature-icon-circle">📈</div>
              <h3>Continuous Parent Updates</h3>
              <p>Direct face-to-face interaction with the tutor after classes. You always know where your child stands and what needs improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served Across Pune */}
      <section className="tuition-section bg-subtle">
        <div className="page-container">
          <div className="section-head text-center">
            <span className="badge badge-gold">Coverage Map</span>
            <h2 className="section-title">Pune Neighbourhoods We Visit</h2>
            <p className="section-subtitle">
              Home tuition slots are scheduled across key residential societies and localities:
            </p>
          </div>

          <div className="areas-grid-cards">
            {puneAreas.map((area) => (
              <div key={area.name} className="area-box-card">
                <span className="pin">📍</span>
                <div>
                  <strong>{area.name}</strong>
                  <span className="sub">{area.zone}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/enquire" className="btn btn-primary">
              Check Tutor Slot Availability in My Area →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ for Home Tuition */}
      <section className="tuition-section">
        <div className="page-container-narrow">
          <div className="section-head text-center">
            <h2 className="section-title">Home Tuition FAQs</h2>
          </div>

          <div className="tuition-faq-accordion">
            {homeTuitionFaqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`faq-card-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.q}</span>
                    <span className="faq-icon-indicator">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-pane">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bottom-cta-banner">
        <div className="page-container text-center">
          <h2>Ready to give your child personal academic advantage?</h2>
          <p>Book a no-obligation introductory interaction with Sudhaanshu Sir today.</p>
          <div className="mt-4 flex-center gap-3">
            <Link to="/enquire" className="btn btn-primary btn-lg">
              Book a Free Demo Class
            </Link>
            <a href={`tel:${contactInfo.phoneRaw}`} className="btn btn-ghost btn-lg">
              📞 Call {contactInfo.phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeTuitionPage;
