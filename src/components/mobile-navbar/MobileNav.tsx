"use client"
import Link from "next/link";
import {   useState } from "react";
import { Button } from "../ui/button";
import { FreeDemo } from "../free-demo-signup/FreeDemo";


const MobileNav: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [isSATOpen, setIsSATOpen] = useState(false);
    const [isIBOpen, setIsIBOpen] = useState(false);
    const [isGREOpen, setIsGREOpen] = useState(false);
    const [isGMATOpen, setIsGMATOpen] = useState(false);
    const [isIGCSEOpen, setIsIGCSEOpen] = useState(false);
    const [isFreeDemoOpen, setIsFreeDemoOpen] = useState(false);

     

    const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
            // Close dropdown when a link inside is clicked
            if ((e.target as HTMLElement).tagName === "A") {
                setIsSATOpen(false);
                onClose();
            }
        };
         
        
            

    return (
        <div className="flex flex-col space-y-3 p-4">
            {/* SAT Section */}
            <div >
                <span
                    onClick={() => setIsSATOpen(!isSATOpen)}

                    className="w-full text-left text-xl text-gray-700 font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
                >
                    SAT {isSATOpen ? "▲" : "▼"}
                </span>
                {isSATOpen && (
                    <div onClick={handleDropdownClick}
                     className="mt-2 pl-4 max-h-[300px] overflow-y-auto text-gray-700">
                        
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about-sat" className="hover:text-black">
                                    About SAT
                                </Link>
                            </li>
                            <li>
                                <Link href="/sat-pattern" className="hover:text-black">
                                    SAT Pattern
                                </Link>
                            </li>
                            <li>
                                <Link href="/sat-exam-dates" className="hover:text-black">
                                    SAT Exam Dates
                                </Link>
                            </li>
                            <li>
                                <Link href="/sat-fees-structure" className="hover:text-black">
                                    Fees Structure
                                </Link>
                            </li>
                            <li>
                                <Link href="https://docs.google.com/presentation/d/16tnqwISLHmGFBFKJQNqPefsudQobDcka/edit?usp=sharing&ouid=109136177157247340664&rtpof=true&sd=true" className="hover:text-black">
                                    SAT Maths - Sample Questions
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* IB Section */}
            <div >
                <span
                    onClick={() => setIsIBOpen(!isIBOpen)}
                    className="w-full text-left text-xl text-gray-700 font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
                >
                    IB {isIBOpen ? "▲" : "▼"}
                </span>
                {isIBOpen && (
                    <div onClick={handleDropdownClick}
                     className="mt-2 pl-4 max-h-[300px] overflow-y-auto text-gray-700">
                        
                        <ul className="space-y-2">
                            <li><Link href="/about-ib" className="hover:text-black">About IB</Link></li>

                            <li>
                                <Link href="/ibdp-subjects" className="hover:text-black">
                                    IBDP-Subjects
                                </Link>
                            </li>
                            <li>
                                <Link href="/ibdp-maths-analysis-approaches-papers" className="hover:text-black">
                                    IBDP-Maths-AA
                                </Link>
                            </li>
                            <li>
                                <Link href="/ibdp-maths-applications-interpretation-papers" className="hover:text-black">
                                    IBDP-Maths-AI
                                </Link>
                            </li>
                            <li>
                                <Link href="/ibpd-physics-papers" className="hover:text-black">
                                    IBDP-Physics
                                </Link>
                            </li>


                        </ul>
                    </div>
                )}
            </div>

            {/* GRE Section */}
            <div >
                <span
                    onClick={() => setIsGREOpen(!isGREOpen)}
                    className="w-full text-left text-xl text-gray-700 font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
                >
                    GRE {isGREOpen ? "▲" : "▼"}
                </span>
                {isGREOpen && (
                    <div onClick={handleDropdownClick}
                     className="mt-2 pl-4 max-h-[300px] overflow-y-auto text-gray-700">
                        <ul className="space-y-2">
                            <li><Link href="/about-gre" className="hover:text-black">About GRE </Link></li>
                            <li><Link href="/gre-pattern" className="hover:text-black">GRE Pattern</Link></li>
                            <li><Link href="/gre-structure" className="hover:text-black">GRE Structure</Link></li>
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
                    <div onClick={handleDropdownClick}
                      className="mt-2 pl-4 max-h-[300px] overflow-y-auto text-gray-700">
                        <ul className="space-y-2">
                            <li><Link href="/about-gmat" className="hover:text-black"> About GMAT</Link></li>
                            <li><Link href="/gmat-structure" className="hover:text-black"> GMAT Structure</Link></li>
                            <li><Link href="/gmat-sections" className="hover:text-black"> GMAT Sections</Link></li>
                            <li><Link href="/gmat-scoring" className="hover:text-black"> GMAT Scoring</Link></li>
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
                    <div onClick={handleDropdownClick}
                     className="mt-2 pl-4 max-h-[300px] overflow-y-auto">
                        <ul className="space-y-2 text-gray-700">
                            <li><Link href="/about-igcse" className="hover:text-black"> About IGCSE</Link></li>
                            <li><Link href="/igcse-curriculum" className="hover:text-black"> IGCSE Curriculum</Link></li>
                            <li><Link href="/igcse-mathematics" className="hover:text-black"> IGCSE Mathematics</Link></li>
                            <li><Link href="/igcse-physics" className="hover:text-black"> IGCSE Physics</Link></li>
                            <li><Link href="/igcse-chemistry" className="hover:text-black"> IGCSE Chemistry</Link></li>
                            {/* <li><Link href="/igcse-languages" className="hover:text-black"> IGCSE Languages</Link></li>
                            <li><Link href="/igcse-humanities-social" className="hover:text-black"> IGCSE Humanities &amp; Social Sciences</Link></li>
                            <li><Link href="/igcse-creative-professional" className="hover:text-black"> IGCSE Creative &amp; Professional</Link></li>
                            <li><Link href="/igcse-english-literature" className="hover:text-black"> IGCSE English Language &amp; Literature</Link></li> */}
                        </ul>
                    </div>
                )}
            </div>

            <div onClick={handleDropdownClick}>

            <Link href="/new-fees"
             className="text-lg font-medium transition-colors hover:text-black text-gray-700 cursor-pointer">
                Fees Structure
            </Link>
                </div>
            {/* Free Demo */}
            <span
                className="text-xl text-balance font-medium transition-colors hover:text-black/80 cursor-pointer text-gray-700"
                onClick={() => setIsFreeDemoOpen(true)}
            >
                Free Demo
            </span>
            <Button onClick={() => setIsFreeDemoOpen(true)} className="text-purple-600 bg-white hover:bg-purple-700 hover:text-white rounded-3xl text-xl">
                Sign up for free
            </Button>
            {isFreeDemoOpen && <FreeDemo setIsOpen={setIsFreeDemoOpen} />}
        </div>
    );
};

export default MobileNav;

{/* Test Prep Section */ }


