import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { teko2 } from "@/lib/utils";

const OurServices = () => {
  return (
    <section
      className={`w-full py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900" id="courses ${teko2.className}`}
    >
      <div className="container px-4 md:px-16">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-normal md:tracking-wider sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl text-xl dark:text-gray-400">
              Explore our range of A-level tuition services and resources to help you excel in your exams.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 items-center lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Computer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-xl">
                  Ace your A-level Computer exams with our curated course materials and past papers.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-lg font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Explore Course
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Physics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-xl">
                  Unlock your potential in A-level Physics with our comprehensive resources.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-lg font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Explore Course
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Chemistry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-xl">
                  Conquer A-level Chemistry with our expertly curated course materials and past papers.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-lg font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Explore Course
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Biology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-xl">
                  Master A-level Biology with our comprehensive course materials and past papers.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-lg font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
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
  );
};

export default OurServices;
