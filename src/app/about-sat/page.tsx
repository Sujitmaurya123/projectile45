import { FC } from "react";

const SATJourney: FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto p-4">
                <header className="text-center py-6">
                    <h1 className="text-3xl font-bold text-indigo-700">A Fun Journey Through the Digital SAT 2024</h1>
                    <p className="mt-2 text-lg text-gray-700">Join Lexi and Jake as they explore the Digital SAT in an interactive way!</p>
                </header>

                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-indigo-600">Introduction</h2>
                    <p className="mt-4 text-gray-600">
                        <strong>Lexi:</strong> Yo, Jake! Have you heard about the Digital SAT 2024? It&apos;s like a game, where the test levels up based on how well you do!
                        <br />
                        <strong>Jake:</strong> Sounds cool! What&apos;s the first level?
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-indigo-600">Reading and Writing</h2>
                    <p className="mt-4 text-gray-600">
                        <strong>Lexi:</strong> Alright, let’s dive into the Reading and Writing section! You’ve got 64 minutes for 54 questions across two modules. The questions test four main areas.
                    </p>
                    <ul className="list-disc pl-6 mt-4 text-gray-600">
                        <li>Information and Ideas: Understanding and analyzing texts and graphics.</li>
                        <li>Craft and Structure: Analyzing word choices and text structure.</li>
                        <li>Expression of Ideas: Revising text for clarity and style.</li>
                        <li>Standard English Conventions: Fixing grammar, punctuation, and sentence structure.</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-indigo-600">Math Section</h2>
                    <p className="mt-4 text-gray-600">
                        <strong>Lexi:</strong> Next up, Math. You’ve got 70 minutes to tackle 44 questions in two modules. The questions cover four key areas:
                    </p>
                    <ul className="list-disc pl-6 mt-4 text-gray-600">
                        <li>Algebra (13–15 questions): Get ready for some number-crunching fun!</li>
                        <li>Advanced Math (13–15 questions): This is where you level up to more complex problems.</li>
                        <li>Problem-Solving and Data Analysis (5–7 questions): Time to think critically with real-world data.</li>
                        <li>Geometry and Trigonometry (5–7 questions): Shapes and angles are your friends here!</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-indigo-600">Test Overview</h2>
                    <p className="mt-4 text-gray-600">
                        <strong>Lexi:</strong> Here’s the lowdown:
                    </p>
                    <ul className="list-inside list-disc pl-6 mt-4 text-gray-600">
                        <li>Total Questions: 98 (54 in Reading & Writing, 44 in Math)</li>
                        <li>Duration: 2 hours, 14 minutes</li>
                        <li>Adaptive Test: The questions get harder or easier based on how you do.</li>
                        <li>Guessing: No penalty for guessing, so just go for it!</li>
                    </ul>
                </div>

                <footer className="text-center py-6">
                    <h2 className="text-xl font-semibold text-indigo-600">Get Prepared</h2>
                    <p className="mt-2 text-lg text-gray-700">
                        <strong>Lexi:</strong> Undoubtedly, Projectile 45! They’ve got everything you need to ace the Digital SAT.
                    </p>
                    <p className="mt-2 text-lg text-gray-700">
                        <strong>Jake:</strong> Perfect! I’m in. Let’s do this!
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default SATJourney;
