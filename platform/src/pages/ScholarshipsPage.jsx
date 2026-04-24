function ScholarshipsPage() {
  return (
    <section className="section page-container">
      <div className="section-heading">
        <h2>Scholarships</h2>
        <p>Merit-based fee support for deserving students</p>
      </div>

      <div className="scholar-grid">
        <div className="scholar-left">
          <img
            src="/icons/scholarship.svg"
            alt=""
            className="scholar-icon"
          />
          <h3>Merit & Need Based Support</h3>
          <p className="muted">
            High-value waivers and priority batch allocation for top performers.
          </p>
          <a className="btn btn-primary" href="/enquire">
            Apply for Scholarship
          </a>
        </div>

        <div className="scholar-cards">
          <article className="detail-card">
            <h4>Eligibility</h4>
            <p>Apply via scholarship test or high academic record.</p>
          </article>

          <article className="detail-card">
            <h4>Benefits</h4>
            <p>Fee waivers, mentor support, and fast-track batch placement.</p>
          </article>

          <article className="detail-card">
            <h4>Process</h4>
            <p>
              Submit enquiry, take scholarship assessment, receive offer within
              7 days.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ScholarshipsPage;
