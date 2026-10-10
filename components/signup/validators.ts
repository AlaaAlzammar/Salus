import { content } from "./content";

export type FieldName =
  | "pharmacyName"
  | "ownerName"
  | "phone"
  | "city"
  | "address"
  | "email"
  | "password"
  | "confirmPassword";

export type Values = Record<FieldName, string>;

/** Which fields belong to which step. */
export const stepFields: Record<1 | 2, FieldName[]> = {
  1: ["pharmacyName", "ownerName", "phone", "city", "address"],
  2: ["email", "password", "confirmPassword"],
};

const ARABIC_INDIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";

/** Lets people type phone numbers with Arabic-Indic digits (٠١٢…). */
const normalizeDigits = (value: string) =>
  value.replace(/[٠-٩]/g, (d) => String(ARABIC_INDIC_DIGITS.indexOf(d)));

const required = (message: string) => (value: string) =>
  value.trim() ? "" : message;

/** Each validator returns an error message, or "" when the value is valid. */
export const validators: Record<
  FieldName,
  (value: string, values: Values) => string
> = {
  pharmacyName: required(content.errors.pharmacyName),
  ownerName: required(content.errors.ownerName),
  city: required(content.errors.city),
  address: required(content.errors.address),
  phone: (value) =>
    /^\+?\d{7,15}$/.test(normalizeDigits(value).replace(/[\s\-()]/g, ""))
      ? ""
      : content.errors.phone,
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : content.errors.email,
  password: (value) => (value.length >= 8 ? "" : content.errors.password),
  confirmPassword: (value, values) => {
    if (!value) return content.errors.confirmEmpty;
    return value === values.password ? "" : content.errors.confirmMismatch;
  },
};
