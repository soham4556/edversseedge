import { NavLink } from "react-router-dom";
import { courses } from "../data/siteData";

function CoursesPage() {
  return (
    <section className="section page-container">
      <div className="section-heading">
        <h2>Courses</h2>
        <p>Choose a program aligned with your target exam</p>
      </div>

      <div className="courses-strip">
        <div>
          <strong>3</strong>
          <span>Core Learning Tracks</span>
        </div>
        <div>
          <strong>Weekly</strong>
          <span>Tests + Performance Reports</span>
        </div>
        <div>
          <strong>Expert</strong>
          <span>Mentor Guidance</span>
        </div>
      </div>

      <div className="courses-layout">
        {courses.map((course) => (
          <article className="course-detail-card" key={course.title}>
            {course.popular && <span className="ribbon">Most Popular</span>}
            <header className="course-detail-head">
              <div className="course-head-left">
                {course.icon && (
                  <img src={course.icon} alt="" className="course-icon" />
                )}
                <div>
                  <h3>{course.title}</h3>
                  <span className="course-tag">{course.mode}</span>
                </div>
              </div>
            </header>

            <p className="course-detail-copy">{course.description}</p>

            <div className="course-meta-row">
              <p>
                <strong>Stream:</strong> {course.stream}
              </p>
              <p>
                <strong>Duration:</strong> {course.duration}
              </p>
            </div>

            <ul className="course-feature-list">
              {course.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <NavLink to="/enquire" className="course-apply-link">
              Apply for this course
            </NavLink>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CoursesPage;
