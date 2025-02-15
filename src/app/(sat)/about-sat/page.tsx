import SATExamTable from "@/components/sat-Digital-Exam-PatternandFAQ/sat-exam-table";
import { FC } from "react";

const SATJourney: FC = () => {
    return (
        <div className="  flex flex-col justify-center  items-center">
            <div className="container mx-auto p-4 max-w-6xl">
                <header className="text-center py-6">
                    <h1 className="text-5xl font-bold text-headingcol">About SAT</h1>
                    <p className="text-3xl font-bold text-headingcol mt-7">A Fun Journey Through the Digital SAT 2024</p>

                    <p className="mt-2 text-lg text-gray-700">Join Lexi and Jake as they explore the Digital SAT in an interactive way!</p>
                </header>

                <div className=" p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-headingcol">Characters:</h2>
                    <p className="mt-4 text-gray-600">
                        <strong>Lexi:</strong> Confident, book-loving student
                        <br />
                        <strong>Jake:</strong> Laid-back, humorous friend.
                    </p>
                </div>

                

                <div className=" p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-headingcol">Reading and Writing</h2>
                    <p className="mt-4 text-gray-600">
                        <strong>Lexi:</strong> Yo, Jake! Have you heard about the Digital SAT 2024? It&apos;s like a game, where the test levels up based on how well you do!
                        <br />
                        <strong>Jake:</strong> Sounds cool! What&apos;s the first level?
                        <br />
                        <strong>Lexi:</strong> Alright, let&apos;s dive into the <strong>Reading and Writing</strong>  section! You&apos;ve got <strong>64 minutes</strong>  for <strong>54 questions</strong>  across two modules. The questions test four main areas.
                        <br />
                        <strong>Jake:</strong> What kind of reading are we looking at?
                        <br />
                        <strong>Lexi:</strong> Passages ranging from <strong>25 to 150 words</strong>, covering <strong>literature, history/social studies, science</strong>, and <strong>humanities</strong>.
                        <br />
                        <strong>Jake:</strong> And what are the questions like?
                    </p>
                    <ul className="list-disc pl-6 mt-4 text-gray-600">
                        <li><strong>Information and Ideas:</strong> Understanding and analyzing texts and graphics.</li>
                        <li><strong>Craft and Structure:</strong> Analyzing word choices and text structure.</li>
                        <li><strong>Expression of Ideas:</strong> Revising text for clarity and style.</li>
                        <li><strong>Standard English Conventions:</strong> Fixing grammar, punctuation, and sentence structure.</li>
                    </ul>
                    <p className="mt-4 text-gray-600">
                        <strong>Jake:</strong> So it’s like a detective game? Figuring out stories and fixing sentences?
                        <br />
                        <strong>Lexi:</strong> Exactly!
                        <br />
                        <strong>Jake:</strong> Why do we have <strong>two modules</strong> though?
                        <br />
                        <strong>Lexi:</strong> Good question! The two modules let the test adapt to your performance. If you do well in the first module, the second one will challenge you more. If not, it&apos;ll give you a bit of a break with easier questions.
                        <br />
                        <strong>Jake:</strong> Got it! So, the test is designed to match my skill level. It&apos;s like how my mom knows I&apos;m not ready for the boss level yet?😂
                        <br />
                        <strong>Lexi:</strong> Pretty much! After that, you get a <strong>10-minute break</strong> to recharge.
                        <br />
                        <strong>Jake:</strong> Perfect! I’ll need fuel for the Math part. What comes next?
                    </p>
                </div>
                <SATExamTable/>

                <div className=" p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-headingcol">Math Section</h2>
                    <p className="mt-4 text-gray-600">
                        <strong>Lexi:</strong> Next up, <strong>Math</strong> . You&apos;ve got <strong>70 minutes</strong> to tackle <strong>44 questions</strong>  in <strong>two modules</strong> . The questions cover four key areas:
                    </p>
                    <ul className="list-disc pl-6 mt-4 text-gray-600">
                        <li><strong>Algebra</strong> (13–15 questions): Get ready for some number-crunching fun!</li>
                        <li><strong>Advanced Math</strong> (13–15 questions): This is where you level up to more complex problems.</li>
                        <li><strong>Problem-Solving and Data Analysis</strong> (5–7 questions): Time to think critically with real-world data.</li>
                        <li><strong>Geometry and Trigonometry</strong> (5–7 questions): Shapes and angles are your friends here!</li>
                        <li className="mt-3">It&#39;s a mix of <strong>multiple-choice</strong>  and questions where you’ll need to <strong>enter the answer</strong>.
                            No pressure though, just dive in and do your best!</li>
                    </ul>
                    <p className="mt-4 text-gray-600">
                        <strong>Jake:</strong> Puzzles? Like Sudoku, but with more pressure?
                        <br />
                        <strong>Lexi:</strong> Yep! And the best part? No penalty for guessing! So, if you’re stuck, just guess and move on.
                    </p>
                </div>

                <div className=" p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-headingcol">Test Overview</h2>
                    <p className="mt-4 text-gray-600">
                        <strong>Jake: </strong>Alright, so after all that, how does the whole thing add up?
                        <br /> 
                        <strong>Lexi:</strong> Here’s the lowdown:-
                    </p>
                    <ul className="list-disc pl-6 mt-4 text-gray-600">
                        <li><strong>Total Questions: </strong>98 (54 in Reading & Writing, 44 in Math)</li>
                        <li><strong>Duration: </strong>2 hours, 14 minutes</li>
                        <li><strong>Break: </strong>A quick 10-minute snack break after Reading & Writing</li>
                        <li><strong>Adaptive Test: </strong>Adaptive Test: The questions get harder or easier based on how you do.</li>
                        <li><strong>Guessing:</strong> No penalty for guessing, so just go for it!</li>
                    </ul>
                </div>

                <footer className="text-center py-6">
                    <h2 className="text-xl font-semibold text-headingcol">Get Prepared</h2>
                    <p className="mt-2 text-lg text-gray-700">
                        <strong>Jake: </strong>Sounds intense but doable. So, which institute should I join to prepare
                        for this?
                        <br />
                        <strong>Lexi:</strong> Undoubtedly, <strong>Projectile 45!</strong> They’ve got everything you need to ace the Digital SAT.
                        <br />
                        <strong>Jake:</strong> Perfect! I’m in. Let’s do this!
                        <br />
                        <strong>Lexi:</strong> Totally! Time to crush the Digital SAT!
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default SATJourney;
