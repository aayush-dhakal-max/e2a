"use client";
import Navbar from "@/components/component/Navbar";
import Image from "next/image";
import Link from "next/link";
import { RevealFromLeft, RevealFromRight } from "@/components/component/Reveal";

export default function Component() {
  return (
    <div className="w-full">
      <Navbar />
      <div>
        <section className="w-full py-12 md:py-24 lg:py-32 tracking-wide ">
          <div className="container px-4 md:px-16">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <RevealFromLeft>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-lg">
                    Welcome to E2A Learning Nepal
                  </div>
                  <h2 className="text-3xl font-bold sm:text-4xl md:text-4xl">
                    Empowering Students to Achieve Excellence
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground text-lg ">
                    E2A Learning Nepal is a premier educational institution dedicated to providing exceptional
                    A Level tutoring, A Level Past Paper resources, and comprehensive video learning
                    materials. Our mission is to empower A level students to reach their full potential and
                    achieve academic excellence.
                  </p>
                </div>
              </RevealFromLeft>
              <RevealFromRight>
                <Image
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="550"
                  height="310"
                  alt="About Us"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </RevealFromRight>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 tracking-wide">
          <div className="container px-4 md:px-16">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <RevealFromLeft>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-lg bg-white">
                    Our Services
                  </div>
                  <h2 className="text-3xl font-bold sm:text-4xl md:text-4xl">
                    Tailored Solutions for Academic Success
                  </h2>
                  <div className="grid gap-6">
                    <RevealFromLeft>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">A Levels Tuition</h3>
                        <p className="text-muted-foreground text-lg">
                          Our experienced and qualified tutors provide comprehensive A Level tutoring,
                          ensuring students receive personalized attention and guidance to excel in their
                          studies.
                        </p>
                      </div>
                    </RevealFromLeft>
                    <RevealFromLeft>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">A Level Past Papers</h3>
                        <p className="text-muted-foreground text-lg">
                          Gain a competitive edge with our exclusive collection of past papers, allowing
                          students to practice and refine their exam techniques for optimal performance.
                        </p>
                      </div>
                    </RevealFromLeft>
                    <RevealFromLeft>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Exclusive Video Materials</h3>
                        <p className="text-muted-foreground text-lg">
                          Supplement your learning with our comprehensive video materials, covering a wide
                          range of subjects and topics to enhance your understanding and retention.
                        </p>
                      </div>
                    </RevealFromLeft>
                  </div>
                </div>
              </RevealFromLeft>
              <RevealFromRight>
                <Image
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Our Services"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </RevealFromRight>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 tracking-wide">
          <div className="container px-4 md:px-16">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <RevealFromLeft>
                <Image
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Commitment"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </RevealFromLeft>
              <RevealFromRight>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-lg">Our Commitment</div>
                  <h2 className="text-3xl font-bold md:text-4xl">Dedicated to Student Success</h2>
                  <p className="max-w-[600px] text-muted-foreground text-lg">
                    At E2A Learning Nepal, we are committed to providing our students with the highest quality
                    education and support. Our team of qualified and experienced teaching staff is dedicated
                    to helping students achieve their academic goals and reach their full potential.
                  </p>
                </div>
              </RevealFromRight>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-16">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <RevealFromLeft>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-lg bg-white">Join Us</div>
                  <h2 className="text-3xl font-bold md:text-4xl">Enroll with E2A Learning Nepal</h2>
                  <p className="max-w-[600px] text-muted-foreground text-lg">
                    If youre looking to take your academic journey to new heights, we invite you to join E2A
                    Learning Nepal. Contact us today to learn more about our services and how we can support
                    your educational goals.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      href="/enroll"
                      target="_blank"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Enroll Now
                    </Link>
                    <Link
                      href="/#contact"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-lg font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </RevealFromLeft>
              <RevealFromRight>
                <Image
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Join Us"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </RevealFromRight>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
