import { teko2 } from "@/lib/utils";
import pastPapersData from "@/data/pastPapersData.json";
import SubjectPastPaper from "@/components/component/SubjectPastPaper";

export async function generateStaticParams() {
  const hrefs = pastPapersData.flatMap((subject) =>
    subject.papers.map((paper) => {
      return paper.href.split("/")[2];
    })
  );
  return hrefs.map((href) => {
    return {
      subject: href,
    };
  });
}
const Component = ({ params }: any) => {
  const paperpath = `${params.subject}.json`;

  return (
    <div className={`md:mx-0 lg:mx-16 p-2 md:mt-32 ${teko2.className}`}>
      <div className="grid grid-cols-1 md:grid-cols-[25vw_1fr] sm:grid-cols-1 lg:grid-cols-1[20vw_1fr] gap-2">
        <SubjectPastPaper paperpath={paperpath} />
      </div>
    </div>
  );
};

export default Component;
