// components/StickyButton.tsx
"use client"

// import { FreeDemo } from '../free-demo-signup/FreeDemo';
// import { useState } from 'react';
// import { Button } from '../ui/button';

// const StickyButton: React.FC = () => {
  
//     const [isFreeDemoOpen, setIsFreeDemoOpen] = useState(false);

   
//     return (
//         <>
//             <Button
//                 onClick={() => 
//                     setIsFreeDemoOpen(true)}
//                 className="fixed bottom-3 right-3 bg-purple-900 text-white px-4 py-2 mb-[150px] rounded-full shadow-lg hover:bg-white hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-base sm:text-lg"
//             >
//                 Book Your Free Demo Session Today
//             </Button>
//             {isFreeDemoOpen && <FreeDemo setIsOpen={setIsFreeDemoOpen} />}
//         </>
//     );
// };

// export default StickyButton;

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { FreeDemo } from '../free-demo-signup/FreeDemo';
import { useState } from 'react';

export default function StickyButton() {
    const [isFreeDemoOpen, setIsFreeDemoOpen] = useState(false);
    

    return (
        <>
       
        <TooltipProvider>
                <div className="fixed bottom-3 right-3 z-20 mb-[150px] mr-8">
                    <Tooltip delayDuration={100} >
                <TooltipTrigger asChild>
                    <Button
                        variant="default"
                                className="rounded-full p-4 shadow-lg bg-purple-900 hover:bg-white text-white hover:text-purple-700 flex items-center gap-2"
                                onClick={() => { setIsFreeDemoOpen(true);    }}
                    >
                        <Calendar className="w-5 h-5" />
                        Book Now
                    </Button>
                </TooltipTrigger>
                       
                <TooltipContent>
                        <div className="flex items-center gap-2 rounded-xl shadow-xl bg-purple-100 p-2">
                                <span className="text-lg font-semibold text-purple-900">
                                    Book Your Free Demo Session Today
                                </span>
                        </div>
                   
                </TooltipContent>
                      
            </Tooltip>
        </div>
        </TooltipProvider>
        { isFreeDemoOpen && <FreeDemo setIsOpen={setIsFreeDemoOpen} /> }
        </>
    );
}