import React from "react";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { teko2 } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Scrollbar } from "@radix-ui/react-scroll-area";

const testimonials = [
  {
    quote:
      "I had a decent concept of every topic by the end of course, thanks to Rikesh Sir's effective and interactive teaching. Frequent tests and feedback were very helpful.",
    name: "John Doe",
    avatarFallback: "JD",
  },
  {
    quote:
      "It helped me understand maths and not just rot learn the subject. I actually liked doing maths at the end because I knew how to do alot of questions. This course is excellent for students who want to improve their grades drastically. With full effort from both the sides, A* seemed like an easy goal.",
    name: "Jane Appleseed",
    avatarFallback: "JA",
  },
  {
    quote:
      "Even though a tutor typically just focuses on the syllabus content, my teacher here at e2a was an enthusiast for cybersecurity and  programming, who not only taught us the course contents but also sparked an interest for vast possibilities in the realm of computer science. Due to his knowledge and experience, he was able to share and simplify all the topics of CS(9618) which made them easy to understand. Also the company I was exposed to in e2a has been one of the most welcoming environment I had ever encountered.",
    name: "Tom Smith",
    avatarFallback: "TS",
  },
  {
    quote:
      "I had a great experience at E2A. The classes were interactive and encouraging. The small class size meant a lot of one-on-one time with the tutors, helping me grasp difficult content.",
    name: "Tom Smith",
    avatarFallback: "TS",
  },
];

const Testimonials = () => {
  return (
    <section
      className={`w-full py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800 ${teko2.className}`}
      id="testimonials"
    >
      <div className="container px-4 md:px-16">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2
              className={`text-4xl font-bold  tracking-wide md:tracking-wider sm:text-4xl md:text-5xl text-[#C60B52] `}
            >
              What Our Students Say
            </h2>
            <p className="max-w-[700px] mx-auto text-[#001942] md:text-xl dark:text-gray-400">
              Hear from our satisfied students about their experience with our A-level courses.
            </p>
          </div>
          <Carousel
            plugins={[
              Autoplay({ playOnInit: true, delay: 2500, stopOnFocusIn: true, stopOnInteraction: true }),
            ]}
            opts={{ loop: true }}
            className="relative "
          >
            <CarouselContent className="h-fit">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  // Updated className for responsiveness and consistent sizing
                  className="flex flex-col justify-between md:basis-1/2 lg:basis-1/3"
                >
                  <Card
                    key={index}
                    // Set a consistent height for all cards and make it responsive
                    className="h-auto md:h-[220px] lg:h-[220px] flex flex-col pt-6 justify-between sm:h-[220px] w-full"
                  >
                    <CardContent>
                      <ScrollArea className="h-28">
                        <blockquote className="text-xl leading-snug max-h-[220px]">
                          {testimonial.quote}
                        </blockquote>
                        <ScrollBar />
                      </ScrollArea>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="https://i.pravatar.cc/300" />
                          <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                        </Avatar>
                        <div className="text-xl ">
                          <div className="">{testimonial.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">A-level Student</div>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext className="absolute top-[47%] right-2 bg-[#001942] text-white animate-bounce duration-1000" /> */}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
