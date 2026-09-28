import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
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

      {/* Floating Action Buttons */}
      <div className="floating-actions" aria-label="Quick contact options">
        <a
          className="floating-whatsapp"
          href={contactInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <span>💬</span>
          <span>Chat on WhatsApp</span>
        </a>
        <a
          className="floating-call"
          href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
          aria-label={`Call ${contactInfo.phoneFormatted}`}
        >
          <span>📞</span>
          <span>Call: {contactInfo.phoneFormatted}</span>
        </a>
      </div>
    </div>
  );
}

export default MainLayout;

