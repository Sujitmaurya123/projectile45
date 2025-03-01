// components/GMATScoring.tsx

import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "GMAT Scoring System | Score Breakdown & Calculation",
    description: "Understand the GMAT scoring system, how scores are calculated, and what defines a good score. Get expert guidance from P45 to improve your GMAT performance.",
    keywords: ["gmat coaching",
        "gmat syllabus",
        "gmat preparation",
        "gmat practice questions",
        "gmat sample questions"],
}

const GMATScoring = () => {
    return (
        <div className="container mx-auto px-14 py-5 text-justify max-w-6xl">
            <h1 className="text-3xl font-bold mb-4 text-headingcol text-center">GMAT Scoring</h1>

            <p className='text-gray-700'>
                The GMAT Total Score scale ranges from 205 to 805, and all Total Score values end in a 5.
                Section scores range from 60 to 90.
            </p>

            <table className="table-auto border-collapse border border-gray-300">
                <thead>
                    <tr className='text-gray-700'>
                        <th className="border border-gray-300 p-2">Score Type</th>
                        <th className="border border-gray-300 p-2">Score Range</th>
                        <th className="border border-gray-300 p-2">Score Intervals</th>
                        <th className="border border-gray-300 p-2">Standard Error of Measurement</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2">Total Score</td>
                        <td className="border border-gray-300 p-2">205-805</td>
                        <td className="border border-gray-300 p-2">10</td>
                        <td className="border border-gray-300 p-2">30-40 points</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Quantitative Reasoning Score</td>
                        <td className="border border-gray-300 p-2">60-90</td>
                        <td className="border border-gray-300 p-2">1</td>
                        <td className="border border-gray-300 p-2">3 points</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Verbal Reasoning Score</td>
                        <td className="border border-gray-300 p-2">60-90</td>
                        <td className="border border-gray-300 p-2">1</td>
                        <td className="border border-gray-300 p-2">3 points</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Data Insights Score</td>
                        <td className="border border-gray-300 p-2">60-90</td>
                        <td className="border border-gray-300 p-2">1</td>
                        <td className="border border-gray-300 p-2">3 points</td>
                    </tr>
                </tbody>
            </table>

            <h2 className="text-2xl font-semibold mt-8 text-headingcol">About the Score Scale</h2>

            <p className='text-gray-700'>
                If you&apos;re familiar with the previous edition of the GMAT, you&apos;ll notice the Total Score scale is different. This change has been made to ensure you and schools can easily distinguish between a GMAT Exam - Focus Edition and previous GMAT Exam score.
            </p>

            <table className="table-auto border-collapse border border-gray-300">
                <thead>
                    <tr className='text-gray-700'>
                        <th className="border border-gray-300 p-2">Exam</th>
                        <th className="border border-gray-300 p-2">Total Score Range</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2">GMAT Exam - Focus Edition</td>
                        <td className="border border-gray-300 p-2">205-805</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Previous edition of the GMAT Exam</td>
                        <td className="border border-gray-300 p-2">200-800</td>
                    </tr>
                </tbody>
            </table>

            <p className='text-gray-700'>
                The score scale for the GMAT Exam - Focus Edition has also been adjusted to reflect changes in the test-taking population, which has become more diverse and global. Over the years, scores have shifted significantly, resulting in an uneven distribution. The updated score scale fixes that, thus allowing schools to better differentiate your performance on the exam.
            </p>

            <p className='text-gray-700'>
                In addition to the score scale recalibration, the following key changes distinguish GMAT Exam - Focus Edition:
            </p>

            <ul className="list-disc ml-4 text-gray-600">
                <li>The Total Score now comprises all 3 section scores (as mentioned above)</li>
                <li>The content areas and test constructs have been refined to narrow scope to focus on data literacy, critical thinking, and problem-solving skills</li>
                <li>The scoring algorithm has been updated</li>
                <li>The new Question Review &amp; Edit feature will have implications for testing behavior</li>
            </ul>
        </div>
    );
};

export default GMATScoring;