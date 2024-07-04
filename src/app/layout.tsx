import type { Metadata } from "next";
import { Teko } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const teko = Teko({ display: "swap", subsets: ["latin"], weight: "400", variable: "--font-teko" });

export const metadata: Metadata = {
  title: "E2A Learning Nepal | A Level Tuition in Nepal",
  description:
    "E2A Learning Nepal is a leading A Level tuition provider in Nepal. We offer A Level classes for students in Nepal. Our A Level tuition classes are designed to help students achieve their academic goals. Enroll now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={teko.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
