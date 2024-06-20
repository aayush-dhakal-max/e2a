"use client";
import React, { useState, useEffect } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import ADContent from "@/components/component/EnrollDialogContent";
import { AlertDialogTrigger, AlertDialog } from "@/components/ui/alert-dialog";
import Link from "next/link";
import { teko } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const showAfterYpos = 420; // Change this value to the Y position at which you want to show the element
      setIsScrolled(window.pageYOffset > showAfterYpos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative md:mb-28 mb-16">
      {/* <AlertDialog>
        <AlertDialogTrigger asChild> */}
      <Link
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeUrUaxgyKXyxQus9wz_fz-VHIweQjEE_754oFsLRfx5VNmtQ/viewform"
        className={`${
          isScrolled ? "block" : "hidden"
        } md:hidden text-xl shadow-black outline-1 z-40 fixed bottom-5 right-5 bg-[#C60B52] text-white py-2 px-4 rounded-full shadow-md hover:bg-[#591f35] transition-all duration-900 animate-bounce`}
      >
        Enroll Now
      </Link>
      {/* </AlertDialogTrigger>
        <ADContent />
      </AlertDialog> */}

      {/* Desktop Device Navbar */}
      <nav
        className={`pt-1 hidden md:flex flex-col justify-center items-center w-full bg-gray-50  fixed top-0 z-40 md:px-24 lg:px-56`}
      >
        {/* first row navbar */}
        <div className="flex justify-between items-center w-full">
          <div className="w-28 h-12"></div>
          <Image
            alt="Students laughing"
            className="mx-auto rounded-lg"
            height="60"
            src="/logo.svg"
            style={{
              aspectRatio: "120/60",
              objectFit: "cover",
            }}
            width="120"
          />
          <div className="flex space-x-4 pr-5">
            <Link target="_blank" href={"https://www.facebook.com/e2alearningnepal1.0/"}>
              <FacebookIcon className="h-6 w-6 text-blue-700 hover:text-gray-600" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/e2alearningnepal1.0?igsh=MXMxNzJmemw1bTZuNw=="}
            >
              <InstagramIcon className="h-6 w-6 text-[#C60B52] hover:text-gray-600" />
            </Link>
            <Link target="_blank" href={"https://www.facebook.com/e2alearningnepal1.0/"}>
              <LinkedinIcon className="h-6 w-6 text-blue-900 hover:text-gray-600" />
            </Link>
          </div>
        </div>

        {/* 2nd row navbar */}
        <div
          className={`flex justify-between items-center w-full border-[#C60B52] rounded-full border-2 p-1 pl-4 ${teko.className}`}
        >
          <div className=" md:space-x-6 lg:space-x-6 xl:space-x-10 text-xl font-bold ">
            <Link className="text-gray-800 hover:text-gray-600" href="../pastpapers">
              PAST PAPERS
            </Link>
            <Link className="text-gray-800 hover:text-gray-600" href="#">
              ABOUT US
            </Link>
            <Link className="text-gray-800 hover:text-gray-600" href="/">
              HOME
            </Link>
          </div>
          {/* <AlertDialog>
            <AlertDialogTrigger asChild> */}
          <div className=" bg-[#C60B52] text-white px-3 py-2 rounded-3xl text-xl font-bold hover:cursor-pointer transition-all duration-900">
            <Link
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeUrUaxgyKXyxQus9wz_fz-VHIweQjEE_754oFsLRfx5VNmtQ/viewform"
            >
              Enroll Now
            </Link>
          </div>
          {/* </AlertDialogTrigger>
            <ADContent />
          </AlertDialog> */}
        </div>
      </nav>

      {/* Mobile Device Navbar */}
      <div className={`fixed top-0 shadow-md w-full z-10 bg-gray-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center md:hidden">
          <div className="flex items-center justify-center h-full">
            <Image
              alt="Students laughing"
              className="pt-1 -ml-6 m-auto z-50"
              height="70"
              src="/logo.svg"
              style={{
                aspectRatio: "140/70",
                objectFit: "cover",
              }}
              width="140"
            />
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <Cross1Icon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HamburgerMenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen
              ? "opacity-100 max-h-full transform translate-y-0 duration-1000"
              : "opacity-0 transform max-h-0 -translate-y-full duration-700"
          } md:hidden transition-all transition-max-height  ease-in-out overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-center items-center text-3xl">
            <Link
              href="/"
              className="text-gray-900 hover:text-[#C60B52] block px-3 py-2 rounded-md font-medium"
            >
              Home
            </Link>
            <Link
              href="/#"
              className="text-gray-900 hover:text-[#C60B52] block px-3 py-2 rounded-md font-medium"
            >
              About
            </Link>
            <Link
              href="/pastpapers"
              className="text-gray-900 hover:text-[#C60B52] block px-3 py-2 rounded-md font-medium"
            >
              Past Papers
            </Link>
            <Link
              href="/#"
              className="text-gray-900 hover:text-[#C60B52] block px-3 py-2 rounded-md font-medium"
            >
              Contact
            </Link>
            <div className="flex space-x-4 px-3 py-5">
              <Link target="_blank" href={"https://www.facebook.com/e2alearningnepal1.0/"}>
                <FacebookIcon className="h-6 w-6 text-blue-700 hover:text-gray-600" />
              </Link>
              <Link
                target="_blank"
                href={"https://www.instagram.com/e2alearningnepal1.0?igsh=MXMxNzJmemw1bTZuNw=="}
              >
                <InstagramIcon className="h-6 w-6 text-[#C60B52] hover:text-gray-600" />
              </Link>
              <Link target="_blank" href={"https://www.facebook.com/e2alearningnepal1.0/"}>
                <LinkedinIcon className="h-6 w-6 text-blue-900 hover:text-gray-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function FacebookIcon(props: any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default Navbar;
