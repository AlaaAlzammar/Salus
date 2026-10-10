import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
});

export const metadata: Metadata = {
  title: "سالوس | رعاية متقدمة، بصحة علمية مثبتة",
  description:
    "منصة للصحة والعافية تجمع بين أحدث الأبحاث الصيدلانية والتكنولوجيا الحيوية، لتقدم لك حلولاً موثوقة تعزز صحتك في كل مرحلة من حياتك.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${almarai.variable} font-arabic bg-cream text-moss-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}