// components/SATPackageComparison.tsx
import React from 'react';


interface PackageComparison {
    feature: string;
    package30: string | React.JSX.Element; // Allow JSX for checkmarks/crosses
    package50: string | React.JSX.Element;
}

const SATPackageComparison: React.FC = () => {
    const comparisonData: PackageComparison[] = [
        { feature: 'Core Concept Coverage', package30: <span className="text-green-500">✔</span>, package50: <span className="text-green-500">✔</span> },
        { feature: 'Advanced Concept Coverage', package30: <span className="text-red-500">✘</span>, package50: <span className="text-green-500">✔</span> },
        { feature: 'Practice Questions Exposure', package30: 'Moderate', package50: 'Extensive' },
        { feature: 'Number of Mock Tests Analysis', package30: '4', package50: '8' },
        { feature: 'Mock Test Analysis', package30: 'Basic', package50: 'Detailed (with discussions)' },
        { feature: 'Strategy Sessions', package30: '1', package50: '3' },
        { feature: 'Doubt-Solving Sessions', package30: 'Limited', package50: 'Comprehensive' },
        { feature: 'Sectional Tests', package30: 'Limited', package50: 'Comprehensive' },
        { feature: 'Personalized Performance Feedback', package30: <span className="text-red-500">✘</span>, package50: <span className="text-green-500">✔</span> },
        { feature: 'Custom Improvement Plan', package30: <span className="text-red-500">✘</span>, package50: <span className="text-green-500">✔</span> },
        { feature: 'Access to Advanced Question Sets', package30: <span className="text-red-500">✘</span>, package50: <span className="text-green-500">✔</span> },
        { feature: 'Extra Live Interaction Hours', package30: <span className="text-red-500">✘</span>, package50: <span className="text-green-500">✔</span> },
    ];

    const highlights = [
        'Advanced Problem-Solving: Greater focus on higher-difficulty questions and techniques.',
        'Mock Test Discussions: Each test is reviewed in detail, with strategies for improvement.',
        'Increased Practice Material (Advanced Question Sets): Access to advanced question sets',
        'Personalized Feedback: Comprehensive performance analysis after every test.',
        'Flexibility and Interaction: More live sessions and one-on-one interactions to address individual challenges.',
    ];

    return (
        <div className="p-6 font-sans container mx-auto max-w-6xl">
            
        
        <div>
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">Comparison: 30-Hour vs. 50-Hour SAT Maths Package</h2>
            <div className="overflow-x-auto w-full">
                <table className="w-full border-collapse border border-gray-300 min-w-[800px]">
                    <thead>
                        <tr className="bg-yellow-100 text-gray-700"> {/* Yellow header */}
                            <th className="py-2 px-4 border border-gray-300 text-left">Feature</th>
                            <th className="py-2 px-4 border border-gray-300 text-left">30-Hour SAT Maths Package</th>
                            <th className="py-2 px-4 border border-gray-300 text-left">50-Hour SAT Maths Package</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonData.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-green-100'}> {/* Alternating row colors */}
                                <td className="py-2 px-4 border border-gray-300">{item.feature}</td>
                                <td className="py-2 px-4 border border-gray-300 text-center">{item.package30}</td> {/* Center content in package columns */}
                                <td className="py-2 px-4 border border-gray-300 text-center">{item.package50}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2 text-gray-700">Highlights of 50-Hour SAT Maths Package</h3>
                <ul className="list-disc ml-6 space-y-2">
                    {highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    );
};

export default SATPackageComparison;

