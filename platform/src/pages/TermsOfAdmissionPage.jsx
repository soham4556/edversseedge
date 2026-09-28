import { Link } from "react-router-dom";
import { contactInfo } from "../data/siteData";

function TermsOfAdmissionPage() {
  const sessionYear = "2026–2027";

  return (
    <div className="section page-container">
      {/* Page Header */}
      <div className="section-heading text-center">
        <span className="section-tag">Institutional Guidelines</span>
        <h1 className="section-title">
          Terms & Conditions of <span className="text-gradient">Admission</span>
        </h1>
        <p className="section-subtitle">
          Code of academic excellence, enrollment policies, fee terms, and student responsibilities at EdversseEDGE Pune.
        </p>
        <div style={{ marginTop: "12px", fontSize: "0.85rem", color: "#64748b" }}>
          Applicable for Academic Year <strong>{sessionYear}</strong> • Updated September 2026
        </div>
      </div>

      {/* Main Container Card */}
      <div className="legal-card">
        {/* Important Notice Callout */}
        <div className="legal-callout legal-callout-gold">
          <div className="legal-callout-icon">📋</div>
          <div>
            <h4>Student & Parent Academic Partnership</h4>
            <p>
              Admission to EdversseEDGE implies an explicit commitment to disciplined study, mandatory attendance in testing cycles, and active collaboration between student, parents, and faculty mentors.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <div className="legal-section">
          <h3>1. Enrollment & Admission Formalities</h3>
          <ul className="legal-list">
            <li>
              <strong>Eligibility:</strong> Admission to any of our programs (IIT-JEE 2-Year, NEET Medical, Target Dropper, or Foundation 9th–10th) is granted on the basis of candidate performance in the EDGE-SAT Entrance/Scholarship Test or verified previous board score cutoffs.
            </li>
            <li>
              <strong>Mandatory Documentation:</strong> Admission is considered provisional until true copies of the previous grade marksheet, two passport-sized photographs, and a valid government ID of the parent/guardian are submitted at our Kondhwa Pune center.
            </li>
            <li>
              <strong>Batch Cap of 28–30 Students:</strong> In alignment with our small-batch pedagogical philosophy, each classroom batch is strictly capped at 28 to 30 students. Once a batch fills up, subsequent candidates are placed on a verified waiting list or assigned to the next available schedule.
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="legal-section">
          <h3>2. Fee Structure, Installments & Modes of Payment</h3>
          <p>
            EdversseEDGE maintains a completely transparent fee schedule without hidden library or examination charges:
          </p>
          <div className="legal-grid">
            <div className="legal-box">
              <span className="legal-box-badge">Tuition Fee</span>
              <p>Covers regular classroom lectures, doubt resolution clinics, concept revision workshops, and faculty mentorship hours.</p>
            </div>
            <div className="legal-box">
              <span className="legal-box-badge">Academic Study Kit</span>
              <p>Includes printed theory modules, daily practice problem (DPP) sets, NCERT booster exercise workbooks, and PYQ banks.</p>
            </div>
            <div className="legal-box">
              <span className="legal-box-badge">Testing & AITS Portal</span>
              <p>Access to our NTA-calibrated CBT exam portal, weekly OMR/diagnostic tests, and AI error analysis dashboard.</p>
            </div>
            <div className="legal-box">
              <span className="legal-box-badge">Installment Flexibility</span>
              <p>Fees may be paid in full or via interest-free milestone installments agreed upon at the time of admission enrollment.</p>
            </div>
          </div>
          <p style={{ marginTop: "16px", fontSize: "0.9rem", color: "#475569" }}>
            * All fees are subject to statutory GST as mandated by the Government of India. Receipts are issued digitally and via official stamped printed copies.
          </p>
        </div>

        {/* Section 3 */}
        <div className="legal-section">
          <h3>3. Fee Refund & Cancellation Policy</h3>
          <p>
            We adhere to a fair and transparent refund framework compliant with educational guidelines:
          </p>
          <ul className="legal-list">
            <li>
              <strong>Before Batch Commencement:</strong> If an admission cancellation is submitted in writing prior to the official batch start date, 100% of the tuition fee is refunded, minus a non-refundable administrative processing fee of ₹5,000.
            </li>
            <li>
              <strong>Within First 14 Days:</strong> If a student requests cancellation within the first 14 calendar days of class commencement, tuition fee is refunded on a pro-rata basis for classes attended, minus study kit and administrative fees.
            </li>
            <li>
              <strong>After 14 Days of Classes:</strong> Due to batch seat limitation (28 seats strictly locked), no fee refund requests will be entertained after 14 days of class commencement, as the seat cannot be reallocated mid-term.
            </li>
            <li>
              <strong>Non-Transferability:</strong> Admission is strictly non-transferable to any other student or third party.
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="legal-section">
          <h3>4. Classroom Discipline & Attendance Norms</h3>
          <p>
            To uphold the serious academic environment necessary for top percentiles in JEE and NEET:
          </p>
          <ul className="legal-list">
            <li>
              <strong>Minimum 85% Attendance:</strong> Regular attendance is mandatory. Any student with unexcused absences exceeding 3 consecutive lectures will be flagged for a mandatory parental review meeting.
            </li>
            <li>
              <strong>Mobile Phone Policy:</strong> Use of mobile phones inside lecture halls is strictly restricted to educational activities directed by the teacher. Phones must remain in silent bags during class hours.
            </li>
            <li>
              <strong>Testing Compliance:</strong> Missing weekly Sunday mock tests or AITS exams without prior medical leave notice is considered a breach of academic discipline and will result in temporary suspension of mentorship access until test completion.
            </li>
            <li>
              <strong>Zero Tolerance for Harassment:</strong> Any indiscipline, bullying, damage to campus property, or unethical behavior will result in immediate termination of admission with no refund.
            </li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="legal-section">
          <h3>5. EDGE-SAT Scholarship Conditions</h3>
          <ul className="legal-list">
            <li>
              Scholarship tuition waivers won through the EDGE-SAT test apply exclusively to the tuition component of the fee.
            </li>
            <li>
              To retain the scholarship waiver into Year-2 (for 2-Year integrated batches), the student must maintain a minimum of 80% marks in institute internal cumulative tests and an attendance record of 85% or above.
            </li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="legal-section">
          <h3>6. Intellectual Property & Study Material</h3>
          <p>
            All printed books, Daily Practice Problem (DPP) booklets, digital question banks, test solutions, video lectures, and diagnostic software developed by EdversseEDGE Education Pvt. Ltd. are proprietary intellectual property. Unauthorized reproduction, scanning, sharing in public Telegram/WhatsApp channels, or commercial distribution is illegal and subject to strict legal prosecution under copyright laws.
          </p>
        </div>

        {/* Section 7 */}
        <div className="legal-section">
          <h3>7. Legal Jurisdiction</h3>
          <p>
            Any disputes, claims, or legal matters arising out of or in connection with student admission or institutional policies shall be subject to the exclusive jurisdiction of the competent courts in <strong>Pune, Maharashtra, India</strong>.
          </p>
          <div className="legal-contact-panel">
            <div>
              <strong>Admissions Office:</strong> Student Counseling & Enrolment Cell
              <br />
              <strong>Center Address:</strong> {contactInfo.address} ({contactInfo.landmark})
              <br />
              <strong>Contact Line:</strong> {contactInfo.phoneFormatted} • <strong>Email:</strong> {contactInfo.email}
            </div>
            <div style={{ alignSelf: "center" }}>
              <Link to="/enquire" className="btn btn-primary btn-sm">
                Enquire for Admission →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfAdmissionPage;
