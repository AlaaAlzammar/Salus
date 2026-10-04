import type { ReactNode } from "react";

type FieldProps = {
  id: string;
  label: string;
  icon: ReactNode;
  /** Error message; an empty string means the field is valid. */
  error: string;
  /** Optional extra content rendered below the error (e.g. a hint). */
  footer?: ReactNode;
  /** The input, plus any trailing controls. */
  children: ReactNode;
};

/** Label + icon + input wrapper + error line shared by every form field. */
export default function Field({
  id,
  label,
  icon,
  error,
  footer,
  children,
}: FieldProps) {
  return (
    <div className="field-group">
      <label htmlFor={id}>{label}</label>
      <div className={`input-wrap${error ? " invalid" : ""}`}>
        {icon}
        {children}
      </div>
      <p className="error" id={`${id}-error`} aria-live="polite">
        {error}
      </p>
      {footer}
    </div>
  );
}
