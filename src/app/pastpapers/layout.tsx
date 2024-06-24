import Navbar from "@/components/component/Navbar";
import type { Metadata } from "next";
import { teko2 } from "@/lib/utils";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "A Levels Past Papers",
  description: "Past papers for A Level students. Get access to past papers for A Level subjects.",
  // viewport: "width=device-width, initial-scale=1.0",
};

const inter = Inter({ display: "swap", subsets: ["latin"], weight: "400", variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <body className={inter.className}>{children}</body>;
}
