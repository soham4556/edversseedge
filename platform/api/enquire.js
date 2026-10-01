import nodemailer from "nodemailer";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed. Use POST." });
  }

  try {
    const { name, phone, studentClass, format, subject, area, message } = req.body || {};

    if (!name || !phone) {
      return res.status(400).json({ success: false, message: "Name and Phone are required." });
    }

    const SMTP_USER = process.env.SMTP_USER || "edversseedge@gmail.com";
    const SMTP_PASS = process.env.SMTP_PASS || "rvuwylcbvgbpedfx";
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "edversseedge@gmail.com";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

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
      from: `"EdversseEDGE Leads" <${SMTP_USER}>`,
      to: ADMIN_EMAIL,
      subject: `📚 New Tuition Enquiry: ${name} (${studentClass || "Tuition"}) — ${area || "Pune"}`,
      html: enquiryHtml,
    });

    return res.status(200).json({ success: true, message: "Enquiry sent successfully!" });
  } catch (error) {
    console.error("Vercel Serverless Function Error in /api/enquire:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
}
