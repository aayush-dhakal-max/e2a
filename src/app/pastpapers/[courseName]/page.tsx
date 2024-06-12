"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import papers from "@/data/computerPPData.json";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerOverlay,
  DrawerPortal,
} from "@/components/ui/drawer";

export default function Component() {
  const [PdfLink, setPdfLink] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="md:mx-12 p-4">
      <div className="grid grid-cols-1 md:grid-cols-[25vw_1fr] sm:grid-cols-1 lg:grid-cols-1[20vw_1fr] gap-6  h-max ">
        {/* Mobile view */}
        <div className="md:hidden block">
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <HamburgerMenuIcon className="block h-6 w-6" aria-hidden="true" />
            </DrawerTrigger>
            <DrawerPortal>
              <DrawerOverlay className="fixed inset-0 bg-black/5" />
              <DrawerContent className="bg-white flex flex-col h-full w-[400px] max-w-[70vw] mt-24 fixed bottom-0 right-0">
                <div className="p-2 md:p-4 bg-white flex-1 h-full ">
                  <ScrollArea className="h-full md:border-none rounded-lg drop-shadow-lg border-black md:border-2 ">
                    <div className="p-2 md:p-4 space-y-2 bg-gray-200">
                      {papers.map((paper) => (
                        <div key={paper.subject}>
                          <h3 className="text-lg font-medium text-[#C60B52] mb-2">{paper.subject}</h3>
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
                            <Separator className="bg-black h-0.5 rounded-2xl" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </DrawerContent>
            </DrawerPortal>
          </Drawer>
        </div>

        {/* Desktop view */}
        <div className={`rounded-lg overflow-hidden md:block hidden`}>
          <ScrollArea className="h-[calc(100vh-160px)] drop-shadow-lg border-black rounded-lg">
            <div className="p-4 space-y-2 bg-gray-100">
              {papers.map((paper) => (
                <div key={paper.subject}>
                  <h3 className="text-lg font-medium text-[#C60B52] mb-2">{paper.subject}</h3>
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
                    <Separator className="bg-black h-0.5 rounded-2xl" />
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
    </div>
  );
}
