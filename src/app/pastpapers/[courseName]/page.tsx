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
    <div className="grid grid-cols-1 md:grid-cols-[20vw_1fr] grid-cols-1[25vw_1fr] gap-6 p-4 md:p-4 h-max">
      {/* <div
        className={` ${
          isSidebarOpen ? "block" : "hidden"
        } h-[calc(100vh-160px)] rounded-md w-96 absolute bg-red-200 md:hidden  `}
      ></div> */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden z-30 mb"
      >
        <HamburgerMenuIcon className="h-6 w-6" />
        <span className="sr-only">Toggle navigation</span>
      </Button>
      <div
        className={` ${
          isSidebarOpen ? "block pt-10 absolute h-100vh" : "hidden"
        } rounded-lg overflow-hidden md:block`}
      >
        <ScrollArea className="md:h-[calc(100vh-160px)] h-[calc(100vh-250px)]  rounded-lg">
          <div className="p-4 space-y-2 bg-gray-200">
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
      <div className="bg-gray-100 rounded-lg overflow-hidden w-full">
        <div className="h-[calc(100vh-160px)] w-full">
          <iframe src={`${PdfLink}`} frameBorder="0" allowFullScreen className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
