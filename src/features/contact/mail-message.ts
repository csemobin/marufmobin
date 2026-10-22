import { site } from "@/content/site";
import type { ContactInput } from "@/features/contact/schema";
import type { MailMessage } from "@/lib/mail";

export function buildContactMailMessage(input: ContactInput): MailMessage {
  const subject = `Portfolio contact from ${input.name}`;
  const text = [
    `New message from your portfolio (${site.url})`,
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    "",
    "Message:",
    input.message,
  ].join("\n");

  const html = `
    <div style="font-family: system-ui, sans-serif; line-height: 1.5; color: #111;">
      <p>New message from your portfolio (<a href="${site.url}">${site.url}</a>)</p>
      <p><strong>Name:</strong> ${escapeHtml(input.name)}<br/>
      <strong>Email:</strong> <a href="mailto:${escapeHtml(input.email)}">${escapeHtml(input.email)}</a></p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(input.message)}</p>
    </div>
  `.trim();

  return {
    replyTo: input.email,
    subject,
    text,
    html,
  };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
