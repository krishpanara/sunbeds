import nodemailer from "nodemailer";
import { readFileSync } from "fs";
import path from "path";

const LOGO_PATH = path.join(process.cwd(), "public", "images", "logo.png");
const LOGO_CID = "sunbeds-logo";

export type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  jobTitle?: string;
  country?: string;
  website?: string;
  phone?: string;
  message: string;
};

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    throw new Error("SMTP environment variables are not configured");
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });

  return transporter;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 16px;border-bottom:1px solid #eee;color:#8a8f98;font-size:13px;font-weight:600;white-space:nowrap;vertical-align:top;">${label}</td>
      <td style="padding:10px 16px;border-bottom:1px solid #eee;color:#0b0e1a;font-size:14px;">${escapeHtml(value)}</td>
    </tr>`;
}

function contactEmailHtml(data: ContactFormData) {
  return `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f4f4f6;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f6;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background:#0b0e1a;padding:24px 32px;">
                <img src="cid:${LOGO_CID}" alt="SunBeds" height="36" style="height:36px;width:auto;display:block;" />
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 8px;">
                <h1 style="margin:0 0 6px;font-size:18px;color:#0b0e1a;">New Contact Form Submission</h1>
                <p style="margin:0;font-size:13px;color:#8a8f98;">You've received a new message from the SunBeds website contact form.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 32px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:8px;overflow:hidden;">
                  ${row("Name", data.name)}
                  ${row("Email", data.email)}
                  ${row("Company", data.company)}
                  ${row("Job Title", data.jobTitle)}
                  ${row("Country", data.country)}
                  ${row("Website", data.website)}
                  ${row("Phone", data.phone)}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 28px;">
                <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#0b0e1a;">Message</p>
                <p style="margin:0;font-size:14px;line-height:1.6;color:#0b0e1a;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
              </td>
            </tr>
            <tr>
              <td style="background:#faf7f2;padding:16px 32px;border-top:1px solid #f0e5d8;">
                <p style="margin:0;font-size:11px;color:#8a8f98;">Sent automatically from the contact form at sunbedstechnology.com</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function contactEmailText(data: ContactFormData) {
  return [
    "New Contact Form Submission",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Company: ${data.company}` : null,
    data.jobTitle ? `Job Title: ${data.jobTitle}` : null,
    data.country ? `Country: ${data.country}` : null,
    data.website ? `Website: ${data.website}` : null,
    data.phone ? `Phone: ${data.phone}` : null,
    "",
    "Message:",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function sendContactEmail(data: ContactFormData) {
  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
  const from = process.env.SMTP_USER;

  await getTransporter().sendMail({
    from: `"SunBeds Website" <${from}>`,
    to,
    replyTo: data.email,
    subject: `New contact form submission from ${data.name}`,
    text: contactEmailText(data),
    html: contactEmailHtml(data),
    attachments: [
      {
        filename: "logo.png",
        content: readFileSync(LOGO_PATH),
        cid: LOGO_CID,
      },
    ],
  });
}
