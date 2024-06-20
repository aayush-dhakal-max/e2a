import Navbar from "@/components/component/Navbar";
import { Button } from "@/components/ui/button";
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible";
import Link from "next/link";
import pastPapersData from "@/data/pastPapersData.json";
import { teko2 } from "@/lib/utils";

export default function Component() {
  return (
    <>
      <Navbar />
      <main
        className={`container mx-auto px-4 py-12 md:px-6 lg:py-16 max-w-[800px] mt-10 md:mt-24 ${teko2.className}`}
      >
        <h1 className="mb-8 text-4xl font-bold md:tracking-wider tracking-wide md:text-4xl">
          Past <span className="text-[#C60B52]">Exam</span> Papers
        </h1>
        <div className="space-y-6">
          {pastPapersData.map((subjectData, index) => (
            <Collapsible
              key={subjectData.subject}
              className="rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-sm"
            >
              <CollapsibleTrigger asChild className="hover:cursor-pointer py-2 ">
                <div className="flex items-center justify-between space-x-4">
                  <h2 className="text-2xl font-semibold">{subjectData.subject}</h2>
                  <Button size="sm" variant="ghost">
                    <ChevronDownIcon className="h-6 w-6 transition-transform [&[data-state=open]]:rotate-180" />
                  </Button>
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent className="grid gap-2 grid-cols-2 CollapsibleContent">
                {subjectData.papers.map((paper, paperIndex) => (
                  <Link
                    key={subjectData.subject + paperIndex}
                    className="rounded-md bg-gray-300 px-3 py-3 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-white"
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
