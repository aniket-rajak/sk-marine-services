import nodemailer from "nodemailer";
import type { ContactFormValues } from "./validations";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function buildNotificationEmail(data: ContactFormValues): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0b1a2e; padding: 30px; text-align: center;">
        <h1 style="color: #c9952e; margin: 0;">New Service Inquiry</h1>
      </div>
      <div style="padding: 30px; background: #f8f9fa;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0b1a2e;">Name</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0b1a2e;">Phone</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><a href="tel:${data.phone}">${data.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0b1a2e;">Email</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0b1a2e;">Service Type</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${data.serviceType}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0b1a2e;">Message</td>
            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${data.message}</td>
          </tr>
        </table>
      </div>
      <div style="background: #0b1a2e; padding: 20px; text-align: center;">
        <p style="color: #94a3b8; margin: 0; font-size: 12px;">
          Shree Krishna Marine Motor Servicing — Inquiry Notification
        </p>
      </div>
    </div>
  `;
}

function buildConfirmationEmail(name: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0b1a2e; padding: 30px; text-align: center;">
        <h1 style="color: #c9952e; margin: 0;">Thank You, ${name}!</h1>
      </div>
      <div style="padding: 30px; background: #f8f9fa;">
        <p style="color: #334155; font-size: 16px; line-height: 1.6;">
          We have received your inquiry and will get back to you within 24 hours.
        </p>
        <p style="color: #334155; font-size: 16px; line-height: 1.6;">
          For urgent assistance, please call or WhatsApp us directly.
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="tel:${process.env.NEXT_PUBLIC_PHONE || ""}"
             style="display: inline-block; background: #c9952e; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 0 8px;">
            Call Now
          </a>
          <a href="https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || ""}"
             style="display: inline-block; background: #25D366; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 0 8px;">
            WhatsApp
          </a>
        </div>
        <p style="color: #64748b; font-size: 14px;">
          Best regards,<br>
          <strong style="color: #0b1a2e;">Shree Krishna Marine Motor Servicing</strong>
        </p>
      </div>
      <div style="background: #0b1a2e; padding: 20px; text-align: center;">
        <p style="color: #94a3b8; margin: 0; font-size: 12px;">
          Kolkata, India — Shree Krishna Marine Motor Servicing
        </p>
      </div>
    </div>
  `;
}

export async function sendInquiryEmails(
  data: ContactFormValues
): Promise<{ notification: boolean; confirmation: boolean }> {
  const results = { notification: false, confirmation: false };
  const siteEmail = process.env.NEXT_PUBLIC_EMAIL || "info@shreekrishnamarine.com";
  const notificationEmail = process.env.NOTIFICATION_EMAIL || siteEmail;

  try {
    await transporter.sendMail({
      from: `"Shree Krishna Marine" <${siteEmail}>`,
      to: notificationEmail,
      subject: `New Inquiry: ${data.serviceType} from ${data.name}`,
      html: buildNotificationEmail(data),
      replyTo: data.email,
    });
    results.notification = true;
  } catch (err) {
    console.error("Failed to send notification email:", err);
  }

  try {
    await transporter.sendMail({
      from: `"Shree Krishna Marine" <${siteEmail}>`,
      to: data.email,
      subject: "Thank You — We've Received Your Inquiry",
      html: buildConfirmationEmail(data.name),
    });
    results.confirmation = true;
  } catch (err) {
    console.error("Failed to send confirmation email:", err);
  }

  return results;
}
