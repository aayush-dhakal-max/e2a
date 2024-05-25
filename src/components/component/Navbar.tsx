"use client";
import React, { useState, useEffect } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative  ">
      <a
        href="#enroll"
        className="md:hidden shadow-black outline-1 z-40 fixed bottom-3 right-12 bg-[#C60B52] text-white py-2 px-4 rounded-full shadow-md hover:bg-[#591f35] transition duration-900 animate-bounce"
      >
        Enroll now
      </a>

      {/* Desktop Device Navbar */}
      <nav className="py-6 hidden md:flex flex-col justify-center items-center w-full bg-gray-50 shadow-md fixed top-0 z-50 md:px-16 lg:px-28">
        {/* first row navbar */}
        <div className="flex justify-between items-center w-full">
          <div></div>
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
          <div className="flex space-x-4 py-">
            <FacebookIcon className="h-5 w-5 text-gray-800 hover:text-gray-600" />
            <InstagramIcon className="h-5 w-5 text-gray-800 hover:text-gray-600" />
            <LinkedinIcon className="h-5 w-5 text-gray-800 hover:text-gray-600" />
          </div>
        </div>

        {/* 2nd row navbar */}
        <div className="flex justify-between items-center w-full border-gray-400 rounded-full border-2 p-4 px-6">
          <div className=" space-x-10 text-lg ">
            <Link className="text-gray-800 hover:text-gray-600" href="pastpapers">
              PAST PAPERS
            </Link>
            <Link className="text-gray-800 hover:text-gray-600" href="about">
              ABOUT US
            </Link>
            <Link className="text-gray-800 hover:text-gray-600" href="/">
              HOME
            </Link>
          </div>
          <div className="ml-4 text-[#C60B52] text-xl font-bold">ENROLL NOW</div>
        </div>
      </nav>

      {/* Mobile Device Navbar */}
      <div className={`fixed top-0 bg-white shadow-md w-full z-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between md:hidden">
          <div className="flex items-center">
            <Image
              alt="Students laughing"
              className=""
              height="70"
              src="/logo.svg"
              style={{
                aspectRatio: "110/70",
                objectFit: "cover",
              }}
              width="110"
            />
          </div>

          {/* Mobile Device */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
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
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-center items-center text-2xl">
            <Link
              href="/"
              className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md font-medium"
            >
              About
            </Link>
            <Link
              href="/pastpapers"
              className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md font-medium"
            >
              Past Papers
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md font-medium"
            >
              Contact
            </Link>
            <div className="flex space-x-4 px-3 py-5">
              <FacebookIcon className="h-6 w-6 text-blue-700 hover:text-gray-600" />
              <InstagramIcon className="h-6 w-6 text-purple-600 hover:text-gray-600" />
              <LinkedinIcon className="h-6 w-6 text-blue-900 hover:text-gray-600" />
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
