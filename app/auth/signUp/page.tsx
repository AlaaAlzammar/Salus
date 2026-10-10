import type { Metadata } from "next";
import JoinPage from "@/components/signup/JoinPage";

export const metadata: Metadata = {
  title: "طلب انضمام · SALUS",
};

export default function Page() {
  return <JoinPage />;
}
