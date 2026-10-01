import { Link } from "react-router-dom";
import { contactInfo, founderEducator, whyEdversseEdge } from "../data/siteData";

function AboutPage() {
  return (
    <div className="page-shell about-page">
      <section className="page-header-banner">
        <div className="page-container">
          <span className="badge badge-gold">Founder &amp; Educator</span>
          <h1 className="banner-title">
            About <span className="gold-shimmer-text">EdversseEDGE &amp; Educator</span>
          </h1>
          <p className="banner-desc">
            Personalised academic guidance built on 12+ years of conceptual teaching in Physics, Chemistry &amp; Mathematics across Pune.
          </p>
        </div>
      </section>

      {/* Main Founder Profile Section */}
      <section className="tuition-section">
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

                <div className="founder-mission-card">
                  <h4 className="mission-card-title">💡 Why We Choose 1-to-1 &amp; Small Group Tutoring:</h4>
                  <p>
                    Over the past decade, educational coaching increasingly shifted towards large commercial factories where students sit in auditorium halls of 100+ peers. When a student struggles with basic rotational mechanics, calculus, or organic reactions, they often hesitate to ask questions.
                  </p>
                  <p className="mt-2">
                    <strong>EdversseEDGE</strong> was established to bring education back to what truly works: <strong>one-to-one home tutoring and small interactive groups</strong>. Here, teaching pace is adjusted to the child, doubts are welcomed and solved on the spot, and parents are kept fully informed.
                  </p>
                </div>

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
                  <Link to="/enquire" className="btn btn-primary btn-lg">
                    Book an Introductory Session →
                  </Link>
                  <a
                    href={`tel:${contactInfo.phoneRaw}`}
                    className="btn btn-ghost"
                  >
                    📞 Call {contactInfo.phoneFormatted}
                  </a>
                  <a
                    href={contactInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp-subtle"
                  >
                    💬 WhatsApp Direct
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 6 Core Values */}
      <section className="tuition-section bg-subtle">
        <div className="page-container">
          <div className="section-head text-center">
            <span className="badge badge-gold">Teaching Philosophy</span>
            <h2 className="section-title">The 6 Pillars of EdversseEDGE</h2>
            <p className="section-subtitle">
              Every home and group tuition session is guided by these principles:
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

      {/* Bottom CTA */}
      <section className="bottom-cta-banner">
        <div className="page-container text-center">
          <h2>Ready to meet your child's personal tutor?</h2>
          <p>Book a free, no-obligation demo or introductory interaction in Pune.</p>
          <div className="mt-4 flex-center gap-3">
            <Link to="/enquire" className="btn btn-primary btn-lg">
              Book a Free Demo Class
            </Link>
            <a href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
