import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import IBDPDropdown from "./IBDPDropdown";
import { ChevronDown, ChevronUp } from "lucide-react";


const IBDropdown: React.FC = () => {
    const [isSATOpen, setIsSATOpen] = useState(false);
     const dropdownRef = useRef<HTMLDivElement>(null);
     const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsSATOpen(false);
            }
        };
    
        useEffect(() => {
            // Add event listener to detect outside clicks
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Cleanup event listener
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);

    const toggleTestPrep = () => {
        setIsSATOpen((prev) => !prev);
    };
    const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Close dropdown when any child element (like a link) is clicked
        if ((e.target as HTMLElement).tagName === "A") {
            setIsSATOpen(false);
        }
    };

    return (
        <div
            className="relative"
            ref={dropdownRef}
        >
            {/* Trigger Button */}
            <span onClick={toggleTestPrep}
                className=" text-lg  font-medium transition-colors hover:text-black/80 flex justify-center  cursor-pointer">
                IB{isSATOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>

            {/* Dropdown Content */}
            {isSATOpen && (
                <div onClick={handleDropdownClick} // Handle clicks inside the dropdown
                    className="absolute left-1/2 transform -translate-x-1/2 mt-2  w-[200px] bg-white shadow-lg border rounded-lg p-4 z-50 transition-all ease-in-out duration-300 text-gray-600"
                >
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                        {/* IB Section */}
                        <div>
                            
                            <ul className="space-y-2">
                                <li><Link href="/about-ib" className="hover:text-black">About IB</Link></li>
                            
                                
                                <li>
                                    <Link href="/ibdp-subjects" className="hover:text-black">
                                        IBDP-Subjects
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link href="/ib-other-curriculum"  className="hover:text-black">
                                        IB and Other Curriculum 
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/ib-university-readiness" className="hover:text-black">
                                        IB & University Readiness
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/preparing-ib-exams" className="hover:text-black">
                                        Preparing for the IB Exams
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/ib-curriculum-faqs" className="hover:text-black">
                                        IB Curriculum & FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/ib-diploma-subjects-core-components" className="hover:text-black">
                                        IB Diploma Subjects & Core Components
                                    </Link>
                                </li>
                                <li>

                                    <IBDPDropdown />

                                </li>
                                {/* <li>
                                    <Link href="/ibdp-maths-analysis-approaches-papers" className="hover:text-black">
                                        IBDP-Maths-AA
                                    </Link>
                                </li> */}
                                {/* <li>
                                    <Link href="/files/dp-mathematics-applications-and-interpretation-specimen-papers-en.pdf"  className="hover:text-black">
                                        IBDP-Maths-2
                                    </Link>
                                </li> */}
                                {/* <li>
                                    <Link href="/ibdp-maths-applications-interpretation-papers" className="hover:text-black">
                                        IBDP-Maths-AI
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/files/physics-hl-sl-specimen-papers-1a-2b-2-en.pdf"  className="hover:text-black">
                                        IBDP-Physics
                                    </Link>
                                </li> */}
                                {/* <li>
                                    <Link href="/ibpd-physics-papers" className="hover:text-black">
                                        IBDP-Physics
                                    </Link>
                                </li> */} 
                                
                            </ul>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default IBDropdown;
