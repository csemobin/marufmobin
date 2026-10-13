import type { ContactFieldErrors } from "@/features/contact/schema";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: ContactFieldErrors;
};

export const contactInitialState: ContactFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};
