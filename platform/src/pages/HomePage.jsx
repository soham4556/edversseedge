import { NavLink } from "react-router-dom";
import { courses, highlights, results } from "../data/siteData";

function HomePage() {
  return (
    <>
      <section className="hero-section page-container">
        <div className="hero-content">
          <div>
            <div className="hero-top">
              <span className="hero-badge">Admissions Open</span>
              <p className="hero-kicker">
                Empowering Students to Learn Smarter
              </p>
            </div>

            <h1>Learn Smart. Lead Strong.</h1>
            <p className="hero-copy">
              EdversseEDGE blends concept-first teaching, adaptive testing, and
              mentor-led recovery to deliver measurable academic progress.
            </p>

            <div className="hero-actions">
              <NavLink to="/courses" className="btn btn-primary">
                Explore Courses
              </NavLink>
              <NavLink to="/enquire" className="btn btn-ghost">
                Start Admission
              </NavLink>
            </div>

            <ul className="hero-stats">
              <li>
                <strong>95%</strong>
                <span>Average Pass Rate</span>
              </li>
              <li>
                <strong>1200+</strong>
                <span>Hours of Content</span>
              </li>
              <li>
                <strong>100+</strong>
                <span>Top Rankers</span>
              </li>
            </ul>

            <div className="hero-app">
              <a className="app-badge" href="/download">
                <img src="/icons/android.svg" alt="Android" />
                <div>
                  <div style={{ fontWeight: 800 }}>
                    Download Our Android App
                  </div>
                  <div className="muted" style={{ fontSize: "0.82rem" }}>
                    Get live classes, tests & progress on the go
                  </div>
                </div>
              </a>

              <p className="hero-motivational">
                Give your child the best start — personalised mentoring, regular
                diagnostics and a proven roadmap to top ranks. Join our app for
                daily practice, progress tracking and mentor support.
              </p>
            </div>
          </div>

          <div className="hero-image" role="img" aria-label="Students learning">
            <div className="hero-accent" />
          </div>
        </div>
      </section>

      <section className="section page-container">
        <div className="section-heading">
          <h2>Our Courses</h2>
          <p>Board + Competitive exam excellence pathways</p>
        </div>
        <div className="home-course-preview">
          {courses.slice(0, 3).map((course) => (
            <article className="preview-card" key={course.title}>
              {course.icon && (
                <img src={course.icon} alt="" className="preview-icon" />
              )}
              <div>
                <h3>{course.title}</h3>
                <p className="muted">
                  {course.duration} • {course.stream}
                </p>
                <p>{course.description}</p>
                <NavLink to="/enquire" className="btn btn-primary">
                  Apply
                </NavLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section why-us page-container">
        <div className="section-heading">
          <h2>Why EdversseEDGE?</h2>
          <p>Your gateway to IITs and top medical colleges</p>
        </div>
        <ul className="highlight-grid">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section page-container">
        <div className="section-heading">
          <h2>Success Stories</h2>
          <p>Real students. Real ranks.</p>
        </div>

        <div className="testimonial-grid">
          {results.map((r) => (
            <article className="testimonial-card" key={`${r.name}-${r.exam}`}>
              <h4>{r.name}</h4>
              <p className="muted">{r.exam}</p>
              <strong className="testimonial-score">{r.score}</strong>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
