import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import multer from "multer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory Multer storage for attached resumes (keeps server stateless & fast)
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
  fileFilter: (req, file, cb) => {
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (allowed.includes(file.mimetype) || file.originalname.match(/\.(pdf|doc|docx)$/i)) {
      cb(null, true);
    } else {
      cb(new Error("Please upload a valid PDF or Word document (.pdf, .doc, .docx)"));
    }
  },
});

// Configure Nodemailer with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER || "edversseedge@gmail.com",
    pass: process.env.SMTP_PASS || "rvuwylcbvgbpedfx",
  },
});

// Health & SMTP verification check
app.get("/api/health", async (req, res) => {
  try {
    await transporter.verify();
    res.json({ status: "ok", smtp: "connected", email: process.env.SMTP_USER });
  } catch (err) {
    res.status(500).json({ status: "error", smtp: "failed", error: err.message });
  }
});

// Endpoint: Teacher / Faculty Application
app.post("/api/careers/apply", upload.single("resume"), async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      qualification,
      experience,
      subjects,
      formats,
      puneAreas,
      currentRole,
      message,
    } = req.body;

    if (!fullName || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Full Name, Email, and Phone number are required fields.",
      });
    }

    const adminEmail = process.env.ADMIN_EMAIL || "edversseedge@gmail.com";
    const appliedTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Attachments for Admin Email (if resume uploaded)
    const attachments = [];
    if (req.file) {
      attachments.push({
        filename: req.file.originalname,
        content: req.file.buffer,
        contentType: req.file.mimetype,
      });
    }

    // --- EMAIL 1: Notification to Admin / Sir (edversseedge@gmail.com) ---
    const adminMailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #0f172a; }
        .mail-card { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
        .mail-header { background: linear-gradient(135deg, #071324 0%, #0f274a 100%); color: #ffffff; padding: 28px 32px; }
        .mail-badge { display: inline-block; background: #f59e0b; color: #071324; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 12px; border-radius: 999px; margin-bottom: 8px; }
        .mail-header h1 { margin: 0; font-size: 22px; font-weight: 800; }
        .mail-header p { margin: 6px 0 0 0; color: #94a3b8; font-size: 13px; }
        .mail-body { padding: 32px; }
        .candidate-hero { background: #f8fafc; border-left: 4px solid #2563eb; padding: 16px 20px; border-radius: 0 12px 12px 0; margin-bottom: 24px; }
        .candidate-hero h2 { margin: 0 0 4px 0; font-size: 19px; color: #0f172a; }
        .candidate-hero p { margin: 0; color: #64748b; font-size: 14px; font-weight: 500; }
        .details-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        .details-table th, .details-table td { padding: 12px 14px; text-align: left; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
        .details-table th { width: 35%; color: #64748b; font-weight: 600; background: #fafcff; }
        .details-table td { color: #0f172a; font-weight: 700; }
        .tag-pill { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 6px; font-size: 12px; font-weight: 600; margin: 2px 4px 2px 0; }
        .msg-box { background: #fafcff; border: 1px dashed #cbd5e1; border-radius: 10px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; margin-bottom: 24px; }
        .attachment-alert { background: #ecfdf5; border: 1px solid #10b981; border-radius: 10px; padding: 12px 16px; color: #065f46; font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 8px; }
        .mail-footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 32px; font-size: 12px; color: #94a3b8; text-align: center; }
      </style>
    </head>
    <body>
      <div class="mail-card">
        <div class="mail-header">
          <span class="mail-badge">Teacher Recruitment</span>
          <h1>New Educator Application Received</h1>
          <p>Submitted via EdversseEDGE Portal on ${appliedTime}</p>
        </div>
        <div class="mail-body">
          <div class="candidate-hero">
            <h2>${fullName}</h2>
            <p>${qualification || "Not specified"} • ${experience || "Experience not specified"}</p>
          </div>

          <table class="details-table">
            <tr>
              <th>Contact Phone</th>
              <td><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <th>Email Address</th>
              <td><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <th>Teaching Subjects</th>
              <td>${subjects || "Not provided"}</td>
            </tr>
            <tr>
              <th>Preferred Formats</th>
              <td>${formats || "1-to-1 Home Tuition & Micro-Batches"}</td>
            </tr>
            <tr>
              <th>Pune Localities Available</th>
              <td>${puneAreas || "Flexible across Pune"}</td>
            </tr>
            <tr>
              <th>Current Academic Role</th>
              <td>${currentRole || "Independent Educator / Tutor"}</td>
            </tr>
          </table>

          ${
            message
              ? `
            <div style="font-size: 13px; font-weight: 700; color: #64748b; margin-bottom: 6px; text-transform: uppercase;">
              Teaching Philosophy & Notes:
            </div>
            <div class="msg-box">
              ${message.replace(/\n/g, "<br>")}
            </div>
          `
              : ""
          }

          ${
            req.file
              ? `
            <div class="attachment-alert">
              📎 <strong>Resume Attached:</strong> ${req.file.originalname} (${(req.file.size / 1024).toFixed(1)} KB)
            </div>
          `
              : `
            <div style="color: #b45309; background: #fffbeb; padding: 10px 14px; border-radius: 8px; font-size: 13px;">
              ℹ️ No resume PDF was attached. Contact candidate directly on phone or email.
            </div>
          `
          }
        </div>
        <div class="mail-footer">
          EdversseEDGE Pune • Personalised Home & Group Tuition Recruitment Portal
        </div>
      </div>
    </body>
    </html>
    `;

    // --- EMAIL 2: Confirmation Acknowledgement to the Educator ---
    const applicantMailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
        .mail-card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.07); border: 1px solid #e2e8f0; }
        .mail-header { background: radial-gradient(circle at 50% 0%, #0f274a 0%, #071324 100%); color: #ffffff; padding: 36px 32px; text-align: center; }
        .brand-name { font-size: 24px; font-weight: 900; letter-spacing: -0.02em; color: #ffffff; margin-bottom: 4px; }
        .brand-gold { color: #f59e0b; }
        .mail-header h1 { font-size: 20px; font-weight: 800; margin: 12px 0 0 0; }
        .mail-body { padding: 32px; line-height: 1.7; font-size: 15px; color: #334155; }
        .steps-card { background: #f8fafc; border-radius: 12px; padding: 20px; margin: 24px 0; border: 1px solid #e2e8f0; }
        .step-item { display: flex; gap: 12px; margin-bottom: 12px; align-items: flex-start; }
        .step-item:last-child { margin-bottom: 0; }
        .step-badge { width: 24px; height: 24px; border-radius: 50%; background: #071324; color: #f59e0b; font-weight: 800; font-size: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .signoff { margin-top: 28px; padding-top: 20px; border-top: 1px solid #f1f5f9; }
        .mail-footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px; font-size: 12px; color: #94a3b8; text-align: center; }
      </style>
    </head>
    <body>
      <div class="mail-card">
        <div class="mail-header">
          <div class="brand-name">Edversse<span class="brand-gold">EDGE</span></div>
          <div style="font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.12em; font-weight: 700;">Personalised Home & Group Tuition Pune</div>
          <h1>Application Received!</h1>
        </div>
        <div class="mail-body">
          <p>Dear <strong>${fullName}</strong>,</p>
          <p>Thank you for expressing your interest in joining the educator faculty at <strong>EdversseEDGE Pune</strong>. We have received your teaching profile for <strong>${subjects || "Academic Mentorship"}</strong>.</p>
          
          <p>At EdversseEDGE, we hold high standards for conceptual clarity, patience, and empathetic student mentorship. Every application is reviewed directly by our Founder & Head Educator <strong>Sudhaanshu Srivastavaa</strong> (12+ Yrs Exp, M.Tech Bharati Vidyapeeth).</p>

          <div class="steps-card">
            <div style="font-size: 13px; font-weight: 800; color: #0f172a; text-transform: uppercase; margin-bottom: 12px; letter-spacing: 0.05em;">
              What Happens Next:
            </div>
            <div class="step-item">
              <div class="step-badge">1</div>
              <div style="font-size: 13px; color: #475569;">
                <strong>Profile & Syllabus Review:</strong> Our academic team evaluates your educational qualifications and teaching track record.
              </div>
            </div>
            <div class="step-item">
              <div class="step-badge">2</div>
              <div style="font-size: 13px; color: #475569;">
                <strong>15-Minute Conceptual Interaction:</strong> Shortlisted candidates are invited for a brief phone/video discussion on pedagogical approach and subject derivations.
              </div>
            </div>
            <div class="step-item">
              <div class="step-badge">3</div>
              <div style="font-size: 13px; color: #475569;">
                <strong>Demo Session & Batch Allocation:</strong> Based on compatibility and student requirements in your preferred Pune localities, 1-to-1 or micro-batch slots are scheduled.
              </div>
            </div>
          </div>

          <p>If your profile aligns with our current vacancy requirements, we will reach out to you on <strong>${phone}</strong> or via this email address.</p>

          <div class="signoff">
            <p style="margin: 0; font-weight: 700; color: #0f172a;">Warm regards,</p>
            <p style="margin: 2px 0 0 0; color: #2563eb; font-weight: 700;">Sudhaanshu Srivastavaa & Team</p>
            <p style="margin: 2px 0 0 0; font-size: 13px; color: #64748b;">Founder & Head Educator, EdversseEDGE</p>
            <p style="margin: 4px 0 0 0; font-size: 13px; color: #64748b;">📞 +91 97667 15666 | 📍 Pune, Maharashtra</p>
          </div>
        </div>
        <div class="mail-footer">
          © ${new Date().getFullYear()} EdversseEDGE Pune. All rights reserved.<br>
          This is an automated confirmation sent to ${email}.
        </div>
      </div>
    </body>
    </html>
    `;

    // Dispatch Email 1: To Admin / Sir
    await transporter.sendMail({
      from: `"EdversseEDGE Careers Portal" <${process.env.SMTP_USER || "edversseedge@gmail.com"}>`,
      to: adminEmail,
      replyTo: email,
      subject: `🎓 Teacher Application: ${fullName} (${subjects || "Educator"}) — EdversseEDGE Pune`,
      html: adminMailHtml,
      attachments,
    });

    // Dispatch Email 2: To Applicant
    await transporter.sendMail({
      from: `"Sudhaanshu Sir (EdversseEDGE)" <${process.env.SMTP_USER || "edversseedge@gmail.com"}>`,
      to: email,
      subject: `Application Received — Educator Faculty at EdversseEDGE Pune`,
      html: applicantMailHtml,
    });

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully! Notification sent to administration and confirmation emailed to candidate.",
    });
  } catch (error) {
    console.error("Error sending career application email:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to process application. Please try again or reach out on WhatsApp.",
      error: error.message,
    });
  }
});

// Endpoint: Student / Parent Enquiry Email Dispatch
app.post("/api/enquire", async (req, res) => {
  try {
    const { name, phone, studentClass, format, subject, area, message } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ success: false, message: "Name and Phone are required." });
    }

    const adminEmail = process.env.ADMIN_EMAIL || "edversseedge@gmail.com";
    const enquiryTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const enquiryHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; padding: 20px; color: #0f172a; }
        .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; }
        .header { background: #071324; color: #ffffff; padding: 24px; }
        .badge { background: #10b981; color: #ffffff; padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 800; text-transform: uppercase; }
        .body { padding: 24px; }
        .table { width: 100%; border-collapse: collapse; margin-top: 14px; }
        .table th, .table td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; text-align: left; font-size: 14px; }
        .table th { width: 35%; color: #64748b; }
        .table td { color: #0f172a; font-weight: 700; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <span class="badge">New Tuition Lead</span>
          <h2 style="margin: 8px 0 0 0; font-size: 20px;">Demo / Tuition Enquiry</h2>
          <p style="margin: 4px 0 0 0; color: #94a3b8; font-size: 12px;">Received on ${enquiryTime}</p>
        </div>
        <div class="body">
          <table class="table">
            <tr><th>Parent / Student</th><td>${name}</td></tr>
            <tr><th>Phone / WhatsApp</th><td><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><th>Student Class</th><td>${studentClass || "Not specified"}</td></tr>
            <tr><th>Learning Format</th><td>${format || "1-to-1 Home Tuition"}</td></tr>
            <tr><th>Subjects</th><td>${subject || "Not specified"}</td></tr>
            <tr><th>Pune Locality</th><td>${area || "Not specified"}</td></tr>
            <tr><th>Requirement / Note</th><td>${message || "Looking for consultation and demo session"}</td></tr>
          </table>
        </div>
      </div>
    </body>
    </html>
    `;

    await transporter.sendMail({
      from: `"EdversseEDGE Leads" <${process.env.SMTP_USER || "edversseedge@gmail.com"}>`,
      to: adminEmail,
      subject: `📚 New Tuition Enquiry: ${name} (${studentClass || "Tuition"}) — ${area || "Pune"}`,
      html: enquiryHtml,
    });

    return res.status(200).json({ success: true, message: "Enquiry sent successfully!" });
  } catch (error) {
    console.error("Error sending enquiry email:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`[API Server] EdversseEDGE backend running on http://localhost:${PORT}`);
});
