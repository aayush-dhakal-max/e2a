import Navbar from "@/components/component/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// import "../globals.css";

export const metadata: Metadata = {
  title: "A Levels Past Papers",
  description: "Past papers for A Level students. Get access to past papers for A Level subjects.",
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
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
