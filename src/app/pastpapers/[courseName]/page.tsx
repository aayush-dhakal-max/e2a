"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import papers from "@/data/computerPPData.json";
import { ChevronDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { teko2 } from "@/lib/utils";

import { Drawer, DrawerContent, DrawerTrigger, DrawerOverlay, DrawerPortal } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function Component() {
  const [PdfLink, setPdfLink] = useState("");
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`md:mx-12 p-2 md:mt-32 ${teko2.className}`}>
      <div className="grid grid-cols-1 md:grid-cols-[25vw_1fr] sm:grid-cols-1 lg:grid-cols-1[20vw_1fr] gap-2">
        {/* Mobile view */}
        <div className="md:hidden block">
          <Drawer open={open} onOpenChange={setOpen} direction="left">
            <DrawerTrigger asChild>
              <HamburgerMenuIcon className="block h-8 w-8" aria-hidden="true" />
              {/* <Button>Open</Button> */}
            </DrawerTrigger>
            <DrawerPortal>
              <DrawerOverlay className="fixed inset-0 bg-black/5" />
              <DrawerContent className="bg-white flex flex-col h-full w-[300px] max-w-[70vw] mt-24 fixed bottom-0 right-0">
                <div className="p-2 md:p-4 bg-white flex-1 h-full ">
                  <ScrollArea className="h-full md:border-none rounded-lg drop-shadow-lg border-black md:border-2 ">
                    <div className="p-2 md:p-4 space-y-2 bg-gray-0">
                      {papers.map((paper) => (
                        <Collapsible
                          key={paper.subject}
                          className="rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-sm"
                        >
                          <CollapsibleTrigger asChild className="hover:cursor-pointer py-2 ">
                            <div className="flex items-center justify-between space-x-4">
                              <h2 className="text-2xl tracking-normal font-semibold">{paper.subject}</h2>
                              <Button size="sm" variant="ghost">
                                <ChevronDownIcon className="h-6 w-6  transition-transform [&[data-state=open]]:rotate-180" />
                              </Button>
                            </div>
                          </CollapsibleTrigger>

                          <CollapsibleContent className="grid gap-2 grid-cols-2 CollapsibleContent">
                            {paper.exams.map((exam) => (
                              <Link
                                onClick={() => {
                                  setPdfLink(exam.href);
                                  setOpen(false);
                                  setActiveLink(exam.name);
                                }}
                                key={exam.name}
                                href={"#"}
                                className={`block w-full bg-gray-300 rounded-md px-3 py-2 text-lg tracking-wide font-medium transition-colors duration-400 
                              ${
                                activeLink === exam.name
                                  ? "bg-gray-800 text-white"
                                  : "hover:bg-gray-800 hover:text-white"
                              }`}
                                prefetch={false}
                              >
                                {exam.name}
                              </Link>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
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
            <div className="p-4 space-y-2 bg-gray-0">
              {papers.map((paper) => (
                <Collapsible
                  key={paper.subject}
                  className="rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm"
                >
                  <CollapsibleTrigger asChild className="hover:cursor-pointer py-2 ">
                    <div className="flex items-center justify-between space-x-4">
                      <h2 className="text-2xl tracking-normal font-semibold">{paper.subject}</h2>
                      <Button size="sm" variant="ghost">
                        <ChevronDownIcon className="h-6 w-6  transition-transform [&[data-state=open]]:rotate-180" />
                      </Button>
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="grid gap-2 grid-cols-2 CollapsibleContent">
                    {paper.exams.map((exam) => (
                      <Link
                        onClick={() => {
                          setPdfLink(exam.href);
                          setActiveLink(exam.name);
                        }}
                        key={exam.name}
                        href={"#"}
                        className={`block w-full bg-gray-300 rounded-md px-3 py-2 text-lg tracking-wide font-medium transition-colors duration-400 
                        ${
                          activeLink === exam.name
                            ? "bg-gray-800 text-white"
                            : "hover:bg-gray-800 hover:text-white"
                        }`}
                        prefetch={false}
                      >
                        {exam.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden w-full">
          <div className="md:h-[calc(100vh-160px)] sm:h-[calc(100vh-100px)] h-[calc(100vh-250px)]  w-full">
            <iframe src={`${PdfLink}`} frameBorder="0" allowFullScreen className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
