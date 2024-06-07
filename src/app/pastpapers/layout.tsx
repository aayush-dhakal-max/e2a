import Navbar from "@/components/component/Navbar";
import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";

const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_franklin",
});
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
      <body className={libre_franklin.variable}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
