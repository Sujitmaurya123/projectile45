// components/GMATStructure.tsx

import React from 'react';

const GMATStructure = () => {
    return (
        <div className="container mx-auto px-14 py-5 text-justify max-w-6xl">
            <h1 className="text-3xl font-bold mb-4 text-headingcol text-center">GMAT Structure</h1>

            <p className='text-gray-600'>
                The GMAT Focus Edition, introduced on November 7, 2023, represents a significant evolution in the Graduate
                Management Admission Test (GMAT). This updated format aims to better assess the skills most pertinent to
                modern business education.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-headingcol">1. Exam Structure and Sections</h2>

            <ul className="list-disc ml-4 text-gray-600">
                <li><strong>Quantitative Reasoning:</strong> Focuses solely on problem-solving skills.</li>
                <li> <strong>Verbal Reasoning:</strong> Concentrates on reading comprehension and critical reasoning.</li>
                <li><strong>Data Insights:</strong> A new section that combines elements of the previous Integrated Reasoning and Data Sufficiency questions, evaluating your ability to analyze and interpret data.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 text-headingcol">2. Section Order Selection</h2>

            <p className='text-gray-600'>
                Unlike the previous GMAT format, the Focus Edition allows you to choose the order in which you tackle the sections.
                This flexibility enables you to start with the section you feel most confident in.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-headingcol">3. Timing and Number of Questions</h2>

            <ul className="list-disc ml-4 text-gray-600">
                <li><strong className='text-gray-700'>Duration:</strong> The total exam time is reduced to 2 hours and 15 minutes, down from the previous 3 hours and 7 minutes.</li>
                <li><strong className='text-gray-700'>Number of Questions:</strong>
                    <ul className="list-disc ml-4 text-gray-700">
                        <li>Quantitative Reasoning: 21 questions</li>
                        <li>Verbal Reasoning: 23 questions</li>
                        <li>Data Insights: 20 questions</li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 text-headingcol">4. Computer-Adaptive Testing</h2>

            <p className='text-gray-600'>
                The GMAT Focus Edition maintains the computer-adaptive testing (CAT) format. This means that the difficulty
                of questions adapts to your performance as you progress through the exam. Additionally, you can bookmark
                questions for review and change up to three answers per section, providing greater control over your
                test-taking experience.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-headingcol">5. Scoring and Reporting</h2>

            <ul className="list-disc ml-4 text-gray-600">
                <li><strong className='text-gray-700'>Scoring Scale:</strong> The total score range is now 205 to 805, with individual section scores on a scale of 60 to 90.</li>
                <li><strong className='text-gray-700'>Score Reporting:</strong> You can choose to send your scores to up to five schools after viewing your scores, allowing you to make informed decisions about your applications.</li>
            </ul>
        </div>
    );
};

export default GMATStructure;