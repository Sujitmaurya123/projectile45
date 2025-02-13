import React from 'react';
import Image from 'next/image';

const HelpGrowSection = () => {
    return (
        <section className=" py-16">
            <div className="container mx-auto flex flex-col px-6 md:px-10 lg:px-20 items-center md:flex-row md:justify-between">
                
                <div className="flex-1 text-center md:text-left md:mt-0">
                    <h2 className="text-3xl font-bold mb-4 text-headingcol">Help them grow their own way</h2>
                    <p className="text-lg  text-gray-500 lg:w-3/4  text-justify">
                        Our online tutoring service is tailored for students preparing for the SAT, GMAT, and GRE.
                         We don&apos;t just teach strategies—we ignite critical thinking, sharpen problem-solving skills, and build confidence to tackle these competitive exams head-on.
                    </p>
                </div>
                <div className=" justify-end">
                    <Image
                        src="/images/helpimg5.svg" // Replace with the actual path to your illustration
                        alt="Tutor helping students"
                        width={350}
                        height={350}
                        className="md:mr-16 "
                    />
                </div>
            </div>
        </section>
    );
};

export default HelpGrowSection;