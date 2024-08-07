import type { Metadata } from "next";
import { teko2 } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Enroll Now | AS & A Level Tuition in Nepal",
  description:
    "Enroll now at E2A Learning Nepal for top-quality AS & A Level tuition. Our tutors provide personalized guidance and comprehensive resources to help students achieve academic excellence in their A Level examinations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={teko2.className}>{children}</div>;
}
