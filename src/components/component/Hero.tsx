import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full bg-gray-50 min-h-[80vh] py-12 md:py-24 lg:py-16 bg-gradient-to-r sfrom-[#001942] sto-[#C60B52]">
      <div className="container px-4 md:px-6 text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight sm:text-4xl md:text-4xl lg:text-5xl ">
          Unlock Your Potential with <br /> <span className="text-[#001942]">E</span>
          <span className="text-[#C60B52]">2</span>
          <span className="text-[#001942]">A</span> Learning Nepal
        </h1>
        <p className="text-xl md:hidden md:text-xl lg:text-xl max-w-3xl mx-auto">
          Empowering A-Level students with expert guidance, comprehensive resources, and a path to academic
          excellence.
        </p>
        <div className="md:py-3">
          <Link
            href="#"
            className="inline-flex  items-center justify-center rounded-2xl bg-[#C60B52] px-5 py-2 text-white text-xl md:text-2xl font-medium shadow-sm hover:bg-[#772947] transition-colors duration-500 focus:outline-none "
            prefetch={false}
          >
            Enroll Now
          </Link>
        </div>
        <div className="">
          <Image
            alt="Students laughing"
            className="mx-auto rounded-lg"
            height="294"
            src="/about.svg"
            style={{
              aspectRatio: "850/294",
              objectFit: "cover",
            }}
            width="850"
          />
        </div>
      </div>
    </section>
  );
}
