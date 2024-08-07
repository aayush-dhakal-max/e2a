"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/component/Navbar";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export default function Component() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [asLevelIsChecked, setAsLevel] = useState(false);
  const [a2LevelIsChecked, setA2Level] = useState(false);
  const handleEnrollFormSubmit = async () => {
    const data = {
      name,
      phone,
      email,
      asLevelIsChecked,
      a2LevelIsChecked,
    };
    // toast the user if any of the fields are empty
    if (!name || !phone) {
      return toast.error("Name and Phone Number are required", { duration: 4000, position: "top-center" });
    }
    if (!asLevelIsChecked && !a2LevelIsChecked) {
      return toast.error("Please select at least one checkbox", { duration: 4000, position: "top-center" });
    }
    setButtonDisabled(true);
    const response = await fetch("/api/sendEnrollEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        subject: "Student Enquiry from E2A Tuition Website",
        name,
        phone,
        email,
        asLevelIsChecked,
        a2LevelIsChecked,
      }),
    });
    console.log(response.status, await response.json());
    if (response.status === 200) {
      setName("");
      setPhone("");
      setEmail("");
      setAsLevel(false);
      setA2Level(false);
      setButtonDisabled(false);
      return toast.success("Email Sent Successfully", { duration: 5000, position: "top-center" });
    } else {
      setButtonDisabled(false);
      return toast.error("Failed to send email", { duration: 5000, position: "top-center" });
    }
  };
  return (
    <div className="flex">
      <Toaster richColors />
      <Navbar />
      <section className="w-full mt-40">
        <div className="container px-4 md:px-6">
          <Card className="mx-auto max-w-xl">
            <CardHeader>
              {/* <CardTitle className="text-4xl">Enroll Now</CardTitle> */}
              <CardDescription className="font-extrabold text-black text-xl">
                Fill out the form below to start leveling up your A Levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-lg">
                    Name <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-md"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone" className="text-lg">
                    Phone Number <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-md"
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-lg">
                    Email
                  </Label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-md"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={asLevelIsChecked}
                    onCheckedChange={(e) => setAsLevel(!asLevelIsChecked)}
                    name="as-level"
                    id="as-level"
                    className="h-5 w-5"
                    required
                  />
                  <Label className="text-md " htmlFor="as-level">
                    I&apos;m interested in AS Level Tuition
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={a2LevelIsChecked}
                    onCheckedChange={(e) => setA2Level(!a2LevelIsChecked)}
                    name="a2-level"
                    id="a2-level"
                    className="h-5 w-5"
                    required
                  />
                  <Label className="text-md" htmlFor="a2-level">
                    I&apos;m interested in A2 Level Tuition
                  </Label>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button
                disabled={buttonDisabled}
                type="submit"
                onClick={handleEnrollFormSubmit}
                className="ml-auto text-xl hover:scale-110 transition-all duration-500"
              >
                Enroll
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
