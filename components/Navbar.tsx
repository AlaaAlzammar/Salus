"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#", label: "الرئيسية", active: true },
  { href: "#ForUsers", label: "المستخدمين" },
  { href: "#ForPharmacist", label: "الصيدليات" },
  { href: "#HowItWorks", label: "كيف نعمل" },
  { href: "#", label: "تواصل معنا" },
];

export default function Navbar({
  variant = "solid",
}: {
  variant?: "solid" | "overlay";
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isOverlay = variant === "overlay" && !scrolled;

  return (
    <header
      className={`
        z-50 w-full
        transition-all duration-300 ease-in-out
        ${
          scrolled
            ? "fixed inset-x-0 top-0 bg-white/80 backdrop-blur-md shadow-sm"
            : variant === "overlay"
            ? "absolute inset-x-0 top-0"
            : "relative"
        }
      `}
    >
      <nav
        className={`
          mx-auto flex max-w-8xl items-center justify-between px-6
          md:px-10
          transition-all duration-300 ease-in-out
          ${scrolled ? "py-5" : "py-3"}
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span
            className={`text-2xl tracking-tight transition-colors duration-300 ${
              isOverlay ? "text-cream" : "text-moss-800"
            }`}
          >
            SALUS
          </span>

          <div className="stage lockup-h">
            <img
              src={isOverlay?`/logos/salus-logo-light.svg` : `/logos/salus-logo.svg`}
              alt="SALUS"
              className={`salus-icon transition-all duration-300 ${
                isOverlay ? "salus-icon-overlay" : ""
              }`}
            />
          </div>
        </Link>

        {/* Links */}
        <ul
          className={`
            hidden items-center gap-8 text-sm md:flex
            transition-colors duration-300
            ${isOverlay ? "text-cream/85" : "text-moss-700"}
          `}
        >
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`
                  transition-all duration-300
                  ${
                    link.active
                      ? `border-b-2 pb-1 font-medium ${
                          isOverlay
                            ? "border-cream text-cream"
                            : "border-moss-700 text-moss-800"
                        }`
                      : `pb-1 ${
                          isOverlay
                            ? "hover:text-cream"
                            : "hover:text-moss-800"
                        }`
                  }
                `}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            className={`
              flex items-center gap-2 rounded-full px-5 py-2.5
              text-sm font-medium
              transition-all duration-300
              ${
                isOverlay
                  ? "bg-cream/95 text-moss-800 hover:bg-moss-800 hover:text-cream"
                  : "bg-moss-700 text-cream hover:bg-moss-800"
              }
            `}
          >
            تحميل التطبيق

            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 12H5M11 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}