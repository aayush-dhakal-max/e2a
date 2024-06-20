import Navbar from "@/components/component/Navbar";
import type { Metadata } from "next";
import { Inter, Teko } from "next/font/google";

const teko = Teko({ display: "swap", subsets: ["latin"], weight: "400", variable: "--font-teko" });

export const metadata: Metadata = {
  title: "A Levels Past Papers",
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
      <body className={teko.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
