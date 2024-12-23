// components/SATTestDatesTable.tsx
import React from 'react';

interface SATTestDate {
    testDate: string;
    registrationDeadline: string;
    cancellationDeadline: string;
}

const SATTestDatesTable: React.FC = () => {
    const testDates: SATTestDate[] = [
        { testDate: 'Aug 24, 2024', registrationDeadline: 'Aug 9, 2024', cancellationDeadline: 'Aug 13, 2024' },
        { testDate: 'Oct 5, 2024', registrationDeadline: 'Sept 20, 2024', cancellationDeadline: 'Sept 24, 2024' },
        { testDate: 'Nov 2, 2024', registrationDeadline: 'Oct 18, 2024', cancellationDeadline: 'Oct 22, 2024' },
        { testDate: 'Dec 7, 2024', registrationDeadline: 'Nov 22, 2024', cancellationDeadline: 'Nov 26, 2024' },
        { testDate: 'Mar 8, 2025', registrationDeadline: 'Feb 21, 2025', cancellationDeadline: 'Feb 25, 2025' },
        { testDate: 'May 3, 2025', registrationDeadline: 'Apr 18, 2025', cancellationDeadline: 'April 22, 2025' },
        { testDate: 'June 7, 2025', registrationDeadline: 'May 22, 2025', cancellationDeadline: 'May 27, 2025' },
    ];

    return (
        <div className="p-6 font-sans container mx-auto max-w-2xl">
            <h1 className="text-2xl font-bold mb-4 text-center">SAT 2024-2025 Test Dates</h1>
            <p className="mb-4  font-bold text-center">August 2024–June 2025 Test Dates<br /> These test dates and deadlines apply to all students—U.S. and international—taking the SAT:</p>
           
        
        <div className="overflow-x-auto w-full">
            <table className="w-full border-collapse border border-gray-300 min-w-[600px] text-sm md:text-base">
                <thead>
                    <tr className="bg-gray-100 font-medium">
                        <th className="py-3 px-4 text-left border border-gray-300">SAT Test Date*</th>
                        <th className="py-3 px-4 text-left border border-gray-300">Registration Deadline</th>
                        <th className="py-3 px-4 text-left border border-gray-300">Cancellation, and Late Registration**</th>
                    </tr>
                </thead>
                <tbody>
                    {testDates.map((date, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="py-2 px-4 border border-gray-300 whitespace-nowrap">{date.testDate}</td>
                            <td className="py-2 px-4 border border-gray-300 whitespace-nowrap">{date.registrationDeadline}</td>
                            <td className="py-2 px-4 border border-gray-300 whitespace-nowrap">{date.cancellationDeadline}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="mt-4 text-sm text-gray-600">*Students who need to borrow a device from College Board will need to register and request their device earlier than the registration deadline—at least 30 days before test day.</p>
        </div>
        </div> 
    );
};

export default SATTestDatesTable;

