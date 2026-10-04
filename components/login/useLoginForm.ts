"use client";

import {
  useRef,
  useState,
  type ChangeEventHandler,
  type FocusEventHandler,
  type FormEvent,
  type Ref,
} from "react";
import type { NoticeKind } from "./content";

export type FieldName = "email" | "password";

export type FieldInputProps = {
  ref: Ref<HTMLInputElement>;
  "aria-invalid": boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
};

const isValid: Record<FieldName, (input: HTMLInputElement) => boolean> = {
  email: (input) => input.value.trim() !== "" && input.validity.valid,
  password: (input) => input.value.length > 0,
};

export function useLoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const refs = { email: emailRef, password: passwordRef };
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [invalid, setInvalid] = useState<Record<FieldName, boolean>>({
    email: false,
    password: false,
  });
  const [notice, setNotice] = useState<NoticeKind>("login");

  const validate = (field: FieldName) => {
    const input = refs[field].current;
    const valid = !!input && isValid[field](input);
    setInvalid((prev) => ({ ...prev, [field]: !valid }));
    return valid;
  };

  /** Validate on blur once there is a value, and re-validate while fixing an error. */
  const getFieldProps = (field: FieldName): FieldInputProps => ({
    ref: refs[field],
    "aria-invalid": invalid[field],
    onChange: () => invalid[field] && validate(field),
    onBlur: (e) => e.target.value && validate(field),
  });

  const openNotice = (kind: NoticeKind) => {
    setNotice(kind);
    dialogRef.current?.showModal();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailValid = validate("email");
    const passwordValid = validate("password");

    if (!emailValid || !passwordValid) {
      refs[emailValid ? "password" : "email"].current?.focus();
      return;
    }
    openNotice("login");
  };

  return { invalid, notice, dialogRef, getFieldProps, openNotice, handleSubmit };
}
