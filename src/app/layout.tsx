import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_franklin",
});

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
      <body className={libre_franklin.variable}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
