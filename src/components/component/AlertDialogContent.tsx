"use client";
import { Button } from "@/components/ui/button";
import {
  AlertDialogTrigger,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialog,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";

export default function Component() {
  return (
    <AlertDialogContent className="sm:max-w-[500px] mx-2 m-auto rounded-sm">
      <AlertDialogHeader>
        <AlertDialogTitle>Enroll in Our Tuition Institute</AlertDialogTitle>
        <AlertDialogDescription>
          Fill out the form below to enroll in one of our courses.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <form className="grid gap-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="course">Course</Label>
            <Select>
              <SelectTrigger id="course">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent position="item-aligned">
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="computer">Computer</SelectItem>
                <SelectItem value="economics">Economics</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="Enter your phone number" type="tel" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
        </div>
      </form>
      <AlertDialogFooter>
        <Button className="md:mt-0 mt-2" type="submit">
          Enroll
        </Button>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
