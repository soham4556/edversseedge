import { useState } from "react";
import { Link } from "react-router-dom";
import { contactInfo, puneAreas } from "../data/siteData";

function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    qualification: "M.Sc / Master's Degree",
    experience: "3–5 Years",
    subjects: "Physics",
    formats: "1-to-1 Home Tuition & Micro-Batches",
    puneAreas: "Magarpatta, Hadapsar, Kharadi",
    currentRole: "",
    message: "",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [selectedRole, setSelectedRole] = useState(null);

  const availableRoles = [
    {
      id: "physics-sr",
      title: "Senior Physics Educator (Classes 11–12, JEE / NEET)",
      badge: "High Demand",
      experience: "2+ Years Exp Required",
      qualification: "M.Sc / B.Tech / M.Tech in Physics or Engineering",
      remuneration: "Competitive Premium Hourly (₹800 – ₹1,800/hr based on expertise)",
      desc: "Lead 1-to-1 home tuition and micro-batches for CBSE Boards, JEE Main/Advanced, and NEET. Focus on derivations, mechanics, and numerical solving without rote memorization.",
      subjects: "Class 11 & 12 Physics, JEE/NEET Foundations",
    },
    {
      id: "chemistry-sr",
      title: "Senior Chemistry Educator (Physical, Organic & Inorganic)",
      badge: "Immediate Opening",
      experience: "2+ Years Exp Required",
      qualification: "M.Sc / M.Tech in Chemistry or Chemical Engineering",
      remuneration: "Competitive Premium Hourly (₹800 – ₹1,800/hr)",
      desc: "Demystify Physical Chemistry numericals and Organic reaction mechanisms for board students and competitive aspirants. Personalised doubt clearing and chapter evaluations.",
      subjects: "Class 11 & 12 Chemistry, NEET/JEE Bridge",
    },
    {
      id: "maths-mentor",
      title: "Mathematics Faculty (Classes 9–12, Foundation & JEE)",
      badge: "Open Position",
      experience: "1+ Years Exp Required",
      qualification: "M.Sc / B.Tech / B.Ed in Mathematics or related field",
      remuneration: "Competitive Hourly Compensation",
      desc: "Nurture logical problem solving, Calculus, Algebra, and Geometry. Step-by-step guidance for school board excellence and foundation olympiad thinking.",
      subjects: "Classes 9–12 Mathematics, JEE Foundation",
    },
    {
      id: "science-bio",
      title: "Biology & Junior Science Mentor (Classes 8–10 & NEET Early)",
      badge: "Open Position",
      experience: "1+ Years Exp Required",
      qualification: "M.Sc / B.Sc in Life Sciences, Biotechnology or General Science",
      remuneration: "Competitive Hourly Compensation",
      desc: "Inspire curiosity in Science for high schoolers. Conceptual clarity for Class 10 Board exams and early NEET medical foundation.",
      subjects: "Classes 8–10 Science & Class 11–12 Biology",
    },
  ];

  const quickSubjectsList = [
    "Physics (Class 11-12 / JEE / NEET)",
    "Chemistry (Class 11-12 / NEET / JEE)",
    "Mathematics (Class 9-12 / JEE)",
    "Biology (Class 11-12 / NEET)",
    "Classes 8-10 Science & Maths Foundation",
  ];

  const puneLocalitiesList = [
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
    "Flexible (Any Pune Location)",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        alert("File size exceeds 10MB limit. Please upload a smaller file.");
        return;
      }
      setResumeFile(file);
    }
  };

  const handleQuickSubject = (subj) => {
    setFormData((prev) => ({ ...prev, subjects: subj }));
  };

  const handleQuickArea = (area) => {
    setFormData((prev) => {
      const existing = prev.puneAreas ? prev.puneAreas.split(", ") : [];
      if (existing.includes(area)) {
        return { ...prev, puneAreas: existing.filter((a) => a !== area).join(", ") };
      }
      return { ...prev, puneAreas: [...existing, area].filter(Boolean).join(", ") };
    });
  };

  const handleApplyClick = (roleTitle) => {
    setFormData((prev) => ({ ...prev, subjects: roleTitle }));
    setSelectedRole(roleTitle);
    const formElement = document.getElementById("faculty-application-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const payload = new FormData();
      Object.keys(formData).forEach((key) => {
        payload.append(key, formData[key]);
      });

      if (resumeFile) {
        payload.append("resume", resumeFile);
      }

      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message:
            "Application successfully dispatched! A confirmation email has been sent to your inbox, and Sudhaanshu Sir has received your profile and resume.",
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          qualification: "M.Sc / Master's Degree",
          experience: "3–5 Years",
          subjects: "Physics",
          formats: "1-to-1 Home Tuition & Micro-Batches",
          puneAreas: "",
          currentRole: "",
          message: "",
        });
        setResumeFile(null);
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to submit application. Please check details or connect on WhatsApp.",
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus({
        type: "error",
        message: "Network error connecting to API. You can also send your CV directly to edversseedge@gmail.com.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-shell careers-page">
      {/* 1. Header Banner */}
      <section className="page-header-banner">
        <div className="page-container">
          <span className="badge badge-gold">Educator Faculty Recruitment</span>
          <h1 className="banner-title">
            Teach With <span className="gold-shimmer-text">EdversseEDGE Pune</span>
          </h1>
          <p className="banner-desc">
            We are onboarding dedicated subject mentors for 1-to-1 Home Tuition and Focused Micro-Batches across Pune. High academic freedom, respectful culture, and rewarding compensation.
          </p>

          <div className="banner-actions">
            <a href="#faculty-application-form" className="btn btn-primary btn-lg">
              Apply as Faculty Now ↓
            </a>
            <a
              href={`https://wa.me/919766715666?text=Hello%20Sudhaanshu%20Sir%2C%20I%20am%20interested%20in%20joining%20EdversseEDGE%20as%20a%20teaching%20faculty%20in%20Pune.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              💬 WhatsApp Faculty Desk
            </a>
          </div>
        </div>
      </section>

      {/* 2. Why Teach With EdversseEDGE */}
      <section className="tuition-section">
        <div className="page-container">
          <div className="section-head text-center">
            <span className="badge badge-navy">Educator Benefits</span>
            <h2 className="section-title">Why Great Teachers Choose EdversseEDGE</h2>
            <p className="section-subtitle">
              We respect educators as partners, not replaceable gig workers. Here is how we support your teaching journey:
            </p>
          </div>

          <div className="features-three-col-grid">
            <div className="feature-block-card">
              <div className="feature-icon-circle">💎</div>
              <h3>Premium &amp; Punctual Remuneration</h3>
              <p>
                Industry-leading hourly packages (₹800 to ₹1,800/hr) with transparent, monthly timely payouts. Your expertise is genuinely valued.
              </p>
            </div>

            <div className="feature-block-card">
              <div className="feature-icon-circle">👥</div>
              <h3>Curated Micro-Batches (No Chaos)</h3>
              <p>
                Never teach 100+ noisy students. Our batches are strictly limited to 1-to-1 or 3–6 students, allowing you to mentor with true depth and joy.
              </p>
            </div>

            <div className="feature-block-card">
              <div className="feature-icon-circle">📍</div>
              <h3>Localised Pune Clusters</h3>
              <p>
                Teach close to where you live. We map home tuition and batch slots within your preferred Pune localities (Hadapsar, Baner, Wakad, Kothrud, etc.).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Open Positions Grid */}
      <section className="tuition-section bg-subtle">
        <div className="page-container">
          <div className="section-head text-center">
            <span className="badge badge-gold">Active Vacancies</span>
            <h2 className="section-title">Open Teaching Positions in Pune</h2>
            <p className="section-subtitle">
              Select a position below to auto-fill your application form:
            </p>
          </div>

          <div className="roles-grid">
            {availableRoles.map((role) => (
              <div key={role.id} className="role-card">
                <div className="role-header">
                  <span className="role-tag">{role.badge}</span>
                  <span className="role-exp-badge">{role.experience}</span>
                </div>
                <h3>{role.title}</h3>
                <p className="role-desc">{role.desc}</p>

                <div className="role-meta-box">
                  <div className="role-meta-item">
                    <span className="meta-icon">🎓</span>
                    <div>
                      <strong>Qualification:</strong> {role.qualification}
                    </div>
                  </div>
                  <div className="role-meta-item">
                    <span className="meta-icon">💰</span>
                    <div>
                      <strong>Compensation:</strong> {role.remuneration}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-outline-navy btn-block mt-3"
                  onClick={() => handleApplyClick(role.title)}
                >
                  Apply for this Role →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Selection Process Roadmap */}
      <section className="tuition-section">
        <div className="page-container">
          <div className="section-head text-center">
            <span className="badge badge-navy">Transparent Hiring</span>
            <h2 className="section-title">4-Step Faculty Induction Process</h2>
            <p className="section-subtitle">
              A streamlined, respectful evaluation pathway designed to respect your time:
            </p>
          </div>

          <div className="recruitment-steps-grid">
            <div className="rec-step-card">
              <div className="rec-step-num">01</div>
              <h4>Application &amp; CV Review</h4>
              <p>
                Submit your profile and resume below. Founder Sudhaanshu Sir reviews your educational background within 24 hours.
              </p>
            </div>

            <div className="rec-step-card">
              <div className="rec-step-num">02</div>
              <h4>Conceptual Discussion</h4>
              <p>
                A 15–20 minute telephonic or video interaction discussing your teaching methodology, favorite derivations, and problem-solving pedagogy.
              </p>
            </div>

            <div className="rec-step-card">
              <div className="rec-step-num">03</div>
              <h4>Demo Lecture</h4>
              <p>
                A brief 20-minute demo on a high-stakes topic of your choice to observe student engagement and conceptual clarity.
              </p>
            </div>

            <div className="rec-step-card">
              <div className="rec-step-num">04</div>
              <h4>Batch Allocation &amp; Welcome</h4>
              <p>
                Mutual agreement on schedule slots and immediate student allocation in your preferred Pune localities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Application Form */}
      <section className="tuition-section bg-subtle" id="faculty-application-form">
        <div className="page-container">
          <div className="career-form-container">
            <div className="form-legend-header text-center">
              <span className="badge badge-gold">Direct Portal</span>
              <h2>Faculty Application Form</h2>
              <p>
                Your details and resume will be delivered directly to Founder Sudhaanshu Sir's official desk (<strong>edversseedge@gmail.com</strong>), and an automated confirmation will be sent to your email.
              </p>
            </div>

            {status.type === "success" ? (
              <div className="career-success-card">
                <div className="success-check-icon">✓</div>
                <h3>Application Submitted Successfully!</h3>
                <p>{status.message}</p>
                <div className="success-actions mt-4">
                  <a
                    href={`https://wa.me/919766715666?text=Hello%20Sudhaanshu%20Sir%2C%20I%20have%20just%20submitted%20my%20faculty%20application%20on%20edversseedge.com.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    💬 Notify Sudhaanshu Sir on WhatsApp
                  </a>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setStatus({ type: "", message: "" })}
                  >
                    Submit Another Profile
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="career-actual-form">
                {status.type === "error" && (
                  <div className="alert-error-banner">
                    ⚠️ {status.message}
                  </div>
                )}

                {/* Personal Information */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Dr. Rajesh Kulkarni / Sneha Patil"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="contact-input-field"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Email Address <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. educator@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="contact-input-field"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">
                      WhatsApp / Phone Number <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="contact-input-field"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Highest Qualification <span className="req">*</span>
                    </label>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      className="contact-input-field"
                    >
                      <option value="M.Sc / Master's Degree">M.Sc / Master's Degree</option>
                      <option value="M.Tech / Engineering Master's">M.Tech / Engineering Master's</option>
                      <option value="Ph.D / Doctorate">Ph.D / Doctorate</option>
                      <option value="B.Tech / B.E (Engineering)">B.Tech / B.E (Engineering)</option>
                      <option value="B.Sc / Bachelor's in Science">B.Sc / Bachelor's in Science</option>
                      <option value="B.Ed / Trained Graduate Teacher">B.Ed / Trained Graduate Teacher</option>
                      <option value="Other Higher Qualification">Other Higher Qualification</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Teaching Experience</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="contact-input-field"
                    >
                      <option value="1–2 Years">1–2 Years</option>
                      <option value="3–5 Years">3–5 Years (Experienced)</option>
                      <option value="6–10 Years">6–10 Years (Senior Faculty)</option>
                      <option value="10+ Years">10+ Years (Master Educator)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Preferred Teaching Format</label>
                    <select
                      name="formats"
                      value={formData.formats}
                      onChange={handleInputChange}
                      className="contact-input-field"
                    >
                      <option value="1-to-1 Home Tuition & Micro-Batches">1-to-1 Home Tuition &amp; Micro-Batches</option>
                      <option value="1-to-1 Home Tuition Only">1-to-1 Home Tuition Only</option>
                      <option value="Small Micro-Groups Only">Small Micro-Groups Only</option>
                      <option value="Online 1-to-1 Tutoring">Online 1-to-1 Tutoring</option>
                    </select>
                  </div>
                </div>

                {/* Target Teaching Subjects */}
                <div className="form-group">
                  <label className="form-label">
                    Target Teaching Subjects &amp; Levels <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    name="subjects"
                    required
                    placeholder="e.g. Class 11-12 Physics & JEE Main/Adv"
                    value={formData.subjects}
                    onChange={handleInputChange}
                    className="contact-input-field"
                  />
                  <div className="quick-tags-row mt-2">
                    <span className="quick-tag-label">Quick select:</span>
                    {quickSubjectsList.map((s) => (
                      <button
                        key={s}
                        type="button"
                        className={`chip-tag ${formData.subjects.includes(s) ? "active" : ""}`}
                        onClick={() => handleQuickSubject(s)}
                      >
                        + {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pune Locality Availability */}
                <div className="form-group">
                  <label className="form-label">
                    Preferred Localities in Pune (For In-Person Home Visits)
                  </label>
                  <input
                    type="text"
                    name="puneAreas"
                    placeholder="e.g. Magarpatta City, Hadapsar, Baner, Wakad..."
                    value={formData.puneAreas}
                    onChange={handleInputChange}
                    className="contact-input-field"
                  />
                  <div className="quick-tags-row mt-2">
                    <span className="quick-tag-label">Select areas:</span>
                    {puneLocalitiesList.map((area) => (
                      <button
                        key={area}
                        type="button"
                        className={`chip-tag ${formData.puneAreas.includes(area) ? "active" : ""}`}
                        onClick={() => handleQuickArea(area)}
                      >
                        📍 {area}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Resume Upload (PDF) */}
                <div className="form-group">
                  <label className="form-label">
                    Upload Resume / CV (PDF or Word Document) <span className="req">*</span>
                  </label>
                  <div className="resume-upload-box">
                    <input
                      type="file"
                      id="resume-file-input"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword"
                      onChange={handleFileChange}
                      className="hidden-file-input"
                    />
                    <label htmlFor="resume-file-input" className="file-drop-label">
                      <span className="file-icon">📄</span>
                      {resumeFile ? (
                        <div className="file-selected-info">
                          <strong className="file-name">{resumeFile.name}</strong>
                          <span className="file-size">
                            ({(resumeFile.size / 1024).toFixed(1)} KB) — Click to change
                          </span>
                        </div>
                      ) : (
                        <div className="file-prompt">
                          <strong>Click here to upload your Resume (PDF / DOC)</strong>
                          <span>Maximum file size: 10MB</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Message / Teaching Approach */}
                <div className="form-group">
                  <label className="form-label">
                    Brief Note on Your Teaching Philosophy / Achievements
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Share past student results, favorite topics to teach, or your pedagogical approach..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="contact-input-field"
                  ></textarea>
                </div>

                <div className="form-submit-row">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary btn-lg btn-block"
                  >
                    {loading ? "⏳ Submitting & Dispatching Email..." : "🚀 Submit Faculty Application →"}
                  </button>
                  <p className="privacy-note text-center mt-2">
                    🔒 Direct SMTP delivery to Sudhaanshu Sir. You will receive an immediate confirmation on your email.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareersPage;
