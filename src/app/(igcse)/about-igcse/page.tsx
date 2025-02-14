// components/IGCSEIntroduction.tsx

import React from 'react';



const IGCSEIntroduction: React.FC = () => {
    return (
        <div className="container mx-auto px-14 py-5 text-justify max-w-6xl">
            <h1 className="text-3xl font-bold mb-4 text-headingcol text-center">About IGCSE</h1>
            <p className="text-lg mb-4 text-gray-500">
                The International General Certificate of Secondary Education (IGCSE) is a globally
                recognized qualification for students typically aged 14 to 16. It was developed by the
                University of Cambridge International Examinations (CIE) in 1988, and it is now offered
                by several examination boards, including Cambridge Assessment International
                Education and Edexcel. The IGCSE serves as a preparatory step for higher-level
                qualifications such as the A-Levels, IB Diploma Programme (IBDP), or equivalent
                national qualifications.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-headingcol">Key Features of the IGCSE</h2>
            <ul className="list-disc ml-6 text-gray-500">
                <li>
                    <span className="font-semibold">Broad Curriculum:</span> The IGCSE offers a wide range of subjects across languages,
                    humanities, social sciences, mathematics, and creative, technical, and vocational
                    disciplines. This broad spectrum allows students to explore their interests and
                    strengths.
                </li>
                <li>
                    <span className="font-semibold">Flexible Subject Choices:</span> Students can choose subjects based on their
                    preferences and future academic goals. Typically, schools offer a combination of
                    core and elective subjects, enabling a personalized learning experience.
                </li>
                <li>
                    <span className="font-semibold">Skill Development:</span> The IGCSE curriculum emphasizes the development of
                    essential skills such as:
                    <ul className="list-disc ml-6">
                        <li>Critical Thinking</li>
                        <li>Problem-Solving</li>
                        <li>Analytical Skills</li>
                    </ul>
                </li>
                <li>
                    <span className="font-semibold">Global Perspective:</span> The IGCSE incorporates an international outlook, making
                    students aware of global issues and diverse cultures. This aspect helps in
                    cultivating a more rounded worldview and adaptability in a global context.
                </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-headingcol">Why Choose IGCSE?</h2>
            <ul className="list-disc ml-6 text-gray-500">
                <li>
                    <span className="font-semibold">International Recognition:</span> The IGCSE is accepted by leading universities and
                    employers worldwide, making it a versatile qualification for students aiming to
                    pursue higher education internationally.
                </li>
                <li>
                    <span className="font-semibold">Academic Rigor:</span> It is known for its rigorous academic standards, preparing
                    students well for advanced studies.
                </li>
                <li>
                    <span className="font-semibold">Assessment Variety:</span> The IGCSE uses a range of assessment methods, including
                    written examinations, oral tests, coursework, and practical assessments. This
                    variety helps cater to different learning styles and strengths.
                </li>
            </ul>

            <p className="text-lg mt-4 text-gray-500">
                The IGCSE not only lays a strong foundation for further education but also equips
                students with lifelong learning skills essential for their personal and professional
                development.
            </p>
        </div>
    );
};

export default IGCSEIntroduction;