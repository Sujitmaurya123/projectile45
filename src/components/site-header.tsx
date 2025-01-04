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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false); // Popup is open by default for demo purposes
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    countryCode: "India (+91)",
    course: "",
    consent: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    setIsOpen(false); // Close the popup on submission
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      consent: checked,
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-green-400 pr-4">
      <div className="container flex h-16 items-center w-auto justify-between">
        <div className="ml-4 mr-4 flex items-center md:mr-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo_projectile45.jpg"
              alt="Projectile 45 Logo"
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
              className="h-8 w-auto rounded-full"
            />
            <span className="text-xl font-bold">Projectile 45</span>
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
          <SheetContent side="left" className="pr-0 bg-purple-200 dark:bg-gray-900 z-50">
            <SheetTitle className="text-left text-3xl text-gray-700 ml-3">Projectile 45</SheetTitle>
            <MobileNav />
          </SheetContent>
        </Sheet>
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-6">
          <nav className="flex items-center space-x-6">
            <TestPrepDropdown />

            <Link
              href="/igcseibtutoring"
              className="text-base font-medium lg:text-xl  transition-colors hover:text-black/80"
            >
              IGCSE & IB Tutoring
            </Link>
            <Link
              href="/free-demo"
              className="text-base   lg:text-xl font-medium transition-colors hover:text-black/80 "
            >
              Free Demo
            </Link>

            <Button
              className="text-purple-600 bg-white hover:bg-purple-700 hover:text-white rounded-3xl text-xl"
              onClick={() => setIsOpen(true)}
            >
            <Button className="bg-black text-white hover:bg-black/90 rounded">
              Sign up for free
            </Button>
          </nav>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full">
            {/* Header */}
            <div className="bg-[#764f94] text-white p-4 flex justify-between items-center rounded-t-xl">
              <h2 className="text-lg font-bold">Just One Step Away!</h2>
              <button
                className="text-white text-xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Our Experts require more information to assist you in a better
                way.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name & Last Name */}
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <Label htmlFor="firstName">First Name*</Label>
                    <Input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <Label htmlFor="lastName">Last Name*</Label>
                    <Input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Country Code & Mobile Number */}
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <Label htmlFor="countryCode">Country Code</Label>
                    <Select
                      name="countryCode"
                      value={formData.countryCode}
                      onValueChange={(value) =>
                        setFormData((prevData) => ({
                          ...prevData,
                          countryCode: value,
                        }))
                      }
                      required
                      // className="w-full p-2 border rounded-lg text-gray-700"
                    >
                      <SelectTrigger
                        id="countryCode"
                        className="w-full p-2 text-gray-700 bg-white border border-gray-300 rounded-lg"
                      >
                        {formData.countryCode || "Select a country code"}
                      </SelectTrigger>
                      <SelectContent className="w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                        <SelectItem
                          value="India (+91)"
                          className="p-2 text-gray-700 hover:bg-gray-200"
                        >
                          India (+91)
                        </SelectItem>
                        <SelectItem
                          value="USA (+1)"
                          className="p-2 text-gray-700 hover:bg-gray-200"
                        >
                          USA (+1)
                        </SelectItem>
                        <SelectItem
                          value="UK (+44)"
                          className="p-2 text-gray-700 hover:bg-gray-200"
                        >
                          UK (+44)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-1/2">
                    <Label htmlFor="mobile">Mobile Number*</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Enter your mobile number"
                      required
                    />
                  </div>
                </div>

                {/* Select Course */}
                <div>
                  <Label htmlFor="course">Select Course*</Label>
                  <Select
                    name="course"
                    value={formData.course || ""} // Ensure it defaults to an empty string if no value
                    onValueChange={(value) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        course: value,
                      }))
                    }
                    required
                  >
                    <SelectTrigger
                      id="course"
                      className="w-full p-2 text-gray-700 bg-white border border-gray-300 rounded-lg"
                    >
                      {formData.course || "Choose a course"}
                    </SelectTrigger>
                    <SelectContent className="w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                      <SelectItem
                        value="none"
                        className="p-2 text-gray-700 hover:bg-gray-200"
                      >
                        Choose a course
                      </SelectItem>
                      <SelectItem
                        value="SAT"
                        className="p-2 text-gray-700 hover:bg-gray-200"
                      >
                        SAT
                      </SelectItem>
                      <SelectItem
                        value="GMAT"
                        className="p-2 text-gray-700 hover:bg-gray-200"
                      >
                        GMAT
                      </SelectItem>
                      <SelectItem
                        value="GRE"
                        className="p-2 text-gray-700 hover:bg-gray-200"
                      >
                        GRE
                      </SelectItem>
                      <SelectItem
                        value="IELTS"
                        className="p-2 text-gray-700 hover:bg-gray-200"
                      >
                        IELTS
                      </SelectItem>
                      <SelectItem
                        value="TOEFL"
                        className="p-2 text-gray-700 hover:bg-gray-200"
                      >
                        TOEFL
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onCheckedChange={handleCheckboxChange}
                  />
                  <Label htmlFor="consent" className="text-sm text-gray-700">
                    I authorize Manya - The Princeton Review to contact me even
                    if my number is registered with DND to assist with my
                    enquiry and get regular updates through SMS/Whatsapp.
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#091987] text-white font-semibold py-2 rounded-lg shadow-md hover:bg-[#0A2BAF] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileNav() {
  const [isTestPrepOpen, setIsTestPrepOpen] = useState(false);

  const toggleTestPrep = () => {
    setIsTestPrepOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col space-y-3 p-4 mt-6 ml-2 text-gray-700">
      {/* Test Prep Section */}
      <div>
        <button
          onClick={toggleTestPrep}
          className="w-full text-left text-xl font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
        >
          Test Prep {isTestPrepOpen ? "▲" : "▼"}
        </button>
        {isTestPrepOpen && (
          <div className="mt-2 pl-4 max-h-[300px] overflow-y-auto text-gray-700">
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
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-red-600 mb-2">GRE</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/gre-prep-options">GRE Prep Options</Link>
                </li>
                <li>
                  <Link href="/gre-practice-test">GRE Practice Test</Link>
                </li>
                <li>
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
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-red-600 mb-2">GMAT</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/gmat-prep-options">GMAT Prep Options</Link>
                </li>
                <li>
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
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Other Navigation Links */}
      <Link
        href="/igcseibtutoring"
        className="text-xl font-medium transition-colors hover:text-black/80"
      >
        IGCSE & IB Tutoring
      </Link>
      <Link
        href="/free-demo"
        className="text-xl font-medium transition-colors hover:text-black/80"
      >
        Free Demo
      </Link>
      <Link
        href="/sign-up-for-free"
      >
        <Button className="  text-purple-600 bg-white  hover:bg-purple-700 hover:text-white rounded-2xl text-xl">
          Sign up for free
        </Button>
      </Link>
    </div>
  );
}
