import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LaunchModal from "../ui/LaunchModal";

function MainLayout() {
  return (
    <div className="app-shell">
      <LaunchModal />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <a
        className="floating-call"
        href="tel:+919766715666"
        aria-label="Call EdversseEDGE"
      >
        Call Now
      </a>
    </div>
  );
}

export default MainLayout;
