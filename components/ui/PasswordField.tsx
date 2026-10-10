"use client";

import { useState, type ComponentProps, type KeyboardEvent } from "react";
import Field from "./Field";
import { EyeIcon, LockIcon } from "./icons";
import { uiStrings } from "./strings";
import { inputClassName } from "./styles";

type PasswordFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  autoComplete: "current-password" | "new-password";
  error: string;
  /** Show a red asterisk next to the label. */
  required?: boolean;
  inputProps?: ComponentProps<"input">;
};

export default function PasswordField({
  id,
  label,
  placeholder,
  autoComplete,
  error,
  required,
  inputProps,
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  const [capsLock, setCapsLock] = useState(false);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) =>
    setCapsLock(e.getModifierState("CapsLock"));

  return (
    <Field
      id={id}
      label={label}
      icon={<LockIcon />}
      error={error}
      required={required}
      footer={
        <p
          id={`${id}-caps`}
          className="mt-3 text-[12px] text-[#815f30]"
          hidden={!capsLock}
        >
          {uiStrings.capsLock}
        </p>
      }
    >
      <input
        {...inputProps}
        className={inputClassName}
        id={id}
        name={id}
        type={visible ? "text" : "password"}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required
        aria-describedby={`${id}-error ${id}-caps`}
        onKeyUp={handleKeyUp}
        onBlur={(e) => {
          setCapsLock(false);
          inputProps?.onBlur?.(e);
        }}
      />
      <button
        className="group grid min-h-11 min-w-10 -me-[9px] place-items-center text-[#71806f] shortest:min-h-[38px]"
        type="button"
        aria-label={visible ? uiStrings.hidePassword : uiStrings.showPassword}
        aria-pressed={visible}
        onClick={() => setVisible((v) => !v)}
      >
        <EyeIcon />
      </button>
    </Field>
  );
}
