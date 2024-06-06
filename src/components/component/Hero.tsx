import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full min-h-[80vh] py-24 md:py-24 lg:py-16 bg-gradient-to-r sfrom-[#001942] sto-[#C60B52]">
      <div className="container px-4 md:px-6 text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl ">
          Unlock Your Potential with <br /> <span className="text-[#001942]">E</span>
          <span className="text-[#C60B52]">2</span>
          <span className="text-[#001942]">A</span> Learning Nepal
        </h1>
        <p className="text-lg md:text-xl lg:text-xl max-w-3xl mx-auto">
          Empowering A-Level students with expert guidance, comprehensive resources, and a path to academic
          excellence.
        </p>
        <div className="py-8">
          <Link
            href="#"
            className="inline-flex  items-center justify-center rounded-2xl bg-[#C60B52] px-5 py-2 text-white text-xl md:text-2xl font-medium shadow-sm hover:bg-[#772947] focus:outline-none "
            prefetch={false}
          >
            Enroll Now
          </Link>
        </div>
        <div className="">
          <Image
            alt="Students laughing"
            className="mx-auto rounded-lg"
            height="500"
            src="/about.svg"
            style={{
              aspectRatio: "1400/500",
              objectFit: "cover",
            }}
            width="1400"
          />
        </div>
      </div>
    </section>
  );
}
