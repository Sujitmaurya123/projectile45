"use client";

import Image from 'next/image';

const SATHero = () => {
    return (
        <div className="container mx-auto p-4 md:p-8 max-w-6xl">
            <h1 className="text-4xl md:text-5xl text-headingcol font-bold mb-6 md:mb-8 text-center">
                SAT Exam Pattern 2025: Everything You Need to Know
            </h1>

            <div className="flex flex-col-reverse  md:grid md:grid-cols-2 gap-6 md:gap-8 text-gray-600 font-medium">
                <div>
                    <p className="text-base text-justify md:text-lg leading-relaxed mt-9">
                        The <strong>SAT exam pattern</strong> for 2025 has been redesigned to make the test more
                        efficient, adaptive, and aligned with essential college-ready skills. Whether you&#39;re
                        preparing with a <strong>Digital SAT practice</strong> test or enrolling in a <strong>SAT prep course,</strong>
                        understanding these updates is crucial for achieving your target score.
                    </p>
                    {/* <p className="text-base text-justify md:text-lg leading-relaxed ">
                        One significant update is the reduced overall exam duration, making the test more
                        streamlined and efficient. Another improvement is the allowance of calculators for all
                        Math questions, including access to the <strong className='text-gray-700'>Desmos graphing calculator</strong> directly on
                        the test platform. This feature provides enhanced flexibility and tools for solving
                        complex problems.
                    </p>
                    <p className="text-base text-justify md:text-lg leading-relaxed">
                        Additionally, the SAT now includes a consolidated Reading and Writing section,
                        simplifying time management and test strategy. The redesigned exam evaluates your
                        ability to analyze information, solve problems, and think critically—skills essential for
                        academic success. Familiarizing yourself with these changes in the SAT Exam
                        Pattern will help you plan effectively and maximize your score.
                    </p> */}
                </div>

                <div className="flex justify-center">
                    <Image
                        src="/images/sat-digital2.svg"
                        alt="SAT Digital Exam Pattern Illustration"
                        width={400}
                        height={200}
                        className="rounded-lg"
                    />
                </div>
            </div>
           
        </div>
    );
};

export default SATHero;
