import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { teko2 } from "@/lib/utils";

const courses = [
  {
    title: "A Level Classes",
    description:
      "Boost your A-level exam scores with our handpicked materials and past papers. Enhance your knowledge and exam readiness.",
    link_text: "Explore Course",
  },
  {
    title: "SAT Classes",
    description:
      "Elevate your SAT scores with our comprehensive resources. Our SAT classes are designed to improve your knowledge and exam performance.",
    link_text: "Explore Course",
  },
  {
    title: "Online Courses",
    description:
      "Excel in your A-level study with our curated online courses. Access premium materials and past papers to advance your academic journey.",
    link_text: "Coming Soon",
  },
];

const OurServices = () => {
  return (
    <section
      className={`w-full py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900" id="courses ${teko2.className}`}
    >
      <div className="container px-4 md:px-16">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-normal md:tracking-wider sm:text-3xl md:text-4xl">
              Our Services
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl text-lg dark:text-gray-400">
              Explore our range of A-level tuition services and resources to help you excel in your exams.
            </p>
          </div>
          <div className="grid gap-6 grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-3 ">
            {courses.map((course) => (
              <Card className="" key={course.title}>
                <CardHeader>
                  <CardTitle className="text-xl tracking-normal">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-md md:text-lg">{course.description}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-base font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    {course.link_text}
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
