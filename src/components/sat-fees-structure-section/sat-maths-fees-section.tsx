

// components/SATCourseFees.tsx
import React from 'react';

interface FeeStructure {
    type: string;
    hourlyFee: string;
    package30: string;
    package50: string;
}

const SATMathsFees: React.FC = () => {
    const fees: FeeStructure[] = [
        {
            type: '1:1 Coaching',
            hourlyFee: '₹3800 per hour',
            package30: '₹1,14,000',
            package50: '₹1,90,000',
        },
        {
            type: 'Group Coaching (up to 4)',
            hourlyFee: '₹2800 per hour',
            package30: '₹84,000',
            package50: '₹1,40,000',
        },
    ];

    return (
        
            
       
        <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">SAT Maths Fee Structure</h2>
            <div className="overflow-x-auto w-full"> {/* Added for horizontal scrolling */}
                <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
                    <thead>
                        <tr className="bg-green-100 text-gray-700"> {/* Green background for header */}
                            <th className="py-2 px-4 border border-gray-300 text-left">Type of Coaching</th>
                            <th className="py-2 px-4 border border-gray-300 text-left">Fee per Hour per student</th>
                            <th className="py-2 px-4 border border-gray-300 text-left">Package Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fees.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-green-50'}> {/* Alternating green backgrounds */}
                                <td className="py-2 px-4 border border-gray-300">{item.type}</td>
                                <td className="py-2 px-4 border border-gray-300">{item.hourlyFee}</td>
                                <td className="py-2 px-4 border border-gray-300">
                                    <ul className="list-disc ml-6"> {/* Use a list for package options */}
                                        <li>30-hour package: {item.package30}</li>
                                        <li>50-hour package: {item.package50}</li>
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    
    );
};

export default SATMathsFees;


