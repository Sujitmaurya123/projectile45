import React from 'react';

const GREGuide = () => {
    return (
        <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Previous content... */}

                {/* Test Format Section */}
                <section className="  p-8">
                    <h2 className="text-2xl font-semibold text-headingcol mb-6">GRE Test Format and Structure</h2>
                    <div className="space-y-8">
                        <div className=" p-6   ">
                            <h3 className="text-xl font-medium  text-headingcol mb-4">Analytical Writing Assessment (AWA)</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Duration:</strong> 60 minutes</li>
                                <li><strong>Structure:</strong> Two separately timed writing tasks
                                    <ul className="list-circle list-inside ml-6">
                                        <li>&quoat;Analyze an Issue&quoat; task (30 minutes)</li>
                                        <li>&quoat;Analyze an Argument&quoat; task (30 minutes)</li>
                                    </ul>
                                </li>
                                <li><strong>Scoring:</strong> 0-6 in half-point increments</li>
                            </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className=" p-6   ">
                                <h3 className="text-xl font-medium  text-headingcol mb-4">Verbal Reasoning</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
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
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
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
                            <h3 className="text-xl font-medium  text-headingcol mb-4">Registration Process</h3>
                            <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                <li>Create an ETS account at ets.org/gre</li>
                                <li>Choose between test center or at-home testing options</li>
                                <li>Select your test date and location</li>
                                <li>Pay the registration fee</li>
                            </ol>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-headingcol mb-4">Test Fees (2025)</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
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
                    <h2 className="text-2xl font-semibold  text-headingcol mb-6">Preparing for the GRE</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium text-headingcol mb-4">Recommended Study Timeline</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>3-6 months:</strong> Ideal preparation window</li>
                                <li><strong>Minimum 8 weeks:</strong> For those with strong academic backgrounds</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-headingcol mb-4">Study Resources</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className=" p-4 ">
                                    <h4 className="font-medium  text-headingcol mb-2">Official ETS Materials</h4>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>GRE Super Power Pack ($85)</li>
                                        <li>POWERPREP Practice Tests</li>
                                        <li>GRE Big Book</li>
                                    </ul>
                                </div>
                                {/* Add similar blocks for Third-Party and Online Courses */}
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