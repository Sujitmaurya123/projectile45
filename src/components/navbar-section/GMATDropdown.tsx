import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";


const GMATDropdown: React.FC = () => {
    const [isSATOpen, setIsSATOpen] = useState(false);
     const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleTestPrep = () => {
        setIsSATOpen((prev) => !prev);
    };
    const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Close dropdown when any child element (like a link) is clicked
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
        <div
            className="relative"
            ref={dropdownRef}
        >
            {/* Trigger Button */}
            <span onClick={toggleTestPrep}
                className=" text-lg  font-medium transition-colors hover:text-black/80 flex justify-center  cursor-pointer">
                GMAT{isSATOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>

            {/* Dropdown Content */}
            {isSATOpen && (
                <div onClick={handleDropdownClick} // Handle clicks inside the dropdown
                    className="absolute left-1/2 transform -translate-x-1/2 mt-2  w-[200px] bg-white shadow-lg border rounded-lg p-4 z-50 transition-all ease-in-out duration-300 text-gray-600"
                >
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                        {/* GMAT Section */}
                        <div>

                            <ul className="space-y-2">
                                <li><Link href="/about-gmat" className="hover:text-black"> About GMAT</Link></li>
                                <li><Link href="/gmat-structure" className="hover:text-black"> GMAT Structure</Link></li>
                                <li><Link href="/gmat-sections" className="hover:text-black"> GMAT Sections</Link></li>
                                <li><Link href="/gmat-scoring" className="hover:text-black"> GMAT Scoring</Link></li>
                                {/* <li><Link href="/gre-wordsapp">GRE WordsApp</Link></li>
                                <li><Link href="/gre-syllabus">GRE Syllabus</Link></li>
                                <li><Link href="/gre-eligibility">GRE Eligibility 2024</Link></li>
                                <li><Link href="/gre-test-series">GRE Test Series</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default GMATDropdown;
