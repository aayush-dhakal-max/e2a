import Navbar from "@/components/component/Navbar";
import type { Metadata } from "next";
import { teko2 } from "@/lib/utils";

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
      <body className={teko2.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
