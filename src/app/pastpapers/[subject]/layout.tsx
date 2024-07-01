import Navbar from "@/components/component/Navbar";
import { teko2 } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Past Papers for A Level Students",
  description: "Access past papers for A Level subjects to enhance your preparation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={teko2.className}>
      <Navbar />
      {children}
    </div>
  );
}
