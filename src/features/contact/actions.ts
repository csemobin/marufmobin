"use server";

import { site } from "@/content/site";
import { hasFieldErrors, validateContact } from "@/features/contact/schema";
import type { ContactFormState } from "@/features/contact/state";

function readField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContact(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const fieldErrors = validateContact({
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    message: readField(formData, "message"),
  });

  if (hasFieldErrors(fieldErrors)) {
    return {
      status: "error",
      message: "Check the highlighted fields and try again.",
      fieldErrors,
    };
  }

  // Delivery is intentionally unwired. Replace this return with your email provider.
  return {
    status: "success",
    message: `Thanks. Your note looks good. Email delivery is not connected yet, so write me at ${site.email}.`,
    fieldErrors: {},
  };
}
