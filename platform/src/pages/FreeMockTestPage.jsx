import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  jeeQuestions,
  neetQuestions,
  testMeta,
} from "../data/mockTestData";
import { contactInfo } from "../data/siteData";

function FreeMockTestPage() {
  // Stages: "register" -> "instructions" -> "testing" -> "result"
  const [stage, setStage] = useState("register");

  // Registration form
  const [student, setStudent] = useState({
    name: "",
    phone: "",
    email: "",
    exam: "jee", // "jee" or "neet"
    currentClass: "Class 12th",
    city: "Pune",
  });
  const [dbStatus, setDbStatus] = useState(null);

  // Active Test State
  const [selectedExam, setSelectedExam] = useState("jee");
  const [activeSubject, setActiveSubject] = useState("Physics");
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { [questionId]: selectedOptionIndex }
  const [statusMap, setStatusMap] = useState({}); // { [questionId]: "answered" | "not_answered" | "review" | "answered_review" }
  const [visitedMap, setVisitedMap] = useState({}); // { [questionId]: true }
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 mins in seconds
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);

  // Active question set
  const questions = selectedExam === "jee" ? jeeQuestions : neetQuestions;
  const meta = testMeta[selectedExam];

  // Filter questions for the active subject tab
  const subjectQuestions = questions.filter((q) => q.subject === activeSubject);
  const currentQuestion = subjectQuestions[currentQIndex] || subjectQuestions[0];

  // Mark question visited whenever current question changes during test
  useEffect(() => {
    if (stage === "testing" && currentQuestion) {
      setVisitedMap((prev) => ({ ...prev, [currentQuestion.id]: true }));
      // If not yet answered or marked, set to "not_answered"
      setStatusMap((prev) => {
        if (!prev[currentQuestion.id] || prev[currentQuestion.id] === "unvisited") {
          return { ...prev, [currentQuestion.id]: "not_answered" };
        }
        return prev;
      });
    }
  }, [stage, currentQuestion]);

  // Countdown timer
  useEffect(() => {
    let timer = null;
    if (stage === "testing" && timeLeft > 0 && !testSubmitted) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [stage, timeLeft, testSubmitted]);

  // Handle student registration & mock DB storage
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setDbStatus("storing");

    // Store in browser database (localStorage) to simulate backend record
    try {
      const existing = JSON.parse(localStorage.getItem("edversseedge_mock_registrations") || "[]");
      const record = {
        ...student,
        registeredAt: new Date().toISOString(),
        id: "STU-" + Date.now().toString().slice(-6),
      };
      existing.push(record);
      localStorage.setItem("edversseedge_mock_registrations", JSON.stringify(existing));
    } catch {
      // ignore
    }

    setTimeout(() => {
      setDbStatus("success");
      setSelectedExam(student.exam);
      // Switch active subject to first subject of that exam
      setActiveSubject(student.exam === "jee" ? "Physics" : "Physics");
      setTimeout(() => {
        setStage("instructions");
      }, 1200);
    }, 600);
  };

  // Start test and enter distraction-free full screen
  const startExam = () => {
    setStage("testing");
    setCurrentQIndex(0);
    setTimeLeft(meta.quickDurationMinutes * 60);

    // Request full screen for distraction-free exam hall experience
    try {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } catch {
      // browser may restrict without direct user gesture
    }
  };

  // Option selection
  const handleOptionSelect = (optionIdx) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIdx,
    }));
  };

  // Save & Next
  const handleSaveAndNext = () => {
    if (!currentQuestion) return;
    const isAnswered = answers[currentQuestion.id] !== undefined;
    setStatusMap((prev) => ({
      ...prev,
      [currentQuestion.id]: isAnswered ? "answered" : "not_answered",
    }));
    goToNextQuestion();
  };

  // Mark for Review & Next
  const handleMarkForReview = () => {
    if (!currentQuestion) return;
    const isAnswered = answers[currentQuestion.id] !== undefined;
    setStatusMap((prev) => ({
      ...prev,
      [currentQuestion.id]: isAnswered ? "answered_review" : "review",
    }));
    goToNextQuestion();
  };

  // Clear Response
  const handleClearResponse = () => {
    if (!currentQuestion) return;
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
    setStatusMap((prev) => ({
      ...prev,
      [currentQuestion.id]: "not_answered",
    }));
  };

  const goToNextQuestion = () => {
    if (currentQIndex < subjectQuestions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
    } else {
      // If at end of this subject, jump to next subject if available
      const subjects = meta.subjects;
      const currentSubIdx = subjects.indexOf(activeSubject);
      if (currentSubIdx < subjects.length - 1) {
        setActiveSubject(subjects[currentSubIdx + 1]);
        setCurrentQIndex(0);
      }
    }
  };

  const goToPrevQuestion = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex((prev) => prev - 1);
    }
  };

  // Submit test
  const handleFinalSubmit = () => {
    setTestSubmitted(true);
    setShowSubmitModal(false);
    setStage("result");

    // Exit full screen if active
    try {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    } catch {
      // ignore
    }
  };

  const handleAutoSubmit = () => {
    handleFinalSubmit();
  };

  // Format countdown time
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Diagnostic Score Calculation
  const calculateResults = () => {
    let score = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    const topicStats = {}; // { [topic]: { correct: 0, total: 0, subject: '' } }

    questions.forEach((q) => {
      if (!topicStats[q.topic]) {
        topicStats[q.topic] = { correct: 0, total: 0, subject: q.subject };
      }
      topicStats[q.topic].total += 1;

      const studentAns = answers[q.id];
      if (studentAns === undefined) {
        unattemptedCount += 1;
      } else if (studentAns === q.correctAnswer) {
        score += 4;
        correctCount += 1;
        topicStats[q.topic].correct += 1;
      } else {
        score -= 1;
        incorrectCount += 1;
      }
    });

    // Categorize strong & weak topics
    const strongTopics = [];
    const moderateTopics = [];
    const weakTopics = [];

    Object.keys(topicStats).forEach((topic) => {
      const item = topicStats[topic];
      const accuracy = (item.correct / item.total) * 100;
      if (accuracy >= 75) {
        strongTopics.push({ topic, ...item, accuracy });
      } else if (accuracy >= 50) {
        moderateTopics.push({ topic, ...item, accuracy });
      } else {
        weakTopics.push({ topic, ...item, accuracy });
      }
    });

    const maxMarks = questions.length * 4;
    const percentage = Math.max(0, ((score / maxMarks) * 100).toFixed(1));

    return {
      score,
      maxMarks,
      percentage,
      correctCount,
      incorrectCount,
      unattemptedCount,
      totalQuestions: questions.length,
      strongTopics,
      moderateTopics,
      weakTopics,
    };
  };

  const resultsData = stage === "result" ? calculateResults() : null;

  // Question palette color helper
  const getPaletteColorClass = (qId) => {
    const status = statusMap[qId];
    if (status === "answered") return "palette-answered"; // green
    if (status === "answered_review") return "palette-answered-review"; // purple + green dot
    if (status === "review") return "palette-review"; // purple
    if (status === "not_answered") return "palette-not-answered"; // red
    return "palette-not-visited"; // white / gray
  };

  // =========================================================================
  // STAGE 1: REGISTRATION GATE
  // =========================================================================
  if (stage === "register") {
    return (
      <div className="section page-container-narrow">
        <div className="section-heading text-center">
          <span className="section-tag">National Benchmarking Portal</span>
          <h1 className="section-title">
            EdversseEDGE <span className="text-gradient">Free All-India Mock Test</span>
          </h1>
          <p className="section-subtitle">
            Experience the real NTA computer-based exam platform. Step into a
            secure, full-screen examination hall with authentic JEE Main & NEET-UG
            patterns, timer, negative marking, and deep diagnostic weak-area reports.
          </p>
        </div>

        <div className="enquiry-form-card">
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "#eff6ff",
                color: "#2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
              }}
            >
              📝
            </div>
            <div>
              <h2 style={{ fontFamily: "var(--font-heading)", margin: "0", fontSize: "1.3rem", color: "var(--brand-navy)" }}>
                Student Registration & Test Verification
              </h2>
              <small style={{ color: "#64748b" }}>
                Fill your details to generate your candidate ID and access test modules
              </small>
            </div>
          </div>

          {dbStatus === "success" && (
            <div className="toast-success" style={{ marginBottom: "20px" }}>
              <div>
                <strong>Data Stored Successfully! ✓</strong>
                <p style={{ margin: "4px 0 0", fontSize: "0.86rem" }}>
                  Your student credentials have been registered in our database.
                  Loading exam instructions...
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleRegisterSubmit} className="form-grid">
            <div className="form-group full-width">
              <label className="form-label" htmlFor="mockStudentName">Student Full Name *</label>
              <input
                id="mockStudentName"
                className="form-input"
                required
                placeholder="e.g. Aditya Kulkarni"
                value={student.name}
                onChange={(e) => setStudent({ ...student, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="mockStudentPhone">Mobile / WhatsApp Number *</label>
              <input
                id="mockStudentPhone"
                className="form-input"
                type="tel"
                required
                placeholder="10-digit mobile number"
                value={student.phone}
                onChange={(e) => setStudent({ ...student, phone: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="mockStudentEmail">Email Address *</label>
              <input
                id="mockStudentEmail"
                className="form-input"
                type="email"
                required
                placeholder="name@gmail.com"
                value={student.email}
                onChange={(e) => setStudent({ ...student, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="mockExamSelect">Select Target Exam Track *</label>
              <select
                id="mockExamSelect"
                className="form-select"
                value={student.exam}
                onChange={(e) => setStudent({ ...student, exam: e.target.value })}
              >
                <option value="jee">IIT-JEE Main (Physics, Chemistry, Maths)</option>
                <option value="neet">NEET-UG Medical (Physics, Chem, Biology - 720 Marks)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="mockClassSelect">Current Grade / Standard *</label>
              <select
                id="mockClassSelect"
                className="form-select"
                value={student.currentClass}
                onChange={(e) => setStudent({ ...student, currentClass: e.target.value })}
              >
                <option>Class 11th</option>
                <option>Class 12th (Appearing)</option>
                <option>Class 12th Passed (Dropper / Repeater)</option>
                <option>Class 9th & 10th (Foundation)</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label className="form-label" htmlFor="mockCityInput">City / Location</label>
              <input
                id="mockCityInput"
                className="form-input"
                placeholder="e.g. Pune, Kondhwa, Hadapsar"
                value={student.city}
                onChange={(e) => setStudent({ ...student, city: e.target.value })}
              />
            </div>

            <div className="form-group full-width" style={{ marginTop: "10px" }}>
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
                disabled={dbStatus === "storing"}
              >
                {dbStatus === "storing"
                  ? "Storing Data & Connecting..."
                  : "Save Information & Proceed to Test →"}
              </button>
              <p style={{ textAlign: "center", color: "#64748b", fontSize: "0.82rem", margin: "10px 0 0" }}>
                🔒 100% Free Mock Test. Your information is securely stored to generate your national percentile card.
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // =========================================================================
  // STAGE 2: INSTRUCTIONS SCREEN
  // =========================================================================
  if (stage === "instructions") {
    return (
      <div className="section page-container-narrow">
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "24px",
            padding: "36px",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #e2e8f0", paddingBottom: "16px", marginBottom: "20px" }}>
            <div>
              <span className="badge badge-blue">Candidate: {student.name}</span>
              <h2 style={{ fontFamily: "var(--font-heading)", margin: "6px 0 0", color: "var(--brand-navy)", fontSize: "1.6rem" }}>
                {meta.title}
              </h2>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 800, color: "#1d4ed8" }}>Total Marks: {meta.totalMarks}</div>
              <small style={{ color: "#64748b" }}>Duration: {meta.quickDurationMinutes} Mins</small>
            </div>
          </div>

          <h3 style={{ fontFamily: "var(--font-heading)", color: "#0f172a", fontSize: "1.15rem" }}>
            Standard NTA Examination Instructions:
          </h3>

          <ul style={{ color: "#334155", lineHeight: 1.7, fontSize: "0.95rem", paddingLeft: "20px", display: "grid", gap: "8px" }}>
            <li>
              <strong>Distraction-Free Mode:</strong> Clicking "Start Test Now"
              will lock the interface into full-screen mode. Please do not switch
              tabs or minimize windows during the examination.
            </li>
            <li>
              <strong>Marking Scheme:</strong> Each correct question awards{" "}
              <span style={{ color: "#16a34a", fontWeight: 700 }}>+4 Marks</span>.
              Each incorrect answer deducts{" "}
              <span style={{ color: "#dc2626", fontWeight: 700 }}>-1 Mark</span> (Negative Marking).
              Unattempted questions receive 0 marks.
            </li>
            <li>
              <strong>Palette Colors:</strong>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
                <span className="cbt-legend-chip green">Answered</span>
                <span className="cbt-legend-chip red">Not Answered</span>
                <span className="cbt-legend-chip purple">Marked for Review</span>
                <span className="cbt-legend-chip gray">Not Visited</span>
              </div>
            </li>
            <li>
              <strong>Diagnostic Feedback:</strong> Upon submission, you will
              receive a breakdown of your <strong>Strong Topics</strong> and{" "}
              <strong>Weak Topics</strong> with solutions.
            </li>
          </ul>

          <div
            style={{
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: "14px",
              padding: "16px",
              margin: "24px 0",
              color: "#1e3a8a",
              fontSize: "0.9rem",
            }}
          >
            💡 <strong>Verified Student:</strong> {student.name} ({student.phone}) •{" "}
            <strong>Exam:</strong> {student.exam.toUpperCase()} •{" "}
            <strong>Subjects:</strong> {meta.subjects.join(", ")}
          </div>

          <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setStage("register")}
            >
              ← Edit Info
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={startExam}
            >
              Start Secure Mock Test Now →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // STAGE 3: REAL NTA CBT TESTING INTERFACE (SECURE FULL-SCREEN SIMULATION)
  // =========================================================================
  if (stage === "testing") {
    const isAnswered = answers[currentQuestion.id] !== undefined;

    return (
      <div className="cbt-exam-shell">
        {/* Top Header Bar */}
        <header className="cbt-header">
          <div className="cbt-header-left">
            <span className="cbt-portal-badge">NTA CBT PORTAL</span>
            <div className="cbt-test-info">
              <strong className="cbt-test-title">{meta.title}</strong>
              <small className="cbt-candidate-name">
                Candidate: <strong>{student.name}</strong> (Roll: {student.phone.slice(-5)})
              </small>
            </div>
          </div>

          <div className="cbt-header-right">
            <div className={`cbt-timer ${timeLeft < 300 ? "timer-warning" : ""}`}>
              <span className="cbt-timer-label">Time Remaining:</span>
              <span className="cbt-timer-digits">⏱️ {formatTime(timeLeft)}</span>
            </div>

            <button
              type="button"
              className="cbt-submit-btn"
              onClick={() => setShowSubmitModal(true)}
            >
              Submit Test
            </button>
          </div>
        </header>

        {/* Subject Navigation Tabs Bar */}
        <div className="cbt-subject-strip">
          <div className="cbt-subject-tabs">
            {meta.subjects.map((sub) => {
              const subCount = questions.filter((q) => q.subject === sub).length;
              const subAnswered = questions.filter(
                (q) => q.subject === sub && answers[q.id] !== undefined
              ).length;

              return (
                <button
                  type="button"
                  key={sub}
                  className={`cbt-sub-tab ${activeSubject === sub ? "active" : ""}`}
                  onClick={() => {
                    setActiveSubject(sub);
                    setCurrentQIndex(0);
                  }}
                >
                  <span>{sub}</span>
                  <span className="cbt-sub-badge">
                    {subAnswered}/{subCount}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="cbt-marking-pill">
            Marking: <span style={{ color: "#16a34a" }}>+4.0</span> |{" "}
            <span style={{ color: "#dc2626" }}>-1.0</span>
          </div>
        </div>

        {/* Main CBT Workspace (Question on Left, Palette on Right) */}
        <div className="cbt-workspace">
          {/* Question Panel */}
          <main className="cbt-question-panel">
            <div className="cbt-q-header">
              <span className="cbt-q-number">
                Question No. {currentQIndex + 1} of {subjectQuestions.length}
              </span>
              <span className="cbt-topic-pill">
                Topic: <strong>{currentQuestion.topic}</strong>
              </span>
            </div>

            <div className="cbt-q-body">
              <p className="cbt-q-text">{currentQuestion.question}</p>

              {/* Options list */}
              <div className="cbt-options-grid">
                {currentQuestion.options.map((opt, oIdx) => {
                  const isSelected = answers[currentQuestion.id] === oIdx;

                  return (
                    <label
                      key={opt}
                      className={`cbt-option-item ${isSelected ? "selected" : ""}`}
                      onClick={() => handleOptionSelect(oIdx)}
                    >
                      <input
                        type="radio"
                        name={`q_${currentQuestion.id}`}
                        checked={isSelected}
                        onChange={() => handleOptionSelect(oIdx)}
                      />
                      <span className="cbt-option-marker">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span className="cbt-option-text">{opt}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="cbt-bottom-bar">
              <div className="cbt-actions-left">
                <button
                  type="button"
                  className="cbt-btn cbt-btn-review"
                  onClick={handleMarkForReview}
                >
                  Mark for Review & Next
                </button>
                <button
                  type="button"
                  className="cbt-btn cbt-btn-clear"
                  onClick={handleClearResponse}
                  disabled={!isAnswered}
                >
                  Clear Response
                </button>
              </div>

              <div className="cbt-actions-right">
                <button
                  type="button"
                  className="cbt-btn cbt-btn-prev"
                  onClick={goToPrevQuestion}
                  disabled={currentQIndex === 0}
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  className="cbt-btn cbt-btn-save"
                  onClick={handleSaveAndNext}
                >
                  Save & Next →
                </button>
              </div>
            </div>
          </main>

          {/* Right Palette Panel */}
          <aside className="cbt-palette-panel">
            <div className="cbt-candidate-card">
              <div className="cbt-avatar">
                {student.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <strong style={{ display: "block", fontSize: "0.95rem" }}>
                  {student.name}
                </strong>
                <small style={{ color: "#64748b" }}>{student.exam.toUpperCase()} Aspirant</small>
              </div>
            </div>

            {/* Legend summary */}
            <div className="cbt-legend-box">
              <div className="legend-item">
                <span className="palette-circle palette-answered"></span>
                <span>Answered</span>
              </div>
              <div className="legend-item">
                <span className="palette-circle palette-not-answered"></span>
                <span>Not Answered</span>
              </div>
              <div className="legend-item">
                <span className="palette-circle palette-review"></span>
                <span>Marked for Review</span>
              </div>
              <div className="legend-item">
                <span className="palette-circle palette-not-visited"></span>
                <span>Not Visited</span>
              </div>
            </div>

            {/* Questions Grid for Active Subject */}
            <div className="cbt-palette-title">
              <span>{activeSubject} Questions:</span>
            </div>

            <div className="cbt-matrix-grid">
              {subjectQuestions.map((q, idx) => {
                const colorClass = getPaletteColorClass(q.id);
                const isCurrent = currentQuestion.id === q.id;

                return (
                  <button
                    key={q.id}
                    type="button"
                    className={`cbt-matrix-btn ${colorClass} ${isCurrent ? "current" : ""}`}
                    onClick={() => setCurrentQIndex(idx)}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div style={{ marginTop: "auto", paddingTop: "16px" }}>
              <button
                type="button"
                className="btn btn-primary btn-block btn-sm"
                onClick={() => setShowSubmitModal(true)}
              >
                Submit Examination
              </button>
            </div>
          </aside>
        </div>

        {/* Submit Confirmation Modal */}
        {showSubmitModal && (
          <div className="launch-overlay" role="dialog" aria-modal="true">
            <div className="launch-card" style={{ maxWidth: "520px" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", margin: "0 0 12px", color: "var(--brand-navy)" }}>
                Submit Test Confirmation
              </h3>
              <p style={{ color: "#475569", margin: "0 0 18px", fontSize: "0.94rem" }}>
                Are you sure you want to finish this mock test? Once submitted,
                your diagnostic score card with <strong>Weak & Strong Topics</strong> will be generated.
              </p>

              <div
                style={{
                  background: "#f8fafc",
                  borderRadius: "14px",
                  padding: "16px",
                  marginBottom: "20px",
                  fontSize: "0.9rem",
                  display: "grid",
                  gap: "8px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Total Questions:</span>
                  <strong>{questions.length}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#16a34a" }}>
                  <span>Answered:</span>
                  <strong>{Object.keys(answers).length}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#dc2626" }}>
                  <span>Unanswered:</span>
                  <strong>{questions.length - Object.keys(answers).length}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Time Remaining:</span>
                  <strong>{formatTime(timeLeft)}</strong>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowSubmitModal(false)}
                >
                  Resume Test
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleFinalSubmit}
                >
                  Yes, Submit Now →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // STAGE 4: COMPREHENSIVE DIAGNOSTIC RESULT & TOPIC ANALYSIS
  // =========================================================================
  if (stage === "result" && resultsData) {
    return (
      <div className="section page-container">
        {/* Scorecard Hero Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, #0b1f3a 0%, #16325c 100%)",
            borderRadius: "28px",
            padding: "40px",
            color: "#ffffff",
            boxShadow: "0 20px 40px rgba(11, 31, 58, 0.25)",
            marginBottom: "36px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <span className="badge badge-gold" style={{ marginBottom: "10px" }}>
                ⭐ Official EdversseEDGE Scorecard
              </span>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", margin: "0 0 6px" }}>
                Diagnostic Performance Report
              </h1>
              <p style={{ color: "#cbd5e1", margin: 0 }}>
                Candidate: <strong>{student.name}</strong> • Test:{" "}
                <strong>{meta.title}</strong>
              </p>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                padding: "16px 28px",
                borderRadius: "18px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#fde047" }}>
                Your Score
              </span>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "2.8rem", fontWeight: 900, lineHeight: 1.1 }}>
                {resultsData.score}
                <span style={{ fontSize: "1.2rem", color: "#cbd5e1", fontWeight: 600 }}>
                  /{resultsData.maxMarks}
                </span>
              </div>
              <small style={{ color: "#93c5fd" }}>Accuracy: {resultsData.percentage}%</small>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "14px",
              marginTop: "28px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <div>
              <span style={{ color: "#4ade80", fontSize: "1.4rem", fontWeight: 800 }}>
                {resultsData.correctCount}
              </span>
              <small style={{ display: "block", color: "#cbd5e1" }}>Correct Answers (+{resultsData.correctCount * 4})</small>
            </div>
            <div>
              <span style={{ color: "#f87171", fontSize: "1.4rem", fontWeight: 800 }}>
                {resultsData.incorrectCount}
              </span>
              <small style={{ display: "block", color: "#cbd5e1" }}>Incorrect Answers (-{resultsData.incorrectCount})</small>
            </div>
            <div>
              <span style={{ color: "#fbbf24", fontSize: "1.4rem", fontWeight: 800 }}>
                {resultsData.unattemptedCount}
              </span>
              <small style={{ display: "block", color: "#cbd5e1" }}>Unattempted</small>
            </div>
            <div>
              <span style={{ color: "#38bdf8", fontSize: "1.4rem", fontWeight: 800 }}>
                {resultsData.totalQuestions}
              </span>
              <small style={{ display: "block", color: "#cbd5e1" }}>Total Questions</small>
            </div>
          </div>
        </div>

        {/* WEAK & STRONG TOPICS ANALYSIS (CRITICAL REQUIREMENT) */}
        <div style={{ marginBottom: "40px" }}>
          <div className="section-heading text-center">
            <span className="section-tag">Diagnostic Breakdown</span>
            <h2 className="section-title">Topic-Wise Strength Analysis</h2>
            <p className="section-subtitle">
              Identified by our testing engine based on accuracy and negative marks
              lost. Focus your recovery sessions on weak chapters.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {/* 🔴 Weak Topics Card */}
            <div
              style={{
                background: "#ffffff",
                border: "2px solid #fecaca",
                borderRadius: "20px",
                padding: "24px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <span style={{ fontSize: "1.5rem" }}>🔴</span>
                <div>
                  <h3 style={{ margin: 0, color: "#991b1b", fontSize: "1.15rem" }}>
                    Weak Topics (Needs Recovery)
                  </h3>
                  <small style={{ color: "#64748b" }}>Accuracy below 50% or negative marks</small>
                </div>
              </div>

              {resultsData.weakTopics.length === 0 ? (
                <p style={{ color: "#16a34a", fontWeight: 600 }}>
                  Excellent! No critical weak topics identified.
                </p>
              ) : (
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "10px" }}>
                  {resultsData.weakTopics.map((t) => (
                    <li
                      key={t.topic}
                      style={{
                        background: "#fef2f2",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        border: "1px solid #fee2e2",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <strong style={{ color: "#991b1b", display: "block" }}>{t.topic}</strong>
                        <small style={{ color: "#7f1d1d" }}>{t.subject}</small>
                      </div>
                      <span style={{ color: "#dc2626", fontWeight: 800 }}>
                        {t.correct}/{t.total} ({t.accuracy.toFixed(0)}%)
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div style={{ marginTop: "20px", paddingTop: "14px", borderTop: "1px solid #fee2e2" }}>
                <Link to="/enquire" className="btn btn-primary btn-block btn-sm">
                  Book 1-on-1 Recovery Clinic for Weak Topics →
                </Link>
              </div>
            </div>

            {/* 🟢 Strong Topics Card */}
            <div
              style={{
                background: "#ffffff",
                border: "2px solid #bbf7d0",
                borderRadius: "20px",
                padding: "24px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <span style={{ fontSize: "1.5rem" }}>🟢</span>
                <div>
                  <h3 style={{ margin: 0, color: "#166534", fontSize: "1.15rem" }}>
                    Strong Topics (Mastered)
                  </h3>
                  <small style={{ color: "#64748b" }}>Accuracy 75% and above</small>
                </div>
              </div>

              {resultsData.strongTopics.length === 0 ? (
                <p style={{ color: "#64748b" }}>
                  Attempt more questions accurately to build strong chapters.
                </p>
              ) : (
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "10px" }}>
                  {resultsData.strongTopics.map((t) => (
                    <li
                      key={t.topic}
                      style={{
                        background: "#f0fdf4",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        border: "1px solid #dcfce7",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <strong style={{ color: "#166534", display: "block" }}>{t.topic}</strong>
                        <small style={{ color: "#14532d" }}>{t.subject}</small>
                      </div>
                      <span style={{ color: "#15803d", fontWeight: 800 }}>
                        {t.correct}/{t.total} ({t.accuracy.toFixed(0)}%)
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Solutions Accordion Toggle */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--brand-navy)", margin: 0 }}>
              Question-by-Question Detailed Solutions
            </h3>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setShowSolutions(!showSolutions)}
            >
              {showSolutions ? "Hide Solutions ▲" : "View Step-by-Step Solutions ▼"}
            </button>
          </div>

          {showSolutions && (
            <div style={{ display: "grid", gap: "18px" }}>
              {questions.map((q, idx) => {
                const userAns = answers[q.id];
                const isCorrect = userAns === q.correctAnswer;
                const isSkipped = userAns === undefined;

                return (
                  <article
                    key={q.id}
                    style={{
                      background: "#ffffff",
                      border: `1px solid ${
                        isSkipped ? "#e2e8f0" : isCorrect ? "#86efac" : "#fca5a5"
                      }`,
                      borderRadius: "16px",
                      padding: "20px",
                      boxShadow: "var(--shadow-xs)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                      <span style={{ fontWeight: 800, color: "#0b1f3a" }}>
                        Q{idx + 1}. {q.subject} — {q.topic}
                      </span>
                      <span
                        style={{
                          fontWeight: 700,
                          fontSize: "0.82rem",
                          color: isSkipped
                            ? "#64748b"
                            : isCorrect
                            ? "#15803d"
                            : "#dc2626",
                        }}
                      >
                        {isSkipped
                          ? "⚪ Unattempted (0 Marks)"
                          : isCorrect
                          ? "🟢 Correct (+4 Marks)"
                          : "🔴 Incorrect (-1 Mark)"}
                      </span>
                    </div>

                    <p style={{ margin: "0 0 12px", color: "#1e293b", fontWeight: 600 }}>
                      {q.question}
                    </p>

                    <div style={{ display: "grid", gap: "6px", marginBottom: "14px" }}>
                      {q.options.map((opt, oIdx) => {
                        const isChosen = userAns === oIdx;
                        const isActualCorrect = q.correctAnswer === oIdx;

                        return (
                          <div
                            key={opt}
                            style={{
                              padding: "8px 12px",
                              borderRadius: "8px",
                              fontSize: "0.88rem",
                              background: isActualCorrect
                                ? "#dcfce7"
                                : isChosen
                                ? "#fee2e2"
                                : "#f8fafc",
                              border: `1px solid ${
                                isActualCorrect
                                  ? "#86efac"
                                  : isChosen
                                  ? "#fca5a5"
                                  : "#e2e8f0"
                              }`,
                              fontWeight: isActualCorrect || isChosen ? 700 : 500,
                            }}
                          >
                            <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                            {isActualCorrect && <span style={{ color: "#166534", marginLeft: "8px" }}>✓ (Correct Answer)</span>}
                            {isChosen && !isActualCorrect && <span style={{ color: "#991b1b", marginLeft: "8px" }}>✕ (Your Answer)</span>}
                          </div>
                        );
                      })}
                    </div>

                    <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "12px", borderRadius: "10px", fontSize: "0.88rem", color: "#166534" }}>
                      <strong>Solution Explanation:</strong> {q.explanation}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setStage("register");
              setAnswers({});
              setStatusMap({});
              setTestSubmitted(false);
            }}
          >
            ← Retake Another Mock Test
          </button>
          <Link to="/enquire" className="btn btn-primary btn-lg">
            Schedule 1-on-1 Mentor Recovery Session in Pune →
          </Link>
          <a
            href={contactInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent btn-lg"
          >
            Discuss Result on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return null;
}

export default FreeMockTestPage;
