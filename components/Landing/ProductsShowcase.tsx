"use client";

import { motion } from "framer-motion";
import { Search, Tag, MapPin, ArrowLeft } from "lucide-react";
import { fadeUp, revealImage, staggerContainer, viewport } from "@/lib/motion";

const items = [
  {
    title: "ابحث عن دوائك",
    desc: "ابحث بسهولة عن أي دواء",
    Icon: Search,
  },
  {
    title: "قارن الأسعار",
    desc: "وفّر المال من خلال مقارنة الأسعار",
    Icon: Tag,
  },
  {
    title: "اعرف أين يتوفر",
    desc: "شاهد أقرب الصيدليات على الخريطة",
    Icon: MapPin,
  },
];

export default function ProductsShowcase() {
  return (
    <section id="ForUsers" className="relative overflow-hidden bg-cream">
      <div className="page-x grid items-center gap-16 py-20 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.12)}
          className="order-1 text-start"
        >
          <motion.h2
            variants={fadeUp(24)}
            className="mb-4 text-4xl font-bold leading-snug text-moss-900 lg:text-5xl"
          >
            كل ما تحتاجه في{" "}
            <span className="text-gold">مكان واحد</span>
          </motion.h2>

          <motion.p
            variants={fadeUp(18)}
            className="mb-10 max-w-md text-lg text-moss-700/70"
          >
            نجعل الوصول إلى الأدوية أسهل وأسرع وأكثر شفافية
          </motion.p>

          <motion.div
            variants={staggerContainer(0.1)}
            className="mb-8 flex flex-col gap-4"
          >
            {items.map(({ title, desc, Icon }) => (
              <motion.div
                key={title}
                variants={fadeUp(18)}
                className="group flex items-center gap-4 rounded-2xl border border-moss-100 bg-white/70 px-5 py-4 transition hover:border-gold/60"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-moss-100 text-moss-700">
                  <Icon className="h-5 w-5" />
                </span>

                <div className="flex-1">
                  <p className="font-semibold text-moss-900">{title}</p>
                  <p className="text-sm text-moss-700/60">{desc}</p>
                </div>

                <ArrowLeft className="h-4 w-4 shrink-0 text-moss-700/30 transition group-hover:text-gold" />
              </motion.div>
            ))}
          </motion.div>

          <motion.a
            variants={fadeUp(15)}
            href="#more"
            className="inline-flex items-center gap-2 rounded-full bg-moss-700 px-6 py-3 font-semibold text-cream transition hover:bg-moss-900"
          >
            اكتشف المزيد
            <ArrowLeft className="h-4 w-4" />
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={revealImage()}
          className="relative order-2 flex justify-center"
        >
          <img
            src="/images/salus_phone2.png"
            alt="تطبيق SALUS على الهاتف بين يدي مستخدم"
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}