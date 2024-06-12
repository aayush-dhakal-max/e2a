"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import papers from "@/data/computerPPData.json";
import Sidebar from "@/components/component/Sidebar";
import { Button } from "@/components/ui/button";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Component() {
  const [PdfLink, setPdfLink] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[25vw_1fr] sm:grid-cols-1 lg:grid-cols-1[20vw_1fr] gap-6 p-4 md:p-4 h-max md:mx-12">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden z-30 mb "
      >
        {isSidebarOpen ? (
          <Cross1Icon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <HamburgerMenuIcon className="block h-6 w-6" aria-hidden="true" />
        )}
        <span className="sr-only">Toggle navigation</span>
      </Button>
      <div
        className={` ${
          isSidebarOpen ? "block pt-10 absolute h-100vh" : "hidden"
        } rounded-lg overflow-hidden md:block`}
      >
        <ScrollArea className="md:h-[calc(100vh-160px)] h-[calc(100vh-250px)] md:border-none drop-shadow-lg border-black border-2 rounded-lg">
          <div className="p-4 space-y-2 bg-gray-200">
            {papers.map((paper) => (
              <div key={paper.subject}>
                <h3 className="text-lg font-medium text-[#C60B52] ">{paper.subject}</h3>
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
      <div className="bg-gray-100 rounded-lg overflow-hidden w-full">
        <div className="md:h-[calc(100vh-160px)] sm:h-[calc(100vh-100px)] h-[calc(100vh-200px)]  w-full">
          <iframe src={`${PdfLink}`} frameBorder="0" allowFullScreen className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
