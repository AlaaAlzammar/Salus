"use client";


import { content } from "./content";
import Field from "./Field";
import { MailIcon } from "./icons";
import NoticeDialog from "./NoticeDialog"
import PasswordField from "./PasswordField";
import { useLoginForm } from "./useLoginForm";
import Link from "next/link";

const errorFor = (hasError: boolean, message: string) =>
  hasError ? message : "";

export default function LoginForm() {
  const { invalid, notice, dialogRef, getFieldProps, openNotice, handleSubmit } =
    useLoginForm();

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="login-form">
        <Field
          id="email"
          label={content.email}
          icon={<MailIcon />}
          error={errorFor(invalid.email, content.errors.email)}
        >
          <input
            {...getFieldProps("email")}
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="username"
            placeholder="you@example.com"
            required
            spellCheck={false}
            aria-describedby="email-error"
          />
        </Field>

        <PasswordField
          inputProps={getFieldProps("password")}
          error={errorFor(invalid.password, content.errors.password)}
        />

        <div className="recovery-row mb-2">
          <button
            type="button"
            className="text-button mb-2"
            onClick={() => openNotice("reset")}
          >
            {content.forgot}
          </button>
        </div>

        <button className="primary" type="submit">
          <span>{content.signin}</span>
        </button>
       <Link href="/auth/signUp" className="signup">
  <span>{content.newToSalus}</span>{" "}
  <span className="text-button bg-moss-700">
    {content.create}
  </span>
</Link>
      </form>

      <NoticeDialog
        ref={dialogRef}
        kind={notice}
        title={content.notices[notice].title}
        body={content.notices[notice].body}
        closeLabel={content.gotIt}
      />
    </>
  );
}
