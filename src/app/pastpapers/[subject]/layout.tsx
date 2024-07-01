import Navbar from "@/components/component/Navbar";
import { teko2 } from "@/lib/utils";

export async function generateMetadata({ params }: any) {
  function capitalize(s: any) {
    return s[0].toUpperCase() + s.slice(1);
  }

  const monthsData: { [key: string]: string } = {
    feb: "February",
    mar: "March",
    may: "May",
    june: "June",
    oct: "October",
    nov: "November",
  };
  // Creating array from the params to get subject, year & intake
  const myArray = params.subject.split("-");

  // Checking if the array has 5 elements or not for checking COMPUTER SCIENCE
  if (myArray.length == 6) {
    console.log("computer");
    const newArray = [`${capitalize(myArray[0])} ${capitalize(myArray[1])}`, ...myArray.slice(2)];
    myArray.splice(0, myArray.length, ...newArray);
  }
  // Generate Months like 'February March' from 'feb mar'
  const insertMonthsData = `${monthsData[myArray[3]]} ${monthsData[myArray[4]]}`;

  // console.log(`Past Papers | ${capitalize(myArray[0])} (${myArray[1]}) - ${myArray[2]} ${insertMonthsData}`);
  // console.log(
  //   `Explore our collection of Cambridge International AS and A Level past exam papers for ${capitalize(
  //     myArray[0]
  //   )} (${myArray[1]}) ${
  //     myArray[2]
  //   } ${insertMonthsData}. Perfect for students and teachers looking to prepare for upcoming exams. Download and View now for free at E2A Learning Nepal.`
  // );

  return {
    title: `Past Papers | ${capitalize(myArray[0])} (${myArray[1]}) - ${myArray[2]} ${insertMonthsData}`,
    description: `Explore our collection of Cambridge International AS and A Level past exam papers for ${capitalize(
      myArray[0]
    )} (${myArray[1]}) ${
      myArray[2]
    } ${insertMonthsData}. Perfect for students  looking to prepare for upcoming exams. Download and View now for free at E2A Learning Nepal.`,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={teko2.className}>
      <Navbar />
      {children}
    </div>
  );
}
