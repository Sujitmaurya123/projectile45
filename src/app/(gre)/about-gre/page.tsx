import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "GRE Exam Preparation",
    description: "Learn everything about the GRE exam, including its importance, format, and syllabus. Get expert guidance from P45 tutors to ace your GRE and boost your scores.",
    keywords: ["best gre prep online",
        "gre prep",
        "gre exam syllabus",
        "price gre",
        "gre coaching"],
}

const GREGuide = () => {
    return (
        <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className=" mb-12">
                    <h1 className="text-4xl text-center font-bold  text-headingcol mb-4">
                        GRE Exam Pattern &amp; Preparation: The Ultimate Guide for 2025
                    </h1>
                    <p className="text-gray-600 text-justify leading-relaxed mb-4">
                        The <strong>Graduate Record Examination (GRE)</strong> is a critical step for students aiming to
                        pursue <strong>graduate and business programs</strong> worldwide. Whether you&apos;re targeting 
                       a <strong>master&apos;s program, MBA, or even select law programs,</strong> understanding the <strong>GRE
                            exam pattern</strong> and preparing effectively is key to success.
                    </p>
                </div>

                {/* Main Content */}
                <div className=" ">
                    {/* What is GRE Section */}
                    <section className="mb-4">
                        <h2 className="text-2xl font-semibold  text-headingcol mb-2">What is the GRE?</h2>
                        
                        <p className="text-gray-600 leading-relaxed text-justify">
                            The <strong>GRE exam</strong> is a standardized test administered by <strong>Educational Testing
                                Service (ETS)</strong> to assess:
                        </p>
                        <ul className="text-gray-600">
                            <li><strong>1. Verbal Reasoning</strong> – Evaluates reading comprehension, vocabulary, and critical
                                thinking.</li>
                            <li><strong>2. Quantitative Reasoning</strong> – Tests mathematical and problem-solving skills.</li>
                            <li><strong>3. Analytical Writing</strong> – Measures ability to articulate complex ideas and construct
                                well-structured arguments.</li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            The <strong>GRE exam pattern</strong> is designed to assess fundamental skills required for
                            advanced academic studies. Universities worldwide use <strong>GRE scores</strong> as a key
admission criterion for graduate programs.  
                        </p>
                    </section>

                    {/* Test Types Section */}
                    <section>
                        <h2 className="text-2xl font-semibold  text-headingcol mb-2">GRE Pattern: General vs. Subject Tests</h2>
                        <div className="space-y-6">
                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                <h3 className="text-xl font-medium  text-headingcol mb-2">GRE General Test</h3>
                                <p className="text-gray-600">
                                    The GRE General Test measures essential quantitative, verbal, and analytical
                                    writing skills, making it the most commonly required test for graduate admissions.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                <h3 className="text-xl font-medium  text-headingcol mb-2">GRE Subject Tests</h3>
                                <p className="text-gray-600 mb-2">
                                    Subject-specific exams that assess proficiency in specialized fields, including:
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>GRE Physics</li>
                                    <li>GRE Chemistry</li>
                                    <li>GRE Mathematics</li>
                                    <li>GRE Psychology</li>
                                    <li>GRE Biology</li>
                                </ul>
                                <p className="text-gray-600 text-sm mt-3">
                                    These tests are required for select graduate programs that demand deeper subject
                                    knowledge.
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