"use client";

import Image from 'next/image';

const SATHero = () => {
    return (
        <div className="container mx-auto p-4 md:p-8">
            <h1 className="text-4xl md:text-5xl text-headingcol font-bold mb-6 md:mb-8 text-center">
                SAT Pattern 2024
            </h1>

            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-8 text-gray-500 font-medium">
                <div>
                    <p className="text-base text-justify md:text-lg leading-relaxed ">
                        The <strong className='text-gray-700'>SAT Exam Pattern</strong> for the year 2024-2025 has undergone major changes to
                        better align with the skills required for college success. The test now scores between
                        400 and 1600 points, with no negative marking for incorrect answers, allowing you to
                        focus on accuracy without worrying about penalties.
                    </p>
                    <p className="text-base text-justify md:text-lg leading-relaxed ">
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
                    </p>
                </div>

                <div className="flex justify-center">
                    <Image
                        src="/images/sat-digital2.svg"
                        alt="SAT Digital Exam Pattern Illustration"
                        width={500}
                        height={300}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default SATHero;
