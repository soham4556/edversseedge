import { Link } from "react-router-dom";
import { contactInfo } from "../data/siteData";

function GroupTuitionPage() {
  const groupPerks = [
    {
      title: "Strictly Limited to 3–6 Students",
      desc: "No crowded coaching halls. Every student has a voice, asks doubts openly, and gets called on regularly.",
      icon: "👥",
    },
    {
      title: "Interactive & Competitive Spirit",
      desc: "Peer discussions spark innovative ways of problem-solving. Students motivate each other to excel in a healthy environment.",
      icon: "⚡",
    },
    {
      title: "Structured Assessments & Homework",
      desc: "Rigorous weekly homework checking and chapter-end tests to benchmark conceptual understanding against peers.",
      icon: "📝",
    },
    {
      title: "Cost-Effective Premium Tuition",
      desc: "Offers the high quality of dedicated personal mentoring at an accessible shared group fee.",
      icon: "💎",
    },
  ];

  return (
    <div className="page-shell group-tuition-subpage">
      <section className="page-header-banner">
        <div className="page-container">
          <span className="badge badge-gold">Micro-Batch Learning</span>
          <h1 className="banner-title">
            Small Group Tuition <span className="gold-shimmer-text">in Pune</span>
          </h1>
          <p className="banner-desc">
            Limited students per batch (3 to 6 learners), interactive teaching, doubt solving, regular assessments and structured practice for Classes 8–12, CBSE and competitive exams.
          </p>

          <div className="banner-actions">
            <Link to="/enquire" className="btn btn-primary btn-lg">
              Book a Free Batch Demo →
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
            <span className="badge badge-navy">The Micro-Batch Difference</span>
            <h2 className="section-title">Why Small Groups Outperform Large Coaching Classes</h2>
            <p className="section-subtitle">
              In an auditorium coaching class of 100+ students, a hesitant child never asks questions. In our small groups of 3 to 6, no student stays invisible.
            </p>
          </div>

          <div className="features-two-by-two-grid">
            {groupPerks.map((perk, i) => (
              <div key={i} className="perk-card">
                <span className="perk-icon">{perk.icon}</span>
                <div className="perk-text">
                  <h3>{perk.title}</h3>
                  <p>{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tuition-section bg-subtle">
        <div className="page-container">
          <div className="section-head text-center">
            <span className="badge badge-gold">Batch Schedules</span>
            <h2 className="section-title">Current Micro-Batches Open</h2>
            <p className="section-subtitle">
              New batches are formed based on student class and academic level to maintain uniform learning speed:
            </p>
          </div>

          <div className="batch-cards-grid">
            <div className="batch-card">
              <span className="batch-tag">Class 10 CBSE / State</span>
              <h3>Maths &amp; Science Board Accelerator</h3>
              <p>NCERT line-by-line concept mastery, exemplar problems, and past 10-year board paper practice.</p>
              <div className="batch-meta">
                <div className="batch-meta-row">
                  <span className="meta-label">👥 Batch Limit:</span>
                  <span className="meta-val">Max 5 Students</span>
                </div>
                <div className="batch-meta-row">
                  <span className="meta-label">📅 Schedule:</span>
                  <span className="meta-val">3 Days / Week</span>
                </div>
                <div className="batch-meta-row">
                  <span className="meta-label">📍 Format:</span>
                  <span className="meta-val">Focused Micro-Group</span>
                </div>
              </div>
              <Link to="/enquire" className="btn btn-outline-navy btn-block">
                Enquire for Batch →
              </Link>
            </div>

            <div className="batch-card featured-batch">
              <div className="batch-star">⭐ Popular Batch</div>
              <span className="batch-tag batch-tag-gold">Class 11 &amp; 12 Science</span>
              <h3>Physics &amp; Chemistry Mastery</h3>
              <p>Comprehensive theory with numerical speed drills for CBSE Boards + JEE/NEET foundational bridge.</p>
              <div className="batch-meta">
                <div className="batch-meta-row">
                  <span className="meta-label">👥 Batch Limit:</span>
                  <span className="meta-val">Strictly Max 6</span>
                </div>
                <div className="batch-meta-row">
                  <span className="meta-label">📅 Schedule:</span>
                  <span className="meta-val">Alternate Days + Tests</span>
                </div>
                <div className="batch-meta-row">
                  <span className="meta-label">📍 Format:</span>
                  <span className="meta-val">Board + Entrance Bridge</span>
                </div>
              </div>
              <Link to="/enquire" className="btn btn-primary btn-block">
                Book Free Demo →
              </Link>
            </div>

            <div className="batch-card">
              <span className="batch-tag">Competitive Entrance</span>
              <h3>JEE / NEET Advanced Problem Solving</h3>
              <p>Multi-concept numerical solving in Physics &amp; Chemistry with time-bound speed tests.</p>
              <div className="batch-meta">
                <div className="batch-meta-row">
                  <span className="meta-label">👥 Batch Limit:</span>
                  <span className="meta-val">Strictly Max 4</span>
                </div>
                <div className="batch-meta-row">
                  <span className="meta-label">📅 Schedule:</span>
                  <span className="meta-val">Weekend Intensive</span>
                </div>
                <div className="batch-meta-row">
                  <span className="meta-label">📍 Format:</span>
                  <span className="meta-val">Advanced Problem Solving</span>
                </div>
              </div>
              <Link to="/enquire" className="btn btn-outline-navy btn-block">
                Enquire for Batch →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-cta-banner">
        <div className="page-container text-center">
          <h2>Interested in joining or forming a small study group?</h2>
          <p>Talk to Sudhaanshu Sir to find a batch suited to your child's level.</p>
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

export default GroupTuitionPage;
