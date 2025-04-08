import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";


const IGCSEDropdown: React.FC = () => {
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
                IGCSE{isSATOpen ? "▲" : "▼"}
            </span>

            {/* Dropdown Content */}
            {isSATOpen && (
                <div onClick={handleDropdownClick} // Handle clicks inside the dropdown
                    className="absolute left-1/2 transform -translate-x-1/2 mt-2  w-[200px] bg-white shadow-lg border rounded-lg p-4 z-50 transition-all ease-in-out duration-300 text-gray-600"
                >
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                        {/* IGCSE Section */}
                        <div>

                            <ul className="space-y-2">
                                <li><Link href="/about-igcse" className="hover:text-black"> About IGCSE</Link></li>
                                <li><Link href="/igcse-curriculum" className="hover:text-black"> IGCSE Curriculum</Link></li>
                                <li><Link href="/igcse-mathematics" className="hover:text-black"> IGCSE Mathematics</Link></li>
                                <li><Link href="/igcse-physics" className="hover:text-black"> IGCSE Physics</Link></li>
                                <li><Link href="/igcse-chemistry" className="hover:text-black"> IGCSE Chemistry</Link></li>
                                <li><Link href="/igcse-physics-questions-paper" className="hover:text-black"> IGCSE Physics Questions Paper</Link></li>

                                


                                {/* <li><Link href="/igcse-languages" className="hover:text-black"> IGCSE Languages</Link></li> */}
                                {/* <li><Link href="/igcse-humanities-social" className="hover:text-black"> IGCSE Humanities &amp; Social Sciences</Link></li>
                                <li><Link href="/igcse-creative-professional" className="hover:text-black"> IGCSE Creative &amp; Professional</Link></li>
                                <li><Link href="/igcse-english-literature" className="hover:text-black"> IGCSE English Language &amp; Literature</Link></li> */}



                                {/* <li><Link href="/gre-practice-test">GRE Practice Test</Link></li>
                                
                                <li><Link href="/gre-test-series">GRE Test Series</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default IGCSEDropdown;
