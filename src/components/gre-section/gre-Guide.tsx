import React from 'react';

const GREGuide = () => {
    return (
        <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto ">
                {/* Previous content... */}

                {/* Test Format Section */}
                <section className="  p-8">
                    <h2 className="text-2xl font-semibold text-headingcol ">GRE Test Format and Structure</h2>
                    <div className="space-y-4">
                        <div className=" p-6   ">
                            <h3 className="text-xl font-medium  text-headingcol ">Analytical Writing Assessment (AWA)</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li><strong>Duration:</strong> 60 minutes</li>
                                <li><strong>Structure:</strong> Two separately timed writing tasks
                                    <ul className="list-circle list-inside ml-6">
                                        <li>&quot;Analyze an Issue&quot; task (30 minutes)</li>
                                        <li>&quot;Analyze an Argument&quot; task (30 minutes)</li>
                                    </ul>
                                </li>
                                <li><strong>Scoring:</strong> 0-6 in half-point increments</li>
                            </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className=" p-6   ">
                                <h3 className="text-xl font-medium  text-headingcol mb-4">Verbal Reasoning</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li><strong>Duration:</strong> 60 minutes</li>
                                    <li><strong>Structure:</strong> Two 30-minute sections, 20 questions each</li>
                                    <li><strong>Question Types:</strong>
                                        <ul className="list-circle list-inside ml-6">
                                            <li>Reading Comprehension</li>
                                            <li>Text Completion</li>
                                            <li>Sentence Equivalence</li>
                                        </ul>
                                    </li>
                                    <li><strong>Scoring:</strong> 130-170 in 1-point increments</li>
                                </ul>
                            </div>

                            <div className=" p-6  ">
                                <h3 className="text-xl font-medium text-headingcol mb-4">Quantitative Reasoning</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li><strong>Duration:</strong> 70 minutes</li>
                                    <li><strong>Structure:</strong> Two 35-minute sections, 20 questions each</li>
                                    <li><strong>Question Types:</strong>
                                        <ul className="list-circle list-inside ml-6">
                                            <li>Quantitative Comparison</li>
                                            <li>Problem Solving</li>
                                            <li>Data Interpretation</li>
                                        </ul>
                                    </li>
                                    <li><strong>Scoring:</strong> 130-170 in 1-point increments</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">* The test is section-adaptive, meaning the difficulty of the second section depends on your first section performance.</p>
                    </div>
                </section>

                {/* Registration and Fees Section */}
                <section className=" p-8">
                    <h2 className="text-2xl font-semibold  text-headingcol mb-6">GRE Registration and Fees</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-medium  text-headingcol mb-2">Registration Process</h3>
                            <ol className="list-decimal list-inside text-gray-600 space-y-2">
                                <li>Create an ETS account at ets.org/gre</li>
                                <li>Choose between test center or at-home testing options</li>
                                <li>Select your test date and location</li>
                                <li>Pay the registration fee</li>
                            </ol>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-headingcol mb-2">Test Fees (2025)</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li><strong>GRE General Test:</strong> $220 worldwide</li>
                                <li><strong>GRE Subject Tests:</strong> $150 worldwide</li>
                                <li><strong>Additional score reports:</strong> $30 per recipient</li>
                                <li><strong>Rescheduling fee:</strong> $50</li>
                            </ul>
                            <p className="text-sm text-gray-600 mt-4">* Fee reduction programs available for eligible students</p>
                        </div>
                    </div>
                </section>

                {/* Preparation Section */}
                <section className=" p-8">
                    <h2 className="text-2xl font-semibold  text-headingcol mb-6">Best GRE Prep Online: How to Get Started</h2>
                    <div className="space-y-8">
                        <div>
                            <p className='text-gray-600'>To score high, an effective <strong>GRE prep</strong> strategy is essential. Here’s how you can ace
                                the test:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li><strong>Join the Best GRE Prep Online:</strong> Enrol in structured GRE courses for expert
                                    guidance.</li>
                                <li><strong>Follow a Targeted Study Plan:</strong> Break down the GRE syllabus into manageable
                                    sections.</li>
                                <li><strong>Practice GRE Exam Regularly:</strong> Attempt full-length practice GRE exams to
                                    improve speed and accuracy.</li>
                                <li><strong>Analyse Mock Tests:</strong> Review mistakes to refine your GRE test-taking strategy.</li>
                                <li><strong>Use Official GRE Resources:</strong> Study from ETS GRE materials and practice with
                                    real test questions.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-headingcol ">Why Choose the Best GRE Prep Online?</h3>
                            <div className="grid md:grid-cols-3 gap-2">
                                <div className=" p-4 ">
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li><strong>Adaptive Learning:</strong> Get customized study plans based on strengths and
                                            weaknesses.</li>
                                        <li><strong>Expert-Led GRE Prep:</strong> Learn from top GRE tutors with proven success rates.</li>
                                        <li><strong>Comprehensive Practice GRE Exam Sessions:</strong> Improve accuracy and time
                                            management.</li>
                                    </ul>
                                </div>
                                {/* Add similar blocks for Third-Party and Online Courses */}
                                <p className='text-gray-700'>Start your <strong>GRE prep</strong> today with the <strong>best GRE prep online programs</strong> and boost
                                    your chances of securing top scores in the <strong>GRE exam!</strong></p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Continue with other sections following similar patterns */}

            </div>
        </div>
    );
};

export default GREGuide;