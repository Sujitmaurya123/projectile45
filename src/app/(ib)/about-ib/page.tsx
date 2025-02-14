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
    {
        title: 'Introduction to the IB Curriculum',
        href: '/ib-introduction',
        subsections: [
            { title: 'Overview of the IB Program', href: 'overview' },
            { title: 'Key Principles and Philosophy', href: 'keyprinciples' },
            { title: 'Benefits of Choosing the IB Pathway', href: 'benefits' },
        ],
    },
    {
        title: 'The Structure of the IB Program',
        href: '/ib-structure',
        subsections: [
            { title: 'The IB Primary Years Program (PYP)', href: 'pyp' },
            { title: 'The IB Middle Years Program (MYP)', href: 'myp' },
            { title: 'The IB Diploma Program (DP)', href: 'dp' },
            { title: 'The IB Career-related Program (CP)', href: 'cp' },
        ],
    },
    {
        title: 'The Core Components of the IB Diploma',
        href: '/ib-core',
        subsections: [
            { title: 'Theory of Knowledge (TOK)', href: 'tok' },
            { title: 'Extended Essay (EE)', href: 'ee' },
            { title: 'Creativity, Activity, Service (CAS)', href: 'cas' },
        ],
    },
    {
        title: 'The IB Assessment System',
        href: '/ib-assessment',
        subsections: [
            { title: 'Grading Scale and Criteria', href: 'grading-scale' },
            { title: 'Internal vs. External Assessments', href: 'internal-external' },
            { title: 'Understanding Your IB Scores', href: 'ib-scores' },
        ],
    },
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
        
        <div className="container mx-auto py-16 px-4">
            <h1 className="text-5xl font-bold mb-4 text-center text-headingcol">About IB</h1>
            <ul className="list-decimal pl-6">
                {ibData.map((section, index) => (
                    <li key={index} className="mb-4">
                        <Link href={section.href} legacyBehavior>
                            <a className="text-lg font-semibold text-blue-500 hover:underline mb-2">{section.title}</a>
                        </Link>
                        {section.subsections && (
                            <ul className="list-decimal pl-6">
                                {section.subsections.map((subsection, subIndex) => (
                                    <li key={subIndex} className="mb-2">
                                        <Link href={`${section.href}#${subsection.href}`} legacyBehavior>
                                            <a className="text-blue-400 hover:underline">{subsection.title}</a>
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