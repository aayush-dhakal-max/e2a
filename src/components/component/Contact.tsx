import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "sonner";

export default function Component() {
  const [name, setName] = useState("");
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        subject: "Send Email TEST with Gmail and Nextjs",
        name,
        receiver,
        message,
      }),
    });
    console.log(response.status, await response.json());
    if (response.status === 200) {
      toast.success("Email Sent Successfully");
    } else {
      toast.error("Failed to send email", { duration: 5000, position: "top-center" });
    }
  };
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
              <form onSubmit={sendMail} className="mt-4 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      value={receiver}
                      onChange={(e) => {
                        setReceiver(e.target.value);
                      }}
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    className="min-h-[120px]"
                    id="message"
                    placeholder="Enter your message"
                  />
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
            <div className="rounded-lg bg-white p-3 shadow-md dark:bg-gray-950">
              <h3 className="text-2xl font-bold tracking-tighter">Find Us on Map</h3>
              <div className="mt-1 aspect-video overflow-hidden rounded-lg">
                <iframe
                  title="Google Maps"
                  className="rounded-sm h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2645232799005!2d85.31198767525271!3d27.67821807619923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ef1dbb9b8d%3A0x1a26f16a81a0e6e7!2sE2A%20Learning%20Nepal!5e0!3m2!1sen!2snp!4v1706521624603!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
