import React from 'react';
import Image from 'next/image';

const MissionSection = () => {
    return (
        <section className=" py-16">
            <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-col items-center md:flex-row md:justify-between">
                <div className="flex-1">
                    <Image
                        src="/images/student-reading.svg" // Replace with the actual path to your illustration
                        alt="Student reading a book"
                        width={300}
                        height={300}
                        className="md:mr-16"
                    />
                </div>
                <div className="flex-1 text-center md:text-left md:mt-0 ">
                    <h2 className="text-3xl font-bold mb-4 text-justify text-headingcol">Every child deserves the chance to learn.</h2>
                    <p className="text-lg text-justify text-gray-600">
                        Through real-time feedback, adaptive practice, and global resources, we make sure you&apos;re ready to excel in every section of your test.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;