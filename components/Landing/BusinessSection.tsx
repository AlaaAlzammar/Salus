"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { fadeIn, fadeUp, revealImage, staggerContainer, viewport } from "@/lib/motion";

export default function BusinessSection() {
  return (
    <section dir="rtl" id="ForPharmacist" className="relative overflow-hidden  bg-moss-700">
      {/* Full-width background photo */}
      <motion.img
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={revealImage()}
        src="/images/BussinessCard.png"
        alt="لوحة تحكم SALUS"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay keeps all the text readable */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 mx-auto max-w-7xl min-h-[420px] lg:min-h-[520px] flex items-center">
        <div className="grid w-full lg:grid-cols-3 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.12)}
            className="text-right order-1 lg:order-none lg:row-start-1 lg:col-start-3 lg:justify-self-end"
          >
            <motion.p variants={fadeUp(14)} className="text-sage-light/80 text-sm mb-3">
              للشركات.
            </motion.p>
            <motion.h2
              variants={fadeUp(24)}
              className="font-display text-4xl font-semibold text-cream mb-4 leading-snug"
            >
              لوحة تحكم متكاملة
              <br />
              لصيدليات أكثر تطورًا
            </motion.h2>
            <motion.p
              variants={fadeUp(20)}
              className="text-cream/70 leading-relaxed mb-8 max-w-xs"
            >
              أدر طلباتك، تابع مبيعاتك، واطلع على تقارير مفصلة بكل سهولة من لوحة
              سالوس المصممة خصيصًا للصيدليات.
            </motion.p>
            <motion.a
              variants={fadeUp(15)}
              href="#trial"
              className="inline-flex items-center gap-2 rounded-full bg-cream text-ink px-6 py-3 text-sm font-medium hover:bg-white transition-colors"
            >
              اطلب تجربة مجانية
              <ArrowLeft className="w-4 h-4" />
            </motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeIn(0.3)}
            className="absolute z-10 bottom-6 left-6 lg:bottom-5 lg:right-0 text-right"
          >
            <p
              dir="ltr"
              className="text-[11px] tracking-[0.2em] text-cream/60 uppercase text-right"
            >
              Built for a
              <br />
              healthier tomorrow
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
