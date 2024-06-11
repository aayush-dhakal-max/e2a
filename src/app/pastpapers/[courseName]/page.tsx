"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import papers from "@/data/computerPPData.json";

export default function Component() {
  const [PdfLink, setPdfLink] = useState("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 md:p-6 h-[100vh]">
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <ScrollArea className="h-[calc(100vh-128px)]">
          <div className="p-4 space-y-2">
            {papers.map((paper) => (
              <div key={paper.subject} className="grid gap-2">
                <h3 className="text-lg font-medium  ">{paper.subject}</h3>
                {paper.exams.map((exam) => (
                  <Link
                    onClick={() => {
                      setPdfLink(exam.href);
                    }}
                    key={exam.name}
                    href={"#"}
                    className="block bg-gray-300 dark:bg-gray-900 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors"
                    prefetch={false}
                  >
                    {exam.name}
                  </Link>
                ))}
                <Separator className="bg-black h-1 rounded-2xl" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="bg-gray-100 dark:bg-gray-950 rounded-lg overflow-hidden md:block hidden">
        <div className="h-[calc(100vh-128px)] w-full">
          <iframe src={`${PdfLink}`} frameBorder="0" allowFullScreen className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
