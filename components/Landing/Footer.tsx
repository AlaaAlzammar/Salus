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
        className="mx-auto max-w-8xl px-6 pt-14 pb-4 md:px-10"
      >
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_auto]">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logos/salus-logo.svg" className="w-8"/>
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
