"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, revealImage, staggerContainer, viewport } from "@/lib/motion"

export default function Section() {
  return (
    <section id="ForPharmacist" dir="rtl" className="relative isolate overflow-hidden py-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={revealImage()}
        className="absolute inset-0 -z-20"
      >
        <Image
          src="/images/Section2.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#0d1712]/85 via-[#0d1712]/25 to-[#0d1712]/85" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0d1712]/30 via-transparent to-transparent" />

      <div className="mx-auto grid min-h-[420px] max-w-9xl grid-cols-1 items-center gap-10 px-2 py-20 lg:grid-cols-[1fr_1.5fr_0.9fr] lg:gap-6 lg:px-10">
        {/* Empty spacer column — the laptop already lives in the background photo */}

        {/* Side copy + stores */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.12)}
          dir="rtl"
          className="mx-auto w-[280px] lg:mx-0"
        >
          <motion.h3
            variants={fadeUp(20)}
            className="mb-5 w-full text-right text-2xl font-bold leading-relaxed text-white"
          >
            مساعدك
            <br />
            في نمو صيدليتك
          </motion.h3>

          <motion.p
            variants={fadeUp(18)}
            className="mb-5 w-full text-right text-base leading-8 text-[#E7ECE7]"
          >
            بيانات أوضح .. قرارات أفضل ..
            <br />
            ومجتمع أكثر صحة.
          </motion.p>

          <motion.div
            variants={staggerContainer(0.08)}
            className="flex w-full justify-start gap-3"
          >
            <motion.a
              variants={fadeUp(14)}
              href="#"
              className="flex h-12 items-center gap-2 rounded-lg bg-black px-3 text-white"
            >
              {/* Google Play */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7 shrink-0"
              >
                <path d="M3 20.5V3.5c0-.6.3-1.1.8-1.4l10 9.9-10 9.9c-.5-.3-.8-.8-.8-1.4zM16.5 12l3-3 2.5 1.4c.7.4.7 1.4 0 1.8L19.5 13.6l-3-3zm-1.2-1.2L5.5 2 15 7.3l.3.2.9.9zM5.5 22l9.8-9.2-.9.9-.3.2L5.5 22z" />
              </svg>

              <div dir="ltr" className="text-left leading-tight">
                <span className="block text-[8px]">GET IT ON</span>
                <span className="block text-sm font-semibold">Google Play</span>
              </div>
            </motion.a>

            <motion.a
              variants={fadeUp(14)}
              href="#"
              className="flex h-12 items-center gap-2 rounded-lg bg-black px-3 text-white"
            >
              {/* App Store */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7 shrink-0"
              >
                <path d="M17.05 12.5c0-2.4 2-3.6 2.1-3.7-1.1-1.6-2.9-1.8-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1.9-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.7c1.3 0 2.2-1.2 3-2.4.6-.9.9-1.4 1.4-2.5-3.7-1.4-3.7-4.1-3.7-4.1zM14.8 5.4c.7-.8 1.2-2 1-3.2-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.5 2.9-1.3z" />
              </svg>

              <div dir="ltr" className="text-left leading-tight">
                <span className="block text-[8px]">Download on the</span>
                <span className="block text-sm font-semibold">App Store</span>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="hidden lg:block" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.12, 0.1)}
          className="text-center lg:text-right"
        >
          <motion.p variants={fadeUp(14)} className="mb-4 text-sm text-[#C7A15A]">
            شريكك في خدمة صحة مجتمعك
          </motion.p>
          <motion.h2
            variants={fadeUp(24)}
            className="mb-5 text-3xl font-black leading-relaxed text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.4)] lg:text-4xl"
          >
            لوحة تحكم متكاملة
            <br />
            لصيدليات أكثر تطورًا
          </motion.h2>
          <motion.p
            variants={fadeUp(20)}
            className="mx-auto mb-8 max-w-sm text-base leading-8 text-[#E7ECE7] lg:mx-0"
          >
            أدر طلباتك، تابع مبيعاتك، واطلع على تقارير مفصلة بكل سهولة من لوحة
            سالوس المصممة خصيصًا للصيدليات.
          </motion.p>
          <motion.button
            variants={fadeUp(15)}
            className="inline-flex items-center gap-2 rounded-full bg-[#1E3A2C] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#2E5240]"
          >
            سجّل كصيدلي
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4 -scale-x-100"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
