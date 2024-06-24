import Navbar from "@/components/component/Navbar";
import { teko2 } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Past Papers for A Level Students",
  description: "Access past papers for A Level subjects to enhance your preparation.",
  // viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={teko2.className}>
      <Navbar />
      {children}
    </body>
  );
}
