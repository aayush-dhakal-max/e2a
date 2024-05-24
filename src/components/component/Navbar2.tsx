/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qDFmKd4ASsw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              A-Level Tuition at Our Institute
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
          <div className="grid gap-8">
            <img
              alt="A-Level Tuition"
              className="rounded-xl object-cover"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <LocateIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <p className="text-gray-500 dark:text-gray-400">123 Main Street, Anytown USA</p>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <p className="text-gray-500 dark:text-gray-400">(123) 456-7890</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <p className="text-gray-500 dark:text-gray-400">info@tuitioninstitute.com</p>
                </div>
              </div>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function LocateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
