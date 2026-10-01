import { Link } from "react-router-dom";
import { contactInfo } from "../data/siteData";

function JeeNeetPage() {
  const tracks = [
    {
      title: "JEE Main & Advanced Preparation",
      badge: "Engineering Focus",
      desc: "Concept-first problem solving in Physics, Physical/Organic Chemistry and Mathematics. We demystify tough multi-variable numericals without mechanical rote learning.",
      features: [
        "In-depth derivation and conceptual logic behind every formula",
        "Step-by-step problem deconstruction for JEE Advanced questions",
        "Regular time-bound sectional mock tests with negative marking review",
        "Synchronized with CBSE / HSC Board exam preparations to prevent student stress",
      ],
      subjects: "Physics • Chemistry • Mathematics",
    },
    {
      title: "NEET-UG Medical Entrance Guidance",
      badge: "Medical Focus",
      desc: "Mastering Physics numericals and Chemistry mechanisms for medical aspirants who want top scores without the exhaustion of 15-hour factory schedules.",
      features: [
        "Special simplified formulas and shortcut tips for Physics numericals",
        "NCERT line-by-line Chemistry & Biology conceptual clarity",
        "High-yield question banks and error logs to eliminate recurring mistakes",
        "1-on-1 doubt solving sessions after every test",
      ],
      subjects: "Physics • Chemistry • Biology",
    },
    {
      title: "JEE / NEET Foundation (Classes 8–10)",
      badge: "Early Advantage",
      desc: "Nurturing analytical curiosity and mathematical aptitude early so the student faces zero shock in Class 11.",
      features: [
        "Algebra, Geometry and Mechanics foundations",
        "Scientific inquiry and Olympiad-level thinking",
        "Stress-free self-study routines established at home",
      ],
      subjects: "Mathematics & Science",
    },
  ];

  return (
    <div className="page-shell jee-neet-page">
      <section className="page-header-banner">
        <div className="page-container">
          <span className="badge badge-gold">Competitive Excellence</span>
          <h1 className="banner-title">
            JEE &amp; NEET <span className="gold-shimmer-text">Personalised Tuition in Pune</span>
          </h1>
          <p className="banner-desc">
            Competitive exam preparation tailored to your child's pace. Focused teaching in Physics, Chemistry &amp; Maths by Sudhaanshu Srivastavaa (12+ Years Exp), harmonized with board exam success.
          </p>

          <div className="banner-actions">
            <Link to="/enquire" className="btn btn-primary btn-lg">
              Book a Free Demo Class →
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

      <section className="tuition-section">
        <div className="page-container">
          <div className="section-head text-center">
            <span className="badge badge-navy">Our Competitive Philosophy</span>
            <h2 className="section-title">Why Factory Coaching Fails Average Students in JEE/NEET</h2>
            <p className="section-subtitle">
              In 200-student batches, teachers lecture fast and rush the syllabus. A student with even 2 small doubts falls behind within weeks. Our personalised tuition ensures every doubt is solved the same day.
            </p>
          </div>

          <div className="jee-tracks-grid">
            {tracks.map((track, i) => (
              <div key={i} className="jee-track-card">
                <span className="badge badge-gold mb-2">{track.badge}</span>
                <h3>{track.title}</h3>
                <p className="track-desc">{track.desc}</p>
                <div className="track-subjects">
                  <strong>Subjects:</strong> {track.subjects}
                </div>

                <div className="track-points-list">
                  <h4>What's covered:</h4>
                  <ul>
                    {track.features.map((f, fIdx) => (
                      <li key={fIdx}>
                        <span className="check-bullet">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="track-footer">
                  <Link to="/enquire" className="btn btn-primary btn-block">
                    Enquire for {track.title} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bottom-cta-banner">
        <div className="page-container text-center">
          <h2>Ready to prepare for JEE / NEET with zero anxiety?</h2>
          <p>Schedule an introductory interaction with Sudhaanshu Sir in Pune.</p>
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

export default JeeNeetPage;
