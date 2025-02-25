// components/GMATBlogPost.tsx
import React from 'react';

const GMATBlogPost: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto p-6  mt-8">
            <h1 className="text-4xl font-extrabold text-center mb-6 text-headingcol">
                Mastering Data Insights on the GMAT: Strategies for High Scores
            </h1>

            <section className='text-gray-800'>
                <h2 className="text-2xl font-semibold mt-4 text-headingcol">Understanding GMAT Data Insights Format & Question Types</h2>
                <p className="mt-2 text-lg">
                    The GMAT Focus Edition places significant emphasis on data interpretation, logical reasoning, and pattern recognition. One of the most challenging sections is Data Insights (DI), which tests how well you can analyze graphs, tables, and multi-source data under strict time limits.
                </p>
                <p className="mt-4 text-lg">
                    The Data Insights section consists of 20 questions to be solved in 45 minutes, giving you approximately 135 seconds per question.
                </p>
                <table className="min-w-full mt-4 table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="border p-2 text-lg">Question Type</th>
                            <th className="border p-2 text-lg">Description</th>
                            <th className="border p-2 text-lg">Key Skills Tested</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2">Table Analysis</td>
                            <td className="border p-2">Analyzing structured data in tables</td>
                            <td className="border p-2">Sorting, filtering, comparing data</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Graphics Interpretation</td>
                            <td className="border p-2">Interpreting bar charts, scatter plots, graphs</td>
                            <td className="border p-2">Pattern recognition, trend analysis</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Two-Part Analysis</td>
                            <td className="border p-2">Solving interdependent problems</td>
                            <td className="border p-2">Logical reasoning, calculations</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Multi-Source Reasoning</td>
                            <td className="border p-2">Analyzing data from multiple sources</td>
                            <td className="border p-2">Critical thinking, synthesis of information</td>
                        </tr>
                    </tbody>
                </table>
                <p className="mt-4 text-lg font-bold">🔹 Best time management strategies for exams? Don’t overcalculate! Use estimation and elimination to save time.</p>
                <p className="mt-4 text-lg font-bold">🚀 Tip:</p>
                <p className="text-lg">
                    At Projectile 45 Tuition, students receive specialized GMAT coaching to improve data analysis skills and logical reasoning.
                </p>
            </section>

            <section className="mt-8 text-gray-800">
                <h2 className="text-2xl font-semibold text-headingcol">Sample GMAT Data Insights Questions & Quick-Solve Tips</h2>

                <h3 className="text-xl font-semibold mt-4">Sample 1: Table Analysis</h3>
                <p className="mt-2 text-lg">
                    A company tracks revenue for three products over four years:
                </p>
                <table className="min-w-full mt-4 table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="border p-2 text-lg">Year</th>
                            <th className="border p-2 text-lg">Product A 💰</th>
                            <th className="border p-2 text-lg">Product B 📈</th>
                            <th className="border p-2 text-lg">Product C 📉</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2">2021</td>
                            <td className="border p-2">$10M</td>
                            <td className="border p-2">$15M</td>
                            <td className="border p-2">$20M</td>
                        </tr>
                        <tr>
                            <td className="border p-2">2022</td>
                            <td className="border p-2">$12M</td>
                            <td className="border p-2">$18M</td>
                            <td className="border p-2">$22M</td>
                        </tr>
                        <tr>
                            <td className="border p-2">2023</td>
                            <td className="border p-2">$14M</td>
                            <td className="border p-2">$20M</td>
                            <td className="border p-2">$25M</td>
                        </tr>
                        <tr>
                            <td className="border p-2">2024</td>
                            <td className="border p-2">$16M</td>
                            <td className="border p-2">$22M</td>
                            <td className="border p-2">$27M</td>
                        </tr>
                    </tbody>
                </table>
                <p className="mt-4 text-lg font-bold">Question:</p>
                <p className="text-lg">
                    If Product B&apos;s revenue continues growing at the same rate, what is its projected revenue for 2025?
                </p>
                <p className="mt-4 text-lg font-bold">📌 Quick Tip:</p>
                <p className="text-lg">
                    Instead of lengthy calculations, identify trends and apply linear or compound growth.
                </p>

                <h3 className="text-xl font-semibold mt-4 text-headingcol">Sample 2: Graphics Interpretation</h3>
                <p className="mt-2 text-lg">
                    A scatter plot shows employee salaries vs. years of experience with the equation:
                </p>
                <p className="mt-2 text-lg font-bold">Salary = 5000 × (Years of Experience) + 40,000</p>
                <p className="mt-4 text-lg">
                    Question: What is the expected salary for an employee with 8 years of experience?
                </p>
                <p className="mt-4 text-lg font-bold">📌 Quick Tip:</p>
                <p className="text-lg">
                    Plug in values directly instead of recalculating from scratch.
                </p>
                <p className="mt-4 text-lg font-bold">🚀 Tip:</p>
                <p className="text-lg">
                    Projectile 45 Tuition trains students to spot trends quickly and avoid time-wasting calculations on the GMAT.
                </p>
            </section>

            <section className="mt-8 text-gray-800">
                <h2 className="text-2xl font-semibold text-headingcol">Winning Strategies for GMAT Data Insights</h2>
                <ul className="mt-4 list-disc list-inside">
                    <li className="text-lg">Spot Trends Quickly 📉: Look for patterns, outliers, and inconsistencies rather than analyzing every data point.</li>
                    <li className="text-lg">Master Data Tables & Graphs 📊: Use answer elimination before diving into deep calculations.</li>
                    <li className="text-lg">Practice Logical Reasoning 🤔: Break multi-source reasoning questions into smaller parts for clarity.</li>
                    <li className="text-lg">Train with Timed Practice ⏳: Simulate test-day conditions using official GMAT DI practice questions.</li>
                </ul>
                <p className="mt-4 text-lg font-bold">🚀 Tip:</p>
                <p className="text-lg">
                    Projectile 45 Tuition offers GMAT-focused adaptive mock tests to help students master real-time decision-making.
                </p>
            </section>

            <section className="mt-8 border-t pt-8 text-gray-800">
                <h2 className="text-2xl font-semibold text-headingcol">Final Thoughts: How to Overcome Fear of Exams & Improve Performance</h2>
                <p className="mt-2 text-lg">
                    The GMAT Data Insights section is not about memorizing formulas—it’s about thinking structurally and making data-driven decisions under time constraints.
                </p>
                <ul className="mt-4 list-disc list-inside">
                    <li className="text-lg">Focus on trends rather than overanalyzing every data point.</li>
                    <li className="text-lg">Use strategic elimination and estimation to save time.</li>
                    <li className="text-lg">Break down complex problems into manageable steps.</li>
                    <li className="text-lg">Train with real exam simulations to improve confidence.</li>
                </ul>
                <p className="mt-4 text-lg font-bold text-headingcol">💡 How to stay motivated while preparing for GMAT?</p>
                <p className="text-lg">
                    Build a structured study plan, practice with adaptive tests, and focus on strengths.
                </p>
                <p className="mt-4 text-lg font-bold text-headingcol">🚀 Want expert coaching for GMAT?</p>
                <p className="text-lg">
                    Projectile 45 Tuition provides personalized training to help you develop a data-driven problem-solving approach and master time management techniques.
                </p>
                <p className="mt-4 text-lg font-bold text-headingcol">✅ With the right strategies, you can ace the GMAT Data Insights section and achieve your target score!</p>
            </section>
        </div>
    );
};

export default GMATBlogPost;
