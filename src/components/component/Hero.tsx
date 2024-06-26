import Image from "next/image";
import Link from "next/link";
import { teko, teko2 } from "@/lib/utils";

export function Hero() {
  return (
    <section className="w-full bg-gray-50 min-h-[80svh] py-8 pt-20 md:pt-10 lg:pt-10">
      <div className="container px-4 md:px-16 md:mb-16 text-center space-y-6">
        <div className="md:h-1/2">
          <h1
            className={`text-4xl text-sp font-bold tracking-wide md:tracking-wider sm:text-4xl md:text-4xl lg:text-5xl ${teko.className}`}
          >
            Level Up Your A-Levels with <br /> <span className="text-[#001942]">E</span>
            <span className="text-[#C60B52]">2</span>
            <span className="text-[#001942]">A</span> Learning Nepal
          </h1>
          <p
            className={`text-2xl pt-6 pb-0 md:pt-10 md:pb-3 md:text-xl lg:text-3xl max-w-3xl mx-auto ${teko2.className}`}
          >
            Empowering A-Level students with expert guidance, comprehensive resources, and a path to academic
            excellence.
          </p>

          {/* Enroll now button in hero section */}
          <div className="md:py-0 py-6 flex gap-2 justify-center">
            {/* <AlertDialog>
              <AlertDialogTrigger asChild> */}
            <Link
              href={"/pastpapers"}
              className={`md:hidden inline-flex items-center justify-center bg-[#001942] text-white text-xl pt-3 py-2 px-3
                 rounded-full shadow-md hover:bg-[#3262af] focus:outline-none ${teko2.className}`}
              prefetch={false}
            >
              Past Papers
            </Link>
            <Link
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeUrUaxgyKXyxQus9wz_fz-VHIweQjEE_754oFsLRfx5VNmtQ/viewform"
              className={`md:hidden inline-flex items-center justify-center bg-[#C60B52] text-white text-xl pt-3 py-2 px-3
                 rounded-full shadow-md hover:bg-[#591f35] focus:outline-none ${teko2.className}`}
              prefetch={false}
            >
              Enroll Now
            </Link>
            {/* </AlertDialogTrigger>
              <ADContent />
            </AlertDialog> */}
          </div>
        </div>
        <div className="md:h-1/2">
          <Image
            alt="Students laughing"
            className="mx-auto"
            height="300"
            src="/about.svg"
            style={{
              aspectRatio: "850/300",
              objectFit: "cover",
            }}
            width="850"
          />
        </div>
      </div>
    </section>
  );
}
