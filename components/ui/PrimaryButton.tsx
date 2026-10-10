import type { ComponentProps } from "react";
import { cx } from "@/lib/cx";
import { primaryButtonClassName } from "./styles";

export default function PrimaryButton({
  className,
  ...props
}: ComponentProps<"button">) {
  return (
    <button className={cx(primaryButtonClassName, className)} {...props} />
  );
}
