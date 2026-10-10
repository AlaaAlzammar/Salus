import type { ComponentProps } from "react";
import { cx } from "@/lib/cx";
import { textButtonClassName } from "./styles";

export default function TextButton({
  className,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={cx(textButtonClassName, className)}
      {...props}
    />
  );
}
