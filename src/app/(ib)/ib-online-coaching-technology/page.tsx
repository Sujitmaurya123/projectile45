"use client"

import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const IBFAQsOnlineCoachingTech: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: 'Is your online coaching as effective as offline coaching?',
            answer:
                'Yes, our online coaching offers live interactive sessions, digital resources, and real-time doubt clearing, ensuring the same quality as offline classes.',
        },
        {
            question: 'What platform do you use for online IB coaching?',
            answer:
                'We use a secure, user-friendly platform with features like live classes, recordings, and interactive whiteboards for online coaching.',
        },
        {
            question: 'Can students access recorded sessions if they miss a class?',
            answer:
                'Yes, all our online sessions are recorded, allowing students to revisit the material at their convenience.',
        },
        {
            question: 'How do you ensure student engagement in online classes?',
            answer:
                'We use interactive polls, quizzes, breakout rooms, and regular Q&A sessions to keep students actively engaged.',
        },
        {
            question: 'Do you provide technical support for online classes?',
            answer:
                'Yes, we offer technical assistance to resolve any issues that may arise during online sessions.',
        },
        {
            question: 'Can students ask questions during online sessions?',
            answer:
                'Absolutely! Our online platform allows students to ask questions in real-time or through chat, ensuring their queries are addressed.',
        },
        {
            question: 'Are there any additional resources available for online students?',
            answer:
                'Online students have access to e-books, recorded lectures, and an extensive digital library for additional study support.',
        },
        {
            question: 'How do you conduct online assessments and quizzes?',
            answer:
                'We use secure online platforms that simulate exam conditions for conducting assessments and quizzes.',
        },
        {
            question: 'Are online classes conducted live or pre-recorded?',
            answer:
                'Our online classes are conducted live, with recordings available for revision purposes.',
        },
        {
            question: 'Is there a limit to the number of students in online sessions?',
            answer:
                'Yes, we maintain a limited number of students per session to ensure personalized attention.',
        },
        // Add more FAQs as needed
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle open/close
    };

    return (
        <div className="p-6 sm:p-8 lg:p-12 font-sans container mx-auto max-w-6xl">
            <h1 className="text-5xl font-extrabold mb-8 text-center leading-tight text-headingcol">
                Frequently Asked Questions about Online Coaching and Technology Integration
            </h1>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-all"
                    >
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {faq.question}
                            </h2>
                            <span className="text-xl font-bold text-gray-500 dark:text-gray-300">
                                {openIndex === index ? '-' : '+'}
                            </span>
                        </div>
                        {openIndex === index && (
                            <p className="mt-3 text-gray-700 dark:text-gray-300">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default IBFAQsOnlineCoachingTech;
