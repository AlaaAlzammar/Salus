"use client";

import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EASE, fadeUp } from "@/lib/motion"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Very subtle parallax: the image drifts a little slower than the page.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* Background image: soft reveal on load, gentle parallax on scroll */}
      <motion.div
        style={{ y: imageY }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: EASE }}
        className="absolute inset-0 -top-[5%] h-[110%] w-full"
      >
        <img
          className="h-full w-full object-cover"
          src="/images/HeroImage2.png"
          alt="عرض تجريبي لتطبيق سالوس"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/20 to-transparent" />

      <Navbar variant="overlay" />

      <div className="relative z-10 flex h-full flex-col items-start justify-center px-14 text-start">
        <motion.span
          initial="hidden"
          animate="visible"
          variants={fadeUp(15, 0)}
          className="mb-6 rounded-full border border-cream/40 bg-white/10 px-4 py-1.5 text-xs font-medium text-cream backdrop-blur-sm"
        >
          جديد
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp(25, 0.15)}
          className="max-w-3xl text-4xl font-bold leading-relaxed mb-2 text-cream md:text-6xl"
        >
          دواؤك أقرب
          <br />
          مما تتخيل
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp(20, 0.3)}
          className="mt-6 max-w-xl text-balance leading-8 text-cream/85 md:text-lg"
        >
          ابحث عن الأدوية قارن الأسعار <br />
          واعرف اين توفر في أقرب الصيدليات
        </motion.p>

        <motion.button
          initial="hidden"
          animate="visible"
          variants={fadeUp(15, 0.45)}
          className="mt-9 flex items-center gap-2 rounded-full bg-cream/95 text-moss-800 px-5 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-moss-800 hover:text-cream"
        >
          شاهد كيف يعمل سالوس
          <svg
            width="40"
            height="40"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Play"
          >
            <defs>
              <radialGradient id="halo" cx="50%" cy="50%" r="50%">
                <stop offset="60%" stopColor="#E8E2CF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#E8E2CF" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx="60" cy="60" r="58" fill="url(#halo)" />
            <circle cx="60" cy="60" r="44" fill="#F4F1E7" />
            <circle cx="60" cy="60" r="30" fill="#A38F5B" />

            <path
              d="M54 49.5 L54 70.5 L72 60 Z"
              fill="#FFFFFF"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: EASE }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/70"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M6 13l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
