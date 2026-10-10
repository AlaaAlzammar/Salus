"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { cx } from "@/lib/cx";
import { routes } from "@/lib/routes";
import { primaryButtonClassName } from "@/components/ui/styles";
import { content } from "./content";

export default function SuccessView({ email }: { email: string }) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Announce the result to screen readers and keyboard users.
  useEffect(() => headingRef.current?.focus(), []);

  return (
    <div className="flex flex-col items-center pt-2 pb-2 text-center">
      <div className="grid size-16 place-items-center rounded-full bg-[#e3f2e8]">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-8 fill-none stroke-salus-accent [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]"
        >
          <path d="m5 12.5 4.5 4.5L19 7.5" />
        </svg>
      </div>

      <h1
        id="join-title"
        ref={headingRef}
        tabIndex={-1}
        className="mt-6 mb-3 text-[32px] leading-[1.4] font-semibold tracking-[-1px] text-salus-green outline-0"
      >
        {content.success.title}
        <span className="text-salus-gold">.</span>
      </h1>

      <p className="max-w-[460px] text-[16px] leading-[1.8] text-salus-muted">
        {content.success.body}
      </p>

      <div className="mt-7 w-full max-w-[420px] rounded-[10px] border border-salus-line bg-[#f8faf6] px-4 py-3">
        <p className="text-[12px] text-salus-muted">
          {content.success.emailLabel}
        </p>
        <p className="mt-1 text-[16px] font-semibold break-all text-salus-green [direction:ltr]">
          {email}
        </p>
      </div>

      <Link
        href={routes.login}
        className={cx(primaryButtonClassName, "mt-7 max-w-[420px]")}
      >
        {content.success.backToLogin}
      </Link>
    </div>
  );
}
