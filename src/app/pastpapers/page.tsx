"use client";
import Navbar from "@/components/component/Navbar";
import { Button } from "@/components/ui/button";
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible";
import Link from "next/link";
import pastPapersData from "@/data/NEWpastPapersData.json";
import { teko2 } from "@/lib/utils";
import { useState } from "react";

export default function Component() {
  const [openCollapsible, setOpenCollapsible] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [expandedData, setExpandedData] = useState<any>(null);

  const toggleCollapsible = (subject: string) => {
    if (openCollapsible) {
      setOpenCollapsible(null);
      setExpandedData(null);
      setExpanded(false);

      if (openCollapsible !== subject) {
        setTimeout(() => {
          setOpenCollapsible(subject);
        }, 200);
      }
    } else {
      setOpenCollapsible(subject);
    }
  };

  return (
    <>
      <Navbar />
      <main
        className={`container mx-auto px-4 py-12 md:px-6 lg:py-16 max-w-[800px] mt-10 md:mt-24 ${teko2.className}`}
      >
        <h1 className="mb-8 text-3xl font-bold md:tracking-wider tracking-wide md:text-4xl">
          Past <span className="text-[#C60B52]">Exam</span> Papers
        </h1>
        <div className="space-y-6">
          {pastPapersData.map((subjectData, index) => (
            <Collapsible
              key={index}
              className="rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-sm "
              open={openCollapsible === subjectData.subject} // Control open state based on the current state
            >
              <CollapsibleTrigger
                asChild
                className="hover:cursor-pointer py-2 "
                onClick={() => toggleCollapsible(subjectData.subject)}
              >
                <div className="flex items-center justify-between space-x-4">
                  <h2 className="text-xl font-semibold">{subjectData.subject}</h2>
                  <Button size="sm" variant="ghost">
                    <ChevronDownIcon
                      className={`h-6 w-6 transition-transform ${
                        openCollapsible === subjectData.subject ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent className="flex gap-2 h-full w-full">
                <div className="flex-1 grid grid-cols-1 gap-2">
                  {subjectData.papers.map((paper, index) => (
                    <Button
                      key={index}
                      variant={"default"}
                      className="md:w-4/5 w-full px-7 py-6 font-medium text-md hover:bg-primary hover:scale-105 transition-transform"
                      onClick={() => {
                        !expandedData && setExpanded(!expanded);
                        setExpandedData(paper.papers);
                      }}
                    >
                      {paper.yearData}
                    </Button>
                  ))}
                </div>

                {/* Years data */}
                <div className="flex-1 grid grid-cols-1 gap-2 h-max">
                  {expanded &&
                    expandedData.map((paper: any, index: any) => (
                      <Link
                        key={index}
                        className="rounded-md w-full ml-auto bg-gray-300 px-3 py-3 text-md font-medium transition-colors hover:bg-gray-800 hover:text-white"
                        href={paper.href}
                      >
                        {paper.year}
                      </Link>
                    ))}
                </div>
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
