"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

const stats = [
  { value: "+50K", label: "دواء متوفر" },
  { value: "+1.2K", label: "صيدلية" },
  { value: "+10K", label: "مستخدم " },
];

export default function StatsBanner() {
  return (
    <section className="grid bg-[#FAF9F3] md:grid-cols-[minmax(0,1fr)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer(0.12)}
        className="flex flex-col justify-between px-6 py-6 md:flex-row md:items-center md:px-14"
      >
        <motion.div variants={fadeUp(18)} className="justify-items-center items-center">
          <p className="text-sm text-moss-500">أرقام تتحدث عن نفسها</p>
          <h3 className="mt-2 text-2xl font-bold text-moss-800 md:text-3xl">
            مجتمع ينمو بثقة
          </h3>
        </motion.div>

        <motion.div variants={staggerContainer(0.1)} className="flex flex-wrap gap-10">
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp(16)}>
              <p className="text-2xl font-bold text-moss-700 md:text-3xl">
                {s.value}
              </p>
              <p className="text-sm text-moss-500">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
