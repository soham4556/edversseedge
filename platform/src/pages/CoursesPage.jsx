import { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/siteData";

function CoursesPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const displayedCourses =
    selectedFilter === "all"
      ? courses
      : courses.filter((c) => c.category === selectedFilter);

  return (
    <div className="section page-container">
      {/* Header Banner */}
      <div className="section-heading text-center">
        <span className="section-tag">Academic Offerings 2026-27</span>
        <h1 className="section-title">
          Explore Our <span className="text-gradient">Structured Courses</span>
        </h1>
        <p className="section-subtitle">
          Comprehensive preparation programs designed by experienced IITians and
          doctors. Every batch is capped at 25-28 students for guaranteed personal focus.
        </p>
      </div>

      {/* Value Badges Strip */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginBottom: "36px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <span style={{ fontSize: "2rem" }}>🎯</span>
          <div>
            <strong style={{ color: "#0b1f3a", display: "block" }}>
              Max 28 Batch Size
            </strong>
            <small style={{ color: "#64748b" }}>
              Every student gets individual attention
            </small>
          </div>
        </div>

        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <span style={{ fontSize: "2rem" }}>📊</span>
          <div>
            <strong style={{ color: "#0b1f3a", display: "block" }}>
              Weekly AITS Tests
            </strong>
            <small style={{ color: "#64748b" }}>
              NTA CBT interface & rank diagnostics
            </small>
          </div>
        </div>

        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <span style={{ fontSize: "2rem" }}>👨‍🏫</span>
          <div>
            <strong style={{ color: "#0b1f3a", display: "block" }}>
              1-on-1 Mentor Clinics
            </strong>
            <small style={{ color: "#64748b" }}>
              Dedicated weekly recovery sessions
            </small>
          </div>
        </div>

        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <span style={{ fontSize: "2rem" }}>📱</span>
          <div>
            <strong style={{ color: "#0b1f3a", display: "block" }}>
              EdversseEDGE App
            </strong>
            <small style={{ color: "#64748b" }}>
              Lecture recordings & DPP video solutions
            </small>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        <button
          type="button"
          className={`tab-btn ${selectedFilter === "all" ? "active" : ""}`}
          onClick={() => setSelectedFilter("all")}
        >
          All Programs ({courses.length})
        </button>
        <button
          type="button"
          className={`tab-btn ${selectedFilter === "engineering" ? "active" : ""}`}
          onClick={() => setSelectedFilter("engineering")}
        >
          Engineering (IIT-JEE)
        </button>
        <button
          type="button"
          className={`tab-btn ${selectedFilter === "medical" ? "active" : ""}`}
          onClick={() => setSelectedFilter("medical")}
        >
          Medical (NEET-UG)
        </button>
        <button
          type="button"
          className={`tab-btn ${selectedFilter === "boards" ? "active" : ""}`}
          onClick={() => setSelectedFilter("boards")}
        >
          Boards (11th & 12th)
        </button>
        <button
          type="button"
          className={`tab-btn ${selectedFilter === "repeaters" ? "active" : ""}`}
          onClick={() => setSelectedFilter("repeaters")}
        >
          Dropper / Repeater
        </button>
        <button
          type="button"
          className={`tab-btn ${selectedFilter === "foundation" ? "active" : ""}`}
          onClick={() => setSelectedFilter("foundation")}
        >
          Pre-Foundation (9-10th)
        </button>
      </div>

      {/* Course Cards Detailed Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
          gap: "28px",
        }}
      >
        {displayedCourses.map((course) => (
          <article
            className={`course-card ${course.popular ? "featured" : ""}`}
            key={course.id}
          >
            {course.badge && (
              <span className="course-ribbon">{course.badge}</span>
            )}

            <div className="course-header">
              <div className="course-icon-box">
                <img src={course.icon} alt="" />
              </div>
              <div>
                <span className="course-category">{course.categoryLabel}</span>
                <h2 className="course-title">{course.title}</h2>
              </div>
            </div>

            <p className="course-desc">{course.description}</p>

            <div className="course-meta-tags">
              <span className="meta-pill">📅 {course.duration}</span>
              <span className="meta-pill">👥 {course.batchSize}</span>
              <span className="meta-pill">🏫 {course.mode}</span>
            </div>

            {/* Curriculum breakdown */}
            <div style={{ marginBottom: "18px" }}>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  color: "#64748b",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Curriculum Focus:
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {course.curriculum.map((item) => (
                  <span
                    key={item}
                    style={{
                      background: "#eff6ff",
                      color: "#1e3a8a",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      padding: "4px 8px",
                      borderRadius: "6px",
                      border: "1px solid #bfdbfe",
                    }}
                  >
                    • {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Features list */}
            <ul className="course-features-list">
              {course.features.map((feature) => (
                <li key={feature}>
                  <span className="feature-check">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="course-footer">
              <Link to="/enquire" className="btn btn-primary btn-block">
                Apply for Admission / Demo →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Counseling Callout */}
      <div
        style={{
          marginTop: "48px",
          background: "#eff6ff",
          border: "1px solid #bfdbfe",
          borderRadius: "20px",
          padding: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h3 style={{ margin: "0 0 6px", color: "var(--brand-navy)" }}>
            Need Help Deciding the Right Batch?
          </h3>
          <p style={{ margin: 0, color: "#334155" }}>
            Speak directly with our Academic Counselors in Kondhwa, Pune. We will
            assess your strengths and suggest the best academic pathway.
          </p>
        </div>
        <Link to="/enquire" className="btn btn-accent">
          Schedule Free Counseling
        </Link>
      </div>
    </div>
  );
}

export default CoursesPage;
