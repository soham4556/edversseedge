import { useState } from "react";
import { Link } from "react-router-dom";
import {
  contactInfo,
  courses,
  faqs,
  highlights,
  programs,
  results,
  scholarshipTiers,
} from "../data/siteData";

function HomePage() {
  const [activeTab, setActiveTab] = useState("all");
  const [diagTrack, setDiagTrack] = useState("jee");
  const [openFaq, setOpenFaq] = useState(0);

  // Filter courses based on active tab
  const filteredCourses =
    activeTab === "all"
      ? courses
      : courses.filter((c) => c.category === activeTab);

  // Diagnostic simulator track data
  const diagnosticTracks = {
    jee: {
      name: "IIT-JEE",
      examTitle: "JEE Main & Advanced CBT Engine",
      score: "284",
      maxScore: "300",
      percentile: "99.82 %ile",
      rank: "AIR 184",
      badge: "Target: IIT Bombay",
      subjects: [
        { name: "Physics (Mechanics, Optics)", pct: 96, val: "96%" },
        { name: "Chemistry (Organic, Thermodynamics)", pct: 92, val: "92%" },
        { name: "Mathematics (Calculus, Vectors)", pct: 88, val: "88%" },
      ],
      insight: "Flagged 2 negative marks in Thermodynamics. Instant 1-on-1 recovery clinic assigned with Senior IITian Faculty.",
      student: "Advait Kulkarni (AIR 342, JEE Advanced)",
    },
    neet: {
      name: "NEET-UG",
      examTitle: "NEET-UG National Medical Simulator",
      score: "688",
      maxScore: "720",
      percentile: "99.91 %ile",
      rank: "AIR 92",
      badge: "Target: AIIMS New Delhi",
      subjects: [
        { name: "Biology (Genetics & Physiology)", pct: 98, val: "98%" },
        { name: "Chemistry (Physical & Inorganic)", pct: 94, val: "94%" },
        { name: "Physics (Modern Physics, Electrodynamics)", pct: 90, val: "90%" },
      ],
      insight: "High recall speed in Biology (38 min). Custom speed-drill module generated for Modern Physics numericals.",
      student: "Sanika Joshi (685/720, AIIMS New Delhi)",
    },
    foundation: {
      name: "Class 9-10",
      examTitle: "Olympiad & NTSE Advanced Arena",
      score: "98.4",
      maxScore: "100%",
      percentile: "Top 0.5%",
      rank: "State Rank 12",
      badge: "Target: NSEJS / NTSE",
      subjects: [
        { name: "Higher Mathematics & Algebra", pct: 98, val: "98%" },
        { name: "Physics & Chemistry Concepts", pct: 96, val: "96%" },
        { name: "Mental Ability & Logical Reasoning", pct: 95, val: "95%" },
      ],
      insight: "Exceptional analytical reasoning. Student qualified for Stage-2 Master Training Batch.",
      student: "Rohan Deshmukh (NTSE Stage-1 Scholar)",
    },
  };

  const currentTrack = diagnosticTracks[diagTrack];

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="page-container hero-grid">
          <div className="hero-content">
            <div className="hero-badge-wrap">
              <span className="pulse-dot"></span>
              <span className="hero-badge-text">
                Admissions Open 2026-27 | JEE, NEET & Boards
              </span>
            </div>

            <h1 className="hero-title">
              Rank Higher. Study Deeper.{" "}
              <span className="text-gradient">Crack JEE & NEET</span> With
              Precision Mentorship.
            </h1>

            <p className="hero-description">
              Step away from overcrowded factory coaching. Experience Pune’s
              premier concept-first coaching with small batches of 28, dedicated
              1-on-1 personal mentors, and real NTA-calibrated adaptive testing.
            </p>

            <div className="hero-actions">
              <Link to="/courses" className="btn btn-primary btn-lg">
                <span>Explore Batches & Courses</span>
                <span>→</span>
              </Link>
              <Link to="/enquire" className="btn btn-accent btn-lg">
                <span>Book Free Demo Class</span>
              </Link>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="hero-visual-card">
            <div className="hero-card-head">
              <div>
                <span className="hero-head-pill">⭐ Proven Score Trajectory</span>
                <h3 style={{ margin: "6px 0 0", fontSize: "1.2rem", fontWeight: 800 }}>
                  The EdversseEDGE Difference
                </h3>
              </div>
              <span className="badge badge-emerald">Live Batches</span>
            </div>

            <div className="hero-features-preview">
              <div className="hero-preview-item">
                <div className="hero-item-icon">🎯</div>
                <div className="hero-item-content">
                  <h4>1-on-1 Weekly Recovery Clinics</h4>
                  <p>
                    Missed a concept in class? Your assigned faculty mentor
                    conducts a private 45-min clinic until mastery is achieved.
                  </p>
                </div>
              </div>

              <div className="hero-preview-item">
                <div className="hero-item-icon">📊</div>
                <div className="hero-item-content">
                  <h4>Diagnostic Test vs. Final Exam</h4>
                  <p>
                    Average student score jumps from <strong>420</strong> (initial diagnostic) to <strong>645+</strong> in NEET/JEE mocks.
                  </p>
                </div>
              </div>

              <div className="hero-preview-item">
                <div className="hero-item-icon">📱</div>
                <div className="hero-item-content">
                  <h4>EdversseEDGE Mobile App</h4>
                  <p>
                    24/7 access to recorded lectures, Daily Practice Problems (DPP) & instant doubt chat.
                  </p>
                </div>
              </div>
            </div>

            <div className="hero-floating-proof">
              <span>🏆 <strong>AIR 342</strong> in JEE Advanced</span>
              <span>🩺 <strong>685/720</strong> in NEET-UG</span>
              <span>⭐ <strong>4.9/5</strong> Parent Trust</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COURSES & BATCHES SECTION WITH DYNAMIC FILTER TABS */}
      <section className="section page-container">
        <div className="section-heading text-center">
          <span className="section-tag">Targeted Academic Tracks</span>
          <h2 className="section-title">
            Programs Engineered for <span className="text-gradient">Top Ranks</span>
          </h2>
          <p className="section-subtitle">
            Choose a rigorous, structured pathway aligned with your career goals
            and target exam year.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          <button
            type="button"
            className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Tracks ({courses.length})
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === "engineering" ? "active" : ""}`}
            onClick={() => setActiveTab("engineering")}
          >
            IIT-JEE (Main + Adv)
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === "medical" ? "active" : ""}`}
            onClick={() => setActiveTab("medical")}
          >
            NEET-UG Medical
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === "boards" ? "active" : ""}`}
            onClick={() => setActiveTab("boards")}
          >
            Class 11 & 12 Boards
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === "repeaters" ? "active" : ""}`}
            onClick={() => setActiveTab("repeaters")}
          >
            Dropper / Repeater
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === "foundation" ? "active" : ""}`}
            onClick={() => setActiveTab("foundation")}
          >
            Pre-Foundation (9-10th)
          </button>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {filteredCourses.map((c) => (
            <article
              key={c.id}
              className={`course-card ${c.popular ? "featured" : ""}`}
            >
              {c.badge && <span className="course-ribbon">{c.badge}</span>}

              <div className="course-header">
                <div className="course-icon-box">
                  <img src={c.icon} alt="" />
                </div>
                <div>
                  <span className="course-category">{c.categoryLabel}</span>
                  <h3 className="course-title">{c.title}</h3>
                </div>
              </div>

              <p className="course-desc">{c.description}</p>

              <div className="course-meta-tags">
                <span className="meta-pill">⏱️ {c.duration}</span>
                <span className="meta-pill">👥 {c.batchSize}</span>
                <span className="meta-pill">🎓 {c.targetAudience}</span>
              </div>

              <ul className="course-features-list">
                {c.features.slice(0, 3).map((f) => (
                  <li key={f}>
                    <span className="feature-check">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="course-footer">
                <Link
                  to="/enquire"
                  className="btn btn-primary btn-block btn-sm"
                >
                  Enroll / Book Demo
                </Link>
                <Link to="/courses" className="btn btn-secondary btn-sm">
                  Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. THE 4-PILLAR EDGE SYSTEM */}
      <section className="section pillars-section">
        <div className="page-container">
          <div className="section-heading text-center">
            <span className="section-tag">Our Pedagogy</span>
            <h2 className="section-title">The 4-Pillar EDGE Academic System</h2>
            <p className="section-subtitle">
              How we consistently turn dedicated students into high-percentile
              rankers without burnout.
            </p>
          </div>

          <div className="pillars-grid">
            {programs.map((p, index) => (
              <div className="pillar-card" key={p.title}>
                <span className="pillar-step">{p.phase}</span>
                <div className="pillar-icon">
                  {index === 0 && "🔬"}
                  {index === 1 && "⚡"}
                  {index === 2 && "📊"}
                  {index === 3 && "🏆"}
                </div>
                <h3>{p.title}</h3>
                <p style={{ color: "#2563eb", fontWeight: 700, fontSize: "0.84rem", marginBottom: "8px" }}>
                  {p.tagline}
                </p>
                <p>{p.points[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HIGH-PERFORMANCE CBT SIMULATION & DIAGNOSTIC HUB */}
      <section className="section page-container">
        <div className="diag-hub-card">
          {/* Header Strip & Track Selector */}
          <div className="diag-hub-header">
            <div className="diag-hub-header-left">
              <span className="diag-live-pill">
                <span className="diag-pulse"></span>
                <span>NTA-Calibrated CBT Test & Diagnostic Platform</span>
              </span>
              <h2 className="diag-hub-title">
                Master Real Exam Pressure <span className="text-gradient-gold">Before Exam Day</span>
              </h2>
              <p className="diag-hub-sub">
                Take authentic full-length timed tests, detect hidden conceptual blind spots with AI analytics, and resolve them with dedicated 1-on-1 mentor recovery clinics.
              </p>
            </div>

            {/* Track Switcher */}
            <div className="diag-track-selector">
              <button
                type="button"
                className={`diag-track-btn ${diagTrack === "jee" ? "active" : ""}`}
                onClick={() => setDiagTrack("jee")}
              >
                🚀 JEE Main & Adv
              </button>
              <button
                type="button"
                className={`diag-track-btn ${diagTrack === "neet" ? "active" : ""}`}
                onClick={() => setDiagTrack("neet")}
              >
                🩺 NEET-UG Medical
              </button>
              <button
                type="button"
                className={`diag-track-btn ${diagTrack === "foundation" ? "active" : ""}`}
                onClick={() => setDiagTrack("foundation")}
              >
                🌟 Class 9-10 Olympiad
              </button>
            </div>
          </div>

          {/* Main Grid */}
          <div className="diag-hub-grid">
            {/* Left: 4 Innovation Features */}
            <div className="diag-features-col">
              <div className="diag-feature-grid">
                <div className="diag-feat-item">
                  <div className="diag-feat-icon">🖥️</div>
                  <div>
                    <h4>Exact NTA Screen Simulation</h4>
                    <p>Authentic countdown timer, question status palette (Answered, Marked for Review), and real exam interface.</p>
                  </div>
                </div>

                <div className="diag-feat-item">
                  <div className="diag-feat-icon">🎯</div>
                  <div>
                    <h4>Topic Weakness Heatmap</h4>
                    <p>Instant diagnosis flags whether errors were caused by conceptual gaps, silly calculation slips, or time pressure.</p>
                  </div>
                </div>

                <div className="diag-feat-item">
                  <div className="diag-feat-icon">👨‍🏫</div>
                  <div>
                    <h4>1-on-1 Faculty Recovery Clinic</h4>
                    <p>Don't just see wrong answers—sit with an IITian or Doctor mentor within 24 hours to re-solve every missed concept.</p>
                  </div>
                </div>

                <div className="diag-feat-item">
                  <div className="diag-feat-icon">📊</div>
                  <div>
                    <h4>All-India Benchmarking</h4>
                    <p>Real-time percentile ranking, projected AIR, and subject cutoff predictor calibrated with 10 years of NTA data.</p>
                  </div>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="diag-cta-strip">
                <Link to="/free-mock-test" className="btn btn-primary btn-lg diag-primary-btn">
                  <span>Take Free {currentTrack.name} Mock Test</span>
                  <span>→</span>
                </Link>
                <Link to="/enquire" className="btn btn-outline-white btn-lg">
                  Book 1-on-1 Counseling
                </Link>
              </div>

              <div className="diag-guarantee-note">
                <span>🔒 100% Free Access</span>
                <span>•</span>
                <span>⚡ Instant Detailed Explanations</span>
                <span>•</span>
                <span>📱 Works on Desktop & Phone</span>
              </div>
            </div>

            {/* Right: Live Interactive HUD Card */}
            <div className="diag-hud-col">
              <div className="diag-hud-card">
                <div className="diag-hud-top">
                  <div className="diag-hud-badge">
                    <span className="hud-dot"></span>
                    <span>STUDENT DIAGNOSTIC HUD</span>
                  </div>
                  <span className="diag-hud-track-badge">{currentTrack.badge}</span>
                </div>

                {/* Score & Rank Overview */}
                <div className="diag-hud-score-row">
                  <div className="hud-metric-card primary">
                    <span className="hud-metric-label">Simulated Score</span>
                    <div className="hud-metric-score">
                      <span className="hud-score-val">{currentTrack.score}</span>
                      <span className="hud-score-max">/{currentTrack.maxScore}</span>
                    </div>
                  </div>

                  <div className="hud-metric-card">
                    <span className="hud-metric-label">National Percentile</span>
                    <div className="hud-metric-num text-emerald">{currentTrack.percentile}</div>
                  </div>

                  <div className="hud-metric-card">
                    <span className="hud-metric-label">Projected Rank</span>
                    <div className="hud-metric-num text-gold">{currentTrack.rank}</div>
                  </div>
                </div>

                {/* Subject Mastery Progress Bars */}
                <div className="diag-hud-subjects">
                  <div className="diag-hud-section-label">Subject Mastery & Accuracy Breakdown</div>
                  {currentTrack.subjects.map((sub) => (
                    <div className="hud-subject-row" key={sub.name}>
                      <div className="hud-sub-info">
                        <span className="hud-sub-name">{sub.name}</span>
                        <span className="hud-sub-pct">{sub.val}</span>
                      </div>
                      <div className="hud-progress-bg">
                        <div
                          className="hud-progress-fill"
                          style={{ width: `${sub.pct}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Diagnostic Alert Box */}
                <div className="diag-ai-insight">
                  <div className="diag-ai-header">
                    <span className="diag-ai-icon">💡</span>
                    <strong>AI Diagnostic Recovery Alert</strong>
                  </div>
                  <p>{currentTrack.insight}</p>
                </div>

                {/* Bottom Verified Student Stamp */}
                <div className="diag-hud-footer">
                  <div className="diag-student-info">
                    <span className="diag-verified-badge">✓ Verified Alumni Trajectory</span>
                    <span className="diag-student-name">{currentTrack.student}</span>
                  </div>
                  <Link to="/free-mock-test" className="diag-start-btn">
                    Start Test ⚡
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY US VS TRADITIONAL COACHING (COMPARISON TABLE) */}
      <section className="section page-container">
        <div className="section-heading text-center">
          <span className="section-tag">The Transparent Truth</span>
          <h2 className="section-title">EdversseEDGE vs. Factory Coaching</h2>
          <p className="section-subtitle">
            See why students thrive when they switch from mass commercial
            institutes to our focused, personal environment.
          </p>
        </div>

        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Parameters</th>
                <th className="brand-col">EdversseEDGE (Kondhwa, Pune)</th>
                <th>Traditional Commercial Coaching</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Batch Size</strong></td>
                <td className="brand-col">Strictly Capped at 25–28 Students</td>
                <td>120 to 200+ Students per Auditorium</td>
              </tr>
              <tr>
                <td><strong>1-on-1 Mentorship</strong></td>
                <td className="brand-col">Dedicated mentor assigned to every student</td>
                <td>Non-existent or only for top 10 students</td>
              </tr>
              <tr>
                <td><strong>Doubt Clearing</strong></td>
                <td className="brand-col">Daily 1-on-1 faculty clinics; same-day resolution</td>
                <td>Long chaotic lines; handled by junior teaching assistants</td>
              </tr>
              <tr>
                <td><strong>Test Analytics</strong></td>
                <td className="brand-col">AI-driven error heatmaps & weak-topic recovery</td>
                <td>Generic marks list with no diagnostic feedback</td>
              </tr>
              <tr>
                <td><strong>Parent Communication</strong></td>
                <td className="brand-col">Monthly briefing meetings + Live app tracking</td>
                <td>Automated SMS only or once a year parent meet</td>
              </tr>
              <tr>
                <td><strong>Study Material</strong></td>
                <td className="brand-col">Precise NCERT-aligned modules + 15 yr PYQs</td>
                <td>Overwhelming bulky books full of irrelevant questions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. HALL OF FAME / TOP RESULTS */}
      <section className="section page-container">
        <div className="section-heading text-center">
          <span className="section-tag">Proven Track Record</span>
          <h2 className="section-title">
            Meet Our <span className="text-gradient">Top Rankers</span>
          </h2>
          <p className="section-subtitle">
            Real students from Pune who trusted the process and achieved their
            dream college admissions.
          </p>
        </div>

        <div className="results-grid">
          {results.map((r) => (
            <article className="result-card" key={r.name}>
              <div className="result-card-top">
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div className="result-avatar">{r.avatar}</div>
                  <div className="result-header-text">
                    <h4>{r.name}</h4>
                    <span className="result-exam-pill">{r.exam}</span>
                  </div>
                </div>
                <span className="result-rank-badge">{r.badge}</span>
              </div>

              <div className="result-score-banner">
                <span className="result-main-score">{r.score}</span>
                <span className="result-college">📍 {r.college}</span>
              </div>

              <p className="result-quote">“{r.quote}”</p>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <Link to="/results" className="btn btn-secondary">
            <span>View All Student Success Stories</span>
            <span>→</span>
          </Link>
        </div>
      </section>



      {/* 8. ANDROID MOBILE APP BANNER */}
      <section className="page-container">
        <div className="app-banner">
          <div>
            <span className="badge badge-gold" style={{ marginBottom: "12px" }}>
              📱 Study Anytime, Anywhere
            </span>
            <h3>Download the Official EdversseEDGE App</h3>
            <p>
              Get daily live classes, recorded 4K lecture revisions, topic-wise
              mock tests, and direct doubt chat with teachers on your phone.
              Never miss a concept even when studying from home.
            </p>
            <div className="app-btn-row">
              <a
                href={contactInfo.appDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="google-play-btn"
              >
                <img src="/icons/android.svg" alt="Play Store" />
                <div className="google-play-text">
                  <span>GET IT ON</span>
                  <strong>Google Play Store</strong>
                </div>
              </a>
              <Link to="/download" className="btn btn-secondary">
                Learn More About App
              </Link>
            </div>
          </div>

          <div className="app-mockup-frame">
            <div className="phone-device">
              <div className="phone-screen">
                <img src="/icons/unnamed.webp" alt="EdversseEDGE App Screen" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="section page-container">
        <div className="section-heading text-center">
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Clear, honest answers to help parents and students make the best
            academic decisions.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                className={`faq-item ${isOpen ? "open" : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{isOpen ? "▲" : "▼"}</span>
                </button>
                {isOpen && <div className="faq-answer">{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. BOTTOM HIGH-CONVERSION CTA */}
      <section className="page-container" style={{ marginBottom: "20px" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #0b1f3a 0%, #16325c 100%)",
            borderRadius: "28px",
            padding: "54px 32px",
            textAlign: "center",
            color: "#ffffff",
            boxShadow: "0 20px 40px rgba(11, 31, 58, 0.25)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <span className="badge badge-gold" style={{ marginBottom: "14px" }}>
            🎯 Limited Seats Per Batch (Max 28)
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900, margin: "0 0 16px" }}>
            Give Your Child the Decisive Academic Edge
          </h2>
          <p style={{ color: "#cbd5e1", fontSize: "1.1rem", maxWidth: "680px", margin: "0 auto 28px", lineHeight: 1.6 }}>
            Visit our Kondhwa, Pune center for a free diagnostic assessment,
            meet our faculty directors, and attend 2 free trial lectures.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/enquire" className="btn btn-accent btn-lg">
              <span>Book Free Trial Classes</span>
              <span>→</span>
            </Link>
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
              className="btn btn-secondary btn-lg"
            >
              <span>📞 Call Director: {contactInfo.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
