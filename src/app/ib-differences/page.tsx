// components/IBComparison.tsx
import React from 'react';

interface ComparisonRow {
    aspect: string;
    ib: string;
    other: string;
}

const IBComparison: React.FC = () => {
    const aLevelsData: ComparisonRow[] = [
        {
            aspect: 'Subject Range',
            ib: 'Requires study of six subjects across different disciplines (languages, sciences, humanities, and arts).',
            other: 'Students typically choose 3-4 subjects, often focusing on their future field of study.',
        },
        {
            aspect: 'Assessment',
            ib: 'Combination of internal assessments (coursework, essays) and external exams.',
            other: 'Primarily assessed through final exams at the end of the two-year course.',
        },
        {
            aspect: 'Breadth vs. Depth',
            ib: 'Broad approach, ensuring well-rounded students with skills across all subject areas.',
            other: 'Focused approach, with depth in chosen subjects.',
        },
        {
            aspect: 'University Preparation',
            ib: 'Emphasizes critical thinking, research (EE), and broad academic skills (TOK, CAS).',
            other: 'Offers specialization in specific subjects, typically focused on students\' chosen university paths.',
        },
        {
            aspect: 'Global Perspective',
            ib: 'Strong international focus, encouraging global awareness and intercultural understanding.',
            other: 'Primarily UK-focused, although increasingly used globally.',
        },
    ];

    const apData: ComparisonRow[] = [
        {
            aspect: 'Structure',
            ib: 'Requires six subjects in a broad range, along with TOK, EE, and CAS.',
            other: 'Students select individual AP courses from a variety of subjects, with no core structure.',
        },
        {
            aspect: 'Flexibility',
            ib: 'Less flexible due to mandatory subject requirements and core components.',
            other: 'More flexible, students choose courses they are interested in or may benefit from in their future career.',
        },
        {
            aspect: 'Assessment',
            ib: 'Mix of internal assessments and external exams. Includes projects like the EE and TOK.',
            other: 'Primarily final exams, with the option to earn college credit through exam performance.',
        },
        {
            aspect: 'Curriculum Focus',
            ib: 'Focuses on interdisciplinary learning, fostering global perspectives and critical thinking.',
            other: 'Focus is often subject-specific, particularly in sciences, mathematics, and humanities.',
        },
        {
            aspect: 'University Preparation',
            ib: 'Strong preparation through research and critical thinking. Encourages a well-rounded academic foundation.',
            other: 'Prepares students for specialized areas of study at college, but lacks the interdisciplinary emphasis of the IB.',
        },
    ];
    interface UniversityPrepRow {
        aspect: string;
        description: string;
    }

    const universityPrepData: UniversityPrepRow[] = [
        {
            aspect: 'Critical Thinking',
            description:
                'Encourages deep analysis and reflection through Theory of Knowledge (TOK) and the Extended Essay (EE).',
        },
        {
            aspect: 'Research Skills',
            description:
                'The Extended Essay requires independent research on a chosen topic, preparing students for university-level projects.',
        },
        {
            aspect: 'Time Management',
            description:
                'Balancing six subjects, internal assessments, and CAS activities fosters strong time management and organizational skills.',
        },
        {
            aspect: 'Interdisciplinary Learning',
            description:
                'Requires students to see connections between subjects, preparing them for university coursework that spans multiple disciplines.',
        },
        {
            aspect: 'Global Perspective',
            description:
                'Encourages a global outlook, preparing students for international university environments and diverse academic settings.',
        },
    ];

    const createTable = (data: ComparisonRow[], title: string) => (
        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-headingcol">{title}</h3>
            <div className="overflow-x-auto"> {/* Added for horizontal scrolling */}
                <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aspect</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IB Diploma (DP)</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{title === "IB vs. A-Levels" ? "A-Levels" : "AP Program"}</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.aspect}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 whitespace-pre-line">{row.ib}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 whitespace-pre-line">{row.other}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto px-14 py-5 text-justify max-w-6xl">
            <h2 className="text-2xl font-bold mb-4 text-headingcol">Introduction to Key Differences Between IB and Other Curricula</h2>
            <p className="mb-4">
                The International Baccalaureate (IB) program offers a unique and
                holistic approach to education, emphasizing critical thinking, global
                awareness, and comprehensive academic development. This contrasts with
                other educational pathways such as A Levels and Advanced Placement (AP)
                programs. While each curriculum offers distinct advantages,
                understanding the differences can help students make an informed
                choice. Below, we explore the differences between the IB program,
                A-Levels, and AP as well as how IB prepares students for university.
            </p>

            {createTable(aLevelsData, "IB vs. A-Levels")}
            {createTable(apData, "IB vs. AP")}
            <h2 className="text-2xl font-bold mb-4 text-headingcol" id='ib-university-prep'>How IB Prepares Students for University</h2>
            <p className="mb-4">
                The IB Diploma Program provides a comprehensive foundation for
                university success. It&apos;s designed to equip students with the skills and
                knowledge needed for higher education, focusing on independent
                learning, research skills, and critical thinking.
            </p>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-300 mb-8">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Aspect
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                IB Diploma (DP)
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {universityPrepData.map((row, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {row.aspect}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500 whitespace-pre-line">
                                    {row.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="mb-4">
                While A-Levels and AP programs offer valuable educational
                opportunities, the IB program stands out for its balanced,
                comprehensive approach. It challenges students with a broad academic
                scope, developing skills that are essential for university and beyond.
                By fostering critical thinking, research, time management, and a global
                perspective, the IB program provides a well-rounded education that
                prepares students not only for higher education but also for life in a
                globalized world.
            </p>
            <p>
                In contrast, A-Levels and AP offer more flexibility in terms of
                specialization, making them ideal for students who want to focus on a
                specific field early on. However, the IB&apos;s holistic approach makes it
                particularly suitable for those seeking a rigorous, interdisciplinary
                education that fosters both academic and personal development.
            </p>
        </div>
    );
};

export default IBComparison;