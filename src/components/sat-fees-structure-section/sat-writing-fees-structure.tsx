// components/SATReadingWritingFees.tsx
import React from 'react';

interface FeeStructure {
    type: string;
    hourlyFee: string;
    package30: string;
    package50: string;
}

const SATReadingWritingFees: React.FC = () => {
    const fees: FeeStructure[] = [
        {
            type: '1:1 Coaching',
            hourlyFee: '₹3800',
            package30: '₹1,14,000',
            package50: '₹1,90,000',
        },
        {
            type: 'Group Coaching (up to 4)',
            hourlyFee: '₹2800',
            package30: '₹84,000',
            package50: '₹1,40,000',
        },
    ];

    return (
        <div className="p-6 font-sans container mx-auto max-w-6xl">
            <h1 className="text-2xl font-bold mb-4 text-center text-headingcol">SAT Course Information</h1> {/* Example title */}
            
       
        <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">SAT Reading & Writing Fee Structure</h2>
            <div className="overflow-x-auto w-full">
                <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
                    <thead>
                        <tr className="bg-green-100 text-gray-700">
                            <th className="py-2 px-4 border border-gray-300 text-left">Type of Coaching</th>
                            <th className="py-2 px-4 border border-gray-300 text-left">Fee per Hour per student</th>
                            <th className="py-2 px-4 border border-gray-300 text-left">Package Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fees.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-green-50'}>
                                <td className="py-2 px-4 border border-gray-300">{item.type}</td>
                                <td className="py-2 px-4 border border-gray-300">{item.hourlyFee}</td>
                                <td className="py-2 px-4 border border-gray-300">
                                    <ul className="list-disc ml-6">
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
        </div>  
    );
};

export default SATReadingWritingFees;

