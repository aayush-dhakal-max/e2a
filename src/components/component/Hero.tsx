import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] sm:min-h-[400px] overflow-hidden md:mt-28">
      <Image
        alt="Hero Background"
        className="object-cover object-center w-full h-full"
        layout="fill"
        src="/hero.webp"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-gray-900/20 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-transparent"></div>
      <div className="absolute top-1/2 left-4 -translate-y-1/2 max-w-xl space-y-4 sm:left-16 md:left-20 lg:left-24">
        <h1 className="text-5xl sm:text-5xl italic font-bold tracking-tight text-white md:text-5xl lg:text-5xl xl:text-6xl">
          <div className="mb-4">lets learn beyond</div>
          <div className="text-[#C60B52] mt-4">the limit</div>
        </h1>
        <p className="text-lg text-gray-300 sm:text-xl md:py-3 md:text-2xl">
          Empowering A-Level students with expert guidance, comprehensive resources, and a path to academic
          excellence.
        </p>
        <div className="flex items-center space-x-4">
          <Button variant="secondary" size={"lg"}>
            Contact Us
          </Button>
          <Button variant="default" size={"lg"}>
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
