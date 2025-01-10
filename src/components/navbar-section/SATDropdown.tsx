import React, { useState } from "react";
import Link from "next/link";


const SATDropdown: React.FC = () => {
    const [isSATOpen, setIsSATOpen] = useState(false);


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

        >
            {/* Trigger Button */}
            <span onClick={toggleTestPrep}
                className=" text-lg  font-medium transition-colors hover:text-black/80 flex justify-center  cursor-pointer">
                SAT{isSATOpen ? "▲" : "▼"}
            </span>

            {/* Dropdown Content */}
            {isSATOpen && (
                <div onClick={handleDropdownClick} // Handle clicks inside the dropdown
                    className="absolute left-1/2 transform -translate-x-1/2 mt-2  w-[200px] bg-white shadow-lg border rounded-lg p-4 z-50 transition-all ease-in-out duration-300 text-gray-600"
                >
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                        {/* SAT Section */}
                        <div>
                            
                            <ul className="space-y-2">
                                <li><Link href="/about-sat" className="hover:text-black">a) About SAT</Link></li>
                                <li><Link href="/sat-Digital-Exam-PatternandFAQ " className="hover:text-black">b) SAT Pattern</Link></li>
                                <li><Link href="/sat-2024-25-test-dates" className="hover:text-black">c) SAT Test Dates</Link></li>
                                <li><Link href="/sat-fees-structure" className="hover:text-black">d) Fees Structure</Link></li>
                            </ul>
                        </div>   
                    </div>
                </div>

            )}
        </div>
    );
};

export default SATDropdown;
