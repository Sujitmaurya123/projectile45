// components/SATCourseFees.tsx
import SATPackageComparison from '@/components/sat-fees-structure-section/sat-maths-fees-comparison';

import SATRWPackageComparison from '@/components/sat-fees-structure-section/sat-reading-writing-comparison';

import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: "SAT Fees Structure ",
    description: "Get detailed insights into the SAT exam fees, including registration costs, rescheduling fees, and additional charges. Plan your SAT preparation with P45 today!",
    keywords: ["sat registration", "sat test registration", "sat exam registration", "best sat coaching"],
}

const courses = [
    {
        name: 'SAT',
        originalPrice: 7849,
        discountedPrice: 5499
    },
    
];

const SATCourseFees: React.FC = () => {
   

    return (
        <div className="p-6 font-sans container mx-auto max-w-6xl">
            <h1 className="text-5xl font-bold mb-4 text-center text-headingcol">SAT Coaching  at Projectile 45</h1>
            
            <div>
                <div className="container mx-auto p-6">
                    <h1 className="text-3xl font-semibold text-center mb-6 text-headingcol">SAT Price </h1>
                    <table className="min-w-full table-auto border-collapse shadow-lg">
                        <thead>
                            <tr className="bg-green-400 text-gray-700">
                                <th className="px-6 py-3 text-left">Course</th>
                                <th className="px-6 py-3 text-left">Original Price (INR/hour)</th>
                                <th className="px-6 py-3 text-left">Discounted Price (INR/hour)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course, index) => (
                                <tr key={index} className="border-b hover:bg-gray-100">
                                    <td className="px-6 py-4">{course.name}</td>
                                    <td className="px-6 py-4 text-red-700"><del>{course.originalPrice}</del></td>
                                    <td className="px-6 py-4">{course.discountedPrice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className=" mt-8 text-gray-600">
                        At Projectile 45, our SAT courses are designed to provide comprehensive test
                        preparation for both Math and Reading &amp; Writing sections. We offer 1:1 coaching
                        and small group coaching (up to 4 students) to ensure personalized learning and
                        maximum score improvement.
                    </p>
                </div>
            </div>
            
       {/* <SATMathsFees/>
       <SATReadingWritingFees/> */}
       <SATPackageComparison/>
       <SATRWPackageComparison/>
        
    </div> 
    );
};

export default SATCourseFees;


