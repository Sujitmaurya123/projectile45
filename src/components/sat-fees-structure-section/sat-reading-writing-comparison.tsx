// components/SATRWPackageComparison.tsx
import React from 'react';

interface PackageComparison {
    feature: string;
    package30: string | JSX.Element;
    package50: string | JSX.Element;
}

const SATRWPackageComparison: React.FC = () => {
    const comparisonData: PackageComparison[] = [
        { feature: 'Core Skills Coverage', package30: <span className="text-green-500">✔</span>, package50: <span className="text-green-500">✔</span> },
        { feature: 'Advanced Passage Analysis', package30: <span className="text-red-500">✘</span>, package50: <span className="text-green-500">✔</span> },
        { feature: 'Grammar and Language Skills', package30: 'Basic', package50: 'Comprehensive' },
        { feature: 'Practice Questions Exposure', package30: 'Moderate', package50: 'Extensive' },
        { feature: 'Number of Mock Tests Analysis', package30: '4', package50: '8' },
        { feature: 'Mock Test Analysis', package30: 'Basic', package50: 'Detailed (with discussions)' },
        { feature: 'Strategy Sessions', package30: '1', package50: '3' },
        { feature: 'Doubt-Solving Sessions', package30: 'Limited', package50: 'Comprehensive' },
        { feature: 'Sectional Tests', package30: 'Limited', package50: 'Comprehensive' },
        { feature: 'Critical Thinking Skills', package30: 'Basic', package50: 'Advanced' },
        { feature: 'Personalized Performance Feedback', package30: <span className="text-red-500">✘</span>, package50: <span className="text-green-500">✔</span> },
        { feature: 'Custom Improvement Plan', package30: <span className="text-red-500">✘</span>, package50: <span className="text-green-500">✔</span> },
        { feature: 'Access to Advanced Question Sets', package30: <span className="text-red-500">✘</span>, package50: <span className="text-green-500">✔</span> },
        { feature: 'Extra Live Interaction Hours', package30: <span className="text-red-500">✘</span>, package50: <span className="text-green-500">✔</span> },
    ];

    const highlights = [
        'Advanced Passage Analysis: Training to tackle paired passages and infer meaning effectively.',
        'Grammar Mastery: In-depth focus on tricky grammar and Standard English Conventions',
        'Mock Test Discussions: Detailed reviews of MOCK tests, including strategies for passage navigation.',
        'Enhanced Practice: Access to a broader range of Reading and Writing questions.',
        'Personalized Feedback: Tailored improvement plans based on strengths and weaknesses.',
        'Critical Thinking Development: Emphasis on connecting ideas, analyzing structure, and identifying author intent.',
        'Interactive Sessions: Greater focus on live discussions for individual doubts and concepts.',
    ];

    return (
        <div className="p-6 font-sans container mx-auto max-w-6xl">
           
        
        <div>
            <h2 className="text-xl font-semibold mb-4 text-center">Comparison: 30-Hour vs. 50-Hour SAT Reading & Writing Package</h2>
            <div className="overflow-x-auto w-full">
                <table className="w-full border-collapse border border-gray-300 min-w-[800px]">
                    <thead>
                        <tr className="bg-yellow-100">
                            <th className="py-2 px-4 border border-gray-300 text-left">Feature</th>
                            <th className="py-2 px-4 border border-gray-300 text-left">30-Hour SAT RW Package</th>
                            <th className="py-2 px-4 border border-gray-300 text-left">50-Hour SAT RW Package</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonData.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-green-100'}>
                                <td className="py-2 px-4 border border-gray-300">{item.feature}</td>
                                <td className="py-2 px-4 border border-gray-300 text-center">{item.package30}</td>
                                <td className="py-2 px-4 border border-gray-300 text-center">{item.package50}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Highlights of 50-Hour SAT RW Package</h3> {/* Changed heading */}
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

export default SATRWPackageComparison;

