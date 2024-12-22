import React from 'react';
import Image from 'next/image';

const CallToActionSection = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
                <div className="flex-1">
                    <Image
                        src="/images/students-studying.svg" // Replace with the actual path to your illustration
                        alt="Students studying together"
                        width={300}
                        height={300}
                        className="md:mr-16"
                    />
                </div>
                <div className="flex-1 text-center md:text-left md:mt-0">
                    <h2 className="text-3xl font-bold mb-4">
                        Are you ready to take the next step toward your goals?
                    </h2>
                    <p className="text-lg">
                        Join us to transform your test preparation—because the future belongs to
                        those who dare to dream big.
                    </p>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;