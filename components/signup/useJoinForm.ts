"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEventHandler,
  type FocusEventHandler,
  type FormEvent,
} from "react";
import { submitJoinRequest } from "./submitJoinRequest";
import {
  stepFields,
  validators,
  type FieldName,
  type Values,
} from "./validators";

type Step = 1 | 2;
type Errors = Partial<Record<FieldName, string>>;

export type JoinFieldProps = {
  name: FieldName;
  value: string;
  "aria-invalid": boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
};

const initialValues: Values = {
  pharmacyName: "",
  ownerName: "",
  phone: "",
  city: "",
  address: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const firstFieldOfStep: Record<Step, FieldName> = {
  1: "pharmacyName",
  2: "email",
};

const trimAll = (values: Values): Values =>
  Object.fromEntries(
    Object.entries(values).map(([key, value]) => [
      key,
      // Passwords are kept exactly as typed.
      key === "password" || key === "confirmPassword" ? value : value.trim(),
    ]),
  ) as Values;

export function useJoinForm() {
  const [step, setStep] = useState<Step>(1);
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  // Move focus to the first field when the step changes (not on first render).
  const previousStep = useRef(step);
  useEffect(() => {
    if (previousStep.current === step) return;
    previousStep.current = step;
    document.getElementById(firstFieldOfStep[step])?.focus();
  }, [step]);

  const validate = (name: FieldName, nextValues: Values) => {
    const message = validators[name](nextValues[name], nextValues);
    setErrors((prev) => ({ ...prev, [name]: message }));
    return message === "";
  };

  const validateStep = (current: Step) => {
    const invalid = stepFields[current].filter(
      (name) => !validate(name, values),
    );
    if (invalid.length > 0) document.getElementById(invalid[0])?.focus();
    return invalid.length === 0;
  };

  /** Validate on blur once there is a value; re-validate while fixing an error. */
  const getFieldProps = (name: FieldName): JoinFieldProps => ({
    name,
    value: values[name],
    "aria-invalid": Boolean(errors[name]),
    onChange: (e) => {
      const next = { ...values, [name]: e.target.value };
      setValues(next);
      if (errors[name]) validate(name, next);
      if (name === "password" && errors.confirmPassword) {
        validate("confirmPassword", next);
      }
    },
    onBlur: (e) => {
      if (e.target.value) validate(name, values);
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting || !validateStep(step)) return;

    if (step === 1) {
      setStep(2);
      return;
    }

    setSubmitting(true);
    setSubmitError(false);
    try {
      const request = trimAll(values);
      await submitJoinRequest(request);
      setSubmittedEmail(request.email);
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const goBack = () => setStep(1);

  return {
    step,
    errors,
    submitting,
    submitError,
    submittedEmail,
    getFieldProps,
    handleSubmit,
    goBack,
  };
}

export type JoinForm = ReturnType<typeof useJoinForm>;
