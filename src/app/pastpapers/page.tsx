/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DemDyQ7IX51
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Navbar from "@/components/component/Navbar";
import { Button } from "@/components/ui/button";
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible";
import Link from "next/link";

export default function Component() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12 md:px-6 lg:py-16 max-w-[800px] mt-10 md:mt-32">
        <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Past Exam Papers</h1>
        <div className="space-y-6 ">
          <Collapsible className="rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 ">
            <div className="flex items-center justify-between space-x-4 ">
              <h2 className="text-lg font-semibold">Computer Science - 9618</h2>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  <ChevronDownIcon className="h-6 w-6 transition-transform [&[data-state=open]]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="mt-4 grid gap-2 CollapsibleContent">
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2022 - November
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2021 - May
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2020 - June
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2019 - July
              </Link>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center justify-between space-x-4">
              <h2 className="text-lg font-semibold">Physics</h2>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  <ChevronDownIcon className="h-6 w-6 transition-transform [&[data-state=open]]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="mt-4 grid gap-2 CollapsibleContent">
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2022 - January
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2021 - July
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2020
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2019 - December
              </Link>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center justify-between space-x-4">
              <h2 className="text-lg font-semibold">Mathematics</h2>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  <ChevronDownIcon className="h-6 w-6 transition-transform [&[data-state=open]]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="mt-4 grid gap-2 CollapsibleContent">
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2022
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2021
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2020
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2019
              </Link>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center justify-between space-x-4">
              <h2 className="text-lg font-semibold">Economics</h2>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  <ChevronDownIcon className="h-6 w-6 transition-transform [&[data-state=open]]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="mt-4 grid gap-2 CollapsibleContent">
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2022
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2021
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2020
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2019
              </Link>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center justify-between space-x-4">
              <h2 className="text-lg font-semibold">Biology</h2>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  <ChevronDownIcon className="h-6 w-6 transition-transform [&[data-state=open]]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="mt-4 grid gap-2 CollapsibleContent">
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2022
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2021
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2020
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2019
              </Link>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center justify-between space-x-4">
              <h2 className="text-lg font-semibold">Chemistry</h2>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  <ChevronDownIcon className="h-6 w-6 transition-transform [&[data-state=open]]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="mt-4 grid gap-2 CollapsibleContent">
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2022
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2021
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2020
              </Link>
              <Link
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                2019
              </Link>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </main>
    </>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
