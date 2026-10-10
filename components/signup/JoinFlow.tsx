"use client";

import { content } from "./content";
import AccountStep from "./AccountStep";
import PharmacyStep from "./PharmacyStep";
import Stepper from "./Stepper";
import SuccessView from "./SuccessView";
import { useJoinForm } from "./useJoinForm";

export default function JoinFlow() {
  const form = useJoinForm();

  if (form.submittedEmail) return <SuccessView email={form.submittedEmail} />;

  const { step } = form;
  const { title, description } = content.steps[step - 1];

  return (
    <>
      <Stepper step={step} />

      <div className="mb-6">
        <p className="mb-2 text-[12px] font-bold text-[#677763]">
          {content.stepLabel(step)}
        </p>
        <h1
          id="join-title"
          className="mb-2 text-[32px] leading-[1.4] font-semibold tracking-[-1px] text-salus-green"
        >
          {title}
          <span className="text-salus-gold">.</span>
        </h1>
        <p className="text-[16px] leading-[1.6] text-salus-muted">
          {description}
        </p>
      </div>

      <form onSubmit={form.handleSubmit} noValidate>
        {step === 1 ? (
          <PharmacyStep form={form} />
        ) : (
          <AccountStep form={form} />
        )}
      </form>
    </>
  );
}
