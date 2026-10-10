import type { ComponentProps } from "react";
import { cx } from "@/lib/cx";
import { secondaryButtonClassName } from "./styles";

export default function SecondaryButton({
  className,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={cx(secondaryButtonClassName, className)}
      {...props}
    />
  );
}
