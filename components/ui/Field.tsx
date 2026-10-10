import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type FieldProps = {
  id: string;
  label: string;
  icon: ReactNode;
  /** Error message; an empty string means the field is valid. */
  error: string;
  /** Shows a red asterisk next to the label. */
  required?: boolean;
  /** Extra classes for the outer wrapper (e.g. `col-span-2`). */
  className?: string;
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
  required,
  className,
  footer,
  children,
}: FieldProps) {
  return (
    <div
      className={cx(
        "mb-[17px] short:mb-3.5 shorter:mb-3 shortest:mb-2.5",
        className,
      )}
    >
      <label
        htmlFor={id}
        className="mb-2 block text-[14px] font-semibold text-salus-green shorter:mb-1.5 shorter:text-[13px]"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="ms-1 text-salus-error">
            *
          </span>
        )}
      </label>
      <div
        className={cx(
          "flex min-h-[52px] items-center rounded-[10px] border px-[15px]",
          "transition-[border-color,box-shadow,background-color] duration-200 ease-[ease]",
          "focus-within:border-[#58a87a] focus-within:shadow-[0_0_0_3px_#58a87a18]",
          "short:min-h-12 shorter:min-h-11 shortest:min-h-10",
          error
            ? "border-[#bd6363] bg-[#fffafa]"
            : "border-salus-line bg-[#f8faf6] focus-within:bg-white",
        )}
      >
        {icon}
        {children}
      </div>
      <p
        id={`${id}-error`}
        aria-live="polite"
        className="mt-1.5 text-[12px] leading-[1.5] text-salus-error empty:hidden"
      >
        {error}
      </p>
      {footer}
    </div>
  );
}
