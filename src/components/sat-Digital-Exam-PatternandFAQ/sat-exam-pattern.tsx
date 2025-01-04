// components/SATExamPatternTable.tsx
import React from 'react';

interface SATExamPatternData {
    category: string;
    readingWriting: string;
    math: string;
}

const SATExamPatternTable: React.FC = () => {
    const examData: SATExamPatternData[] = [
        {
            category: 'Format',
            readingWriting: 'Two parts one focuses on Reading, and the other on Writing. Both are timed separately in different modules.',
            math: 'Two parts, both covering math, administered in separate timed modules.',
        },
        {
            category: 'Number of Questions (Total Operational + Pretest)',
            readingWriting: '1st module: 25 operational+ 2 pretest questions, 2nd module: 25 operational+ 2 pretest questions',
            math: '1st module: 20 operational + 2 pretest questions, 2nd module: 20 operational + 2 pretest questions',
        },
        {
            category: 'Total Questions',
            readingWriting: '54 questions (27 qs in each module)',
            math: '44 questions (22 qs in each module)',
        },
        {
            category: 'Time Duration',
            readingWriting: '32 minutes for each module',
            math: '35 minutes for each module',
        },
        {
            category: 'Total Time Allotted',
            readingWriting: '64 minutes',
            math: '70 minutes',
        },
        {
            category: 'Question Types',
            readingWriting: 'Multiple-choice (MCQs) with four options',
            math: '75% Multiple-choice (MCQs), 25% student-produced responses (SPR)',
        },
        {
            category: 'Scores Reported',
            readingWriting: 'The total score is out of 1600, combining the scores from the RW and Math sections.',
            math: '', // Empty string for this row in Math column
        },
    ];

    return (
        <div className="p-6 font-sans container mx-auto max-w-3xl">
            <h1 className="text-lg font-bold mb-8 text-center">Let&apos;s see the highlights of the SAT Exam Pattern 2024 and beyond.</h1>

       
        <div className="overflow-x-auto w-full">
            <table className="w-full border-collapse border border-gray-300 min-w-[800px] text-sm md:text-base">
                <thead>
                    <tr className="bg-gray-100 font-medium">
                        <th className="py-3 px-4 text-left border border-gray-300">SAT Exam Pattern</th>
                        <th className="py-3 px-4 text-left border border-gray-300">Reading & Writing (RW) Section</th>
                        <th className="py-3 px-4 text-left border border-gray-300">Math Section</th>
                    </tr>
                </thead>
                <tbody>
                    {examData.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="py-2 px-4 border border-gray-300 font-medium">{item.category}</td>
                            <td className="py-2 px-4 border border-gray-300">{item.readingWriting}</td>
                            <td className="py-2 px-4 border border-gray-300">{item.math}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default SATExamPatternTable;

