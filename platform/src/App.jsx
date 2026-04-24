import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import EnquirePage from "./pages/EnquirePage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProgramsPage from "./pages/ProgramsPage";
import ResultsPage from "./pages/ResultsPage";
import ScholarshipsPage from "./pages/ScholarshipsPage";
import TestSeriesPage from "./pages/TestSeriesPage";
import DownloadPage from "./pages/DownloadPage";
import "./styles/site.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/test-series" element={<TestSeriesPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/scholarships" element={<ScholarshipsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/enquire" element={<EnquirePage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
