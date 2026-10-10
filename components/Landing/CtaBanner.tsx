"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { fadeUp, revealImage, staggerContainer, viewport } from "@/lib/motion";

export default function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-moss-900">
      {/* Background photo */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={revealImage()}
        className="absolute inset-0 -z-30"
      >
        <Image
          src="/images/cta.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Gradient: dark on the text side, photo visible on the other */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-transparent via-moss-900/80 to-moss-900" />

      {/* Soft gold glow behind the text */}
      <div className="pointer-events-none absolute -right-24 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />

      {/* Thin gold line on top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="page-x">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.12, 0.1)}
          className="ml-auto flex min-h-[340px] w-full flex-col justify-center gap-5 py-14 text-start md:w-3/5 lg:w-1/2"
        >
          <motion.p
            variants={fadeUp(18)}
            className="flex items-center gap-3 text-sm font-medium text-cream/80 sm:text-base"
          >
            <span className="h-px w-8 bg-gold" />
            ابدأ رحلتك مع سالوس اليوم
          </motion.p>

          <motion.h2
            variants={fadeUp(24)}
            className="text-3xl font-bold leading-[1.4] text-cream sm:text-4xl lg:text-5xl"
          >
            صحتك أصبحت أقرب
            <br />
            من أي وقت مضى
          </motion.h2>

          <motion.div variants={fadeUp(15)} className="mt-2">
            <button className="group inline-flex items-center gap-3 rounded-full bg-gold py-2 pe-2 ps-6 text-sm font-bold text-cream transition hover:brightness-110">
              حمّل التطبيق الآن
              <span className="grid h-9 w-9 place-items-center rounded-full text-cream transition group-hover:-translate-x-1">
                <ArrowLeft className="h-4 w-4" />
              </span>
            </button>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08)}
            className="mt-2 flex flex-wrap gap-3"
          >
            <motion.a
              variants={fadeUp(12)}
              href="#"
              className="flex items-center gap-2.5 rounded-xl border border-cream/20 bg-cream/10 px-4 py-2 text-cream backdrop-blur-md transition hover:-translate-y-0.5 hover:border-gold/70 hover:bg-cream/15"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M3 20.5V3.5c0-.6.3-1.1.8-1.4l10 9.9-10 9.9c-.5-.3-.8-.8-.8-1.4zM16.5 12l3-3 2.5 1.4c.7.4.7 1.4 0 1.8L19.5 13.6l-3-3zm-1.2-1.2L5.5 2 15 7.3l.3.2.9.9zM5.5 22l9.8-9.2-.9.9-.3.2L5.5 22z" />
              </svg>
              <span dir="ltr" className="text-left leading-tight">
                <span className="block text-[9px] uppercase text-cream/70">
                  Get it on
                </span>
                <span className="block text-sm font-semibold">Google Play</span>
              </span>
            </motion.a>

            <motion.a
              variants={fadeUp(12)}
              href="#"
              className="flex items-center gap-2.5 rounded-xl border border-cream/20 bg-cream/10 px-4 py-2 text-cream backdrop-blur-md transition hover:-translate-y-0.5 hover:border-gold/70 hover:bg-cream/15"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M17.05 12.5c0-2.4 2-3.6 2.1-3.7-1.1-1.6-2.9-1.8-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1.9-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.7c1.3 0 2.2-1.2 3-2.4.6-.9.9-1.4 1.4-2.5-3.7-1.4-3.7-4.1-3.7-4.1zM14.8 5.4c.7-.8 1.2-2 1-3.2-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.5 2.9-1.3z" />
              </svg>
              <span dir="ltr" className="text-left leading-tight">
                <span className="block text-[9px] uppercase text-cream/70">
                  Download on the
                </span>
                <span className="block text-sm font-semibold">App Store</span>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}