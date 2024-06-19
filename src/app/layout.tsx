import type { Metadata } from "next";
import { Libre_Franklin, Inter, Poppins, Teko } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const teko = Teko({ display: "swap", subsets: ["latin"], weight: "400", variable: "--font-teko" });

export const metadata: Metadata = {
  title: "E2A Nepal",
  description:
    "Empowering A-Level students with expert guidance, comprehensive resources, and a path to academic excellence.",
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
      </body>
    </html>
  );
}
