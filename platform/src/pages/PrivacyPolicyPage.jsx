import { Link } from "react-router-dom";
import { contactInfo } from "../data/siteData";

function PrivacyPolicyPage() {
  const lastUpdated = "September 2026";

  return (
    <div className="section page-container">
      {/* Page Header */}
      <div className="section-heading text-center">
        <span className="section-tag">Transparency & Trust</span>
        <h1 className="section-title">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <p className="section-subtitle">
          How EdversseEDGE Education Pvt. Ltd. collects, safeguards, and respects student and parent information.
        </p>
        <div style={{ marginTop: "12px", fontSize: "0.85rem", color: "#64748b" }}>
          Last Updated: <strong>{lastUpdated}</strong> • Effective for Academic Session 2026–2027
        </div>
      </div>

      {/* Main Container Card */}
      <div className="legal-card">
        {/* Important Notice Callout */}
        <div className="legal-callout">
          <div className="legal-callout-icon">🛡️</div>
          <div>
            <h4>Our Core Privacy Commitment</h4>
            <p>
              EdversseEDGE maintains strict institutional confidentiality. We <strong>never</strong> sell, trade, or rent personal contact numbers or academic records of students or parents to third-party telemarketers, banks, or external marketing agencies.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <div className="legal-section">
          <h3>1. Information We Collect</h3>
          <p>
            When students or parents interact with EdversseEDGE through our Kondhwa campus, website, mobile application, or free mock tests, we collect information necessary to deliver educational excellence:
          </p>
          <ul className="legal-list">
            <li>
              <strong>Candidate Details:</strong> Student's full legal name, date of birth, gender, photograph, current standard/class (9th, 10th, 11th, 12th, or Dropper), school/college name, and target competitive exam (JEE Main, JEE Advanced, NEET-UG, MHT-CET, or Boards).
            </li>
            <li>
              <strong>Guardian Contact Information:</strong> Parent/guardian name, relationship, primary mobile phone number, WhatsApp number, email address, and residential address in Pune or hometown.
            </li>
            <li>
              <strong>Academic Performance Data:</strong> Previous board scores, marks in school examinations, scores obtained in the EDGE-SAT scholarship exam, weekly chapter tests, diagnostic mock tests, and All-India Test Series (AITS).
            </li>
            <li>
              <strong>Digital Device & App Telemetry:</strong> Log data when using our student portal or Android App, including device model, operating system version, test completion timestamps, lecture watch progress, and IP address for account security.
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="legal-section">
          <h3>2. How We Use Collected Information</h3>
          <p>The information provided is utilized solely for academic coaching, mentorship, and administrative operations:</p>
          <div className="legal-grid">
            <div className="legal-box">
              <span className="legal-box-badge">Academic Delivery</span>
              <p>Assigning students to capped batches of 28, scheduling 1-on-1 recovery clinics, tracking lecture attendance, and issuing study modules.</p>
            </div>
            <div className="legal-box">
              <span className="legal-box-badge">AI Diagnostic Reports</span>
              <p>Analyzing test response sheets to pinpoint conceptual weak areas in Physics, Chemistry, Mathematics, or Biology for personalized debriefs.</p>
            </div>
            <div className="legal-box">
              <span className="legal-box-badge">Parent Updates</span>
              <p>Sending automated SMS/WhatsApp alerts for daily classroom attendance, test scores, monthly academic progress cards, and scheduled counseling meets.</p>
            </div>
            <div className="legal-box">
              <span className="legal-box-badge">Scholarship Verification</span>
              <p>Validating scorecards submitted for EDGE-SAT fee waivers and government-recognized merit honors.</p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="legal-section">
          <h3>3. Digital Security & Exam Integrity</h3>
          <p>
            Our online CBT examination simulator and student mobile applications incorporate security protocols to protect student privacy and preserve exam fairness:
          </p>
          <ul className="legal-list">
            <li>
              <strong>Data Encryption:</strong> All information transmitted between your browser or mobile phone and our servers is secured using Industry-Standard 256-bit TLS/SSL encryption.
            </li>
            <li>
              <strong>CBT Exam Proctoring Data:</strong> During online mock tests, test session parameters (focus loss, screen switches, duration per question) are logged purely to calculate diagnostic analytics and prevent fraudulent attempts.
            </li>
            <li>
              <strong>Confidentiality Agreements:</strong> All faculty members, academic mentors, and administrative staff at EdversseEDGE are bound by non-disclosure agreements regarding student performance records and personal phone numbers.
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="legal-section">
          <h3>4. Campus CCTV & Safety Protocols</h3>
          <p>
            For the safety, security, and well-being of our students and faculty, all classrooms, study halls, corridors, and reception areas at our Kondhwa, Pune campus are equipped with 24x7 HD CCTV surveillance. Footages are strictly confidential, maintained for statutory safety compliance, and accessible only by authorized administrative personnel.
          </p>
        </div>

        {/* Section 5 */}
        <div className="legal-section">
          <h3>5. Student & Parent Rights</h3>
          <p>You have full authority over your personal information held with us:</p>
          <ul className="legal-list">
            <li>
              <strong>Review & Rectification:</strong> You can review or request corrections to contact numbers, email addresses, or academic records by visiting our Pune center reception or writing to support.
            </li>
            <li>
              <strong>Promotional Communications Opt-Out:</strong> While transactional academic alerts (attendance and test marks) are compulsory for enrolled students, you may opt out of non-essential promotional SMS/WhatsApp updates at any time.
            </li>
            <li>
              <strong>Data Deletion on Course Completion:</strong> Upon graduating or completing your academic tenure with EdversseEDGE, detailed digital records can be archived or deleted upon formal request, subject to statutory taxation and audit guidelines.
            </li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="legal-section">
          <h3>6. Grievance Officer & Contact</h3>
          <p>
            In accordance with the Information Technology Act and applicable Indian digital privacy regulations, if you have any questions, concerns, or grievances regarding our privacy practices, please contact our designated Grievance Officer:
          </p>
          <div className="legal-contact-panel">
            <div>
              <strong>Grievance Officer:</strong> Administration & Student Welfare Cell
              <br />
              <strong>Institution:</strong> EdversseEDGE Education Pvt. Ltd.
              <br />
              <strong>Campus Address:</strong> {contactInfo.address} ({contactInfo.landmark})
              <br />
              <strong>Official Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <br />
              <strong>Helpline:</strong> <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}>{contactInfo.phoneFormatted}</a>
            </div>
            <div style={{ alignSelf: "center" }}>
              <Link to="/contact" className="btn btn-primary btn-sm">
                Contact Campus Reception →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
