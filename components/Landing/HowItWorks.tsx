"use client";

// components/HowItWorks.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, ShoppingCart, Wallet, Truck } from "lucide-react";
import { fadeUp, fadeIn, revealImage, viewport } from "@/lib/motion"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "ابحث عن منتجك",
    text: "ابحث بسهولة عن الأدوية أو منتجات العناية التي تحتاجها من خلال محرك البحث أو تصفح الأقسام المختلفة.",
    image: "/images/step-1.png",
    fit: "cover",
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "أضف إلى السلة",
    text: "اختر المنتجات المناسبة لك وأضفها إلى سلة التسوق بكل سهولة.",
    image: "/images/step-2.png",
    fit: "cover",
  },
  {
    number: "03",
    icon: Wallet,
    title: "اختر طريقة الدفع",
    text: "ادفع بالطريقة الأنسب لك عبر وسائل الدفع الآمنة والمتعددة.",
    image: "/images/step-3.png",
    fit: "cover",
  },
  {
    number: "04",
    icon: Truck,
    title: "استلم طلبك",
    text: "تجهز طلبك بعناية ونوصله إلى باب منزلك في أسرع وقت.",
    image: "/images/step-4.jpeg",
    fit: "cover",
  },
] as const;

export default function HowItWorks() {
  return (
    <section id="HowItWorks" dir="rtl" className="bg-cream py-20 lg:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        {/* Header */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp(20)}
          className="mb-14 text-center lg:mb-10"
        >
          <p className="mb-3 text-xs text-[#A38F5B]">خطوات بسيطة</p>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-ink mb-4 leading-snug">
            كيف يعمل سالوس؟
          </h2>
          <p className="mt-3 text-sm text-moss-700/60">
            رحلة سهلة من طلبك إلى باب منزلك
          </p>
        </motion.header>

        <ol className="relative">
          {/* Dashed connecting path (desktop only).
              4 rows -> circle centers at y = 50 / 150 / 250 / 350 */}
          <svg
            aria-hidden
            viewBox="0 0 100 400"
            preserveAspectRatio="none"
            fill="none"
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-24 -translate-x-1/2 lg:block"
          >
            <path
              d="M50 50 C100 70 100 130 50 150
                 C0 170 0 230 50 250
                 C100 270 100 330 50 350"
              stroke="#B8AE8F"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {steps.map((step, i) => {
            const Icon = step.icon;
            // even steps: image on the right, text on the left. odd: reversed.
            const imageOnRight = i % 2 === 0;

            return (
              <li
                key={step.number}
                className=" grid gap-6 py-8 lg:h-80 lg:grid-cols-[1fr_96px_1fr] lg:items-center lg:gap-0 lg:py-0"
              >
                {/* Icon node */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={fadeIn(0.1)}
                  className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8ede0] text-moss-700 ring-8 ring-[#F6F3EA] lg:col-start-2 lg:row-start-1 lg:h-16 lg:w-16 lg:justify-self-center"
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </motion.div>

                {/* Text */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={fadeUp(22)}
                  className={`max-w-xs text-right lg:row-start-1 ${
                    imageOnRight ? "lg:col-start-3" : "lg:col-start-1"
                  }`}
                >
                  <span className="text-[8.6rem] font-semibold text-[#ddd] mb-[1.2rem]">
                    {step.number}
                  </span>
                  <h3 className="mb-2 mt-1 font-display text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/50">
                    {step.text}
                  </p>
                </motion.div>

                {/* Image */}
                <div
                  className={`step-img-box isolate  relative h-64 w-full max-w-sm  lg:row-start-1 ${
                    imageOnRight
                      ? "lg:col-start-1"
                      : "lg:col-start-3 lg:justify-self-end"
                  }`}
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    variants={revealImage(0.05)}
                    className="relative z-10 h-64 w-72 overflow-hidden rounded-[2rem]"
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(min-width: 1024px) 384px, 100vw"
                      className={
                        step.fit === "cover" ? "object-cover" : "object-contain"
                      }
                    />
                  </motion.div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
