export type ContactField = "name" | "email" | "message";

export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export type ContactInput = Record<ContactField, string>;

export const contactLimits = {
  name: { min: 2, max: 80 },
  email: { max: 120 },
  message: { min: 10, max: 2000 },
} as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: ContactInput): ContactFieldErrors {
  const fieldErrors: ContactFieldErrors = {};

  if (input.name.length < contactLimits.name.min) {
    fieldErrors.name = `Enter at least ${contactLimits.name.min} characters.`;
  } else if (input.name.length > contactLimits.name.max) {
    fieldErrors.name = `Use ${contactLimits.name.max} characters or fewer.`;
  }

  if (!emailPattern.test(input.email)) {
    fieldErrors.email = "Enter a valid email address.";
  } else if (input.email.length > contactLimits.email.max) {
    fieldErrors.email = `Use ${contactLimits.email.max} characters or fewer.`;
  }

  if (input.message.length < contactLimits.message.min) {
    fieldErrors.message = `Enter at least ${contactLimits.message.min} characters.`;
  } else if (input.message.length > contactLimits.message.max) {
    fieldErrors.message = `Use ${contactLimits.message.max} characters or fewer.`;
  }

  return fieldErrors;
}

export function hasFieldErrors(fieldErrors: ContactFieldErrors): boolean {
  return Object.values(fieldErrors).some(Boolean);
}
