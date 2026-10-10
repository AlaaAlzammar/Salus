import { cx } from "@/lib/cx";
import { content } from "./content";

export default function Stepper({ step }: { step: number }) {
  return (
    <ol className="mb-7 flex gap-3">
      {content.steps.map((item, index) => {
        const number = index + 1;
        return (
          <li
            key={item.title}
            aria-current={number === step ? "step" : undefined}
            className="flex-1"
          >
            <div
              className={cx(
                "h-1.5 rounded-full transition-colors duration-300",
                number <= step ? "bg-salus-accent" : "bg-salus-line",
              )}
            />
            <span
              className={cx(
                "mt-2 block text-[13px] font-semibold",
                number === step ? "text-salus-green" : "text-[#8a948a]",
              )}
            >
              {number}. {item.title}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
