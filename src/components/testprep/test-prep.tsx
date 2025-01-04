import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const TestPrepDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    // Close the dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={dropdownRef}
        >
            {/* Trigger Button */}
        <span className="text-base truncate lg:text-xl font-medium transition-colors hover:text-black/80 flex justify-center  cursor-pointer">
          Test Prep{isOpen ? "▲" : "▼"}
            </span>

            {/* Dropdown Content */}
            {isOpen && (
                <div
                className="absolute left-1/2 transform -translate-x-1/2 mt-2  w-[600px] bg-white shadow-lg border rounded-lg p-4 z-50 transition-all ease-in-out duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* SAT Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-red-600 mb-2">SAT</h3>
                    <ul className="space-y-2">
                      <li><Link href="/about-sat">About SAT</Link></li>
                      <li><Link href="/sat-Digital-Exam-PatternandFAQ">SAT Digital Exam Pattern and FAQ</Link></li>
                      <li><Link href="/sat-2024-25-test-dates">SAT 2024-25 Test DATES</Link></li>
                      <li><Link href="/sat-fees-structure">Fees Structure</Link></li>
                    </ul>
                  </div>
              
                  {/* IB Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-red-600 mb-2">IB</h3>
                    <ul className="space-y-2">
                      <li><Link href="/ib-curriculam">IB Curriculam</Link></li>
                      <li><Link href="/ib-course-coaching-details">Course Structure and Coaching Details</Link></li>
                      <li><Link href="/ib-online-coaching-technology">Online Coaching and Technology Integration</Link></li>
                    </ul>
                  </div>
              
                  {/* GRE Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-red-600 mb-2">GRE</h3>
                    <ul className="space-y-2">
                      <li><Link href="/gre-prep-options">GRE Prep Options</Link></li>
                      <li><Link href="/gre-practice-test">GRE Practice Test</Link></li>
                      <li><Link href="/gre-online-prep">GRE Online Prep</Link></li>
                      <li><Link href="/gre-overview">GRE Overview</Link></li>
                      <li><Link href="/gre-wordsapp">GRE WordsApp</Link></li>
                      <li><Link href="/gre-syllabus">GRE Syllabus</Link></li>
                      <li><Link href="/gre-eligibility">GRE Eligibility 2024</Link></li>
                      <li><Link href="/gre-test-series">GRE Test Series</Link></li>
                    </ul>
                  </div>
              
                  {/* GMAT Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-red-600 mb-2">GMAT</h3>
                    <ul className="space-y-2">
                      <li><Link href="/gmat-prep-options">GMAT Prep Options</Link></li>
                      <li><Link href="/gmat-practice-test">GMAT Practice Test</Link></li>
                      <li><Link href="/gmat-online-prep">GMAT Online Prep</Link></li>
                      <li><Link href="/gmat-books">GMAT Books</Link></li>
                      <li><Link href="/gmat-exam-dates">GMAT Exam Dates</Link></li>
                      <li><Link href="/gmat-syllabus">GMAT Syllabus</Link></li>
                      <li><Link href="/gmat-eligibility">GMAT Eligibility</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              
            )}
        </div>
    );
};

export default TestPrepDropdown;
