import React from 'react';
import Image from 'next/image';

interface Projectile45Benefit {
    icon: string;
    title: string;
    description: string;
}

const benefits: Projectile45Benefit[] = [
    {
        icon: '/images/puzzle-icon.svg',
        title: 'Enhance Understanding',
        description: 'Enhance understanding by tying complex lessons to practical, real-world examples.',
    },
    {
        icon: '/images/target-icon.svg',
        title: 'Monitor Progress',
        description: 'Monitor and measure progress for each learner with clear milestones and detailed reports.',
    },
    {
        icon: '/images/book-icon.svg',
        title: 'Develop Foundational Literacy',
        description: 'Develop the foundational literacy skills children need for lifelong learning and achievement.',
    },
];

const Projectile45Benefits = () => {
    return (
        <section className="text-black py-16">
            <div className="container px-6 md:px-10 lg:px-20 mx-auto text-center ">
                <h2 className="text-3xl font-bold mb-8">Why Choose - Projectile 45</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image
                                src={benefit.icon}
                                alt={benefit.title}
                                width={100}
                                height={100}
                                className="mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-lg">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projectile45Benefits;