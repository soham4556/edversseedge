function AboutPage() {
  return (
    <section className="section page-container">
      <div className="section-heading">
        <h2>About EdversseEDGE</h2>
        <p>Empowering students through smart strategy and strong execution</p>
      </div>

      <div className="about-hero about-premium">
        <img
          src="/src/assets/icons/about.svg"
          alt="EdversseEDGE"
          className="about-icon"
        />
        <div className="about-content">
          <h3>We make preparation measurable and meaningful</h3>
          <p>
            EdversseEDGE blends concept-first teaching, diagnostic testing, and
            mentor-led recovery plans to help students achieve top performance
            in boards and national entrance exams.
          </p>

          <div className="about-mission">
            <div>
              <strong>Mission</strong>
              <p className="muted">
                Deliver results through focused mentoring.
              </p>
            </div>
            <div>
              <strong>Vision</strong>
              <p className="muted">
                Create confident learners who lead change.
              </p>
            </div>
          </div>

          <div className="pillars-grid">
            <article className="pillar-card">
              <h4>Concept-First</h4>
              <p className="muted">
                Deep conceptual clarity before application.
              </p>
            </article>

            <article className="pillar-card">
              <h4>Assessment-Led</h4>
              <p className="muted">
                Regular tests with personalised analytics.
              </p>
            </article>

            <article className="pillar-card">
              <h4>Mentor Support</h4>
              <p className="muted">One-on-one recovery and doubt clinics.</p>
            </article>
          </div>

          <div className="about-cta">
            <a className="btn btn-primary" href="/enquire">
              Apply Now
            </a>
            <a className="btn btn-ghost" href="/contact">
              Visit Center
            </a>
          </div>
        </div>
      </div>

      <section className="section" aria-label="Our team">
        <div className="section-heading">
          <h3>Meet Our Mentors</h3>
          <p className="muted">Experienced faculty guiding every step</p>
        </div>

        <div className="team-grid">
          <article className="detail-card">
            <h4>Dr. R. Sharma</h4>
            <p className="muted">Physics Mentor • 12+ years</p>
            <p>Specialises in problem solving and concept reinforcement.</p>
          </article>

          <article className="detail-card">
            <h4>Ms. S. Desai</h4>
            <p className="muted">Chemistry Mentor • 10+ years</p>
            <p>Focus on application and exam strategy for NEET aspirants.</p>
          </article>

          <article className="detail-card">
            <h4>Mr. A. Kulkarni</h4>
            <p className="muted">Mathematics Mentor • 15+ years</p>
            <p>Known for clarity in calculus and advanced problem sets.</p>
          </article>
        </div>
      </section>
    </section>
  );
}

export default AboutPage;
