import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import {
  MailDeliveryError,
  type MailAdapter,
  type MailMessage,
  type SmtpMailConfig,
} from "@/lib/mail/types";

export class NodemailerMailAdapter implements MailAdapter {
  private transporter: Transporter | null = null;

  constructor(private readonly config: SmtpMailConfig) {}

  async send(message: MailMessage): Promise<void> {
    try {
      const transporter = this.getTransporter();
      await transporter.sendMail({
        from: this.config.from,
        to: message.to ?? this.config.to,
        replyTo: message.replyTo,
        subject: message.subject,
        text: message.text,
        html: message.html,
      });
    } catch (error) {
      throw new MailDeliveryError("Failed to deliver contact email.", {
        cause: error,
      });
    }
  }

  private getTransporter(): Transporter {
    if (!this.transporter) {
      this.transporter = nodemailer.createTransport({
        host: this.config.host,
        port: this.config.port,
        secure: this.config.secure,
        auth: {
          user: this.config.user,
          pass: this.config.pass,
        },
      });
    }

    return this.transporter;
  }
}
