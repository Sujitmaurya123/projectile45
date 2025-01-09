"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import TestPrepDropdown from "./testprep/test-prep";


import { FreeDemo } from "./free-demo-signup/FreeDemo";

export function SiteHeader() {
  
  const [isOpen, setIsOpen] = useState(false);
  

  

  return (
    <header className="sticky top-0 z-50 bg-white w-full border-b text-gray-500 pr-4">
      <div className="container flex h-16 items-center w-auto justify-between">
        <div className="ml-[80px] mr-4 flex items-center md:mr-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo_projectile45.jpg"
              alt="Projectile 45 Logo"
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
              className="h-8 w-auto rounded-full"
            />
            <span className="text-2xl font-bold text-headingcol">Projectile 45</span>
          </Link>
        </div>
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="pr-0 bg-purple-100 dark:bg-gray-900 z-50"
          >
            <SheetTitle className="text-left text-3xl font-bold ml-4 text-headingcol">
              Projectile 45
            </SheetTitle>
            <MobileNav />
          </SheetContent>
        </Sheet>
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-6">
          <nav className="flex items-center space-x-6">
            <TestPrepDropdown />

            <Link
              href="/igcseibtutoring"
              className="lg:text-xl text-balance font-medium transition-colors hover:text-black/80"
            >
              IGCSE & IB Tutoring
            </Link>
            <span
              
              className="lg:text-xl text-balance font-medium transition-colors hover:text-black/80 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              Free Demo
            </span>
            <Link href="/sign-up-for-free">
            <Button
              className="text-purple-600 bg-white hover:bg-purple-700 hover:text-white rounded-3xl text-xl"
              
            >
              Sign up for free
            </Button>
            </Link>
          </nav>
        </div>
      </div>
      {isOpen && <FreeDemo  setIsOpen={setIsOpen} /> }
    </header>
  );
}

function MobileNav() {
  const [isTestPrepOpen, setIsTestPrepOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTestPrep = () => {
    setIsTestPrepOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col space-y-3 p-4 ">
      {/* Test Prep Section */}
      <div>
        <span
          onClick={toggleTestPrep}
          className="w-full text-left text-xl text-gray-700 font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
        >
          Test Prep {isTestPrepOpen ? "▲" : "▼"}
        </span>
        {isTestPrepOpen && (
          <div className="mt-2 pl-4 max-h-[300px] overflow-y-auto ">
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-2">SAT</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about-sat">About SAT</Link>
                </li>
                <li>
                  <Link href="/sat-Digital-Exam-PatternandFAQ">
                    SAT Digital Exam Pattern and FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/sat-2024-25-test-dates">
                    SAT 2024-25 Test DATES
                  </Link>
                </li>
                <li>
                  <Link href="/sat-fees-structure">Fees Structure</Link>
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-red-600 mb-2">IB</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/ib">IB</Link>
                </li>
                <li>
                  <Link href="/ib-curriculam">IB Curriculam</Link>
                </li>
                <li>
                  <Link href="/ib-course-coaching-details">
                    Course Structure and Coaching Details
                  </Link>
                </li>
                <li>
                  <Link href="/ib-online-coaching-technology">
                    Online Coaching and Technology Integration
                  </Link>
                </li>
                <li>
                  <Link href="/ib-fees-scheduling-registration">
                    Fees, Scheduling, and Registration
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-red-600 mb-2">GRE</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/gre">GRE </Link>
                </li>
                {/* <li>
                  <Link href="/gre-online-prep">GRE Online Prep</Link>
                </li>
                <li>
                  <Link href="/gre-overview">GRE Overview</Link>
                </li>
                <li>
                  <Link href="/gre-wordsapp">GRE WordsApp</Link>
                </li>
                <li>
                  <Link href="/gre-syllabus">GRE Syllabus</Link>
                </li>
                <li>
                  <Link href="/gre-eligibility">GRE Eligibility 2024</Link>
                </li>
                <li>
                  <Link href="/gre-test-series">GRE Test Series</Link>
                </li> */}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-red-600 mb-2">GMAT</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/gmat-prep">GMAT Prep</Link>
                </li>
                {/* <li>
                  <Link href="/gmat-practice-test">GMAT Practice Test</Link>
                </li>
                <li>
                  <Link href="/gmat-online-prep">GMAT Online Prep</Link>
                </li>
                <li>
                  <Link href="/gmat-books">GMAT Books</Link>
                </li>
                <li>
                  <Link href="/gmat-exam-dates">GMAT Exam Dates</Link>
                </li>
                <li>
                  <Link href="/gmat-syllabus">GMAT Syllabus</Link>
                </li>
                <li>
                  <Link href="/gmat-eligibility">GMAT Eligibility</Link>
                </li> */}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Other Navigation Links */}
      <Link
        href="/igcseibtutoring"
        className="text-xl font-medium transition-colors hover:text-black/80 text-gray-700"
      >
        IGCSE & IB Tutoring
      </Link>
      <span

        className="text-xl text-balance font-medium transition-colors hover:text-black/80 cursor-pointer text-gray-700"
        onClick={() => setIsOpen(true)}
      >
        Free Demo
      </span>
      <Button className="text-purple-600 bg-white hover:bg-purple-700 hover:text-white rounded-3xl text-xl ">
        Sign up for free
      </Button>
      {isOpen && <FreeDemo setIsOpen={setIsOpen} />}
    </div>
  );
}
