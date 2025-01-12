import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";


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
                IB{isSATOpen ? "▲" : "▼"}
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
                                <li><Link href="/ib" className="hover:text-black">a) IB</Link></li>
                                <li><Link href="/ib-curriculam" className="hover:text-black">b) IB Curriculum</Link></li>
                                <li><Link href="/ib-course-coaching-details" className="hover:text-black">c) Course Structure & Coaching Details</Link></li>
                                <li><Link href="/ib-online-coaching-technology" className="hover:text-black">d) Remote Tutoring</Link></li>
                                <li><Link href="/ib-fees-scheduling-registration" className="hover:text-black">e) Fees,Scheduling & Registration</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default IBDropdown;
