"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

const features = [
  {
    title: "جودة مضمونة",
    desc: "نختار لك أفضل المكونات ونضمن نقاءها.",
    icon: (
      <path
        d="M12 3c3 2 6 3 8 3-.3 8-3.5 12.5-8 15-4.5-2.5-7.7-7-8-15 2 0 5-1 8-3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "أمان وفعالية",
    desc: "تخضع منتجاتنا لأعلى معايير السلامة والفعالية.",
    icon: (
      <>
        <path
          d="M12 3c3 2 6 3 8 3-.3 8-3.5 12.5-8 15-4.5-2.5-7.7-7-8-15 2 0 5-1 8-3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    title: "توصيل سريع",
    desc: "إلي باب منزلك في الوقت المناسب.",
    icon: (
      <>
        <path
          d="M3 7h11v9H3z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M14 10h4l3 3v3h-7z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.4" />
        <circle
          cx="17.5"
          cy="18"
          r="1.6"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </>
    ),
  },
  {
    title: "صحة أفضل",
    desc: "لأن غدك يستحق أفضل رعاية.",
    icon: (
      <path
        d="M12 20s-7-4.4-9.5-9C.8 7.4 3 4 6.5 4c2 0 3.7 1.1 4.5 2.6C11.8 5.1 13.5 4 15.5 4 19 4 21.2 7.4 21.5 11c-2.5 4.6-9.5 9-9.5 9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Features() {
  return (
    <section className="bg-[#FAF9F3]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer(0.1)}
        className="mx-auto grid max-w-8xl grid-cols-2 gap-y-12 px-6 py-6 md:grid-cols-4 md:gap-10 md:px-10 md:py-10"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={fadeUp(20)}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-full bg-moss-100 text-moss-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                {f.icon}
              </svg>
            </div>
            <h3 className="mb-2 text-base font-bold text-moss-800 md:text-lg">
              {f.title}
            </h3>
            <p className="max-w-[15rem] text-sm leading-6 text-moss-600">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
