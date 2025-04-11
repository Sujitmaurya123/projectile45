// components/IBTableOfContents.tsx
// import CombinedFAQPage from '@/components/ib-section/CombinedFAQPage';
// import IBCoachingFAQs from '@/components/ib-section/IbCoachingFAQs';
// import IBFAQs from '@/components/ib-section/IbFAQs';
// import IBOnlineCoachingFAQs from '@/components/ib-section/IbOnilneCoachingFAQs'; 
import { Metadata } from 'next';

import React from 'react';

export const metadata: Metadata = {
    title: "IB Exam Preparation ",
    description: "Learn everything about the International Baccalaureate (IB), its curriculum, benefits, and how P45 prepares its students for global education success.",
    keywords: ["International Baccalaureate", "international baccalaureate","international baccalaureate program","international baccalaureate diploma", "ib program"],
}




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
                


        </div>
        
        </>
    );
};

export default IBTableOfContents;