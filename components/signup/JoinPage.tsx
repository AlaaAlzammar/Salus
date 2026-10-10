import Link from "next/link";
import { cx } from "@/lib/cx";
import { routes } from "@/lib/routes";
import Brand from "@/components/ui/Brand";
import { textButtonClassName } from "@/components/ui/styles";
import { content } from "./content";
import JoinFlow from "./JoinFlow";

export default function JoinPage() {
  return (
    <main
      aria-labelledby="join-title"
      className={cx(
        "relative w-[min(760px,100%)] animate-arrive rounded-[27px] border border-[#ffffffed] bg-[#fffefa] p-[32px_48px_36px]",
        "shadow-[0_24px_65px_-25px_#1e594d45,0_3px_14px_#1e594d0c]",
        "mobile:rounded-[23px] mobile:p-[24px_22px_28px]",
      )}
    >
      <header className="mb-8 flex items-center justify-between gap-4">
        <Brand />
        <p className="text-[14px] text-salus-muted">
          <span>{content.hasAccount}</span>{" "}
          <Link href={routes.login} className={textButtonClassName}>
            {content.login}
          </Link>
        </p>
      </header>

      <JoinFlow />
    </main>
  );
}
