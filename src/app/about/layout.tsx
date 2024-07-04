import type { Metadata } from "next";
import { teko2 } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us | E2A Learning Nepal",
  description:
    "Welcome to E2A Learning Nepal, your premier destination for A Level education and resources. At E2A Learning Nepal, we are dedicated to empowering students with the knowledge and skills they need to excel in their A Level examinations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={teko2.className}>{children}</div>;
}
