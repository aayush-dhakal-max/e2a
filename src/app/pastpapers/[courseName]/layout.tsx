import Navbar from "@/components/component/Navbar";
import { teko2 } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "past papers for A Level students",
  description: "Past papers for A Level students. Get access to past papers for A Level subjects.",
  // viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Past Papers</title>
      </head>
      <body className={teko2.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
