// components/GMATSections.tsx

import React from 'react';

const GMATSections = () => {
    return (
        <div className="container mx-auto px-14 py-5 text-justify max-w-6xl">
            <h1 className="text-3xl font-bold mb-4 text-headingcol">GMAT Exam Sections</h1>

            <h2 className="text-2xl font-semibold mt-8 text-headingcol">Quantitative Reasoning</h2>

            <p className='text-gray-600'>
                This section measures your algebraic and arithmetic foundational knowledge and how you apply this knowledge to solve problems.
                It is composed of 21 Problem Solving questions.
            </p>

            <p className='text-gray-600'>
                These types of questions require some knowledge of arithmetic and elementary algebra. Answering these questions correctly relies on logic and analytical skills,
                not the underlying math skills. You cannot use a calculator while working on this section.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-headingcol">Verbal Reasoning</h2>

            <p className='text-gray-600'>
                This section measures your ability to read and comprehend written material and to reason and evaluate arguments.
                It is composed of 23 Reading Comprehension and Critical Reasoning questions.
            </p>

            <p className='text-gray-600'>
                <strong>Reading Comprehension</strong> questions measure your ability to understand words and statements, understand logical relationships between significant points,
                draw inferences, and follow the development of quantitative concepts.
            </p>

            <p className='text-gray-600'>
                <strong>Critical Reasoning</strong> questions measure your ability to make arguments, evaluate arguments, and formulate or evaluate a plan of action.
                Critical Reasoning questions are based on a short reading passage, usually fewer than 100 words.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-headingcol">Data Insights</h2>

            <p className='text-gray-600'>
                The Data Insights section measures candidates&apos; ability to analyze and interpret data and apply it to real-world business scenarios.
                It also measures digital and data literacy—one of the most relevant and in-demand skills in business today. It is composed of 20 questions.
            </p>

            <p>
                <strong className='text-gray-700'>Question Types:</strong>
            </p>

            <ul className="list-disc ml-4 text-gray-600">
                <li><strong className='text-gray-700'>Data Sufficiency:</strong> Measures your ability to analyze a quantitative problem, recognize which data is relevant, and determine at what point there is enough data to solve the problem.</li>
                <li><strong className='text-gray-700'>Multi-Source Reasoning:</strong> Measures your ability to examine data from multiple sources and to analyze each source of data carefully to answer multiple questions.</li>
                <li><strong className='text-gray-700'>Table Analysis:</strong> Measures your ability to sort and analyze a table of data, similar to a spreadsheet, in order to determine what information is relevant or meets certain conditions.</li>
                <li><strong className='text-gray-700'>Graphics Interpretation:</strong> Measures your ability to interpret the information presented in a graph or other graphical image (scatter plot, x/y graph, bar chart, pie chart, or statistical curve distribution) to discern relationships, and make inferences.</li>
                <li><strong className='text-gray-700'>Two-Part Analysis:</strong> Measures your ability to solve complex problems. They could be quantitative, verbal, or some combination of both.</li>
            </ul>
            <h2 className='text-2xl font-bold text-headingcol'>Sample Question</h2>
            <h1 className="text-2xl font-semibold mb-4 text-headingcol">Data Insights: Multi-Source Reasoning Sample Questions</h1>
            <p className="mb-4 text-gray-600">
                Consider the following three emails. Does the information in the three emails support the inference stated?
            </p>

            {/* Email 1 */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2 text-headingcol">Email from administrator to research staff</h2>
                <p className="text-gray-700">
                    January 14, 4:04 am
                </p>
                <p className="text-gray-700">
                    Yesterday was the deadline for our receipt of completed surveys from doctors who were invited to participate in the Medical Practice Priorities Survey. Did we get enough returns from this original group of invitees to get reliable statistics? Do we need to invite additional participants?
                </p>
            </div>

            {/* Email 2 */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2 text-headingcol">Email from project coordinator in response to the administrator&apos;s January 15, 10:46 am message</h2>
                <p className="text-gray-700">
                    January 15, 12:02 am
                </p>
                <p className="text-gray-700">
                    Altogether we got exactly 350 actual survey completions. We need at least 700 and were hoping for even more, so we plan to invite a second group to participate. Both the response rate from the first group and other research indicates that with this type of survey and this type of participants there is about a 40 percent probability that any given invitee will submit the completed survey in the time we&apos;ll allow. (Obviously that doesn&apos;t mean that if we invited 1,000 we&apos;d necessarily get about 400, so we need to think in terms of the risks of getting too few returns or exceeding the budget.) All of the participants who submitted their surveys by the deadline will get the $50 payment we promised. What is our total budget for compensation to participants?
                </p>
            </div>

            {/* Email 3 */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2 text-headingcol">Email from administrator to project coordinator in response to the project coordinator&apos;s January 15, 12:02 am message</h2>
                <p className="text-gray-700">
                    January 15, 10:46 am
                </p>
                <p className="text-gray-700">
                    The budget we allocated for compensation to those who complete and submit the Medical Practice Priorities Survey is $46,000. We will honor our commitment to pay $50 to each participant in the second group as well as the first who complete the survey and submits it by the deadline we specify when we invite them to participate. However, we will need to try not to exceed the total amount that is budgeted for this purpose.
                </p>
            </div>

            {/* Questions */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2 text-headingcol">Consider each of the following statements. Does the information in the three emails support the inference stated?</h3>
                <ul className="list-disc ml-4">
                    <li>The administrator is unwilling to pay any participant in the second group of invitees who were invited in the first group.</li>
                    <li>The project coordinator does not expect to be able to meet the goal for numbers of completed surveys.</li>
                    <li>The administrator is willing to accept some risk of exceeding the budget for compensating participants.</li>
                </ul>
            </div>
        </div>
    );
};

export default GMATSections;