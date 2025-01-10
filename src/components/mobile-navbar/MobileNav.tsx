"use client"
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { FreeDemo } from "../free-demo-signup/FreeDemo";


const MobileNav: React.FC = () => {
    const [isSATOpen, setIsSATOpen] = useState(false);
    const [isIBOpen, setIsIBOpen] = useState(false);
    const [isGREOpen, setIsGREOpen] = useState(false);
    const [isGMATOpen, setIsGMATOpen] = useState(false);
    const [isIGCSEOpen, setIsIGCSEOpen] = useState(false);
    const [isFreeDemoOpen, setIsFreeDemoOpen] = useState(false);

    return (
        <div className="flex flex-col space-y-3 p-4">
            {/* SAT Section */}
            <div>
                <span
                    onClick={() => setIsSATOpen(!isSATOpen)}
                    className="w-full text-left text-xl text-gray-700 font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
                >
                    SAT {isSATOpen ? "▲" : "▼"}
                </span>
                {isSATOpen && (
                    <div className="mt-2 pl-4 max-h-[300px] overflow-y-auto text-gray-700">
                        
                        <ul className="space-y-2">
                            <li><Link href="/about-sat" className="hover:text-black">a) About SAT</Link></li>
                            <li><Link href="/sat-Digital-Exam-PatternandFAQ " className="hover:text-black">b) SAT Pattern</Link></li>
                            <li><Link href="/sat-2024-25-test-dates" className="hover:text-black">c) SAT Test Dates</Link></li>
                            <li><Link href="/sat-fees-structure" className="hover:text-black">d) Fees Structure</Link></li>
                        </ul>
                    </div>
                )}
            </div>

            {/* IB Section */}
            <div>
                <span
                    onClick={() => setIsIBOpen(!isIBOpen)}
                    className="w-full text-left text-xl text-gray-700 font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
                >
                    IB {isIBOpen ? "▲" : "▼"}
                </span>
                {isIBOpen && (
                    <div className="mt-2 pl-4 max-h-[300px] overflow-y-auto text-gray-700">
                        
                        <ul className="space-y-2">
                            <li><Link href="/ib" className="hover:text-black">a) IB</Link></li>
                            <li><Link href="/ib-curriculam" className="hover:text-black">b) IB Curriculum</Link></li>
                            <li><Link href="/ib-course-coaching-details" className="hover:text-black">c) Course Structure & Coaching Details</Link></li>
                            <li><Link href="/ib-online-coaching-technology" className="hover:text-black">d) Remote Tutoring</Link></li>
                            <li><Link href="/ib-fees-scheduling-registration" className="hover:text-black">e) Fees,Scheduling & Registration</Link></li>
                        </ul>
                    </div>
                )}
            </div>

            {/* GRE Section */}
            <div>
                <span
                    onClick={() => setIsGREOpen(!isGREOpen)}
                    className="w-full text-left text-xl text-gray-700 font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
                >
                    GRE {isGREOpen ? "▲" : "▼"}
                </span>
                {isGREOpen && (
                    <div className="mt-2 pl-4 max-h-[300px] overflow-y-auto text-gray-700">
                        <ul className="space-y-2">
                            <li>
                                <Link href="/gre" className="hover:text-black">
                                    GRE
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* GMAT Section */}
            <div>
                <span
                    onClick={() => setIsGMATOpen(!isGMATOpen)}
                    className="w-full text-left text-xl text-gray-700 font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
                >
                    GMAT {isGMATOpen ? "▲" : "▼"}
                </span>
                {isGMATOpen && (
                    <div className="mt-2 pl-4 max-h-[300px] overflow-y-auto text-gray-700">
                        <ul className="space-y-2">
                            <li>
                                <Link href="/gmat-course" className="hover:text-black">
                                    GMAT
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* IGCSE Section */}
            <div>
                <span
                    onClick={() => setIsIGCSEOpen(!isIGCSEOpen)}
                    className="w-full text-left text-xl text-gray-700 font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
                >
                    IGCSE {isIGCSEOpen ? "▲" : "▼"}
                </span>
                {isIGCSEOpen && (
                    <div className="mt-2 pl-4 max-h-[300px] overflow-y-auto">
                        <ul className="space-y-2">
                            <li>
                                <Link href="/igcse" className="hover:text-black">
                                    IGCSE
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Free Demo */}
            <span
                className="text-xl text-balance font-medium transition-colors hover:text-black/80 cursor-pointer text-gray-700"
                onClick={() => setIsFreeDemoOpen(true)}
            >
                Free Demo
            </span>
            <Button className="text-purple-600 bg-white hover:bg-purple-700 hover:text-white rounded-3xl text-xl">
                Sign up for free
            </Button>
            {isFreeDemoOpen && <FreeDemo setIsOpen={setIsFreeDemoOpen} />}
        </div>
    );
};

export default MobileNav;

{/* Test Prep Section */ }
{/* <div>
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
                                            <Link href="/ib-curriculam">IB Curriculum</Link>
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
{/* </ul>
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-red-600 mb-2">GMAT</h3>
                                    <ul className="space-y-2">
                                        <li>
                                            <Link href="/gmat-prep">GMAT Prep</Link>
                                        </li> */}
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
{/* </ul>
                                </div>
                            </div>
                        )}
                    </div>  */}

