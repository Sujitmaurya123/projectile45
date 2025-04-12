"use client"
import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
    author: string;
    authorDetails: string;
    rating: number;
    text: string;
}

const testimonials: Testimonial[] = [
    {
        author: "Gino (Parent of student in IBDP, NLCS Dubai)",
        authorDetails: "Testimonial from parent of a girl who scored 1580 out of 1600 in sat exam She is in class 11",
        rating: 4.9,
        text: "My daughter is currently pursuing the IB Diploma Programme (AAHL), and we had the pleasure of engaging Rajesh and Firoz for support. They were comprehensive, supportive, and extremely diligent in ensuring her academic success. Rajesh and Firoz went above and beyond, helping her build effective strategies, addressing specific areas of concern, introducing multiple approaches to problem-solving, and meticulously guiding her to avoid common errors. Their guidance was particularly valuable given the rigorous academic demands of her curriculum. In addition, their support for SAT preparation was instrumental in helping my daughter achieve a fantastic score. I highly recommend Rajesh and Firoz to any parent looking for dedicated, personalized, and highly effective academic support. Thank you both for your invaluable guidance - we wish you continued success!",
    },
];

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.6,
            ease: 'easeOut'
        }
    })
};

const TestimonialsSection = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-headingcol text-center mb-4">
                    Real Stories, Real Success, Hear from Our Students
                </h2>
                <p className="text-gray-600 text-center mb-8">
                    Don&apos;t just take it from us. Our students share how P45 helped transform their study abroad journey.
                </p>
                <div className="flex justify-center">
                    <div className='w-[700px]'>
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 mb-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                custom={index}
                                variants={containerVariants}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-headingcol">{testimonial.author}</h3>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-5 h-5 text-yellow-500" />
                                        <span className="text-sm font-medium text-gray-700">{testimonial.rating}/5</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4 text-sm">
                                    {testimonial.text}
                                </p>
                                <p className="text-headingcol font-semibold text-sm italic w-[400px]">
                                    Testimonial from {testimonial.authorDetails}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
