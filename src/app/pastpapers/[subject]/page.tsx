"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { teko2 } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function Component() {
  // console.log(mypapers);
  const [papers, setPapers] = useState([]);
  const pathname = usePathname();
  const paperpath = `${pathname.split("/")[2]}.json`;
  console.log(paperpath);

  const [PdfLink, setPdfLink] = useState("");
  const [activeLink, setActiveLink] = useState("");

  const [openCollapsible, setOpenCollapsible] = useState<string | null>(null);

  const toggleCollapsible = (subject: string) => {
    setOpenCollapsible(openCollapsible === subject ? null : subject);
  };

  useEffect(() => {
    const getSetPapers = async () => {
      await import(`@/data/${paperpath}`)
        .then((module) => {
          const papers = module.default;
          setPapers(papers);
          console.log(papers);
        })
        .catch((err) => {
          // toast.error("Failed to send email", { duration: 5000, position: "top-center" });
          console.log(err);
        });
    };

    getSetPapers();

    // console.log(activeLink);
  }, [paperpath]);

  return (
    <div className={`md:mx-0 lg:mx-16 p-2 md:mt-32 ${teko2.className}`}>
      <div className="grid grid-cols-1 md:grid-cols-[25vw_1fr] sm:grid-cols-1 lg:grid-cols-1[20vw_1fr] gap-2">
        {/* Mobile view */}
        <div className="md:hidden block">
          <ScrollArea className="min-h-[100vh] border-black rounded-lg">
            <div className="p-4 space-y-2 bg-gray-0">
              {papers.map((paper: any) => (
                <Collapsible
                  key={paper.subject}
                  className="rounded-lg border border-gray-200 bg-gray-100 p-4"
                  open={openCollapsible === paper.subject}
                >
                  <CollapsibleTrigger
                    onClick={() => toggleCollapsible(paper.subject)}
                    asChild
                    className="hover:cursor-pointer py-2 "
                  >
                    <div className="flex items-center justify-between space-x-4">
                      <h2 className="text-2xl tracking-normal font-semibold">{paper.subject}</h2>
                      <Button size="sm" variant="ghost">
                        <ChevronDownIcon
                          className={`h-6 w-6 transition-transform ${
                            openCollapsible === paper.subject ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent
                    className={`grid gap-2 ${
                      paper.cols == 3 ? "grid-cols-3" : "grid-cols-2"
                    } CollapsibleContent`}
                  >
                    {paper.pdf_files.map((pdf_file: any) => (
                      <Link
                        onClick={() => {
                          setPdfLink(pdf_file.href);
                          setActiveLink(pdf_file.name);
                        }}
                        target="_blank"
                        key={pdf_file.name}
                        href={pdf_file.href}
                        // href={{ query: { paper: pdf_file.paper } }}
                        className={`block w-full bg-gray-300 rounded-md px-3 py-2 pt-3 text-xl tracking-wide font-medium transition-colors duration-400 
                        ${
                          activeLink === pdf_file.name
                            ? "bg-gray-800 text-white"
                            : "hover:bg-gray-800 hover:text-white"
                        }`}
                        prefetch={false}
                      >
                        {pdf_file.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Desktop view */}
        <div className={`rounded-lg overflow-hidden md:block hidden`}>
          <ScrollArea className="h-[calc(100vh-160px)] drop-shadow-lg border-black rounded-lg">
            <div className="p-4 space-y-3 bg-gray-0">
              {papers.map((paper: any) => (
                <Collapsible
                  key={paper.subject}
                  className="rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-sm"
                  open={openCollapsible === paper.subject}
                >
                  <CollapsibleTrigger
                    onClick={() => toggleCollapsible(paper.subject)}
                    asChild
                    className="hover:cursor-pointer py-2 "
                  >
                    <div className="flex items-center justify-between space-x-4">
                      <h2 className="text-2xl tracking-normal font-semibold">{paper.subject}</h2>
                      <Button size="sm" variant="ghost">
                        <ChevronDownIcon
                          className={`h-6 w-6 transition-transform ${
                            openCollapsible === paper.subject ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent
                    className={`grid gap-2 ${
                      paper.cols == 3 ? "grid-cols-3" : "grid-cols-2"
                    } CollapsibleContent`}
                  >
                    {paper.pdf_files.map((pdf_file: any) => (
                      <Link
                        onClick={() => {
                          setPdfLink(pdf_file.href);
                          setActiveLink(pdf_file.name);
                        }}
                        key={pdf_file.name}
                        href={{ query: { paper: pdf_file.paper } }}
                        className={`block w-full bg-gray-300 rounded-md px-3 py-2 pt-3 text-xl tracking-wide font-medium transition-colors duration-400 
                        ${
                          activeLink === pdf_file.name
                            ? "bg-gray-800 text-white"
                            : "hover:bg-gray-800 hover:text-white"
                        }`}
                        prefetch={false}
                      >
                        {pdf_file.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="bg-gray-100 rounded-lg md:block hidden overflow-hidden w-full">
          {/* <h1 className="z-50 text-7xl">Open a paper to view</h1> */}
          <div className="h-[82svh] w-full">
            <iframe
              src={`${PdfLink}`}
              width={"100%"}
              height={"100%"}
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
