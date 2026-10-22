import { site } from "@/content/site";
import type { ContactInput } from "@/features/contact/schema";
import {
  escapeHtml,
  messageBlock,
  renderEmailLayout,
} from "@/features/contact/templates/layout";
import type { MailMessage } from "@/lib/mail";

/** Email the site owner receives when someone submits the contact form. */
export function buildOwnerNotificationMail(input: ContactInput): MailMessage {
  const subject = `New portfolio message from ${input.name}`;

  const text = [
    `New contact form message on ${site.name}`,
    `Site: ${site.url}`,
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    "",
    "Message:",
    input.message,
    "",
    "Reply directly to this email to answer the visitor.",
  ].join("\n");

  const bodyHtml = `
    <p style="margin:0 0 20px;">Someone reached out through your portfolio contact form.</p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 20px;">
      <tr>
        <td style="padding:0 0 10px;color:#a3a3a3;width:72px;vertical-align:top;">Name</td>
        <td style="padding:0 0 10px;color:#ffffff;font-weight:600;">${escapeHtml(input.name)}</td>
      </tr>
      <tr>
        <td style="padding:0 0 10px;color:#a3a3a3;vertical-align:top;">Email</td>
        <td style="padding:0 0 10px;"><a href="mailto:${escapeHtml(input.email)}" style="color:#A476FF;text-decoration:none;">${escapeHtml(input.email)}</a></td>
      </tr>
      <tr>
        <td style="padding:0;color:#a3a3a3;vertical-align:top;">Site</td>
        <td style="padding:0;"><a href="${site.url}" style="color:#A476FF;text-decoration:none;">${site.url}</a></td>
      </tr>
    </table>
    ${messageBlock("Message", input.message)}
    <p style="margin:20px 0 0;color:#a3a3a3;font-size:13px;">Hit reply — Reply-To is set to the visitor&rsquo;s email.</p>
  `;

  return {
    replyTo: input.email,
    subject,
    text,
    html: renderEmailLayout({
      preheader: `${input.name} sent you a message via ${site.name}.`,
      title: "New contact message",
      bodyHtml,
      footerNote: `${site.name} · ${site.role}`,
    }),
  };
}
