import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const papers = [
  {
    subject: "Paper 1",
    exams: [
      { name: "Question Paper 1", href: "#" },
      { name: "Question Paper 2", href: "#" },
      { name: "Question Paper 3", href: "#" },
    ],
  },
  {
    subject: "Paper 2",
    exams: [
      { name: "Question Paper 1", href: "#" },
      { name: "Question Paper 2", href: "#" },
      { name: "Question Paper 3", href: "#" },
    ],
  },
  {
    subject: "Paper 3",
    exams: [
      { name: "Question Paper 1", href: "#" },
      { name: "Question Paper 2", href: "#" },
      { name: "Question Paper 3", href: "#" },
    ],
  },
  {
    subject: "Paper 4",
    exams: [
      { name: "Question Paper 1", href: "#" },
      { name: "Question Paper 2", href: "#" },
      { name: "Question Paper 3", href: "#" },
      { name: "Question Paper 3", href: "#" },
    ],
  },
];

export default function Component() {
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
                    key={exam.name}
                    href={exam.href}
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
          <iframe
            src={`https://drive.google.com/file/d/1gKzEZ6bqqXoggJBHGUnyy6Dka3CYkXBO/preview`}
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
