"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

const columns = [
  {
    title: "المتجر",
    links: ["المكملات الغذائية", "العناية الصحية"],
  },
  {
    title: "الشركة",
    links: ["من نحن", "تواصل معنا"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cream">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp(18)}
        className="mx-auto max-w-8xl px-6 py-14 md:px-10"
      >
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_auto]">
          <div>
            <div className="flex items-center gap-2">
              <svg width="26" height="26" viewBox="0 0 30 30" fill="none">
                <path
                  d="M15 2C9 6 6 11 6 16.5C6 22.3 10.1 27 15 27C19.9 27 24 22.3 24 16.5C24 15.8 23.9 15.1 23.8 14.5C21 15.3 18.1 14.6 16 12.5C14.9 11.4 14.2 10 14 8.5C13.3 9.7 13 11.1 13 12.5C13 14.4 13.7 16.1 15 17.4"
                  stroke="#152A1E"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-lg font-bold text-moss-800">SALUS</span>
            </div>
            <p className="mt-4 text-xs text-moss-500">
              © سالوس. جميع الحقوق محفوظة.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-bold text-moss-800">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm text-moss-500">
                {col.links.map((l) => (
                  <li key={l} className="transition hover:text-moss-800">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex items-start gap-3 md:justify-end">
            {["X", "IG", "in", "YT"].map((s) => (
              <span
                key={s}
                className="grid h-9 w-9 place-items-center rounded-full bg-moss-100 text-xs font-medium text-moss-700"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-moss-100 pt-6 text-xs text-moss-500 md:flex-row">
          <span>© سالوس. جميع الحقوق محفوظة.</span>
          <div className="flex gap-6">
            <span>سياسة الخصوصية</span>
            <span>شروط الاستخدام</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
