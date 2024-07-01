import type { Metadata } from "next";
import { teko2 } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Past Papers | A Level | E2A Learning Nepal",
  description:
    "Past papers for A Level students. Download and view past papers for free at E2A Learning Nepal. Perfect for students and teachers looking to prepare for upcoming exams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={teko2.className}>{children}</div>;
}
