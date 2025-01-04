"use client"
import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQSection: React.FC<{ faqs: { title: string; items: FAQItem[] }[] }> = ({ faqs }) => {
    return (
        <div className="space-y-8"> {/* Space between sections */}
            {faqs.map((section, index) => (
                <div key={index} className="mb-8"> {/* Margin bottom for spacing */}
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">{section.title}</h2>
                    <div className="space-y-4"> {/* Space between FAQ items */}
                        {section.items.map((faq, i) => (
                            <FAQItemCard key={i} faq={faq} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

const FAQItemCard: React.FC<{ faq: FAQItem }> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow p-4 transition duration-300">
            <button
                className="w-full text-left font-medium text-lg flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                {faq.question}
                <span className="text-gray-500">{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <p className="mt-2 text-gray-700 transition duration-300">{faq.answer}</p>}
        </div>
    );
};

const FAQsPage: React.FC = () => {
    const faqs = [
        {
            title: 'General',
            items: [
                {
                    question: '1. What is the total score range for the new SAT?',
                    answer: 'The total score ranges from 400 to 1600, similar to the previous format.',
                },
                {
                    question: '2. Is there negative marking for incorrect answers?',
                    answer: 'No, there is no negative marking for incorrect answers. You can attempt all questions without worrying about penalties.',
                },
                {
                    question: '3. How is the SAT structured now?',
                    answer: 'The SAT has two main sections:\n• Reading and Writing (consolidated into one section)\n• Math',
                },
                {
                    question: '4. What is the total duration of the digital SAT?',
                    answer: 'The exam duration has been reduced and is now 2 hours and 14 minutes.',
                },
                
            ],
        },
        {
            title: 'Digital Format',
            items: [
                {
                    question: '1. How is the digital SAT administered?',
                    answer:
                        'The SAT is taken on a computer or tablet, provided at the testing center, or on your own device in select locations. You can take the digital SAT on approved devices, including Windows laptops or tablets, Apple Mac laptops or iPads, and school-issued Chromebooks. You may use your own digital device, borrow one from a friend or family member, use a device issued by your school, or request a device from the College Board.',
                },
                {
                    question: '2. Can I take the digital SAT at home?',
                    answer: 'No, the digital SAT must be taken at an authorized testing center.'
                },
                {
                    question: '3. Is the test adaptive?',
                    answer: 'Yes, the digital SAT uses a multistage adaptive testing model, where the difficulty of the second module depends on your performance in the first module.'
                },
                // {
                //     question: '',
                //     answer: ''
                // },
                
            ],
        },
        {
            title: 'Calculator and Tools',
            items: [
                {
                    question: '1. Are calculators allowed on the entire Math section?',
                    answer:
                        'Yes, calculators are now permitted for all Math questions.',
                },
                {
                    question: '2. What type of calculator can I use?',
                    answer: 'You can bring your own calculator, but the digital SAT also includes access to the Desmos graphing calculator directly within the test interface.'
                },
                {
                    question: '3. Can I use the Desmos calculator for practice before the test?',
                    answer: 'Yes, you can access the Desmos graphing calculator online for practice ahead of the test.'
                },
                // {
                //     question: '',
                //     answer: ''
                // },

            ],
        },
        {
            title: 'Content and Scoring',
            items: [
                {
                    question: '1. What skills does the SAT measure now?',
                    answer:
                        'The SAT focuses on critical thinking, problem-solving, and the ability to analyze and interpret data and texts.',
                },
                {
                    question: '2. What types of questions are included in the Reading and Writing section?',
                    answer: 'The Reading and Writing section includes short passages with a single question, covering comprehension, grammar, and vocabulary in context.'
                },
                {
                    question: '3. How is the Math section structured?',
                    answer: 'The Math section includes problems related to algebra, data analysis, geometry, and advanced math topics, now with the option to use a calculator for all questions.'
                },
                // {
                //     question: '',
                //     answer: ''
                // },

            ],
        },
        {
            title: 'Preparation and Logistics',
            items: [
                {
                    question: '1. When should I register for the SAT?',
                    answer:
                        'You should register at least one month before your chosen test date to ensure availability.',
                },
                {
                    question: '2. How are scores reported for the digital SAT?',
                    answer: 'Scores will be available within days of taking the test, making it faster than the paper- based SAT.'
                },
                {
                    question: '3. Will colleges accept scores from the digital SAT?',
                    answer: 'Yes, colleges that accept the SAT will recognize scores from the digital format.'
                },
                // {
                //     question: '',
                //     answer: ''
                // },

            ],
        },
        {
            title: 'Additional Resources',
            items: [
                {
                    question: '1. Where can I find practice tests and materials for the new SAT?',
                    answer:
                        'Practice materials, including full-length digital tests, are available on the College Board website and through its partners.',
                },
                {
                    question: '2. What should I bring to the test center for the digital SAT?',
                    answer: 'Bring an acceptable photo ID, your admission ticket, an approved calculator, and pencils(if needed for rough work).'
                },
                {
                    question: '3. Can I use scratch paper during the digital SAT?',
                    answer: 'Yes, scratch paper will be provided at the test center for rough calculations or notes.'
                },
                // {
                //     question: '',
                //     answer: ''
                // },

            ],
        },
    ];
    return (
        <div className="p-6 font-sans container mx-auto max-w-2xl"> {/* Added container for centering */}
            <h1 className="text-xl font-bold mb-8 text-center">FAQs for the SAT New Digital Format (2024-2025)</h1>
            <FAQSection faqs={faqs} />
        </div>
    );
};

export default FAQsPage;