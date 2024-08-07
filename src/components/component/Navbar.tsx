"use client";
import React, { useState, useEffect } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { teko, teko2 } from "@/lib/utils";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

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
        href="/enroll"
        className={`${isScrolled ? "block" : "hidden"} md:hidden text-md shadow-black outline-1 ${
          teko2.className
        } z-40 fixed bottom-5 right-5 bg-[#C60B52] text-white py-2 px-4 rounded-full shadow-md hover:bg-[#591f35] transition-all duration-900 animate-bounce`}
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
          <Link href={"/"}>
            <Image
              alt="E2A logo"
              className="mx-auto rounded-lg"
              height="60"
              title="E2A logo"
              src="/logo.svg"
              priority
              style={{
                aspectRatio: "120/60",
                objectFit: "cover",
              }}
              width="120"
            />
          </Link>
          <div className="flex space-x-4 pr-5">
            <Link target="_blank" href={"https://www.facebook.com/e2alearningnepal1.0/"}>
              <FacebookIcon className="h-6 w-6 text-blue-700 hover:text-gray-600" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/e2alearningnepal1.0?igsh=MXMxNzJmemw1bTZuNw=="}
            >
              <FaInstagram className="h-6 w-6 text-[#C60B52] hover:text-gray-600" />
            </Link>
            <Link target="_blank" href={"https://www.tiktok.com/@e2alearningnepal"}>
              <FaTiktok className="h-6 w-6 text-blue-900 hover:text-gray-600" />
            </Link>
          </div>
        </div>

        {/* 2nd row navbar */}
        <div
          className={`flex justify-between items-center w-full border-[#C60B52] rounded-full border-2 p-1 pl-4 ${teko.className}`}
        >
          <div className=" md:space-x-6 lg:space-x-6 xl:space-x-10 text-xl font-bold ">
            {/* mt-1 */}
            <Link
              className="text-gray-800 hover:bg-gray-800 hover:text-gray-100 transition-colors duration-300 px-2 rounded-full"
              href="../pastpapers"
            >
              PAST PAPERS
            </Link>
            <Link
              className=" text-gray-800 hover:bg-gray-800 hover:text-gray-100 transition-colors duration-300 px-2 rounded-full"
              href="/about"
            >
              ABOUT US
            </Link>
            <Link
              className="text-gray-800 hover:bg-gray-800 hover:text-gray-100 transition-colors duration-300 px-2 rounded-full"
              href="/"
            >
              HOME
            </Link>
          </div>
          {/* <AlertDialog>
            <AlertDialogTrigger asChild> */}
          <div className=" bg-[#C60B52] text-white px-3 py-1 rounded-3xl text-xl font-bold hover:cursor-pointer hover:scale-105 hover:-translate-x-0.5 transition-all duration-500">
            {/* pt-2 */}
            <Link className="" href="/enroll">
              Enroll Now
            </Link>
          </div>
          {/* </AlertDialogTrigger>
            <ADContent />
          </AlertDialog> */}
        </div>
      </nav>

      {/* Mobile Device Navbar */}
      <div className={`fixed top-0 shadow-md w-full z-10 bg-gray-50 tracking-wide ${teko.className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center md:hidden">
          <div className="flex items-center justify-center h-full">
            <Link href={"/"}>
              <Image
                alt="E2A logo"
                className="pt-1 -ml-6 m-auto z-50"
                height="70"
                title="E2A logo"
                src="/logo.svg"
                priority
                style={{
                  aspectRatio: "140/70",
                  objectFit: "cover",
                }}
                width="140"
              />
            </Link>
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-center items-center text-2xl">
            <Link
              href="/"
              className="text-gray-900 hover:text-[#C60B52] block px-3 py-2 rounded-md font-medium"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-gray-900 hover:text-[#C60B52] block px-3 py-2 rounded-md font-medium"
            >
              ABOUT
            </Link>
            <Link
              href="/pastpapers"
              className="text-gray-900 hover:text-[#C60B52] block px-3 py-2 rounded-md font-medium"
            >
              PAST PAPERS
            </Link>
            <Link
              href="/#"
              className="text-gray-900 hover:text-[#C60B52] block px-3 py-2 rounded-md font-medium"
            >
              CONTACT
            </Link>
            <div className="flex space-x-4 px-3 py-5">
              <Link target="_blank" href={"https://www.facebook.com/e2alearningnepal1.0/"}>
                <FacebookIcon className="h-8 w-8 text-blue-700 hover:text-gray-600" />
              </Link>
              <Link
                target="_blank"
                href={"https://www.instagram.com/e2alearningnepal1.0?igsh=MXMxNzJmemw1bTZuNw=="}
              >
                <FaInstagram className="h-8 w-8 text-[#C60B52] hover:text-gray-600" />
              </Link>
              <Link target="_blank" href={"https://www.tiktok.com/@e2alearningnepal"}>
                <FaTiktok className="h-8 w-8 text-blue-900 hover:text-gray-600" />
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

export default Navbar;
