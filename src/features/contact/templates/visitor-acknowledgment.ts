import { site } from "@/content/site";
import type { ContactInput } from "@/features/contact/schema";
import {
  escapeHtml,
  messageBlock,
  renderEmailLayout,
} from "@/features/contact/templates/layout";
import type { MailMessage } from "@/lib/mail";

/** Confirmation email sent to the person who submitted the contact form. */
export function buildVisitorAcknowledgmentMail(
  input: ContactInput,
): MailMessage {
  const subject = `Thanks ${input.name} — your message was sent`;

  const text = [
    `Hi ${input.name},`,
    "",
    "Thanks for reaching out. Your message was sent successfully.",
    "I will review it and get back to you as soon as I can.",
    "",
    "Here is a copy of what you sent:",
    "",
    input.message,
    "",
    `— ${site.signature.name}`,
    site.signature.role,
    site.url,
  ].join("\n");

  const bodyHtml = `
    <p style="margin:0 0 16px;">Hi <strong style="color:#ffffff;">${escapeHtml(input.name)}</strong>,</p>
    <p style="margin:0 0 16px;">Thanks for reaching out. Your message was <strong style="color:#ffffff;">sent successfully</strong>.</p>
    <p style="margin:0 0 20px;">I will review it and get back to you as soon as I can. No further action is needed on your side.</p>
    ${messageBlock("Your message", input.message)}
    <p style="margin:24px 0 0;">
      Best regards,<br/>
      <strong style="color:#ffffff;">${escapeHtml(site.signature.name)}</strong><br/>
      <span style="color:#a3a3a3;">${escapeHtml(site.signature.role)}</span>
    </p>
    <p style="margin:16px 0 0;">
      <a href="${site.url}" style="display:inline-block;padding:10px 16px;background:#A476FF;color:#0a0a0a;text-decoration:none;border-radius:4px;font-weight:600;font-size:13px;">Visit portfolio</a>
    </p>
  `;

  return {
    to: input.email,
    replyTo: site.email,
    subject,
    text,
    html: renderEmailLayout({
      preheader: "Your message was sent successfully. I will get back to you soon.",
      title: "Message received",
      bodyHtml,
      footerNote: `This is an automatic confirmation from ${site.name}. You can reply to this email if you need to add anything.`,
    }),
  };
}
