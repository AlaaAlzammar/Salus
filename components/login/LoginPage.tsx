import Link from "next/link";
import { content } from "./content";
import LoginForm from "./LoginForm";
import Mark from "./Mark";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-10">
      <main className="grid min-h-[calc(100vh-2rem)] w-full max-w-[2500px] overflow-hidden rounded-[2rem] bg-cream shadow-[0_30px_80px_-30px_rgba(15,32,24,0.45)] sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-5rem)] lg:grid-cols-2 lg:rounded-[2.5rem]">
        {/* Form side (right in RTL) */}
        <section
          aria-labelledby="welcome-title"
          className="flex flex-col justify-between px-6 py-8 sm:px-10 lg:px-16 lg:py-4"
        >
      

          {/* Form */}
          <div className="mx-auto w-full max-w-md py-10">
            <div className="mb-10">
              <p className="mb-10 flex items-center gap-3 text-sm font-medium text-gold">
                <span className="h-px w-8 bg-gold" />
                {content.eyebrow}
              </p>

              <h1
                id="welcome-title"
                className="text-4xl font-bold leading-snug text-moss-900 lg:text-5xl"
              >
                سجّل دخولك
              </h1>
            </div>

            <LoginForm />
          </div>

          {/* Footer */}
          <footer className="flex items-center justify-between text-xs text-moss-700/60">
            <span>
              © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
              SALUS
            </span>
            <span>{content.preview}</span>
          </footer>
        </section>

        {/* Brand side (left in RTL), hidden on mobile */}
        <aside
          aria-label={content.visualLabel}
          className="relative hidden items-center justify-center overflow-hidden bg-moss-900 lg:flex"
        >
          {/* Soft glows */}
          <div className="pointer-events-none absolute -bottom-24 -start-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -top-24 -end-24 h-80 w-80 rounded-full bg-moss-700/60 blur-3xl" />

      
          <div className="absolute inset-y-0 start-0 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent" />

          <div className="relative flex flex-col items-center gap-6 px-8 text-[#F7F3EA]">
            <div className="flex items-center gap-6">
              <Image src="/logos/salus-logo-light.svg" alt="logo" width={100} height={100}/>
              <span className="text-[clamp(3rem,5vw,5.5rem)] font-extrabold leading-none tracking-[-0.04em]">
                SALUS
              </span>
            </div>

            <span className="h-[3px] w-24 rounded-full bg-gold" />

            <p className="text-center text-sm uppercase tracking-[0.25em] text-cream/60">
              Built for a healthier tomorrow
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}