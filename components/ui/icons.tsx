import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

function Icon({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cx("size-[19px] fill-none [stroke-width:1.5]", className)}
    >
      {children}
    </svg>
  );
}

const fieldIcon = "flex-none stroke-[#7a8b75]";

export const MailIcon = () => (
  <Icon className={fieldIcon}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 7 8 6 8-6" />
  </Icon>
);

export const LockIcon = () => (
  <Icon className={fieldIcon}>
    <rect x="5" y="10" width="14" height="11" rx="3" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
  </Icon>
);

export const StoreIcon = () => (
  <Icon className={fieldIcon}>
    <path d="M4 10v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9" />
    <path d="M3 10 5 4h14l2 6a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0Z" />
    <path d="M12 13v4M10 15h4" />
  </Icon>
);

export const UserIcon = () => (
  <Icon className={fieldIcon}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </Icon>
);

export const PhoneIcon = () => (
  <Icon className={fieldIcon}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </Icon>
);

export const BuildingIcon = () => (
  <Icon className={fieldIcon}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-4h4v4" />
  </Icon>
);

export const PinIcon = () => (
  <Icon className={fieldIcon}>
    <path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Icon>
);

export const InfoIcon = () => (
  <Icon className="mt-px flex-none stroke-salus-accent">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </Icon>
);

/** The slash only shows while the parent `group` button is aria-pressed. */
export const EyeIcon = () => (
  <Icon className="stroke-current">
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
    <path className="hidden group-aria-pressed:block" d="m4 4 16 16" />
  </Icon>
);
