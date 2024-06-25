"use client";
import Image from "next/image";
import Navbar from "@/components/component/Navbar";
import Contact from "@/components/component/Contact";
import Testimonials from "@/components/component/Testimonials";
import { Hero } from "@/components/component/Hero";
import { Toaster } from "@/components/ui/sonner";
import OurServices from "@/components/component/OurServices";

export default function Component() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />
      <Hero />
      <OurServices />
      <Testimonials />
      <Contact />
      <Toaster richColors />
    </main>
  );
}
