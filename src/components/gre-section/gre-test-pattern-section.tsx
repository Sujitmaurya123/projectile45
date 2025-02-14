import React from 'react';

interface GREComparison {
    category: string;
    previousGRE: string;
    newGRE: string;
}

const greData: GREComparison[] = [
    { category: 'Acceptance', previousGRE: 'Thousands of graduate, business and law schools accept GRE scores for their master\'s, MBA, JD and PhD programs', newGRE: 'Thousands of graduate, business and law schools accept GRE scores for their master\'s, MBA, JD and PhD programs' },
    { category: 'Test Duration', previousGRE: 'Availability', newGRE: '1 hour 58 minutes' },
    { category: 'Analytical Writing', previousGRE: '2 tasks ("Analyze an Issue" & "Analyze an Argument")', newGRE: '1 Analytical writing essay task' },
    { category: 'Verbal Reasoning', previousGRE: '2 sections, 40 questions total', newGRE: '2 sections, 27 questions total' },
    { category: 'Quantitative Reasoning', previousGRE: '2 sections, 40 questions total', newGRE: '2 sections, 27 questions total' },
    { category: 'Question Types', previousGRE: 'Same as current', newGRE: 'Same, except removal of "Analyze an Argument"' },
    { category: 'Availability', previousGRE: 'At a test center: The test is offered on a continuous basis at hundreds of centers in 160 countries.\nAt home: Available 24 hours a day, 7 days a week.', newGRE: 'At a test center: The test is offered on a continuous basis at hundreds of centers in 160 countries.\nAt home: Available 24 hours a day, 7 days a week.' },
    { category: 'Score Reporting', previousGRE: '10-15 calendar days', newGRE: '8-10 calendar days' },
    { category: 'Calculator', previousGRE: 'On-screen calculator available', newGRE: 'On-screen calculator available' },
    { category: 'Test Format', previousGRE: 'At home or test center', newGRE: 'At home or test center' },
    { category: 'Scores Validity', previousGRE: '5 years', newGRE: '5 years' },
];

const GREComparisonTable: React.FC = () => {
    return (
        <div className='container mx-auto p-4 max-w-6xl'>
            <h1 className=' text-5xl flex justify-center font-bold mb-4 text-headingcol'>About GRE </h1>
            <p className=' text-2xl flex justify-center font-bold mb-4 text-headingcol'>GRE General Test pattern</p>
       
        <div className="overflow-x-auto">
            <table
                className="min-w-full border-collapse divide-y divide-gray-300 bg-white"
                aria-label="GRE Comparison Table"
            >
                <thead className="bg-gray-100">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-sm font-semibold text-gray-700"
                        >
                            Category
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-sm font-semibold text-gray-700"
                        >
                            Previous GRE (Before Sep 22, 2023)
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-sm font-semibold text-gray-700"
                        >
                            New GRE (After Sep 22, 2023)
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {greData.map((item, index) => (
                        <tr
                            key={index}
                            className="hover:bg-gray-50"
                        >
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                {item.category}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600 whitespace-pre-line">
                                {item.previousGRE}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600 whitespace-pre-line">
                                {item.newGRE}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default GREComparisonTable;
