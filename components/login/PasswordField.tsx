"use client";

import { useState, type KeyboardEvent } from "react";
import { content } from "./content";
import Field from "./Field";
import { EyeIcon, LockIcon } from "./icons";
import type { FieldInputProps } from "./useLoginForm";

type PasswordFieldProps = {
  inputProps: FieldInputProps;
  error: string;
};

export default function PasswordField({ inputProps, error }: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  const [capsLock, setCapsLock] = useState(false);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) =>
    setCapsLock(e.getModifierState("CapsLock"));

  return (
    <Field
      id="password"
      label={content.password}
      icon={<LockIcon />}
      error={error}
      footer={
        <p id="caps-lock" className="caps" hidden={!capsLock}>
          {content.capsLock}
        </p>
      }
    >
      <input
        {...inputProps}
        id="password"
        name="password"
        type={visible ? "text" : "password"}
        autoComplete="current-password"
        placeholder={content.passwordPlaceholder}
        required
        aria-describedby="password-error caps-lock"
        onKeyUp={handleKeyUp}
        onBlur={(e) => {
          setCapsLock(false);
          inputProps.onBlur(e);
        }}
      />
      <button
        className="eye"
        type="button"
        aria-label={visible ? content.hidePassword : content.showPassword}
        aria-pressed={visible}
        onClick={() => setVisible((v) => !v)}
      >
        <EyeIcon />
      </button>
    </Field>
  );
}
