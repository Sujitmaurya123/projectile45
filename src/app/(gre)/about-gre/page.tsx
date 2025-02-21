import React from 'react';

const GREGuide = () => {
    return (
        <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className=" mb-12">
                    <h1 className="text-4xl text-center font-bold  text-headingcol mb-4">
                        The Ultimate Guide to GRE Exams: Everything You Need to Know in 2025
                    </h1>
                    <p className="text-gray-700 text-justify leading-relaxed mb-4">
                        The Graduate Record Examination (GRE) stands as a crucial gateway for millions of students
                        aspiring to pursue graduate and business education worldwide. Whether you&apos;re planning to
                        attend a master&apos;s program, specialized master&apos;s in business, MBA, or even certain law programs,
                        understanding the GRE is essential to your academic journey.
                    </p>
                </div>

                {/* Main Content */}
                <div className=" p-8">
                    {/* What is GRE Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold  text-headingcol mb-4">What is the GRE?</h2>
                        
                        <p className="text-gray-700 leading-relaxed text-justify">
                            The GRE is a standardized test designed to measure verbal reasoning, quantitative reasoning,
                            critical thinking, and analytical writing skills—abilities that have been developed over time
                            and are not specific to any particular field of study. The test is administered by Educational
                            Testing Service (ETS) and is widely accepted by thousands of graduate schools and business
                            programs globally.
                        </p>
                    </section>

                    {/* Test Types Section */}
                    <section>
                        <h2 className="text-2xl font-semibold  text-headingcol mb-6">Types of GRE Tests</h2>
                        <div className="space-y-6">
                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                <h3 className="text-xl font-medium  text-headingcol mb-3">GRE General Test</h3>
                                <p className="text-gray-700">
                                    Measures verbal reasoning, quantitative reasoning, and analytical writing skills.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                <h3 className="text-xl font-medium  text-headingcol mb-3">GRE Subject Tests</h3>
                                <p className="text-gray-700 mb-2">
                                    Measure knowledge in specific fields such as:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Physics</li>
                                    <li>Chemistry</li>
                                    <li>Mathematics</li>
                                    <li>Psychology</li>
                                    <li>Biology</li>
                                </ul>
                                <p className="text-gray-600 text-sm mt-3">
                                    Note: These are less commonly required but may be necessary for specialized programs.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default GREGuide;