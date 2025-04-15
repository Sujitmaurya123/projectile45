// pages/igcse-chemistry.tsx
import { FC } from "react";

const IGCSEChemistryPage: FC = () => {
    return (
        <div className="px-6 py-12 max-w-7xl mx-auto text-gray-800">
            <header className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-headingcol mb-4">
                    Cambridge IGCSE Chemistry 
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                    Cambridge IGCSE Chemistry helps learners to understand the technological world in which they live and take an informed interest in science and scientific developments. The syllabus includes the basic principles and concepts that are fundamental to the subject, some current applications of chemistry, and a strong emphasis on practical skills.
                </p>
                <p className="text-lg md:text-xl text-gray-600">At Projectile 45, we offer expert guidance on the Cambridge IGCSE Chemistry syllabus, designed for students aged 14–16 .
</p>
            </header>

            {/* Syllabus */}
            <section className="mb-16  bg-gray-50 p-8 rounded-2xl shadow">
                <h2 className="text-3xl font-semibold text-headingcol mb-4">What the Syllabus Covers</h2>
                <p className="mb-4">The course builds deep understanding in the following core areas:</p>
                <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 list-disc pl-6">
                    {[
                        "States of Matter – solids, liquids, gases, diffusion, and particle theory",
                        "Atomic Structure – atoms, elements, compounds, bonding, isotopes",
                        "Stoichiometry – formulae, moles, Avogadro’s constant, chemical calculations",
                        "Electrochemistry – electrolysis, redox, fuel cells",
                        "Chemical Energetics – exothermic/endothermic reactions, bond energies",
                        "Rates & Reactions – catalysts, collision theory, equilibrium",
                        "Acids, Bases, and Salts – pH scale, neutralisation, salt preparation",
                        "Periodic Table & Reactivity – trends, groups, metals and non-metals",
                        "Metals – extraction, alloys, corrosion",
                        "Environmental Chemistry – air, water, pollution, greenhouse gases",
                        "Organic Chemistry – alkanes, alkenes, alcohols, carboxylic acids, polymers",
                        "Experimental Techniques – chromatography, titration, ion and gas tests"
                    ].map((topic, i) => (
                        <li key={i} className="text-base leading-relaxed">
                            <strong>{topic.split(" – ")[0]}</strong> – {topic.split(" – ")[1]}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Assessment Overview */}
            <section className="mb-16 bg-gray-50 p-8 rounded-2xl shadow">
                <h2 className="text-3xl font-semibold text-headingcol mb-4">IGCSE Chemistry Assessment Overview</h2>
                <p className="mb-2 text-gray-600">All candidates take three components. Candidates will be eligible for grades A* to G.</p>
                <p className="mb-2 text-gray-600">Candidates who have studied the Core syllabus content, or who are expected to achieve a grade D or below, should be entered for Paper 1, Paper 3 and either Paper 5 or Paper 6. These candidates will be eligible for grades C to G.</p>
                <p className="mb-2 text-gray-600">Candidates who have studied the Extended syllabus content (Core and Supplement), and who are expected to achieve a grade C or above, should be entered for Paper 2, Paper 4 and either Paper 5 or Paper 6. These candidates will be eligible for grades A* to G.</p>
               
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Core */}
                    <div>
                        <h3 className="text-2xl font-medium text-headingcol mb-4">Core Assessment</h3>
                        <p className="mb-2">Core candidates take Paper 1 and Paper 3. The questions are based on the Core subject content only:</p>
                        <div className="space-y-4">
                            <PaperCard
                                title="Paper 1: Multiple Choice (Core)"
                                color="orange"
                                info={["45 minutes", "40 multiple-choice questions", "40 marks (30%)", "Externally assessed"]}
                            />
                            <PaperCard
                                title="Paper 3: Theory (Core)"
                                color="orange"
                                info={["1 hr 15 mins", "Short-answer & structured", "80 marks (50%)", "Externally assessed"]}
                            />
                        </div>
                    </div>

                    {/* Extended */}
                    <div>
                        <h3 className="text-2xl font-medium text-headingcol mb-4 mt-4">Extended Assessment</h3>
                        <div className="space-y-4">
                            <PaperCard
                                title="Paper 2: Multiple Choice (Extended)"
                                color="purple"
                                info={["45 minutes", "40 multiple-choice questions", "40 marks (30%)", "Externally assessed"]}
                            />
                            <PaperCard
                                title="Paper 4: Theory (Extended)"
                                color="purple"
                                info={["1 hr 15 mins", "Short-answer & structured", "80 marks (50%)", "Externally assessed"]}
                            />
                        </div>
                    </div>
                </div>

                {/* Practical */}
                <div className="mt-10">
                    <h3 className="text-2xl font-medium text-headingcol mb-4">Practical Assessment (Choose One)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <PaperCard
                            title="Paper 5: Practical Test"
                            color="green"
                            info={["1 hr 15 mins", "Based on experimental skills", "40 marks (20%)", "Externally assessed"]}
                        />
                        <PaperCard
                            title="Paper 6: Alternative to Practical"
                            color="green"
                            info={["1 hour", "Based on experimental skills", "40 marks (20%)", "Externally assessed"]}
                        />
                    </div>
                </div>
            </section>

            {/* Why P45 */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-headingcol mb-6">Why Choose Projectile 45 (P45)?</h2>
                {[
                    {
                        title: "Expert Faculty from Premier Institutes",
                        items: [
                            "Taught by educators from IITs, IIMs, and global institutions",
                            "Subject-matter experts",
                            "Proven student success in IGCSE & beyond"
                        ]
                    },
                    {
                        title: "Personalized, 1:1 Learning Approach",
                        items: [
                            "Tailored sessions for individual needs",
                            "Real-time doubt solving & clarity",
                            "Paced to suit the student's strengths"
                        ]
                    },
                    {
                        title: "Mastery Through a 360° Approach",
                        items: [
                            "Build from fundamentals to advanced applications",
                            "Focus on problem-solving and real-world relevance",
                            "Includes exam-style and application-based questions"
                        ]
                    },
                    {
                        title: "Data-Driven Learning & Insights",
                        items: [
                            "Regular assessments and mock tests",
                            "Detailed performance analytics",
                            "Customized study plans for progress"
                        ]
                    },
                    {
                        title: "Comprehensive Study Resources",
                        items: [
                            "Well-structured notes & visual materials",
                            "Exclusive IGCSE-style practice sets",
                            "Exam skills & time-management strategies"
                        ]
                    },
                    {
                        title: "Real-World Applications & STEM Readiness",
                        items: [
                            "Chemistry linked to real-life phenomena",
                            "STEM exposure: engineering, AI, and more",
                            "Strong base for A-Level, IB, SAT, and beyond"
                        ]
                    }
                ].map((section, i) => (
                    <div key={i} className="mb-8 bg-gray-50 p-8 rounded-2xl shadow">
                        <h3 className="text-xl font-semibold mb-3 text-headingcol">{section.title}</h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            {section.items.map((item, j) => (
                                <li key={j}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Who Should Take */}
            <section className="bg-indigo-50 rounded-xl p-8">
                <h2 className="text-3xl font-semibold text-headingcol mb-4">Who Should Take IGCSE Chemistry?</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-3">
                    <li>Students aiming for STEM careers, including medicine, engineering, or environmental science</li>
                    <li>Learners who enjoy logical thinking, experimentation, and understanding how the world works at a molecular leve</li>
                </ul>
            </section>
        </div>
    );
};

export default IGCSEChemistryPage;

// Reusable component
const PaperCard = ({
    title,
    info,
    color = "gray"
}: {
    title: string;
    info: string[];
    color?: "orange" | "purple" | "green" | "gray";
}) => {
    const bg = {
        orange: "bg-gray-100",
        purple: "bg-gray-100",
        green: "bg-gray-100",
        gray: "bg-gray-100"
    }[color];

    return (
        <div className={`p-4 border rounded-xl shadow-sm ${bg}`}>
            <h4 className="font-semibold text-lg mb-2">{title}</h4>
            <ul className="text-sm text-gray-700 space-y-1">
                {info.map((line, i) => (
                    <li key={i}>{line}</li>
                ))}
            </ul>
        </div>
    );
};
