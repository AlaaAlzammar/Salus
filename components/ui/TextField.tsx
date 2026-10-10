import type { ComponentProps, ReactNode } from "react";
import { cx } from "@/lib/cx";
import Field from "./Field";
import { inputClassName } from "./styles";

type TextFieldProps = {
  id: string;
  label: string;
  icon: ReactNode;
  error: string;
  placeholder?: string;
  className?: string;
  /** Render the value left-to-right (emails, phone numbers). */
  ltr?: boolean;
  inputProps?: ComponentProps<"input">;
};

export default function TextField({
  id,
  label,
  icon,
  error,
  placeholder,
  className,
  ltr,
  inputProps,
}: TextFieldProps) {
  return (
    <Field
      id={id}
      label={label}
      icon={icon}
      error={error}
      required
      className={className}
    >
      <input
        {...inputProps}
        id={id}
        name={id}
        placeholder={placeholder}
        required
        spellCheck={false}
        aria-describedby={`${id}-error`}
        className={cx(inputClassName, ltr && "text-right [direction:ltr]")}
      />
    </Field>
  );
}
