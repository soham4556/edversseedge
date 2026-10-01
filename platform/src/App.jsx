import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import HomeTuitionPage from "./pages/HomeTuitionPage";
import GroupTuitionPage from "./pages/GroupTuitionPage";
import ClassesPage from "./pages/ClassesPage";
import JeeNeetPage from "./pages/JeeNeetPage";
import SeoLandingPage from "./pages/SeoLandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import EnquirePage from "./pages/EnquirePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfAdmissionPage from "./pages/TermsOfAdmissionPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/site.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Main Website Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          {/* Core Tuition Formats */}
          <Route path="/home-tuition-pune" element={<HomeTuitionPage />} />
          <Route path="/home-tuition" element={<Navigate to="/home-tuition-pune" replace />} />
          <Route path="/group-tuition-pune" element={<GroupTuitionPage />} />
          <Route path="/group-tuition" element={<Navigate to="/group-tuition-pune" replace />} />
          <Route path="/online-tuition" element={<GroupTuitionPage />} />

          {/* Classes & Subjects */}
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/classes-8-12" element={<Navigate to="/classes" replace />} />
          <Route path="/courses" element={<Navigate to="/classes" replace />} />
          <Route path="/programs" element={<Navigate to="/group-tuition-pune" replace />} />

          {/* Competitive JEE / NEET Tracks */}
          <Route path="/jee-neet" element={<JeeNeetPage />} />
          <Route path="/jee-tuition-pune" element={<JeeNeetPage />} />
          <Route path="/neet-tuition-pune" element={<JeeNeetPage />} />
          <Route path="/test-series" element={<Navigate to="/jee-neet" replace />} />
          <Route path="/free-mock-test" element={<Navigate to="/jee-neet" replace />} />

          {/* Specific SEO Landing Pages for Pune */}
          <Route path="/class-11-physics-tuition-pune" element={<SeoLandingPage />} />
          <Route path="/class-12-physics-tuition-pune" element={<SeoLandingPage />} />
          <Route path="/class-11-chemistry-tuition-pune" element={<SeoLandingPage />} />
          <Route path="/class-12-maths-tuition-pune" element={<SeoLandingPage />} />

          {/* Institutional / Contact / Careers Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/career" element={<Navigate to="/careers" replace />} />
          <Route path="/faculty-recruitment" element={<Navigate to="/careers" replace />} />
          <Route path="/enquire" element={<EnquirePage />} />

          {/* Graceful Fallbacks for legacy links */}
          <Route path="/results" element={<Navigate to="/about" replace />} />
          <Route path="/scholarships" element={<Navigate to="/enquire" replace />} />
          <Route path="/download" element={<Navigate to="/contact" replace />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-admission" element={<TermsOfAdmissionPage />} />
          <Route path="/terms" element={<Navigate to="/terms-of-admission" replace />} />

          {/* 404 Handler */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
