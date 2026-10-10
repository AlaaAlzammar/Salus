"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { id: "home", href: "#", label: "الرئيسية" },
  { id: "ForUsers", href: "#ForUsers", label: "للمستخدمين" },
  { id: "ForPharmacist", href: "#ForPharmacist", label: "للصيدليات" },
  { id: "HowItWorks", href: "#HowItWorks", label: "كيف نعمل" },
];

// Links whose target is an actual section on the page (has a matching id
// somewhere in the DOM) — these are the ones scrollspy tracks.
const sectionIds = links.filter((l) => l.href.length > 1).map((l) => l.id);

export default function Navbar({
  variant = "solid",
}: {
  variant?: "solid" | "overlay";
}) {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) {
          current = id;
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        z-50 w-full transition-all duration-300 ease-in-out
        ${
          scrolled
            ? "fixed inset-x-0 top-0 border-b border-moss-100 bg-cream/85 shadow-sm backdrop-blur-md"
            : variant === "overlay"
            ? "absolute inset-x-0 top-0"
            : "relative"
        }
      `}
    >
      <nav
        className={`
          page-x flex items-center justify-between
          transition-all duration-300 ease-in-out
          ${scrolled ? "py-3" : "py-4"}
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl tracking-tight text-moss-900">SALUS</span>
          <img
            src="/logos/salus-logo.svg"
            alt="SALUS"
            className="salus-icon"
          />
        </Link>

        {/* Links */}
        <ul className="hidden items-center gap-8 text-sm text-moss-700 md:flex">
          {links.map((link) => {
            const isActive = link.id === activeId;
            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={`
                    border-b-2 pb-1 transition-all duration-300
                    ${
                      isActive
                        ? "border-gold font-semibold text-moss-900"
                        : "border-transparent hover:text-moss-900"
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="flex items-center gap-2 rounded-full bg-moss-700 px-5 py-2.5 text-sm font-medium text-cream transition-all duration-300 hover:bg-moss-900"
          >
            تسجيل الدخول
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M11 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}