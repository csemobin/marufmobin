import {
  MailConfigurationError,
  type SmtpMailConfig,
} from "@/lib/mail/types";

function readEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

function requireEnv(name: string): string {
  const value = readEnv(name);
  if (!value) {
    throw new MailConfigurationError(
      `Missing required environment variable: ${name}`,
    );
  }
  return value;
}

/**
 * Reads SMTP settings from the environment.
 * Defaults suit Gmail + App Password (smtp.gmail.com:587).
 */
export function getSmtpMailConfig(): SmtpMailConfig {
  const user = requireEnv("SMTP_USER");
  const pass = requireEnv("SMTP_PASS");
  const to = readEnv("MAIL_TO") ?? user;
  const from = readEnv("MAIL_FROM") ?? `"Portfolio Contact" <${user}>`;
  const host = readEnv("SMTP_HOST") ?? "smtp.gmail.com";
  const port = Number(readEnv("SMTP_PORT") ?? "587");
  const secure =
    (readEnv("SMTP_SECURE") ?? "false").toLowerCase() === "true" || port === 465;

  if (!Number.isFinite(port) || port <= 0) {
    throw new MailConfigurationError("SMTP_PORT must be a positive number.");
  }

  return { host, port, secure, user, pass, to, from };
}
