"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion"

export default function Newsletter() {
  return (
    <section className="bg-moss-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer(0.12)}
        className="mx-auto flex max-w-8xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center md:px-10"
      >
        <motion.div
          variants={fadeUp(14)}
          className="flex items-center gap-2 text-sm text-moss-300"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 5h16v14H4z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M4 6l8 7 8-7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
          لن نزعجك، لن تندم على الاشتراك
        </motion.div>

        <motion.div
          variants={fadeUp(18)}
          className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6"
        >
          <div className="text-cream">
            <p className="font-bold">انضم إلى برنامجنا الصحي.</p>
            <p className="text-sm text-moss-300">
              احصل على تحديثات صحية، وعروض حصرية.
            </p>
          </div>
          <button className="flex items-center gap-2 whitespace-nowrap rounded-full bg-cream px-6 py-3 text-sm font-medium text-moss-800 transition hover:bg-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M11 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            اشترك الآن
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
