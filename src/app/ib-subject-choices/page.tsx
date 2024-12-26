// components/IBSubjectChoices.tsx
import React from 'react';

interface SubjectGroup {
    name: string;
    description: string;
    keyFeatures: {
        title: string;
        content: string | string[]; // Content can be a string or array of strings
    }[];
}

const subjectGroups: SubjectGroup[] = [
    {
        name: 'Group 1: Studies in Language and Literature',
        description:
            'The Studies in Language and Literature group focuses on the development of advanced literacy skills, understanding the context, and critical analysis of both literature and language. Students in this group study their native language or the language of instruction (e.g., English, Spanish, French), and the curriculum includes a wide range of literary texts such as novels, plays, and poetry.',
        keyFeatures: [
            {
                title: '1. Languages Available:',
                content: 'English, French, Spanish, German, and others depending on the school.',
            },
            {
                title: '2. Core Components:',
                content: 'Literary analysis, text interpretation, written and oral presentations.',
            },
            {
                title: '3. Levels:',
                content: [
                    'Higher Level (HL): In-depth study of literature, with a focus on literary criticism, comparative studies, and a deeper exploration of themes, characters, and structure.',
                    'Standard Level (SL): Focus on general understanding and analysis of literary works, although with less depth than HL.',
                ],
            },
            {
                title: 'Assessment:',
                content: [
                    'Internal Assessment: Oral presentations, and individual oral assessments analyzing a literary work.',
                    'External Assessment: Written exams on literary texts, essays, and comparative studies.',
                ],
            },
        ],
    },
    {
        name: 'Group 2: Language Acquisition',
        description:
            'The Language Acquisition group focuses on acquiring a second language, where students develop their language skills in listening, speaking, reading, and writing. The goal is to reach a high level of proficiency, with an emphasis on cultural understanding alongside language development.',
        keyFeatures: [
            {
                title: '1. Languages Available:',
                content: 'French, Spanish, German, Mandarin, Latin, etc.',
            },
            {
                title: '2. Levels:',
                content: [
                    'Higher Level (HL): Advanced study, with a focus on fluency and a broader understanding of culture, society, and history through the language.',
                    'Standard Level (SL): Focus on basic to intermediate language skills, with some exposure to culture and society.',
                ],
            },
            {
                title: '3. Assessment:',
                content: [
                    'Internal Assessment: Oral presentations and interactive tasks.',
                    'External Assessment: Written exams assessing reading comprehension, writing, and listening skills.',
                ],
            },
            {
                title: '4. Language Proficiency:',
                content: 'Aims to develop communicative skills and critical thinking in the second language.',
            },
        ],
    },
    {
        name: 'Group 3: Individuals and Societies',
        description:
            'The Individuals and Societies group consists of subjects that help students understand human behavior, societies, and the world in general. These subjects explore historical, social, political, and economic issues, encouraging students to think critically about the past and present.',
        keyFeatures: [
            {
                title: 'Subjects Available:',
                content: 'History, Geography, Economics, Psychology, Global Politics, Philosophy, etc.',
            },
            {
                title: 'Core Focus',
                content: [
                    'History: Understanding historical events and their significance, analyzing sources, and evaluating historical narratives.',
                    'Economics: Understanding economic theories, market functions, and global economic systems.',
                    'Geography: Studying the relationships between human populations and the environment.',
                    'Psychology: Exploring human behavior from biological, cognitive, and sociocultural perspectives.',
                ],
            },
            {
                title: 'Assessment:',
                content: [
                    'Internal Assessment: Research projects, fieldwork reports, and essays.',
                    'External Assessment: Written exams with a combination of multiple-choice questions, essays, and data analysis.',
                ],
            },
        ],
    },
    {
        name: 'Group 4: Sciences',
        description:
            'The Sciences group offers students a wide range of scientific subjects, focusing on developing inquiry-based learning and practical skills. It encourages students to investigate scientific questions, conduct experiments, and analyze data.',
        keyFeatures: [
            {
                title: '1. Subjects Available:',
                content: 'Biology, Chemistry, Physics, Environmental Systems and Societies, and Computer Science',
            },
            {
                title: '2. Core Focus',
                content: [
                    'Biology: Study of living organisms, genetics, ecology, and cell biology.',
                    'Chemistry: Exploration of chemical reactions, matter properties, and the periodic table.',
                    'Physics: Investigating the laws of nature, forces, energy, and the universe.',
                    'Environmental Systems and Societies: An interdisciplinary subject that combines environmental science and geography.',
                ],
            },
            {
                title: '3. Assessment:',
                content: [
                    'Internal Assessment: Practical investigations and lab reports.',
                    'External Assessment: Exams with theoretical questions, data analysis, and practical applications.',
                ],
            },
        ],
    },
    {
        name: 'Group 5. Mathematics',
        description:
            'The Mathematics group provides students with the foundation in mathematical concepts, focusing on problem-solving, reasoning, and real-world applications. It encourages a deep understanding of mathematical theory and practice, preparing students for future studies in STEM fields.',
        keyFeatures: [
            {
                title: 'Subjects Available:',
                content: 'Mathematics: Analysis and Approaches, Mathematics: Applications and Interpretation',
            },
            {
                title: 'Core Focus:',
                content: [
                    'Analysis and Approaches: Focuses on theoretical mathematics, including calculus, algebra, and number theory.',
                    'Applications and Interpretation: Focuses on applying mathematical concepts to real-world problems, data analysis, and statistics.',
                ],
            },
            {
                title: 'Levels',
                content: [
                    'Higher Level (HL): More advanced mathematics, with complex theoretical concepts and applications.',
                    'Standard Level (SL): Intermediate level with a focus on practical applications and problem-solving.',
                ],
            },
            {
                title: 'Assessment:',
                content: [
                    'Internal Assessment: Mathematical exploration involving research and analysis of a real-life situation.',
                    'External Assessment: Written exams with problem-solving tasks and theoretical questions.',
                ],
            },
        ],
    },
    {
        name: 'Group 6: The Arts or Electives',
        description:
            'The Arts or Electives group offers students the flexibility to choose subjects in the arts or other elective fields. This group allows students to express themselves creatively or pursue additional subjects outside of the core areas.',
        keyFeatures: [
            {
                title: 'Subjects Available:',
                content: 'Visual Arts, Music, Theatre, Film, Dance, and others.',
            },
            {
                title: 'Core Focus:',
                content: [
                    'Visual Arts: Focuses on developing artistic skills, exploring visual design, and understanding art history.',
                    'Music: Involves performing, composing, and analyzing music.',
                    'Theatre: Studying performance, drama, and the theoretical aspects of theatre arts.',
                    'Film: Examining filmmaking techniques, analysis of films, and practical creation of movies.',
                ],
            },
            {
                title: 'Assessment:',
                content: [
                    'Internal Assessment: Performance-based tasks, projects, and portfolios.',
                    'External Assessment: Written exams (if applicable), practical performances, or creative works.',
                ],
            },
        ],
    },
    // Add other subject groups here...
];

const IBSubjectChoices: React.FC = () => {
    return (
        <div className="container mx-auto p-4 text-justify">
            <h2 className="text-2xl font-bold mb-4">Introduction to Subject Choices in the IB Diploma</h2>
            <p className="mb-4">
                The International Baccalaureate Diploma Program (IBDP) is renowned for
                its rigorous academic structure that requires students to choose a
                well-rounded mix of subjects from six different groups. These groups
                are designed to provide students with a comprehensive and balanced
                education, preparing them for university and beyond. Each group
                offers a variety of courses, ensuring that students gain knowledge and
                skills across multiple disciplines. Below is a breakdown of the six
                groups in the IB Diploma, offering insight into the subjects and their
                technical details.
            </p>

            {subjectGroups.map((group, index) => (
                <div key={index} className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">{group.name}</h3>
                    <p className="mb-4">{group.description}</p>
                    {group.keyFeatures.map((feature, featureIndex) => (
                        <div key={featureIndex} className="mb-2">
                            <h4 className="text-lg font-semibold">{feature.title}</h4>
                            {Array.isArray(feature.content) ? (
                                <ul className="list-disc pl-6">
                                    {feature.content.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{feature.content}</p>
                            )}
                        </div>
                    ))}
                </div>
            ))}
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="mb-4">
                The IB Diploma Program offers a well-rounded education with a broad
                range of subjects across six groups. Each group is designed to
                challenge students academically and personally, preparing them for
                university and future careers. By requiring students to study a
                variety of disciplines, the IB program encourages intellectual
                curiosity, critical thinking, and a global perspective—qualities that
                will serve them well in any field they choose to pursue. Whether
                students are passionate about the arts, sciences, or social sciences,
                the IB curriculum offers a structured yet flexible path to academic
                excellence.
            </p>
        </div>
    );
};

export default IBSubjectChoices;