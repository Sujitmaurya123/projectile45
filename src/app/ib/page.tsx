// components/IBTableOfContents.tsx
import Link from 'next/link';
import React from 'react';

interface IBSection {
    title: string;
    href: string;
    subsections?: string[]; // Subsections are now just strings
}

const ibData: IBSection[] = [
    {
        title: ' Introduction to the IB Curriculum',
        href: '/ib-introduction',
        subsections: [
            ' Overview of the IB Program',
            ' Key Principles and Philosophy',
            ' Benefits of Choosing the IB Pathway',
        ],
    },
    {
        title: ' The Structure of the IB Program',
        href: '/ib-structure',
        subsections: [
            ' The IB Primary Years Program (PYP)',
            ' The IB Middle Years Program (MYP)',
            ' The IB Diploma Program (DP)',
            ' The IB Career-related Program (CP)',
        ],
    },
    {
        title: ' The Core Components of the IB Diploma',
        href: '/ib-core',
        subsections: [
            ' Theory of Knowledge (TOK)',
            ' Extended Essay (EE)',
            ' Creativity, Activity, Service (CAS)',
        ],
    },
    {
        title: ' The IB Assessment System',
        href: '/ib-assessment',
        subsections: [
            ' Grading Scale and Criteria',
            ' Internal vs. External Assessments',
            ' Understanding Your IB Scores',
        ],
    },
    {
        title: ' Key Differences Between IB and Other Curricula',
        href: '/ib-differences',
        subsections: [
            ' IB vs. A-Levels',
            ' IB vs. AP',
            ' How IB Prepares Students for University',
        ],
    },
    {
        title: ' Subject Choices in the IB Diploma',
        href: '/ib-subject-choices',
        subsections: [
            'Group 1: Studies in Language and Literature',
            'Group 2: Language Acquisition',
            'Group 3: Individuals and Societies',
            'Group 4: Sciences',
            'Group 5: Mathematics',
            'Group 6: The Arts or Electives',
        ]
    },
    {
        title: ' University Recognition of the IB Diploma',
        href: '/ib-recognition',
        subsections: [
            ' Global University Acceptance',
            ' How IB Affects University Admissions',
            ' Scholarships and Credits for IB Students',
        ],
    },
    {
        title: ' Preparing for the IB Exams',
        href: '/ib-preparation',
        subsections: [
            ' Study Tips and Strategies for Success',
            ' Understanding IB Exam Patterns and Marking Schemes',
            ' How to Manage Stress During Exam Periods',
        ],
    },
    {
        title: ' Frequently Asked Questions (FAQs) About the IB Curriculum',
        href: '/ib-faqs',
        subsections: [
            ' Common Misconceptions about IB',
            ' IB for Students with Special Needs',
            ' How to Transition to IB from Other Curricula',
        ],
    },
];

const IBTableOfContents: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">IB- Table of Contents</h1>
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
                                        {subsection} {/* Display subsection as plain text */}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IBTableOfContents;