import Image from "next/image";
import { content } from "./content";
import LoginForm from "./LoginForm";
import Mark from "./Mark";

export default function LoginPage() {
  return (
    <main className="shell">
      <section className="login-side" aria-labelledby="welcome-title">
        <header className="topbar">
          <div className="brand" aria-label="SALUS">
            <Mark width={30} height={34} />
            <span>SALUS</span>
          </div>
        </header>

        <div className="form-wrap">
          <div className="intro">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 id="welcome-title">
              {content.title}
              <span className="gold">.</span>
            </h1>
            <p className="description">
              {content.description[0]}
              <br />
              {content.description[1]}
            </p>
          </div>

          <LoginForm />
        </div>

        <footer className="form-footer">
          <span>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            SALUS
          </span>
          <span className="preview-label">{content.preview}</span>
        </footer>
      </section>

      <aside className="visual-side" aria-label={content.visualLabel}>
        <Image
          className="healthcare-illustration"
          src="/images/login/pharmacist-illustration.webp"
          alt={content.illustrationAlt}
          width={1122}
          height={1402}
          priority
        />
      </aside>
    </main>
  );
}
