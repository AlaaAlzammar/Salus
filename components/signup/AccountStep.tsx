import PasswordField from "@/components/ui/PasswordField";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import TextField from "@/components/ui/TextField";
import { InfoIcon, MailIcon } from "@/components/ui/icons";
import { content } from "./content";
import type { JoinForm } from "./useJoinForm";

export default function AccountStep({ form }: { form: JoinForm }) {
  const { errors, getFieldProps, submitting, submitError, goBack } = form;

  return (
    <>
      <div className="grid grid-cols-2 gap-x-5 mobile:grid-cols-1">
        <TextField
          id="email"
          label={content.labels.email}
          placeholder={content.placeholders.email}
          icon={<MailIcon />}
          error={errors.email ?? ""}
          ltr
          className="col-span-2 mobile:col-span-1"
          inputProps={{
            ...getFieldProps("email"),
            type: "email",
            inputMode: "email",
            autoComplete: "email",
          }}
        />
        <PasswordField
          id="password"
          label={content.labels.password}
          placeholder={content.placeholders.password}
          autoComplete="new-password"
          required
          error={errors.password ?? ""}
          inputProps={getFieldProps("password")}
        />
        <PasswordField
          id="confirmPassword"
          label={content.labels.confirmPassword}
          placeholder={content.placeholders.confirmPassword}
          autoComplete="new-password"
          required
          error={errors.confirmPassword ?? ""}
          inputProps={getFieldProps("confirmPassword")}
        />
      </div>

      <p className="flex items-start gap-2.5 rounded-[10px] border border-salus-line bg-[#f4f8f1] px-4 py-3 text-[13px] leading-[1.7] text-salus-muted">
        <InfoIcon />
        <span>{content.reviewNote}</span>
      </p>

      {submitError && (
        <p role="alert" className="mt-3 text-[13px] text-salus-error">
          {content.submitError}
        </p>
      )}

      <div className="mt-5 flex gap-3">
        <SecondaryButton onClick={goBack}>{content.back}</SecondaryButton>
        <PrimaryButton type="submit" className="flex-1" disabled={submitting}>
          {submitting ? content.submitting : content.submit}
        </PrimaryButton>
      </div>
    </>
  );
}
