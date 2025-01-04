import React from 'react';

interface SATExamData {
    section: string;
    questions: string;
    duration: string;
    scoreRange: string;
}

const SATExamTable: React.FC = () => {
    const examData: SATExamData[] = [
        {
            section: 'Reading + Writing',
            questions: '54 MCQs',
            duration: '64',
            scoreRange: '200 to 800',
        },
        {
            section: 'Break',
            questions: '',
            duration: '10',
            scoreRange: '',
        },
        {
            section: 'Math',
            questions: '33 MCQs + 11 SPR questions',
            duration: '70',
            scoreRange: '200 to 800',
        },
        {
            section: 'Total',
            questions: '98 qs',
            duration: '2 hr 14 mins for the test + 10 mins break',
            scoreRange: '400 to 1600',
        },
    ];

    return (
        <div className="p-4 md:p-6 font-sans  ">
            <h1 className="  text-lg flex justify-center font-bold mb-4 ">Below is a breakdown of the sections in the SAT Exam Pattern, including the
                number of questions and time allotted for each:</h1>
            <div className="w-full flex  justify-center overflow-x-auto mb-5 "> {/* Responsive container */}
                <table className="w-500  items-center border-collapse border border-gray-300 text-sm md:text-base ">
                    <thead>
                        <tr className="bg-gray-100 font-medium">
                            <th className="py-3 px-2 md:px-4 text-left">SAT Section</th>
                            <th className="py-3 px-2 md:px-4 text-left">Number of Questions</th>
                            <th className="py-3 px-2 md:px-4 text-left">Time Duration (mins)</th>
                            <th className="py-3 px-2 md:px-4 text-left">Score Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        {examData.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="py-2 px-2 md:px-4 whitespace-nowrap">{item.section}</td>
                                <td className="py-2 px-2 md:px-4 whitespace-nowrap">{item.questions}</td>
                                <td className="py-2 px-2 md:px-4 whitespace-nowrap">{item.duration}</td>
                                <td className="py-2 px-2 md:px-4 whitespace-nowrap">{item.scoreRange}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SATExamTable;
