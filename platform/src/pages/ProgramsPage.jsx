import { programs } from "../data/siteData";

function ProgramsPage() {
  return (
    <section className="section page-container">
      <div className="section-heading">
        <h2>Programs</h2>
        <p>Structured academic tracks for consistent outcomes</p>
      </div>

      <div className="programs-grid">
        {programs.map((program) => (
          <article className="program-card" key={program.title}>
            <header className="program-head">
              <img
                src="/src/assets/icons/programs.svg"
                alt=""
                className="program-icon"
              />
              <div>
                <h3>{program.title}</h3>
                <p className="muted">Program highlights</p>
              </div>
            </header>

            <ul className="program-points">
              {program.points.map((point) => (
                <li key={point} className="program-point">
                  {point}
                </li>
              ))}
            </ul>

            <div className="program-footer">
              <a className="btn btn-primary" href="/enquire">
                Enquire
              </a>
              <a className="btn btn-ghost" href="/contact">
                Schedule Visit
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProgramsPage;
