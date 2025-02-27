import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";


const SATDropdown: React.FC = () => {
    const [isSATOpen, setIsSATOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleTestPrep = () => {
        setIsSATOpen((prev) => !prev);
    };

    const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Close dropdown when a link inside is clicked
        if ((e.target as HTMLElement).tagName === "A") {
            setIsSATOpen(false);
        }
    };

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

    return (
        <div ref={dropdownRef} className="relative">
            {/* Trigger Button */}
            <span
                onClick={toggleTestPrep}
                className="text-lg font-medium transition-colors hover:text-black/80 flex justify-center cursor-pointer"
            >
                SAT{isSATOpen ? "▲" : "▼"}
            </span>

            {/* Dropdown Content */}
            {isSATOpen && (
                <div
                    onClick={handleDropdownClick}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[200px] bg-white shadow-lg border rounded-lg p-4 z-50 transition-all ease-in-out duration-300 text-gray-600"
                >
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                        {/* SAT Section */}
                        <div>
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
                                    <Link href="/sat-test-dates" className="hover:text-black">
                                        SAT Test Dates
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sat-fees-structure" className="hover:text-black">
                                         Fees Structure
                                    </Link>
                                </li>
                                {/* <li>  
                                    <Link href="https://docs.google.com/presentation/d/16tnqwISLHmGFBFKJQNqPefsudQobDcka/edit?usp=sharing&ouid=109136177157247340664&rtpof=true&sd=true"  className="hover:text-black">
                                        SAT Maths - Sample Questions
                                    </Link> 
                                </li> */}
                                <li>
                                    <Link href="/sat-maths-sample-questions" className="hover:text-black">
                                        SAT Maths - Sample Questions
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SATDropdown;
