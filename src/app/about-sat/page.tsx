import { FC } from "react";

const SATJourney: FC = () => {
    return (
        <div className="bg-gray-50  flex flex-col justify-centermax-w-6xl items-center">
            <div className="container mx-auto p-4 max-w-6xl">
                <header className="text-center py-6">
                    <h1 className="text-3xl font-bold text-indigo-700">A Fun Journey Through the Digital SAT 2024</h1>
                    <p className="mt-2 text-lg text-gray-700">Join Lexi and Jake as they explore the Digital SAT in an interactive way!</p>
                </header>

                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-indigo-600">Characters:</h2>
                    <p className="mt-4 text-gray-600">
                        <strong>Lexi:</strong> Confident, book-loving student
                        <br />
                        <strong>Jake:</strong> Laid-back, humorous friend.
                    </p>
                </div>

                

                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-indigo-600">Reading and Writing</h2>
                    <p className="mt-4 text-gray-600">
                        <strong>Lexi:</strong> Yo, Jake! Have you heard about the Digital SAT 2024? It&apos;s like a game, where the test levels up based on how well you do!
                        <br />
                        <strong>Jake:</strong> Sounds cool! What&apos;s the first level?
                        <strong>Lexi:</strong> Alright, let&apos;s dive into the Reading and Writing section! You&apos;ve got 64 minutes for 54 questions across two modules. The questions test four main areas.
                        <br />
                        <strong>Jake:</strong> What kind of reading are we looking at?
                        <br />
                        <strong>Lexi:</strong> Passages ranging from 25 to 150 words, covering literature, history/social studies, science, and humanities.
                        <br />
                        <strong>Jake:</strong> And what are the questions like?
                    </p>
                    <ul className="list-disc pl-6 mt-4 text-gray-600">
                        <li>Information and Ideas: Understanding and analyzing texts and graphics.</li>
                        <li>Craft and Structure: Analyzing word choices and text structure.</li>
                        <li>Expression of Ideas: Revising text for clarity and style.</li>
                        <li>Standard English Conventions: Fixing grammar, punctuation, and sentence structure.</li>
                    </ul>
                    <p className="mt-4 text-gray-600">
                        <strong>Jake:</strong> So it’s like a detective game? Figuring out stories and fixing sentences?
                        <br />
                        <strong>Lexi:</strong> Exactly!
                        <br />
                        <strong>Jake:</strong> Why do we have two modules though?
                        <br />
                        <strong>Lexi:</strong> Good question! The two modules let the test adapt to your performance. If you do well in the first module, the second one will challenge you more. If not, it&apos;ll give you a bit of a break with easier questions.
                        <br />
                        <strong>Jake:</strong> Got it! So, the test is designed to match my skill level. It&apos;s like how my mom knows I&apos;m not ready for the boss level yet?
                        <br />
                        <strong>Lexi:</strong> Pretty much! After that, you get a 10-minute break to recharge.
                        <br />
                        <strong>Jake:</strong> Perfect! I’ll need fuel for the Math part. What comes next?
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-indigo-600">Math Section</h2>
                    <p className="mt-4 text-gray-600">
                        <strong>Lexi:</strong> Next up, Math. You&apos;ve got 70 minutes to tackle 44 questions in two modules. The questions cover four key areas:
                    </p>
                    <ul className="list-disc pl-6 mt-4 text-gray-600">
                        <li>Algebra (13–15 questions): Get ready for some number-crunching fun!</li>
                        <li>Advanced Math (13–15 questions): This is where you level up to more complex problems.</li>
                        <li>Problem-Solving and Data Analysis (5–7 questions): Time to think critically with real-world data.</li>
                        <li>Geometry and Trigonometry (5–7 questions): Shapes and angles are your friends here!</li>
                    </ul>
                    <p className="mt-4 text-gray-600">
                        <strong>Jake:</strong> Puzzles? Like Sudoku, but with more pressure?
                        <br />
                        <strong>Lexi:</strong> Yep! And the best part? No penalty for guessing! So, if you’re stuck, just guess and move on.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-indigo-600">Test Overview</h2>
                    <p className="mt-4 text-gray-600">
                        <strong>Lexi:</strong> Here’s the lowdown:
                    </p>
                    <ul className="list-disc pl-6 mt-4 text-gray-600">
                        <li>Total Questions: 98 (54 in Reading & Writing, 44 in Math)</li>
                        <li>Duration: 2 hours, 14 minutes</li>
                        <li>Break: A quick 10-minute snack break after Reading & Writing</li>
                        <li>Adaptive Test: The questions get harder or easier based on how you do.</li>
                        <li>Guessing: No penalty for guessing, so just go for it!</li>
                    </ul>
                </div>

                <footer className="text-center py-6">
                    <h2 className="text-xl font-semibold text-indigo-600">Get Prepared</h2>
                    <p className="mt-2 text-lg text-gray-700">
                        <strong>Lexi:</strong> Undoubtedly, Projectile 45! They’ve got everything you need to ace the Digital SAT.
                        <br />
                        <strong>Jake:</strong> Perfect! I’m in. Let’s do this!
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default SATJourney;
