// components/StickyButton.tsx
"use client"

import { FreeDemo } from '../free-demo-signup/FreeDemo';
import { useState } from 'react';

const StickyButton: React.FC = () => {
  
    const [isFreeDemoOpen, setIsFreeDemoOpen] = useState(false);

   
    return (
        <>
            <button
                onClick={() => 
                    setIsFreeDemoOpen(true)}
                className="fixed bottom-3 right-3 bg-purple-900 text-white px-4 py-2 mb-[150px] rounded-full shadow-lg hover:bg-white hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-base sm:text-lg"
            >
                Book Your Free Demo Session Today
            </button>
            {isFreeDemoOpen && <FreeDemo setIsOpen={setIsFreeDemoOpen} />}
        </>
    );
};

export default StickyButton;