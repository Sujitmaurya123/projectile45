"use client"

import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const IBFAQs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: '1. What is the International Baccalaureate (IB) program?',
            answer:
                'The IB program is an internationally recognized curriculum designed to provide a holistic education that encourages critical thinking, research, and personal development.',
        },
        {
            question: '2. How is the IB curriculum different from other curriculums like CBSE or ICSE?',
            answer:
                'Unlike other curriculums, IB focuses on inquiry-based learning, real-world applications, and interdisciplinary teaching, emphasizing depth of knowledge and independent research.',
        },
        {
            question: '3. Why should I choose IB coaching for my child?',
            answer:
                'IB coaching provides specialized guidance, helping students understand complex concepts, develop study skills, and prepare effectively for assessments.',
        },
        {
            question: "4. How can IB coaching help improve my child's grades?",
            answer:
                'Expert coaches can help clarify difficult concepts, provide tailored study materials, and offer regular practice tests, which significantly improve academic performance.',
        },
        {
            question: '5. What are the main subjects taught in the IB curriculum?',
            answer:
                'The main subjects include Language and Literature, Language Acquisition, Individuals and Societies, Sciences, Mathematics, and Arts.',
        },
        {
            question: '6. How does the IB grading system work?',
            answer:
                'The IB grading system uses a scale of 1 to 7 for each subject, with 7 being the highest. The final IB Diploma score is out of 45, including points from the core components (TOK, EE, and CAS).',
        },
        {
            question: '7. Is IB coaching necessary for scoring well in exams?',
            answer:
                "While it's not mandatory, IB coaching can provide a structured learning environment, study strategies, and expert guidance, greatly enhancing performance.",
        },
        {
            question: '8. How does IB prepare students for university admissions?',
            answer:
                'The IB program develops critical thinking, research skills, and a global perspective, making students well-prepared and attractive candidates for universities worldwide.',
        },
        {
            question: '9. What is the difference between the IB Middle Years Programme (MYP) and the IB Diploma Programme (DP)?',
            answer:
                'The MYP is for students aged 11-16 and focuses on broad, interdisciplinary learning, while the DP is for students aged 16-19 and offers a more rigorous, specialized curriculum.',
        },
        {
            question: '10. How does IB coaching support critical thinking and problem-solving skills?',
            answer:
                'IB coaching encourages inquiry-based learning, real-world applications, and open discussions, fostering analytical thinking and problem-solving abilities.',
        },
        // Add more FAQs as needed
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle open/close
    };

    return (
        <div className="p-6 sm:p-8 lg:p-12 font-sans container mx-auto max-w-6xl">
            <h1 className="text-3xl font-extrabold mb-8 text-center leading-tight text-headingcol">
                Frequently Asked Questions About IB
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

export default IBFAQs;
