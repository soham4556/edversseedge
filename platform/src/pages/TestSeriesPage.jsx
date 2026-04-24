function TestSeriesPage() {
  return (
    <section className="section page-container">
      <div className="section-heading">
        <h2>Test Series</h2>
        <p>Exam-like practice with deep performance feedback</p>
      </div>

      <div className="services-grid">
        <article className="service-card">
          <img
            src="/src/assets/icons/testseries.svg"
            alt=""
            className="service-icon"
          />
          <h3>Weekly Topic Tests</h3>
          <p>Focused tests after every chapter to ensure concept retention.</p>
          <div className="card-actions">
            <a className="btn btn-primary" href="/enquire">
              Join Weekly
            </a>
          </div>
        </article>

        <article className="service-card">
          <img
            src="/src/assets/icons/testseries.svg"
            alt=""
            className="service-icon"
          />
          <h3>Full-Length Mocks</h3>
          <p>JEE/NEET pattern tests with time management training.</p>
          <div className="card-actions">
            <a className="btn btn-primary" href="/enquire">
              Book Mock
            </a>
          </div>
        </article>

        <article className="service-card">
          <img
            src="/src/assets/icons/testseries.svg"
            alt=""
            className="service-icon"
          />
          <h3>Performance Analytics</h3>
          <p>
            Accuracy, speed, and weak-area reports with mentor action plans.
          </p>
          <div className="card-actions">
            <a className="btn btn-primary" href="/enquire">
              Get Analysis
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default TestSeriesPage;
