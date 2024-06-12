import * as React from "react";
import papers from "@/data/computerPPData.json";
import { Button } from "@/components/ui/button";
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
import { Separator } from "@radix-ui/react-select";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function DrawerDemo() {
  const [PdfLink, setPdfLink] = React.useState("");

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <button>Open Drawer</button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay className="fixed " />
        <DrawerContent className="bg-white flex flex-col h-full w-[400px] max-w-[80vw] mt-24 fixed bottom-0 right-0">
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
  );
}
