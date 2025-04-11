'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';


const IBDPDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <ul>
            <li
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center  cursor-pointer hover:text-gray-900 text-gray-700"
            >
                    IBDP-downloads {isOpen ? <ChevronUp size={16} /> :<ChevronDown size={16} />}
            </li>
            </ul>

            {isOpen && (
                <div className="absolute mt-2 left-[80px] w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 pl-3">
                    <ul className="py-1 text-gray-700">
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
    );
};

export default IBDPDropdown;
