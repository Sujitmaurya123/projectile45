import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const CallToActionSection = () => {
    return (
        <section className=" py-16">
            <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-col items-center md:flex-row md:justify-between">
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
                    <h2 className="text-3xl font-bold mb-4 text-headingcol">
                        Are you ready to take the next step toward your goals?
                    </h2>
                    <p className="text-lg text-gray-500">
                        Join us to transform your test preparation—because the future belongs to
                        those who dare to dream big.
                    </p>
                    <Link  href="free-demo">
                    <Button className="bg-white hover:bg-purple-600 text-purple-600 hover:text-white font-bold py-2 px-4 rounded mt-4">
                        Get Started
                    </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;