import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ADContent from "@/components/component/EnrollDialogContent";
import { AlertDialogTrigger, AlertDialog } from "@/components/ui/alert-dialog";
import { Marhey } from "next/font/google";

export const marhey = Marhey({ display: "swap", subsets: ["latin"], variable: "--font-marhey" });

export function Hero() {
  return (
    <section className="w-full bg-gray-50 min-h-[80vh] py-8 md:pt-10 lg:pt-10">
      <div className="container px-4 md:px-16 md:mb-16 text-center space-y-6">
        <div className="md:h-1/2">
          <h1
            className={`text-5xl uppercase font-bold tracking-tight sm:text-4xl md:text-4xl lg:text-5xl ${marhey.className}`}
          >
            Level Up Your A-Levels with <br /> <span className="text-[#001942]">E</span>
            <span className="text-[#C60B52]">2</span>
            <span className="text-[#001942]">A</span> Learning Nepal
          </h1>
          <p
            className={`text-xl pt-6 pb-0 md:pt-10 md:pb-3 md:text-xl lg:text-2xl max-w-3xl mx-auto ${marhey.className}`}
          >
            Empowering A-Level students with expert guidance, comprehensive resources, and a path to academic
            excellence.
          </p>

          {/* Enroll now button in hero section */}
          <div className="md:py-0 py-6">
            {/* <AlertDialog>
              <AlertDialogTrigger asChild> */}
            <Link
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeUrUaxgyKXyxQus9wz_fz-VHIweQjEE_754oFsLRfx5VNmtQ/viewform"
              className="md:hidden inline-flex items-center justify-center bg-[#C60B52] text-white text-xl py-2 px-4 rounded-full shadow-md hover:bg-[#591f35] focus:outline-none "
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
