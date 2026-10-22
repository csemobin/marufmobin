export type MailMessage = {
  /** Overrides the adapter default inbox when set (e.g. visitor acknowledgment). */
  to?: string;
  /** Reply-To — e.g. visitor email on owner notifications. */
  replyTo?: string;
  subject: string;
  text: string;
  html?: string;
};

/**
 * Outbound mail port. Contact features depend on this contract only —
 * swap Nodemailer for Resend/SES later without touching form actions.
 */
export interface MailAdapter {
  send(message: MailMessage): Promise<void>;
}

export type SmtpMailConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  /** Inbox that receives contact form mail. */
  to: string;
  /** From address shown on the delivered message. */
  from: string;
};

export class MailConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MailConfigurationError";
  }
}

export class MailDeliveryError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "MailDeliveryError";
  }
}
