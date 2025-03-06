// components/IBTableOfContents.tsx
// import CombinedFAQPage from '@/components/ib-section/CombinedFAQPage';
// import IBCoachingFAQs from '@/components/ib-section/IbCoachingFAQs';
// import IBFAQs from '@/components/ib-section/IbFAQs';
// import IBOnlineCoachingFAQs from '@/components/ib-section/IbOnilneCoachingFAQs'; 
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: "IB Exam Preparation ",
    description: "Learn everything about the International Baccalaureate (IB), its curriculum, benefits, and how P45 prepares its students for global education success.",
    keywords: ["International Baccalaureate", "international baccalaureate","international baccalaureate program","international baccalaureate diploma", "ib program"],
}

interface IBSection {
    title: string;
    href: string;
    subsections?: { title: string; href: string }[]; // Subsections are now just strings
}

const ibData: IBSection[] = [
    // {
    //     title: 'Introduction to the IB Curriculum',
    //     href: '/ib-introduction',
    //     subsections: [
    //         { title: 'Overview of the IB Program', href: 'overview' },
    //         { title: 'Key Principles and Philosophy', href: 'keyprinciples' },
    //         { title: 'Benefits of Choosing the IB Pathway', href: 'benefits' },
    //     ],
    // },
    // {
    //     title: 'The Structure of the IB Program',
    //     href: '/ib-structure',
    //     subsections: [
    //         { title: 'The IB Primary Years Program (PYP)', href: 'pyp' },
    //         { title: 'The IB Middle Years Program (MYP)', href: 'myp' },
    //         { title: 'The IB Diploma Program (DP)', href: 'dp' },
    //         { title: 'The IB Career-related Program (CP)', href: 'cp' },
    //     ],
    // },
    // {
    //     title: 'The Core Components of the IB Diploma',
    //     href: '/ib-core',
    //     subsections: [
    //         { title: 'Theory of Knowledge (TOK)', href: 'tok' },
    //         { title: 'Extended Essay (EE)', href: 'ee' },
    //         { title: 'Creativity, Activity, Service (CAS)', href: 'cas' },
    //     ],
    // },
    // {
    //     title: 'The IB Assessment System',
    //     href: '/ib-assessment',
    //     subsections: [
    //         { title: 'Grading Scale and Criteria', href: 'grading-scale' },
    //         { title: 'Internal vs. External Assessments', href: 'internal-external' },
    //         { title: 'Understanding Your IB Scores', href: 'ib-scores' },
    //     ],
    // },
    {
        title: 'Key Differences Between IB and Other Curricula',
        href: '/ib-differences',
        subsections: [
            { title: 'IB vs. A-Levels', href: 'ib-vs-a-levels' },
            { title: 'IB vs. AP', href: 'ib-vs-ap' },
            { title: 'How IB Prepares Students for University', href: 'ib-university-prep' },
        ],
    },
    
    {
        title: 'University Recognition of the IB Diploma',
        href: '/ib-recognition',
        subsections: [
            { title: 'Global University Acceptance', href: 'global-acceptance' },
            { title: 'How IB Affects University Admissions', href: 'ib-university-admissions' },
            { title: 'Scholarships and Credits for IB Students', href: 'ib-scholarships' },
        ],
    },
    {
        title: 'Preparing for the IB Exams',
        href: '/ib-preparation',
        subsections: [
            { title: 'Study Tips and Strategies for Success', href: 'study-tips' },
            { title: 'Understanding IB Exam Patterns and Marking Schemes', href: 'exam-patterns' },
            { title: 'How to Manage Stress During Exam Periods', href: 'exam-stress-management' },
        ],
    },
    {
        title: 'Frequently Asked Questions (FAQs) About the IB Curriculum',
        href: '/ib-faqs',
        subsections: [
            { title: 'Common Misconceptions about IB', href: 'misconceptions' },
            { title: 'IB for Students with Special Needs', href: 'special-needs' },
            { title: 'How to Transition to IB from Other Curricula', href: 'transition' },
        ],
    },
    {
        title: 'IB Diploma Subjects & Core Components',
        href: '/ib-subject-choices',
        subsections: [
            { title: 'Group 1: Studies in Language & Literature', href: 'group-1' },
            { title: 'Group 2: Language Acquisition', href: 'group-2' },
            { title: 'Group 3: Individuals & Societies (History, Economics, Psychology)', href: 'group-3' },
            { title: 'Group 4: Sciences (IB Physics, Chemistry, Biology)', href: 'group-4' },
            { title: 'Group 5: IB Maths (Analysis & Approaches, Applications & Interpretation)', href: 'group-5' },
            { title: 'Group 6: Arts (Visual Arts, Music, Theatre)', href: 'group-6' },
        ],
    },
];


const IBTableOfContents: React.FC = () => {
    return (
        <>
        
        <div className="container mx-auto py-10 px-4 max-w-6xl">
                <h1 className="text-4xl font-bold mb-4 text-center text-headingcol">About IB </h1>

                <h1 className="text-3xl font-bold mb-4 text-center text-headingcol">IB Coaching:Master the International Baccalaureate Program
</h1>
            
            <div>
                <p className='mb-4 text-gray-600'>
                        The <strong>International Baccalaureate (IB) Program</strong> is a globally recognized curriculum
                        designed to develop critical thinking, research skills, and international-mindedness. It
                        prepares students for academic excellence and career success through a well-
                        rounded approach to learning.
                </p>
                <section className='text-gray-600'>
                        <p className='font-semibold'>Understanding the International Baccalaureate Program</p>
                        <ul className="list-disc list-inside">
                            <li className="mb-2"> <strong>Primary Years Program (PYP) (Ages 3-12):</strong> Inquiry-based learning to build foundational skills.</li>
                            <li className="mb-2"><strong>Middle Years Program (MYP) (Ages 11-16):</strong> Interdisciplinary learning for academic and personal growth.</li>
                            <li className="mb-2"> <strong>Diploma Program (DP) (Ages 16-19):</strong> A rigorous two-year curriculum, including Theory of Knowledge (TOK), Extended Essay (EE), and Creativity, Activity, Service (CAS).</li>
                            <li className="mb-2"> <strong>Career-related Program (CP) (Ages 16-19):</strong> A blend of academics and career-focused studies for skill-based learning.</li>
                        </ul>
                </section>
                    <section className="mb-4 text-gray-600">
                        <h2 className="text-2xl font-semibold mb-2 text-headingcol">Why Choose the IB Diploma?</h2>
                        <ul className="list-disc list-inside">
                            <li className="mb-2"><strong>Globally Recognized:</strong> The <strong>International Baccalaureate Diploma</strong> is preferred
                                by top universities worldwide.</li>
                            <li className="mb-2"><strong>Holistic Development:</strong> The <strong>IB Program</strong> emphasizes a balance between
academics and personal growth..</li>
                            <li className="mb-2"><strong>Critical Thinking & Research:</strong> Research: The <strong>Theory of Knowledge (TOK)</strong> and <strong>Extended
                                Essay (EE)</strong> enhance analytical skills.</li>
                            <li className="mb-2"><strong>University & Career Preparation:</strong>A well-structured curriculum ensures success
                                in higher education and beyond.</li>
                        </ul>
                    </section>
                    <section className="mb-4 text-gray-600">
                        <h2 className="text-2xl font-semibold mb-2 text-headingcol">IB Diploma Subjects &amp; Core Components</h2>
                        <p>The IB subjects list includes six core areas:</p>
                        <ul className="list-disc list-inside">
                            <li className="mb-2"><strong>Group 1:</strong> Studies in Language &amp; Literature</li>
                            <li className="mb-2"><strong>Group 2:</strong> Language Acquisition
                                </li>
                            <li className="mb-2"><strong>Group 3:</strong> Individuals &amp; Societies (History, Economics, Psychology)
                                </li>
                            <li className="mb-2"><strong>Group 4:</strong> Sciences (<strong>IB Physics</strong>, Chemistry, Biology)
                                </li>
                            <li className="mb-2"><strong>Group 5:</strong> <strong>IB Maths</strong> (Analysis &amp; Approaches, Applications &amp; Interpretation)
                            </li>
                            <li className="mb-2"><strong>Group 6:</strong> Arts (Visual Arts, Music, Theatre)
                            </li>
                        </ul>
                    </section>
                    <section className="mb-4 text-gray-600">
                        <h2 className="text-2xl font-semibold mb-2 text-headingcol">Core Components of the IB Diploma</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-medium">1. Theory of Knowledge (TOK)</h3>
                                <p>Encourages students to explore the nature of
                                    knowledge through essays and presentations.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">2. Extended Essay (EE)</h3>
                                <p>(EE): A 4,000-word research paper refining writing and critical
                                    analysis skills.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">3. Creativity, Activity, Service (CAS)</h3>
                                <p>Involves arts, physical activities, and
                                    meaningful community service.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-4 text-gray-600">
                        <h2 className="text-2xl font-semibold mb-2 text-headingcol">IB Assessment &amp; Grading System</h2>
                        <ul className="list-disc list-inside">
                            <li className="mb-2"><strong>IB diploma subjects</strong> are scored on a <strong>1-7 scale,</strong> with <strong>TOK &amp; EE</strong> contributing
                                up to <strong>3 bonus points</strong> (Max Score: <strong>45 points</strong>).</li>
                            <li className="mb-2"><strong>Internal Assessments (IA):</strong> Coursework graded by teachers and moderated
                                externally.</li>
                            <li className="mb-2"><strong>External Assessments (EA):</strong> Standardized exams to ensure global
                                evaluation consistency.</li>
                            <li className="mb-2"><strong>University Readiness:</strong> A <strong>35+ IB score</strong> is competitive, while <strong>40+</strong> is ideal for
                                top-tier universities.</li>
                        </ul>
                    </section>

                    <section className='text-gray-600 mt-3'>
                        <h2 className="text-2xl font-semibold mb-2 text-headingcol">Why Choose Expert IB Tutors?</h2>
                        <ul className="list-disc list-inside">
                            <li className="mb-2">Personalized strategies for IB Maths, IB Physics, and all IB subjects</li>
                            <li className="mb-2">Expert guidance for TOK essays, Extended Essays, and CAS projects</li>
                            <li className="mb-2">Comprehensive IB test preparation to maximize scores</li>
                            <li className="mb-2">University admissions support for top institutions worldwide</li>
                        </ul>
                        <p className="mt-4">Looking for top <strong>IB tutors</strong> to ace your <strong>IB diploma subjects?</strong> Enrol in expert-led <strong>IB
                            coaching</strong> today and achieve excellence in the <strong>International Baccalaureate
                                Program!</strong></p>
                    </section>
            </div>
                <ul className="list-none mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ibData.map((section, index) => (
                        <li key={index} className="mb-4">
                            <div className="bg-white  shadow-xl rounded-lg p-4">
                                <Link href={section.href} legacyBehavior>
                                    <a className="text-lg font-semibold text-headingcol hover:underline mb-2">{section.title}</a>
                                </Link>
                                {section.subsections && (
                                    <ul className="pl-6">
                                        {section.subsections.map((subsection, subIndex) => (
                                            <li key={subIndex} className="mb-2 list-decimal">
                                                <Link href={`${section.href}#${subsection.href}`} legacyBehavior>
                                                    <a className="hover:underline text-gray-800">{subsection.title}</a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>


        </div>
        <div>
                {/* <IBFAQs/>
                <IBCoachingFAQs/>
                <IBOnlineCoachingFAQs/>
                <CombinedFAQPage/> */}
        </div>
        </>
    );
};

export default IBTableOfContents;