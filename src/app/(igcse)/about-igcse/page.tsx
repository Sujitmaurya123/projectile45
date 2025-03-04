// components/IGCSEIntroduction.tsx

import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "IGCSE Exam Preparation",
    description: "Discover the IGCSE exam structure, syllabus, subjects, and key benefits. Access past year papers and get expert tuition for effective IGCSE preparation with P45 tutors.",
    keywords: ["igcse syllabus",
        "igcse",
        "igcse english past papers",
        "igcse tuition",
        "igcse tuition online"],
}

const IGCSEIntroduction: React.FC = () => {
    return (
        <div className="container mx-auto px-14 py-5 text-justify max-w-6xl">
            <h1 className="text-3xl font-bold mb-4 text-headingcol text-center">IGCSE Syllabus, Past Papers &amp; Preparation Guide</h1>
            <p className="text-lg mb-4 text-gray-500">
                The <strong>International General Certificate of Secondary Education (IGCSE)</strong> is a
                globally recognized qualification for students aged 14 to 16. Designed by
                <strong>Cambridge Assessment International Education (CAIE)</strong> and other examination
                boards like <strong>Edexcel</strong>, the <strong>IGCSE syllabus</strong> prepares students for higher-level courses
                such as <strong>A-Levels, the IB Diploma Programme (IBDP), and national
                    qualifications.</strong>
            </p>

            <div>
                <header className=" mb-12">
                    <h1 className="text-2xl font-semibold text-headingcol">Why Choose IGCSE?</h1>
                    <p className="text-lg text-gray-700 mt-4">
                        Prepare for success with the globally recognized IGCSE qualification.
                    </p>
                </header>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-headingcol">Key Benefits</h2>
                    <ul className="list-disc list-inside mt-4 space-y-3 text-lg text-gray-600">
                        <li> Globally Recognized – Accepted by top universities and employers worldwide.</li>
                        <li> Broad Curriculum – Covers IGCSE Maths, Science, English, Humanities, and more.</li>
                        <li> Flexible Subject Choices – Students select subjects based on academic goals.</li>
                        <li> Strong Academic Foundation – Develops critical thinking, problem-solving, and analytical skills.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-headingcol">IGCSE Syllabus & Subjects</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        The IGCSE syllabus covers core and elective subjects across various disciplines:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-3 text-lg text-gray-600">
                        <li> IGCSE Mathematics (Core & Extended)</li>
                        <li> IGCSE English Language & Literature</li>
                        <li> Sciences (Physics, Chemistry, Biology)</li>
                        <li> Humanities (History, Geography, Economics)</li>
                        <li> Creative & Technical Subjects (Art, Design & Technology, Computer Science)</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-headingcol">IGCSE Past Papers for Exam Preparation</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Practicing IGCSE past papers is essential for scoring high in exams. Here’s how they help:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-3 text-lg text-gray-600">
                        <li> Understand exam formats and marking schemes.</li>
                        <li> Improve time management and accuracy.</li>
                        <li> Boost confidence through real exam practice.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-headingcol">Effective IGCSE Preparation with Expert Tuition</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Many students opt for IGCSE tuition or IGCSE tuition online for personalized coaching. Expert IGCSE Maths tutors provide structured lessons, exam strategies, and targeted practice.
                    </p>
                </section>

                <footer className="text-center py-6">
                    <h3 className="text-xl font-semibold text-headingcol">Start Your IGCSE Journey Today!</h3>
                    <p className="mt-4 text-lg text-gray-700">
                        Master the IGCSE syllabus, practice with IGCSE past papers, and excel in your exams with structured learning. Whether through self-study or IGCSE tuition online, a strong preparation plan ensures success in the IGCSE exams and beyond!
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default IGCSEIntroduction;