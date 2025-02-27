import { FC } from 'react';

const BlogPost: FC = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 text-justify">
            <h1 className="text-4xl font-bold text-center text-headingcol mb-8">
                How to Avoid Common Pitfalls in GMAT Focus Edition – Data Insights Section
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed mb-8">
                The Data Insights (DI) section in the GMAT Focus Edition is a game-changer! It assesses your ability to analyze data, recognize patterns, and draw logical conclusions—without relying on extensive calculations. However, many test-takers fall into common traps that cost them valuable points. Understanding these pitfalls and learning how to navigate them effectively can give you a significant edge in your GMAT preparation.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-8">
                At Projetile 45 Tuition, we emphasize strategic learning, helping students master the GMAT with smart techniques. Let’s explore the common mistakes in the Data Insights section and how to avoid them.
            </p>

            <h2 className="font-semibold text-xl text-headingcol mb-4">Pitfall #1: Misinterpreting Graphs & Charts</h2>
            <p className="text-lg text-gray-800 mb-8">
                <strong>Common Mistake:</strong> Skimming through graphs too quickly, leading to misreading trends or scales.
            </p>
            <ul className="list-inside mb-8 text-lg text-gray-800">
                <li>✅ <strong>How to Avoid It:</strong> Always analyze axes, units, and labels before answering.</li>
                <li>✅ Identify key patterns, such as increasing/decreasing trends and relationships between data points.</li>
                <li>✅ For scatter plots, observe clusters and outliers before selecting an answer.</li>
                <li>🔹 <strong>Pro Tip:</strong> Never assume missing data means &quot;zero&quot;—the GMAT often tests your ability to make logical inferences!</li>
            </ul>

            <h2 className="font-semibold text-xl text-headingcol mb-4">Pitfall #2: Overcomplicating Multi-Source Reasoning (MSR) Questions</h2>
            <p className="text-lg text-gray-800 mb-8">
                <strong>Common Mistake:</strong> Trying to digest all information at once, leading to confusion and wasted time.
            </p>
            <ul className="list-inside mb-8 text-lg text-gray-800">
                <li>✅ <strong>How to Avoid It:</strong> Read the question first to understand what information is needed.</li>
                <li>✅ Treat each source as an independent data point—don&apos;t assume connections unless explicitly stated.</li>
                <li>✅ Watch for contradictory information—GMAT loves to trick you with conflicting statements!</li>
                <li>🔹 <strong>Pro Tip:</strong> Focus on logical conclusions rather than assumptions—GMAT never tests opinions.</li>
            </ul>

            <h2 className="font-semibold text-xl text-headingcol mb-4">Pitfall #3: Failing to Spot Relationships in Table Analysis</h2>
            <p className="text-lg text-gray-800 mb-8">
                <strong>Common Mistake:</strong> Trying to calculate exact values instead of recognizing relative comparisons.
            </p>
            <ul className="list-inside mb-8 text-lg text-gray-800">
                <li>✅ <strong>How to Avoid It:</strong> Use sorting and filtering functions effectively to identify trends and rankings.</li>
                <li>✅ Pay close attention to row/column headers before diving into details.</li>
                <li>✅ Eliminate extreme answer choices first—they are often meant to distract you!</li>
                <li>🔹 <strong>Pro Tip:</strong> If a question asks for a Yes/No answer, test edge cases to confirm your reasoning.</li>
            </ul>

            <h2 className="font-semibold text-xl text-headingcol mb-4">Pitfall #4: Guessing Too Soon on Two-Part Analysis (TPA) Questions</h2>
            <p className="text-lg text-gray-800 mb-8">
                <strong>Common Mistake:</strong> Answering each column separately instead of understanding their interrelationship.
            </p>
            <ul className="list-inside mb-8 text-lg text-gray-800">
                <li>✅ <strong>How to Avoid It:</strong> Identify the relationship between the two parts (e.g., revenue vs. cost, speed vs. time).</li>
                <li>✅ Work backwards—sometimes solving one part first helps determine the second.</li>
                <li>✅ Eliminate answer choices that contradict each other—GMAT frequently sets up such distractors.</li>
                <li>🔹 <strong>Pro Tip:</strong> Be mindful of units of measurement—mixing them up is a common GMAT trap!</li>
            </ul>

            <h2 className="font-semibold text-xl text-headingcol mb-4">Pitfall #5: Poor Time Management on DI Questions</h2>
            <p className="text-lg text-gray-800 mb-8">
                <strong>Common Mistake:</strong> Spending too much time on complex data sets or unnecessary calculations.
            </p>
            <ul className="list-inside mb-8 text-lg text-gray-800">
                <li>✅ <strong>How to Avoid It:</strong> If you’re stuck for more than 90 seconds, flag the question and move on—GMAT DI is about efficiency!</li>
                <li>✅ Use quick elimination techniques—cross out extreme/illogical answer choices.</li>
                <li>✅ Prioritize high-confidence questions first to build momentum before tackling tougher ones.</li>
                <li>🔹 <strong>Pro Tip:</strong> Set a mental time limit per question:</li>
                <ul className="list-inside mb-8 text-lg text-gray-800">
                    <li>⏳ Multi-Source Reasoning & Table Analysis: ~2 minutes</li>
                    <li>⏳ Graph-Based Questions: ~90 seconds</li>
                    <li>⏳ Two-Part Analysis: ~2.5 minutes</li>
                </ul>
            </ul>

            <h2 className="font-semibold text-xl text-headingcol mb-4">🚀 Final Takeaway: Master DI with a Strategic Approach!</h2>
            <ul className="list-inside mb-8 text-lg text-gray-800">
                <li>✅ Read visuals carefully – Don’t assume trends, verify them.</li>
                <li>✅ Filter & sort data logically – Focus on patterns, not calculations.</li>
                <li>✅ Think critically, not computationally – DI is about reasoning, not just math.</li>
                <li>✅ Manage time wisely – Don’t let one tricky question derail your pacing.</li>
            </ul>
            <p className="text-lg text-gray-800 mb-8">
                At Projetile 45 Tuition, we help students sharpen their GMAT strategies, ensuring they tackle the Data Insights section with confidence and efficiency. Avoid these pitfalls, apply these tips, and you’ll be on your way to mastering the GMAT Focus Edition! 💯🔥
            </p>
        </div>
    );
};

export default BlogPost;
