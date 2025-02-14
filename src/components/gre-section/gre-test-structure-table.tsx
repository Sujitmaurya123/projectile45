import React from 'react';

interface GRETestSection {
    measure: string;
    numberOfQuestions: string;
    allottedTime: string;
}

const greTestStructureData: GRETestSection[] = [
    {
        measure: 'Analytical Writing (One section)',
        numberOfQuestions: 'One "Analyze an Issue" task',
        allottedTime: '30 minutes',
    },
    {
        measure: 'Verbal Reasoning (Two sections)',
        numberOfQuestions: 'Section 1: 12 questions\nSection 2: 15 questions',
        allottedTime: 'Section 1: 18 minutes\nSection 2: 23 minutes',
    },
    {
        measure: 'Quantitative Reasoning (Two sections)',
        numberOfQuestions: 'Section 1: 12 questions\nSection 2: 15 questions',
        allottedTime: 'Section 1: 21 minutes\nSection 2: 26 minutes',
    },
];

const GRETestStructureTable: React.FC = () => {
    return (
        <div className="container mx-auto p-4 max-w-6xl">
            <p className="text-2xl font-bold mb-4 text-center text-headingcol">GRE Test Structure and Timing</p>
            <p className="mb-6 text-gray-600 text-center">
                The overall test time is about 1 hour and 58 minutes. The exam consists of five sections.
            </p>
            <div className="overflow-x-auto">
                <table
                    className="min-w-full border-collapse divide-y divide-gray-300 border bg-white"
                    aria-label="GRE Test Structure Table"
                >
                    <thead className="bg-green-100">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider"
                            >
                                Measure
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider"
                            >
                                Number of Questions
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider"
                            >
                                Allotted Time
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {greTestStructureData.map((item, index) => (
                            <tr
                                key={index}
                                className={`hover:bg-green-50 ${index % 2 === 0 ? 'even:bg-gray-50' : ''}`}
                            >
                                <td
                                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                    scope="row"
                                >
                                    {item.measure}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 whitespace-pre-line">
                                    {item.numberOfQuestions}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 whitespace-pre-line">
                                    {item.allottedTime}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="mt-6 text-gray-600 text-center">
                The GRE test structure begins with the Analytical Writing section, which is always
                placed first in the exam. Following that, the Verbal Reasoning and Quantitative
                Reasoning sections can appear in any order. This flexible sequence means you might
                encounter these two sections in various combinations, depending on how the test is
                administered.
            </p>
        </div>
    );
};

export default GRETestStructureTable;
