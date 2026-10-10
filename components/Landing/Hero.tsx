"use client";

import Navbar from "@/components/Landing/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { EASE, fadeUp } from "@/lib/motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Very subtle parallax: the image drifts a little slower than the page.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden text-moss-900"
    >
      {/* Background image: soft reveal on load, gentle parallax on scroll */}
      <motion.div
        style={{ y: imageY }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: EASE }}
        className="absolute inset-0 -top-[5%] h-[110%] w-full"
      >
        <Image
          className="h-full w-full object-cover"
          width={1600}
          height={800}
          src="/images/Hero6.jpeg"
          alt="عرض تجريبي لتطبيق سالوس"
          priority
        />
      </motion.div>

      <Navbar variant="overlay" />

      <div className="relative z-10 flex h-full flex-col items-start justify-center page-x text-start">
        {/* Badge: gold dot + gold border */}
        <motion.span
          initial="hidden"
          animate="visible"
          variants={fadeUp(15, 0)}
          className="mb-6 flex items-center gap-2 rounded-full border border-gold/60 bg-white/10 px-4 py-1.5 text-xs font-medium text-moss-900 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          جديد
        </motion.span>

        {/* Heading: one gold word + thin gold line */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp(25, 0.15)}
          className="mb-2 max-w-3xl text-8xl font-bold leading-[1.55] text-moss-700"
        >
          دواؤك <span className="text-gold">أقرب</span>
          <br />
          مما تتخيل
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          className="h-[3px] w-24 origin-right rounded-full bg-gold"
        />

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp(20, 0.3)}
          className="mt-6 max-w-xl text-balance leading-8 text-moss-700/85 md:text-lg"
        >
          ابحث عن الأدوية قارن الأسعار <br />
          واعرف اين توفر في أقرب الصيدليات
        </motion.p>

        <motion.button
          initial="hidden"
          animate="visible"
          variants={fadeUp(15, 0.45)}
          className="mt-9 flex items-center gap-2 rounded-full bg-cream/95 px-5 py-2 text-sm font-medium text-moss-900 backdrop-blur-sm transition hover:bg-moss-900 hover:text-cream"
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
                <stop offset="60%" stopColor="#C9A24B" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#C9A24B" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx="60" cy="60" r="58" fill="url(#halo)" />
            <circle cx="60" cy="60" r="44" fill="#FEFEFC" />
            <circle cx="60" cy="60" r="30" fill="#C9A24B" />

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
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold"
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