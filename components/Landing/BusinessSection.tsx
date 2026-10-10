"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import {
  fadeIn,
  fadeUp,
  revealImage,
  staggerContainer,
  viewport,
} from "@/lib/motion";

export default function BusinessSection() {
  return (
    <section
      id="ForPharmacist"
      className="relative overflow-hidden bg-moss-700"
    >
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
      <div className="absolute inset-0 bg-moss-900/50" />

      <div className="page-x relative z-10 flex min-h-[420px] items-center lg:min-h-[520px]">
        <div className="grid w-full items-center gap-10 lg:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.12)}
            className="order-3 text-start lg:order-none lg:col-start-3 lg:row-start-3 lg:justify-self-start"
          >
            <motion.p
              variants={fadeUp(14)}
              className="mb-3 text-sm font-medium text-cream/80"
            >
              للشركات
            </motion.p>

            <motion.h2
              variants={fadeUp(24)}
              className="mb-4 text-4xl font-bold leading-snug text-cream"
            >
              لوحة تحكم متكاملة
              <br />
              لصيدليات أكثر تطورًا
            </motion.h2>

            <motion.p
              variants={fadeUp(20)}
              className="mb-8 max-w-xs leading-relaxed text-cream/70"
            >
              أدر طلباتك، تابع مبيعاتك، واطلع على تقارير مفصلة بكل سهولة من لوحة
              سالوس المصممة خصيصًا للصيدليات.
            </motion.p>

            <motion.a
              variants={fadeUp(15)}
              href="#trial"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-moss-900 transition hover:brightness-110"
            >
              اطلب تجربة مجانية
              <ArrowLeft className="h-4 w-4" />
            </motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeIn(0.3)}
            className="absolute bottom-6 end-0 z-10 lg:bottom-5"
          >
            <p
              dir="ltr"
              className="text-[11px] uppercase tracking-[0.2em] text-cream/60"
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