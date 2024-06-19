import React from "react";
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Marhey } from "next/font/google";
import Autoplay from "embla-carousel-autoplay";

export const marhey = Marhey({ display: "swap", subsets: ["latin"], variable: "--font-marhey" });

const testimonials = [
  {
    quote:
      "I was struggling with A-level Physics, but the comprehensive course materials and past papers from this institution helped me turn things around. Highly recommended!",
    name: "John Doe",
    avatarFallback: "JD",
  },
  {
    quote:
      "I was struggling with A-level Physics, but the comprehensive course materials and past papers from this institution helped me turn things around. Highly recommended!",
    name: "Jane Appleseed",
    avatarFallback: "JA",
  },
  {
    quote:
      "I was struggling with A-level Physics, but the comprehensive course materials and past papers from this institution helped me turn things around. Highly recommended!",
    name: "Tom Smith",
    avatarFallback: "TS",
  },
  {
    quote:
      "I was struggling with A-level Physics, but the comprehensive course materials and past papers from this institution helped me turn things around. Highly recommended!",
    name: "Tom Smith",
    avatarFallback: "TS",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800" id="testimonials">
      <div className="container px-4 md:px-16">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2
              className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#C60B52] ${marhey.className}`}
            >
              What Our Students Say
            </h2>
            <p className="max-w-[700px] mx-auto text-[#001942] md:text-xl dark:text-gray-400">
              Hear from our satisfied students about their experience with our A-level courses.
            </p>
          </div>
          <Carousel
            plugins={[Autoplay({ playOnInit: true, delay: 2500 })]}
            opts={{ loop: true }}
            className="relative "
          >
            <CarouselContent className="h-fit">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="h-[250px] md:max-w-[500px] flex flex-col justify-between md:basis-1/2 lg:basis-1/3 "
                >
                  <Card key={index} className="md:h-fit sm:h-[200px] flex flex-col justify-between">
                    <CardContent>
                      <blockquote className="text-base font-semibold leading-snug mt-6">
                        {testimonial.quote}
                      </blockquote>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="https://i.pravatar.cc/300" />
                          <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
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
