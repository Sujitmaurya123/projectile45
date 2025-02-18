// components/IBTableOfContents.tsx
import CombinedFAQPage from '@/components/ib-section/CombinedFAQPage';
import IBCoachingFAQs from '@/components/ib-section/IbCoachingFAQs';
import IBFAQs from '@/components/ib-section/IbFAQs';
import IBOnlineCoachingFAQs from '@/components/ib-section/IbOnilneCoachingFAQs'; 
import Link from 'next/link';
import React from 'react';

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
        title: 'Subject Choices in the IB Diploma',
        href: '/ib-subject-choices',
        subsections: [
            { title: 'Group 1: Studies in Language and Literature', href: 'group-1' },
            { title: 'Group 2: Language Acquisition', href: 'group-2' },
            { title: 'Group 3: Individuals and Societies', href: 'group-3' },
            { title: 'Group 4: Sciences', href: 'group-4' },
            { title: 'Group 5: Mathematics', href: 'group-5' },
            { title: 'Group 6: The Arts or Electives', href: 'group-6' },
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
];


const IBTableOfContents: React.FC = () => {
    return (
        <>
        
        <div className="container mx-auto py-10 px-4 max-w-6xl">
                <h1 className="text-4xl font-bold mb-4 text-center text-headingcol">About IB </h1>

                <h1 className="text-3xl font-bold mb-4 text-center text-headingcol">IB Coaching: Excel in the International Baccalaureate Program
</h1>
            
            <div>
                <p className='mb-4'>
                        The <strong>International Baccalaureate (IB)</strong> is a globally recognized curriculum that nurtures critical thinking, research skills, and international-mindedness. It offers four programs:
                </p>
                <section>
               
                        <ul className="list-disc list-inside">
                            <li className="mb-2"> <strong>Primary Years Program (PYP) (Ages 3-12):</strong> Inquiry-based learning to build foundational skills.</li>
                            <li className="mb-2"><strong>Middle Years Program (MYP) (Ages 11-16):</strong> Interdisciplinary learning for academic and personal growth.</li>
                            <li className="mb-2"> <strong>Diploma Program (DP) (Ages 16-19):</strong> A rigorous two-year curriculum, including Theory of Knowledge (TOK), Extended Essay (EE), and Creativity, Activity, Service (CAS).</li>
                            <li className="mb-2"> <strong>Career-related Program (CP) (Ages 16-19):</strong> A blend of academics and career-focused studies for skill-based learning.</li>
                        </ul>
                </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-headingcol">Why Choose IB?</h2>
                        <ul className="list-disc list-inside">
                            <li className="mb-2">Globally Recognized: Preferred by top universities worldwide.</li>
                            <li className="mb-2">Holistic Development: Blends academics with personal and social growth.</li>
                            <li className="mb-2">Critical Thinking & Research: TOK and EE sharpen analytical skills.</li>
                            <li className="mb-2">University & Career Preparation: Equips students for success in higher education and beyond.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-headingcol">IB Diploma Core Components</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-medium">1. Theory of Knowledge (TOK)</h3>
                                <p>Explores the nature of knowledge across disciplines. Includes a TOK Essay and TOK Presentation on real-world applications.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">2. Extended Essay (EE)</h3>
                                <p>A 4,000-word independent research project, developing university-level writing and critical thinking. Students refine research questions, methodology, and progress through the Reflections on Planning and Progress Form (RPPF).</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">3. Creativity, Activity, Service (CAS)</h3>
                                <p>Creativity: Engaging in artistic pursuits. Activity: Physical well-being through sports and fitness. Service: Meaningful community service for real-world impact.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-headingcol">IB Assessment & Grading</h2>
                        <ul className="list-disc list-inside">
                            <li className="mb-2">Grading Scale: Subjects scored 1-7, with TOK & EE (A-E) adding up to 3 bonus points (Max: 45 points).</li>
                            <li className="mb-2">Internal Assessments (IA): Teacher-graded coursework, moderated externally.</li>
                            <li className="mb-2">External Assessments (EA): Externally set 8 graded exams for global standardization.</li>
                            <li className="mb-2">University Readiness: A score of 35+ is competitive, while 40+ is ideal for top universities.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-headingcol">Why Choose IB Coaching?</h2>
                        <ul className="list-disc list-inside">
                            <li className="mb-2">Expert guidance for TOK essays, EE research, and CAS projects.</li>
                            <li className="mb-2">Personalized strategies for internal assessments & IB exams.</li>
                            <li className="mb-2">Comprehensive support to maximize IB scores and university admissions.</li>
                        </ul>
                        <p className="mt-4">Looking for top IB coaching classes? Get expert IB tuition today and excel in your IB journey!</p>
                    </section>
            </div>
                <ul className="list-none  mt-4">
                {ibData.map((section, index) => (
                    <li key={index} className="mb-4">
                        <Link href={section.href} legacyBehavior>
                            <a className="text-lg font-semibold text-headingcol hover:underline mb-2">{section.title}</a>
                        </Link>
                        {section.subsections && (
                            <ul className="list-decimal pl-6">
                                {section.subsections.map((subsection, subIndex) => (
                                    <li key={subIndex} className="mb-2">
                                        <Link href={`${section.href}#${subsection.href}`} legacyBehavior>
                                            <a className=" hover:underline">{subsection.title}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
        <div>
                <IBFAQs/>
                <IBCoachingFAQs/>
                <IBOnlineCoachingFAQs/>
                <CombinedFAQPage/>
        </div>
        </>
    );
};

export default IBTableOfContents;