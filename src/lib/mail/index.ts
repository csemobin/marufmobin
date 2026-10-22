import { getSmtpMailConfig } from "@/lib/mail/config";
import { NodemailerMailAdapter } from "@/lib/mail/nodemailer-adapter";
import type { MailAdapter } from "@/lib/mail/types";

export type { MailAdapter, MailMessage } from "@/lib/mail/types";
export {
  MailConfigurationError,
  MailDeliveryError,
} from "@/lib/mail/types";

/**
 * Factory for the active mail adapter.
 * Swap the implementation here when changing providers — callers stay the same.
 */
export function createMailAdapter(): MailAdapter {
  return new NodemailerMailAdapter(getSmtpMailConfig());
}
