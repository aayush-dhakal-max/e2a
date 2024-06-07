import Navbar from "@/components/component/Navbar";
import { Button } from "@/components/ui/button";
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible";
import Link from "next/link";
import pastPapersData from "@/data/pastPapersData.json";

export default function Component() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12 md:px-6 lg:py-16 max-w-[800px] mt-10 md:mt-32">
        <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Past Exam Papers</h1>
        <div className="space-y-6">
          {pastPapersData.map((subjectData, index) => (
            <Collapsible
              key={index}
              className="rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <CollapsibleTrigger asChild className="hover:cursor-pointer">
                <div className="flex items-center justify-between space-x-4">
                  <h2 className="text-lg font-semibold">{subjectData.subject}</h2>
                  <Button size="sm" variant="ghost">
                    <ChevronDownIcon className="h-6 w-6 transition-transform [&[data-state=open]]:rotate-180" />
                  </Button>
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent className="mt-4 grid gap-2 CollapsibleContent">
                {subjectData.papers.map((paper, paperIndex) => (
                  <Link
                    key={paperIndex}
                    className="rounded-md bg-gray-300 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                    href={paper.href}
                  >
                    {paper.year}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
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
