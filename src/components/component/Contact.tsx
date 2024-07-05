import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckIcon, MobileIcon, EnvelopeClosedIcon, SewingPinFilledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import { teko2 } from "@/lib/utils";

export default function Component() {
  const [name, setName] = useState("");
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        subject: "Student Enquiry from E2A Tuition Website",
        name,
        senderMail: sender,
        message,
      }),
    });
    console.log(response.status, await response.json());
    if (response.status === 200) {
      toast.success("Email Sent Successfully", { duration: 5000, position: "top-center" });
    } else {
      toast.error("Failed to send email", { duration: 5000, position: "top-center" });
    }
  };
  return (
    <>
      <section className={`py-12 md:py-16 lg:py-20 ${teko2.className}`}>
        <div className="container px-4 md:px-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl text-[#001942] font-bold tracking-normal md:tracking-wider md:text-4xl">
                A-Level Tuition at <span className="text-[#001942]">E</span>
                <span className="text-[#C60B52]">2</span>
                <span className="text-[#001942]">A</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg md:text-lg">
                Our A-Level tuition institute offers comprehensive and personalized support to help students
                excel in their A-Level examinations. With experienced teachers, small class sizes, and a focus
                on individualized learning, we are committed to guiding our students to academic success.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckIcon className=" mr-2 mt-1 h-8 w-8" />
                  <div>
                    <h3 className="text-xl font-bold tracking-wide">Experienced Teachers</h3>
                    <p className="text-gray-500 text-lg dark:text-gray-400">
                      Our team of highly qualified and experienced teachers are dedicated to providing
                      exceptional instruction and support.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mr-2 mt-1 h-8 w-8" />
                  <div>
                    <h3 className="text-xl font-bold">Small Class Sizes</h3>
                    <p className="text-gray-500 text-lg dark:text-gray-400">
                      We maintain small class sizes to ensure personalized attention and a collaborative
                      learning environment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mr-2 mt-1 h-8 w-8" />
                  <div>
                    <h3 className="text-xl font-bold">Personalized Learning</h3>
                    <p className="text-gray-500 text-lg dark:text-gray-400">
                      Our tailored approach to learning helps students overcome their unique challenges and
                      reach their full potential.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-normal md:tracking-wider md:text-4xl text-[#C60B52]">
                Get in Touch
              </h2>
              <form onSubmit={sendMail} className="mt-4 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-lg font-semibold" htmlFor="name">
                      Name
                    </Label>
                    <Input
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      id="name"
                      placeholder="Enter your name"
                      className="text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-lg font-semibold" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      required
                      value={sender}
                      onChange={(e) => {
                        setSender(e.target.value);
                      }}
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      className="text-lg"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-lg font-semibold" htmlFor="message">
                    Message
                  </Label>
                  <Textarea
                    required
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    className="min-h-[120px] text-lg"
                    id="message"
                    placeholder="Enter your message"
                  />
                </div>
                <Button className="text-lg" type="submit">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className={`bg-gray-50 py-12 md:py-16 lg:py-20 text-xl ${teko2.className}`}>
        <div className="container px-4 md:px-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-normal md:tracking-wider md:text-4xl">Contact Us</h2>
              <div className="mt-4 space-y-4 text-gray-500 ">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Address</h3>
                  <p className="flex items-center gap-1 text-lg">
                    <SewingPinFilledIcon className="h-6 w-6" />
                    Pulchowk, Jhamsikhel Marg, Lalitpur 44600
                  </p>
                  <p className="flex items-center gap-1 text-lg">
                    <SewingPinFilledIcon className="h-6 w-6" /> Kupondole, Jwagal Galli, Lalitpur 44600
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Phone</h3>
                  <Link
                    className="hover:text-gray-800 flex items-center gap-1 text-lg"
                    href={"tel:9866551435"}
                  >
                    <MobileIcon /> 9866551435
                  </Link>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Mail address</h3>
                  <Link
                    className="hover:text-gray-800 flex items-center text-lg gap-2"
                    href={"mailto:e2alearningnepal@gmail.com"}
                  >
                    <EnvelopeClosedIcon />
                    e2alearningnepal@gmail.com
                  </Link>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Hours</h3>
                  <p className="text-lg">Sunday - Friday: 9am - 6pm</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-2 shadow-md">
              {/* <h3 className="text-3xl md:text-4xl font-bold tracking-normal md:tracking-wider">
                Find Us on Map
              </h3> */}
              <div className="mt-1 aspect-video overflow-hidden rounded-lg">
                <iframe
                  title="Google Maps"
                  className="rounded-sm"
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
