"use client";

import { motion } from "framer-motion";
import { Search, Tag, MapPin, ArrowLeft } from "lucide-react";
import { fadeUp, revealImage, staggerContainer, viewport } from "@/lib/motion";

const items = [
  {
    title: "ابحث عن دوائك",
    desc: "ابحث بسهولة عن اي دواء",
    icon: (
      <path
        d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM21 21l-4.35-4.35"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "قارن الأسعار",
    desc: "وفر المال من خلال مقارنة الاسعار",
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
    title: "اعرف أين يتوفر",
    desc: "شاهد أقرب الصيدليات على الخريطة",
    icon: (
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
    ),
  },
];

export default function ProductsShowcase() {
  return (
    <section id="ForUsers" className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={revealImage()}
          className="relative order-1 lg:order-1 flex justify-center"
        >
          <img
            src="/images/salus_phone2.png"
            alt="تطبيق SALUS على الهاتف بين يدي مستخدم"
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.12)}
          className="order-2 lg:order-2 text-right"
        >
          <motion.h2
            variants={fadeUp(24)}
            className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-4 leading-snug"
          >
            كل ما تحتاجه في مكان واحد
          </motion.h2>
          <motion.p
            variants={fadeUp(18)}
            className="text-ink/60 text-lg mb-10 max-w-md mr-auto"
          >
            نجعل الوصول الى الأدوية اسهل اسرع و أكثر شفافية
          </motion.p>

          <motion.div
            variants={staggerContainer(0.1)}
            className="flex flex-col gap-4 mb-8"
          >
            {items.map((it) => (
              <motion.div
                key={it.title}
                variants={fadeUp(18)}
                className="flex items-center justify-between gap-4 bg-white/70 border border-black/5 rounded-2xl px-5 py-4"
              >
                <ArrowLeft className="w-4 h-4 text-ink/30 rotate-180 shrink-0" />
                <div className="flex-1 text-right">
                  <p className="font-semibold text-ink">{it.title}</p>
                  <p className="text-sm text-ink/50">{it.desc}</p>
                </div>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sage-pale text-forest shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.a
            variants={fadeUp(15)}
            href="#more"
            className="inline-flex items-center gap-2 text-forest font-semibold underline underline-offset-4"
          >
            اكتشف المزيد
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
