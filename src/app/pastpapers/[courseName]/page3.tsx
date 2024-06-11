"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import papers from "@/data/computerPPData.json";
import Sidebar from "@/components/component/Sidebar";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Component() {
  const [PdfLink, setPdfLink] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[25vw_1fr] gap-6 p-4 md:p-4 h-max">
      <div>
        <div className=" bg-white  p-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden"
          >
            <HamburgerMenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
        <div className={`md:block ${isSidebarOpen ? "block" : "hidden md:block"} rounded-lg overflow-hidden`}>
          <ScrollArea className="h-[calc(100vh-160px)] ">
            <div className="p-4 space-y-2 bg-gray-100">
              {papers.map((paper) => (
                <div key={paper.subject}>
                  <h3 className="text-lg font-medium  ">{paper.subject}</h3>
                  <div key={paper.subject} className="grid gap-2">
                    {paper.exams.map((exam) => (
                      <Link
                        onClick={() => {
                          setPdfLink(exam.href);
                        }}
                        key={exam.name}
                        href={"#"}
                        className="block w-full bg-gray-300 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors duration-400"
                        prefetch={false}
                      >
                        {exam.name}
                      </Link>
                    ))}
                    <Separator className="bg-black rounded-2xl" />
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
      <div
        className={`bg-gray-100 dark:bg-gray-950 rounded-lg overflow-hidden ${
          isSidebarOpen
            ? "md:col-start-2 md:row-start-1 md:col-span-1 md:row-span-1"
            : "md:col-span-1 lg:col-span-1"
        }`}
      >
        <div className="bg-gray-100 rounded-lg overflow-hidden w-full">
          <div className="h-[calc(100vh-160px)] w-full">
            <iframe src={`${PdfLink}`} frameBorder="0" allowFullScreen className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
