const ACCENT = "#A476FF";

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

type EmailLayoutInput = {
  preheader: string;
  title: string;
  bodyHtml: string;
  footerNote: string;
};

/** Shared email chrome — inline styles for client compatibility. */
export function renderEmailLayout({
  preheader,
  title,
  bodyHtml,
  footerNote,
}: EmailLayoutInput): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;color:#f5f5f5;font-family:Segoe UI,Helvetica,Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0a0a0a;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#111111;border:1px solid #2a2a2a;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="padding:20px 28px;border-bottom:1px solid #2a2a2a;background:linear-gradient(90deg,rgba(164,118,255,0.18),transparent);">
              <p style="margin:0;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:${ACCENT};font-weight:600;">Maruf Mobin</p>
              <h1 style="margin:8px 0 0;font-size:22px;line-height:1.3;color:#ffffff;font-weight:700;">${escapeHtml(title)}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;font-size:15px;line-height:1.65;color:#e5e5e5;">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:18px 28px;border-top:1px solid #2a2a2a;font-size:12px;line-height:1.5;color:#a3a3a3;">
              ${escapeHtml(footerNote)}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function messageBlock(label: string, content: string): string {
  return `
    <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:${ACCENT};font-weight:600;">${escapeHtml(label)}</p>
    <p style="margin:0;padding:14px 16px;background:#0a0a0a;border:1px solid #2a2a2a;border-radius:8px;white-space:pre-wrap;color:#f5f5f5;">${escapeHtml(content)}</p>
  `;
}
