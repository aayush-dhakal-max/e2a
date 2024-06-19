import type { Metadata } from "next";
import { Libre_Franklin, Inter, Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ display: "swap", subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ display: "swap", weight: "400", subsets: ["latin"], variable: "--font-poppins" });

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
      <body className={inter.variable}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
