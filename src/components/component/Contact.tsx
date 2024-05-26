/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TkvT97C804g
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckIcon } from "@radix-ui/react-icons";

export default function Component() {
  return (
    <>
      <section id="about" className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl text-gray-600 font-bold tracking-tighter sm:text-4xl md:text-5xl">
                A-Level Tuition at <span className="text-[#001942]">E</span>
                <span className="text-[#C60B52]">2</span>
                <span className="text-[#001942]">A</span>
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our A-Level tuition institute offers comprehensive and personalized support to help students
                excel in their A-Level examinations. With experienced teachers, small class sizes, and a focus
                on individualized learning, we are committed to guiding our students to academic success.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckIcon className="mr-2 mt-1 h-4 w-4" />
                  <div>
                    <h3 className="text-lg font-medium">Experienced Teachers</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our team of highly qualified and experienced teachers are dedicated to providing
                      exceptional instruction and support.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mr-2 mt-1 h-4 w-4" />
                  <div>
                    <h3 className="text-lg font-medium">Small Class Sizes</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We maintain small class sizes to ensure personalized attention and a collaborative
                      learning environment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mr-2 mt-1 h-4 w-4" />
                  <div>
                    <h3 className="text-lg font-medium">Personalized Learning</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our tailored approach to learning helps students overcome their unique challenges and
                      reach their full potential.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#C60B52]">
                Get in Touch
              </h2>
              <form className="mt-4 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea className="min-h-[120px]" id="message" placeholder="Enter your message" />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-20 lg:py-24 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
              <div className="mt-4 space-y-4 text-gray-500 dark:text-gray-400">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-50">Address</h3>
                  <p>123 Main Street, Anytown USA</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-50">Phone</h3>
                  <p>+977 9801234567</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-50">Mail address</h3>
                  <p>helpdesk@e2alearning.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-50">Hours</h3>
                  <p>Monday - Friday: 9am - 6pm</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
              <h3 className="text-2xl font-bold tracking-tighter">Find Us on Map</h3>
              <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                <Image
                  alt="Map"
                  className="h-full w-full object-cover"
                  height={450}
                  src="https://generated.vusercontent.net/placeholder.svg"
                  style={{
                    aspectRatio: "800/450",
                    objectFit: "cover",
                  }}
                  width={800}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
