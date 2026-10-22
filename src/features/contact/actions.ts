"use server";

import { hasFieldErrors, validateContact } from "@/features/contact/schema";
import { buildContactMailMessage } from "@/features/contact/mail-message";
import type { ContactFormState } from "@/features/contact/state";
import {
  createMailAdapter,
  MailConfigurationError,
  MailDeliveryError,
} from "@/lib/mail";

function readField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContact(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const input = {
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    message: readField(formData, "message"),
  };

  const fieldErrors = validateContact(input);

  if (hasFieldErrors(fieldErrors)) {
    return {
      status: "error",
      message: "Check the highlighted fields and try again.",
      fieldErrors,
    };
  }

  try {
    const mail = createMailAdapter();
    await mail.send(buildContactMailMessage(input));

    return {
      status: "success",
      message: "Thanks — your message was sent. I will get back to you soon.",
      fieldErrors: {},
    };
  } catch (error) {
    if (error instanceof MailConfigurationError) {
      console.error("[contact] mail is not configured:", error.message);
      return {
        status: "error",
        message:
          "Messaging is temporarily unavailable. Please try again later or email me directly.",
        fieldErrors: {},
      };
    }

    if (error instanceof MailDeliveryError) {
      console.error("[contact] mail delivery failed:", error);
      return {
        status: "error",
        message:
          "Could not send your message right now. Please try again in a moment.",
        fieldErrors: {},
      };
    }

    console.error("[contact] unexpected error:", error);
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
      fieldErrors: {},
    };
  }
}
