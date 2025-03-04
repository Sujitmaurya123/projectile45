import SATExamTable from "@/components/sat-Digital-Exam-PatternandFAQ/sat-exam-table";
import { Metadata } from "next";
import { FC } from "react";

export const metadata:Metadata={
    title:"SAT Exam Preparation ",
    description: "Ace the SAT with P45! Get expert coaching, personalized mentoring, and proven strategies to maximize your score. Start your journey to top universities today!",
    keywords: ["About", "sat exam", "sat prep courses", "SAT Preparation", "digital sat", "best sat coaching"],
}

const SATJourney: FC = () => {
    return (
        <div className="  flex flex-col justify-center  items-center">
            <div className="container mx-auto p-4 max-w-6xl">
                <header className="text-center py-6">
                    <h1 className="text-5xl font-bold text-headingcol">About SAT</h1>
                    <p className="text-3xl font-bold text-headingcol mt-7">Your Ultimate Guide to the Digital SAT 2025</p>

                    <p className="mt-2 text-lg text-gray-700">Join <strong>Lexi and Jake</strong> on an exciting journey through the <strong>SAT exam</strong>, where they
                        explore everything from test structure to the best <strong>SAT prep courses</strong> for mastering
                        the <strong>Digital SAT!</strong></p>
                </header>

                <div className=" p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-headingcol">Meet the Squad</h2>
                    <p className="mt-1 text-gray-600">
                        <strong>Lexi:</strong> The confident, book-loving strategist.
                        <br />
                        <strong>Jake:</strong> The laid-back, funny friend who loves a challenge.
                    </p>
                </div>

                

                <div className=" p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-headingcol">Level 1: Conquering the Reading &amp; Writing Section</h2>
                    <p className="mt-1 text-gray-600">
                        <strong>Lexi:</strong> Yo, Jake! Have you heard about the <strong>Digital SAT 2025?</strong> It&apos;s adaptive—like a
                        game where the difficulty changes based on how well you do!
                        <br />
                        <strong>Jake:</strong> Whoa, so the <strong>SAT exam</strong> adjusts in real time? What’s the first challenge?
                        <br />
                        <strong>Lexi:</strong> The <strong>Reading &amp; Writing section</strong>—64 minutes, 54 questions, split into two modules. The passages are short (25 to 150 words) and cover literature, history,
                        social studies, science, and humanities.
                        <br />
                        <strong>Jake:</strong> What kind of questions are we looking at?
                        <br />
                        <strong>Lexi</strong>:Four major skill areas:
                        
                    </p>
                    <ul className="list-disc pl-6 mt-4 text-gray-600">
                        <li><strong>Information &amp; Ideas:</strong> Understanding and analyzing texts and graphics.</li>
                        <li><strong>Craft &amp; Structure:</strong> Evaluating word choices and text structure..</li>
                        <li><strong>Expression of Ideas:</strong> Revising text for clarity and effectiveness.</li>
                        <li><strong>Standard English Conventions:</strong> Mastering grammar, punctuation, and
                            sentence structure.</li>
                    </ul>
                    <p className="mt-4 text-gray-600">
                        <strong>Jake:</strong> So, it’s basically a detective game—solving reading puzzles and fixing
                        sentences?
                        <br />
                        <strong>Lexi:</strong> Exactly! And because the <strong>Digital SAT</strong> is adaptive, the second module
                        adjusts based on how you perform in the first one.
                        <br />
                        <strong>Jake:</strong> So, if I ace the first part, the second one gets tougher? And if I struggle, it
                        gets a little easier?
                        <br />
                        <strong>Lexi:</strong> Yep! Just like how you don&apos;t start a video game on &quot;boss level&quot; right away.
                        
                        <br />
                        <strong>Jake:</strong> Nice! What’s next?
                        <br />
                        <strong>Lexi:</strong> A <strong>10-minute break</strong> before we hit the Math section—grab a snack and
                        recharge!
                        
                    </p>
                </div>
               

                <div className=" p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-headingcol">Level 2: Tackling the Math Section</h2>
                    <p className="mt-1 text-gray-600">
                        <strong>Lexi:</strong> Next up, <strong>Math</strong>. You&#39;ve got <strong>70 minutes</strong> to complete <strong>44 questions</strong> across
                        two modules. Topics include:
                    </p>
                    <ul className="list-disc pl-6 mt-4 text-gray-600">
                        <li><strong>Algebra</strong> (13–15 questions): Solving equations and inequalities.</li>
                        <li><strong>Advanced Math</strong> (13–15 questions): Working with complex expressions and
                            functions.</li>
                        <li><strong>Problem-Solving & Data Analysis</strong> (5–7 questions): Interpreting real-world
                            data and trends.</li>
                        <li><strong>Geometry & Trigonometry</strong> (5–7 questions): Angles, shapes, and trigonometric
                            functions.</li>
                        
                    </ul>
                    <p className="mt-4 text-gray-600">
                        <strong>Jake:</strong> So, basically puzzles… but with more pressure?
                        <br />
                        <strong>Lexi:</strong> Exactly! But don&apos;t stress—there&apos;s <strong>no penalty for guessing</strong>, so if you&#39;re
                        unsure, take a shot and move on.
                    </p>
                </div>

                <div className=" p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-headingcol">Level 3: Cracking the Test Format</h2>
                    <p className="mt-1 mb-2 text-gray-600">
                        <strong>Jake: </strong> Alright, so how does the whole thing add up?
                        <br /> 
                        <strong>Lexi:</strong> Here&apos;s the breakdown:
                    </p>
                    <SATExamTable />
                    <p className="mt-2 text-gray-600">
                        <strong>Jake: </strong> And this whole thing is <strong>adaptive</strong>, right?
                        <br />
                        <strong>Lexi:</strong> Yep! Your second module in both sections changes in difficulty based on
                        how well you perform in the first.
                    </p>
                </div>

                <footer className=" p-6  rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-headingcol">Level 4: Preparing for the Digital SAT</h2>
                    <p className="mt-1  text-gray-600">
                        <strong>Jake: </strong>This sounds intense. Which <strong>SAT prep courses</strong> should I check out?
                        for this?
                        <br />
                        <strong>Lexi:</strong> <strong>Projectile 45 (P45)!</strong> They offer expert <strong>SAT exam</strong> coaching, personalized
                        strategies, and a structured approach to <strong>Digital SAT</strong> prep.
                        <br />
                        <strong>Jake:</strong> Perfect! I&apos;m signing up for Projectile 45 test preparation. Let&apos;s crush this!
                        <br />
                        <strong>Lexi:</strong> You got this! Time to ace the Digital SAT!
                    </p>
                    <p className="text-xl font-medium text-headingcol mt-4">Want to master the SAT exam? Enrol in top-rated SAT prep courses today!</p>
                </footer>
            </div>
        </div>
    );
};

export default SATJourney;
