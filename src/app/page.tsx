"use client";
import Link from "next/link";
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import Navbar from "@/components/component/Navbar";
import Contact from "@/components/component/Contact";
import Testimonials from "@/components/component/Testimonials";
import { Hero } from "@/components/component/Hero";
import Sidebar from "@/components/component/Sidebar";
import { Toaster } from "@/components/ui/sonner";

export default function Component() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />
      <Hero />
      <section className="w-full py-20 bg-white dark:bg-gray-900" id="courses">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Explore our range of A-level tuition services and resources to help you excel in your exams.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>Computer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Ace your A-level Computer exams with our curated course materials and past papers.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Explore Course
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Physics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Unlock your potential in A-level Physics with our comprehensive resources.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Explore Course
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Chemistry</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Conquer A-level Chemistry with our expertly curated course materials and past papers.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Explore Course
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Biology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Master A-level Biology with our comprehensive course materials and past papers.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Explore Course
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <Contact />
      <Toaster richColors />
    </main>
  );
}
