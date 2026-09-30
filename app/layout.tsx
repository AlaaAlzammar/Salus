import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
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
      <body className={`${tajawal.variable} font-arabic antialiased`}>
        {children}
      </body>
    </html>
  );
}
