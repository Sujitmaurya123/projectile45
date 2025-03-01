// components/GREScores.tsx
import React from 'react';

interface ScoreInfo {
    section: string;
    scoreScale: string;
}

const scoreData: ScoreInfo[] = [
    {
        section: 'Verbal Reasoning',
        scoreScale: '130-170, in 1-point increments',
    },
    {
        section: 'Quantitative Reasoning',
        scoreScale: '130-170, in 1-point increments',
    },
    {
        section: 'Analytical Writing',
        scoreScale: '0-6, in half-point increments',
    },
];

const GREScores: React.FC = () => {
    return (
        <div className="container mx-auto p-4 max-w-6xl">
            <p className="text-2xl font-bold mb-4 text-headingcol">GRE General Test Scores</p>
            <p className="text-lg font-semibold mb-2 text-gray-800">What scores are reported?</p>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
                    <thead className="bg-green-200">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Section
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Score Scale
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {scoreData.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {item.section}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {item.scoreScale}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="mt-4 text-sm text-gray-700">
                Note: If no questions are answered for a specific measure (e.g., Verbal
                Reasoning), then you will receive a No Score (NS) for that measure.
            </p>
           
        </div>
    );
};

export default GREScores;