import React from 'react';
import Image from 'next/image';

const ClassroomSection = () => {
    return (
        <section className=" py-16">
            <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4 text-headingcol">Build the best classroom yet</h2>
                    <p className="text-lg text-justify text-gray-500">
                        With personalized, flexible learning led by expert tutors, we focus on equipping you with the tools to master complex concepts and ace challenging questions. Our approach ensures that preparation inspires, not overwhelms, by addressing each student&apos;s unique strengths and areas for improvement.
                    </p>
                </div>
                <div className="md:w-1/2 flex  justify-end">
                    <Image
                        src="/images/laptop-illustration.svg" // Replace with the actual path to your illustration
                        alt="Laptop with a teacher illustration"
                        width={400}
                        height={300}
                    />
                </div>
            </div>
        </section>
    );
};

export default ClassroomSection;