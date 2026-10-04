"use client";

import { content } from "./content";
import Field from "./Field";
import { MailIcon } from "./icons";
import NoticeDialog from "./NoticeDialog"
import PasswordField from "./PasswordField";
import { useLoginForm } from "./useLoginForm";

const errorFor = (hasError: boolean, message: string) =>
  hasError ? message : "";

export default function LoginForm() {
  const { invalid, notice, dialogRef, getFieldProps, openNotice, handleSubmit } =
    useLoginForm();

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
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

        <div className="recovery-row">
          <button
            type="button"
            className="text-button"
            onClick={() => openNotice("reset")}
          >
            {content.forgot}
          </button>
        </div>

        <button className="primary" type="submit">
          <span>{content.signin}</span>
        </button>

        <p className="signup">
          <span>{content.newToSalus}</span>{" "}
          <button
            type="button"
            className="text-button"
            onClick={() => openNotice("signup")}
          >
            {content.create}
          </button>
        </p>
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
