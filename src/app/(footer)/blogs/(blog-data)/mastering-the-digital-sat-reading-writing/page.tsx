// components/DigitalSATReadingWritingBlogPost.tsx
import React from 'react';

const DigitalSATReadingWritingBlogPost: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto p-6   mt-8">
            <h1 className="text-4xl font-extrabold text-center mb-6 text-headingcol">
                Mastering the Digital SAT Reading & Writing Section: Tips, Strategies & Sample Questions
            </h1>

            <section className='text-gray-800'>
                <h2 className="text-2xl font-semibold mt-4 text-headingcol">🛠️ Key Features of the Digital SAT Reading & Writing Section</h2>
                <p className="mt-2 text-lg">
                    Understanding the format and structure is crucial for success:
                </p>
                <ul className="list-disc list-inside mt-4">
                    <li className="text-lg">✅ 54 questions divided into two adaptive modules</li>
                    <li className="text-lg">✅ Short passages (25–150 words) instead of long, complex readings</li>
                    <li className="text-lg">✅ Integrated Reading & Writing questions in both modules</li>
                    <li className="text-lg">✅ No separate Evidence-Based Reading and Writing (EBRW) sections</li>
                    <li className="text-lg">✅ Multiple-choice format with four answer choices</li>
                </ul>
                <p className="mt-4 text-lg font-bold">🚀 Did you know? Projectile 45 Tuition provides customized SAT prep courses designed to help students master the Digital SAT format efficiently.</p>
            </section>

            <section className="mt-8 text-gray-800">
                <h2 className="text-2xl font-semibold text-headingcol">📖 Section Breakdown & Question Types</h2>
                <p className="mt-4 text-lg">The Reading & Writing section is equally split between comprehension and grammar-based questions.</p>

                <h3 className="text-xl font-semibold mt-4 text-headingcol">📌 READING QUESTIONS (Comprehension & Vocabulary)</h3>
                <p className="mt-2 text-lg">📊 % of RW Section: ~50%</p>
                <table className="min-w-full mt-4 table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="border p-2 text-lg">Question Type</th>
                            <th className="border p-2 text-lg">What It Tests</th>
                            <th className="border p-2 text-lg">Example Question</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2">Main Idea & Purpose</td>
                            <td className="border p-2">Identifies the central message</td>
                            <td className="border p-2">&quot;Which choice best states the main idea of the passage?&quot;</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Inference</td>
                            <td className="border p-2">Draws logical conclusions</td>
                            <td className="border p-2">&quot;Which conclusion is best supported by the passage?&quot;</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Words in Context</td>
                            <td className="border p-2">Understands vocabulary based on usage</td>
                            <td className="border p-2">&quot;In the sentence, the word &apos;yield&apos; most nearly means?&quot;</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Textual Evidence</td>
                            <td className="border p-2">Justifies an answer choice</td>
                            <td className="border p-2">&quot;Which sentence best supports the previous answer?&quot;</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Paired Passages</td>
                            <td className="border p-2">Compares perspectives from two texts</td>
                            <td className="border p-2">&quot;How does Passage 2 respond to Passage 1?&quot;</td>
                        </tr>
                    </tbody>
                </table>

                <p className="mt-4 text-lg font-bold">🔹 Strategy Tip: Focus on keywords, author’s tone, and structure to quickly identify correct answers.</p>

                <h3 className="text-xl font-semibold mt-8 text-headingcol">📌 WRITING QUESTIONS (Grammar & Logical Reasoning)</h3>
                <p className="mt-2 text-lg">📊 % of RW Section: ~50%</p>
                <table className="min-w-full mt-4 table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="border p-2 text-lg">Question Type</th>
                            <th className="border p-2 text-lg">What It Tests</th>
                            <th className="border p-2 text-lg">Example Question</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2">Grammar & Sentence Structure</td>
                            <td className="border p-2">Subject-verb agreement, punctuation, modifiers</td>
                            <td className="border p-2">&quot;Which choice correctly completes the sentence?&quot;</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Conciseness & Clarity</td>
                            <td className="border p-2">Eliminates redundancy</td>
                            <td className="border p-2">&quot;Which choice best maintains sentence meaning while reducing wordiness?&quot;</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Logical Transitions</td>
                            <td className="border p-2">Ensures smooth flow</td>
                            <td className="border p-2">&quot;Which transition word best connects the sentences?&quot;</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Expression of Ideas</td>
                            <td className="border p-2">Improves argument clarity</td>
                            <td className="border p-2">&quot;Which choice best supports the passage&apos;s main idea?&quot;</td>
                        </tr>
                        <tr>
                            <td className="border p-2">Rhetorical Synthesis</td>
                            <td className="border p-2">Selects evidence to support a claim</td>
                            <td className="border p-2">&quot;Which data best supports the author’s claim?&quot;</td>
                        </tr>
                    </tbody>
                </table>

                <p className="mt-4 text-lg font-bold">🔹 Strategy Tip: Read the sentence without the underlined portion to predict the best answer choice.</p>
            </section>

            <section className="mt-8 text-gray-800">
                <h2 className="text-2xl font-semibold text-headingcol">⏳ Time Management: Mastering the Clock!</h2>
                <p className="mt-2 text-lg">
                    With 64 minutes for 54 questions, you must manage time effectively.
                </p>
                <ul className="list-disc list-inside mt-4">
                    <li className="text-lg">📌 Average Time Per Question: ~1 minute</li>
                    <li className="text-lg">🏃 Don’t get stuck! Flag difficult questions and return later.</li>
                    <li className="text-lg">📝 Use elimination strategies to quickly narrow down choices.</li>
                    <li className="text-lg">⚡ Focus on accuracy in the first module to get a harder second module.</li>
                </ul>
                <p className="mt-4 text-lg font-bold">🔹 Pro Tip: Take at least 5 full-length Digital SAT mock tests to develop strong timing skills.</p>
                <p className="text-lg">
                    🚀 Looking for top-notch SAT practice tests? Projectile 45 Tuition provides realistic SAT mock tests that mirror the actual exam format.
                </p>
            </section>

            <section className="mt-8 text-gray-800">
                <h2 className="text-2xl font-semibold text-headingcol">📝 Sample Digital SAT RW Questions</h2>

                <h3 className="text-xl font-semibold mt-4 text-headingcol">📖 Reading Sample Question</h3>
                <p className="text-lg">Passage:</p>
                <blockquote className="border-l-4 pl-4 italic mt-2 text-lg">
                    &quot;The newly discovered exoplanet, Gliese 581g, has sparked scientific interest because its orbital path suggests that it may have conditions suitable for life. However, some astronomers argue that more data is needed before reaching definitive conclusions.&quot;
                </blockquote>
                <p className="mt-4 text-lg">Q: What is the author’s primary purpose in this passage?</p>
                <ul className="list-inside mt-2">
                    <li>A) To criticize the scientific community’s assumptions about exoplanets</li>
                    <li>B) To describe the features of a newly discovered exoplanet</li>
                    <li>C) To argue that Gliese 581g is habitable</li>
                    <li>D) To suggest that further research is required before making claims</li>
                </ul>
                <p className="mt-4 text-lg font-bold">✅ Correct Answer: D</p>
                <p className="mt-2 text-lg">The passage emphasizes the need for more data before drawing conclusions.</p>

                <h3 className="text-xl font-semibold mt-8">📝 Writing Sample Question</h3>
                <p className="text-lg">Sentence:</p>
                <blockquote className="border-l-4 pl-4 italic mt-2 text-lg">
                    &quot;The scientist’s experiments, which were conducted over a five-year period, has yielded significant breakthroughs in renewable energy.&quot;
                </blockquote>
                <p className="mt-4 text-lg">Q: Which choice best corrects the underlined portion?</p>
                <ul className="list-inside mt-2">
                    <li>A) has yielded</li>
                    <li>B) have yielded</li>
                    <li>C) is yielding</li>
                    <li>D) had yielded</li>
                </ul>
                <p className="mt-4 text-lg font-bold text-headingcol">✅ Correct Answer: B</p>
                <p className="mt-2 text-lg">The subject “experiments” is plural, so the verb should be “have yielded.”</p>
            </section>

            <section className="mt-8 text-gray-800">
                <h2 className="text-2xl font-semibold text-headingcol">📚 Final Takeaway: How to Boost Your Digital SAT RW Score!</h2>
                <ul className="list-disc list-inside mt-4 text-lg">
                    <li>🔹 Master question types</li>
                    <li>🔹 Practice timed full-length tests</li>
                    <li>🔹 Read complex texts & news articles daily</li>
                    <li>🔹 Review key grammar rules</li>
                    <li>🔹 Think logically before answering</li>
                </ul>
                <p className="mt-4 text-lg font-bold text-headingcol">💡 Start practicing today to maximize your SAT score! 🚀</p>
            </section>

            <section className="mt-8 text-gray-800">
                <h2 className="text-2xl font-semibold text-headingcol">🚀 Why Choose Projectile 45 Tuition for SAT Prep?</h2>
                <ul className="list-disc list-inside mt-4 text-lg">
                    <li>🎯 Expert SAT Tutors with years of experience</li>
                    <li>📚 Customized Study Plans based on individual strengths</li>
                    <li>📝 Real Digital SAT Mock Tests with score analysis</li>
                    <li>💡 Advanced Strategies for Time Management & Accuracy</li>
                </ul>
                <p className="mt-4 text-lg font-bold text-headingcol">🎓 Join Projectile 45 Tuition today and achieve your dream SAT score!</p>
            </section>
        </div>
    );
};

export default DigitalSATReadingWritingBlogPost;
