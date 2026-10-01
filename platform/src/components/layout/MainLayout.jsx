import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileStickyBar from "./MobileStickyBar";
import LaunchModal from "../ui/LaunchModal";
import { contactInfo } from "../../data/siteData";

function MainLayout() {
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
