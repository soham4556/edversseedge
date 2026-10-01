import { Link } from "react-router-dom";
import { classesAndSubjects, contactInfo } from "../data/siteData";

function ClassesPage() {
  return (
    <div className="page-shell classes-page">
      <section className="page-header-banner">
        <div className="page-container">
          <span className="badge badge-gold">Academics</span>
          <h1 className="banner-title">
            Classes &amp; Subjects <span className="gold-shimmer-text">Taught in Pune</span>
          </h1>
          <p className="banner-desc">
            From foundational school conceptual clarity for Classes 8–10 to rigorous Class 11–12 board and entrance prep in Physics, Chemistry, Maths &amp; Biology.
          </p>

          <div className="banner-actions">
            <Link to="/enquire" className="btn btn-primary btn-lg">
              Book a Free Demo Session →
            </Link>
            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              💬 WhatsApp Query
            </a>
          </div>
        </div>
      </section>

      <section className="tuition-section">
        <div className="page-container">
          {classesAndSubjects.map((item, index) => (
            <div key={item.id} className="classes-deep-card">
              <div className="classes-deep-header">
                <div>
                  <span className="badge badge-gold">{item.badge}</span>
                  <h2>{item.title}</h2>
                  <p className="sub-heading-text">{item.subtitle}</p>
                </div>
                <div className="boards-pill-tag">
                  {item.boards}
                </div>
              </div>

              <p className="class-narrative-desc">{item.desc}</p>

              <div className="subjects-table-grid">
                {item.subjects.map((sub, sIdx) => (
                  <div key={sIdx} className="subject-item-box">
                    <div className="subject-box-num">0{sIdx + 1}</div>
                    <div className="subject-box-meta">
                      <strong>{sub.name}</strong>
                      <p>{sub.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="class-card-action-bar">
                <div className="duration-note">
                  <span>Schedule: </span>
                  <strong>{item.duration}</strong>
                </div>
                <div className="action-buttons-wrap">
                  <Link to="/enquire" className="btn btn-primary btn-sm">
                    Book Demo for {item.title} →
                  </Link>
                  <a
                    href={`https://wa.me/919766715666?text=Hello%2C%20I%20want%20to%20enquire%20about%20${encodeURIComponent(item.title)}%20tuition%20in%20Pune.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp-subtle btn-sm"
                  >
                    💬 WhatsApp Fee Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bottom-cta-banner">
        <div className="page-container text-center">
          <h2>Need guidance choosing the right subjects?</h2>
          <p>Get a direct academic counseling call with Sudhaanshu Sir.</p>
          <div className="mt-4 flex-center gap-3">
            <Link to="/enquire" className="btn btn-primary btn-lg">
              Book a Free Demo Class
            </Link>
            <a href={`tel:${contactInfo.phoneRaw}`} className="btn btn-ghost btn-lg">
              📞 Call {contactInfo.phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClassesPage;
