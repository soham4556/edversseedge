import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileStickyBar from "./MobileStickyBar";
import LaunchModal from "../ui/LaunchModal";
import { contactInfo } from "../../data/siteData";

const routeSeoMeta = {
  "/": {
    title: "Home Tuition in Pune | Group Tuition for Classes 8–12 | EdversseEDGE",
    desc: "EdversseEDGE provides personalised home tuition and small group tuition in Pune for Classes 8–12, CBSE and competitive exam preparation including JEE and NEET.",
  },
  "/home-tuition-pune": {
    title: "1-to-1 Personalised Home Tuition in Pune | Doorstep Tutors | EdversseEDGE",
    desc: "1-to-1 dedicated home tuition at your doorstep in Pune (Hadapsar, Magarpatta, Baner, Wakad, Aundh, Kothrud). Classes 8–12, CBSE, JEE & NEET preparation.",
  },
  "/group-tuition-pune": {
    title: "Small Group Tuition in Pune (Max 3–6 Students) | EdversseEDGE",
    desc: "Micro-batch interactive tuition for Classes 8–12 in Pune. Strictly limited batches with high personal attention, doubt solving, and structured test series.",
  },
  "/classes": {
    title: "Classes 8–12 CBSE & State Board Tuition in Pune | EdversseEDGE",
    desc: "Comprehensive academic tuition for Classes 8–10 foundation and Classes 11–12 Science (Physics, Chemistry, Maths, Biology) in Pune.",
  },
  "/jee-neet": {
    title: "JEE Main, Advanced & NEET Medical Tuition in Pune | EdversseEDGE",
    desc: "Targeted competitive exam coaching without factory batch stress. Conceptual problem solving in Physics, Chemistry & Maths led by Sudhaanshu Sir.",
  },
  "/about": {
    title: "About Sudhaanshu Srivastavaa | Founder & Head Educator | EdversseEDGE Pune",
    desc: "Learn about Sudhaanshu Srivastavaa (12+ Years Exp, M.Tech Bharati Vidyapeeth Pune), teaching philosophy, and personalised mentoring at EdversseEDGE.",
  },
  "/contact": {
    title: "Contact EdversseEDGE Pune | Direct Connect with Sudhaanshu Sir",
    desc: "Direct access to Sudhaanshu Sir for tuition consultation, free home demo session, and batch schedules across Pune. Call or WhatsApp +91 97667 15666.",
  },
  "/enquire": {
    title: "Book a Free Demo Class | Personalised Tuition Enquiry | EdversseEDGE Pune",
    desc: "Book a free introductory session for 1-to-1 home tuition or micro-batch tuition in Pune. Discuss syllabus requirements with Sudhaanshu Sir.",
  },
  "/class-11-physics-tuition-pune": {
    title: "Class 11 Physics Tuition in Pune | CBSE & State Board | EdversseEDGE",
    desc: "Personalised 1-to-1 Home Tuition & Micro-Batch Tutoring for Class 11 Physics in Pune with Sudhaanshu Sir. Master derivations and tough numericals.",
  },
  "/class-12-physics-tuition-pune": {
    title: "Class 12 Physics Tuition in Pune | Board & Entrance Prep | EdversseEDGE",
    desc: "Score 95%+ in Class 12 CBSE Board Physics with focused conceptual derivations, numerical speed drills, and 1-on-1 doubt solving in Pune.",
  },
  "/class-11-chemistry-tuition-pune": {
    title: "Class 11 Chemistry Tuition in Pune | Physical, Organic & Inorganic | EdversseEDGE",
    desc: "Concept-focused Class 11 Chemistry tuition in Pune. Physical chemistry numericals and organic mechanisms demystified without rote memorization.",
  },
  "/class-12-maths-tuition-pune": {
    title: "Class 12 Maths Tuition in Pune | CBSE & State Board | EdversseEDGE",
    desc: "Master Calculus, Vectors & 3D Geometry with structured problem-solving templates and board answer-writing techniques in Pune.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | EdversseEDGE Pune",
    desc: "Privacy Policy and data protection terms for EdversseEDGE tuition services in Pune.",
  },
  "/terms-of-admission": {
    title: "Terms of Admission & Code of Conduct | EdversseEDGE Pune",
    desc: "Terms of admission, batch rules, and student code of conduct at EdversseEDGE Pune.",
  },
};

function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    // 1. Scroll to top on route change
    window.scrollTo(0, 0);

    // 2. Dynamically update page title & meta description for SEO
    const currentMeta = routeSeoMeta[location.pathname] || {
      title: "EdversseEDGE | Personalised Home & Group Tuition in Pune",
      desc: "Personalised academic support for Classes 8–12, CBSE and competitive exam preparation with focused teaching and regular assessments in Pune.",
    };

    document.title = currentMeta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", currentMeta.desc);
    }
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <LaunchModal />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />

      {/* Desktop Floating Actions */}
      <div className="floating-actions desktop-only" aria-label="Quick contact options">
        <a
          className="floating-whatsapp"
          href={contactInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <span className="floating-icon">💬</span>
          <span className="floating-text">Chat on WhatsApp</span>
        </a>
        <a
          className="floating-call"
          href={`tel:${contactInfo.phoneRaw}`}
          aria-label={`Call ${contactInfo.phoneFormatted}`}
        >
          <span className="floating-icon">📞</span>
          <span className="floating-text">{contactInfo.phoneFormatted}</span>
        </a>
      </div>

      {/* Mobile Fixed Call + WhatsApp + Demo bar */}
      <MobileStickyBar />
    </div>
  );
}

export default MainLayout;
