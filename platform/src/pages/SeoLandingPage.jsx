import { Link, useLocation } from "react-router-dom";
import { contactInfo, puneAreas } from "../data/siteData";

const landingData = {
  "/class-11-physics-tuition-pune": {
    title: "Class 11 Physics Tuition in Pune",
    headline: "Master Class 11 Physics Concepts & Numericals in Pune",
    subhead: "Personalised 1-to-1 Home Tuition & Micro-Batch Tutoring for CBSE & State Board Class 11 Physics with Sudhaanshu Srivastavaa.",
    subject: "Class 11 Physics",
    chapters: ["Kinematics & Vectors", "Laws of Motion & Friction", "Work, Energy & Power", "System of Particles & Rotational Motion", "Gravitation", "Thermodynamics & Kinetic Theory", "Oscillations & Waves"],
  },
  "/class-12-physics-tuition-pune": {
    title: "Class 12 Physics Tuition in Pune",
    headline: "Class 12 Physics Board & Entrance Mentorship in Pune",
    subhead: "Score 95%+ in Class 12 CBSE Board Physics with focused conceptual derivations, numerical drills, and 1-on-1 doubt solving.",
    subject: "Class 12 Physics",
    chapters: ["Electrostatics & Capacitance", "Current Electricity", "Magnetic Effects & Magnetism", "Electromagnetic Induction & AC", "Optics (Ray & Wave)", "Dual Nature & Atoms/Nuclei", "Semiconductor Electronics"],
  },
  "/class-11-chemistry-tuition-pune": {
    title: "Class 11 Chemistry Tuition in Pune",
    headline: "Class 11 Chemistry Concept-Focused Tuition in Pune",
    subhead: "Build deep confidence in Physical, Organic, and Inorganic Chemistry without stressful rote memorization.",
    subject: "Class 11 Chemistry",
    chapters: ["Some Basic Concepts of Chemistry (Mole Concept)", "Structure of Atom", "Chemical Bonding & Molecular Structure", "Chemical Thermodynamics & Equilibrium", "Redox Reactions", "Organic Chemistry Basics & Hydrocarbons"],
  },
  "/class-12-maths-tuition-pune": {
    title: "Class 12 Maths Tuition in Pune",
    headline: "Class 12 Mathematics Tuition in Pune (CBSE & State)",
    subhead: "Master Calculus, Vectors & 3D Geometry with structured problem-solving templates and board answer-writing techniques.",
    subject: "Class 12 Mathematics",
    chapters: ["Relations & Functions, Inverse Trig", "Matrices & Determinants", "Continuity & Differentiability", "Applications of Derivatives", "Integrals & Differential Equations", "Vectors & Three Dimensional Geometry", "Probability & Linear Programming"],
  },
};

function SeoLandingPage() {
  const location = useLocation();
  const page = landingData[location.pathname] || {
    title: "Personalised Tuition in Pune",
    headline: "Personalised Home & Group Tuition in Pune",
    subhead: "Expert academic support for Classes 8–12 with focused teaching and regular assessments.",
    subject: "Physics, Chemistry & Maths",
    chapters: ["Concept-First Derivations", "Step-by-Step Numericals", "NCERT Exemplar Coverage", "Regular Chapter Tests"],
  };

  return (
    <div className="page-shell seo-landing-page">
      <section className="page-header-banner">
        <div className="page-container">
          <span className="badge badge-gold">📍 Pune Academic Tutoring</span>
          <h1 className="banner-title">
            {page.headline}
          </h1>
          <p className="banner-desc">
            {page.subhead}
          </p>

          <div className="banner-actions">
            <Link to="/enquire" className="btn btn-primary btn-lg">
              Book a Free Demo for {page.subject} →
            </Link>
            <a
              href={`https://wa.me/919766715666?text=Hello%2C%20I%20am%20enquiring%20about%20${encodeURIComponent(page.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              💬 WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>

      <section className="tuition-section">
        <div className="page-container">
          <div className="section-head text-center">
            <span className="badge badge-navy">Curriculum Mastery</span>
            <h2 className="section-title">Key Chapters &amp; Problem Areas Solved</h2>
            <p className="section-subtitle">
              We focus heavily on the chapters where students traditionally lose marks:
            </p>
          </div>

          <div className="seo-chapters-grid">
            {page.chapters.map((chap, i) => (
              <div key={i} className="seo-chapter-card">
                <span className="chapter-index">0{i + 1}</span>
                <span className="chapter-name">{chap}</span>
                <span className="chapter-check">✓</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tuition-section bg-subtle">
        <div className="page-container">
          <div className="section-head text-center">
            <span className="badge badge-gold">Pune Coverage</span>
            <h2 className="section-title">Available Across Pune Neighbourhoods</h2>
            <p className="section-subtitle">
              Home visits and small-batch options available across:
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
            <Link to="/enquire" className="btn btn-primary btn-lg">
              Schedule Free Demo Class in Your Area →
            </Link>
          </div>
        </div>
      </section>

      <section className="bottom-cta-banner">
        <div className="page-container text-center">
          <h2>Get in touch with Sudhaanshu Srivastavaa</h2>
          <p>Founder & Educator with 12+ years of conceptual teaching in Pune.</p>
          <div className="mt-4 flex-center gap-3">
            <Link to="/enquire" className="btn btn-primary btn-lg">
              Book a Free Demo Session
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

export default SeoLandingPage;
