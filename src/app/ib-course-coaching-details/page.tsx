"use client"

import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const IBCoachingFAQs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: 'What subjects do you offer coaching for in IB?',
            answer:
                'We offer coaching for all major IB subjects, including Sciences, Mathematics, Language and Literature, Individuals and Societies, and Arts.',
        },
        {
            question: 'Are coaching classes available for both SL (Standard Level) and HL (Higher Level) subjects?',
            answer:
                'Yes, we provide coaching for both SL and HL, with specialized attention to the depth and rigor required for each level.',
        },
        {
            question: 'How do you customize coaching for individual students?',
            answer:
                "We assess each student's strengths and weaknesses and create personalized learning plans that target their specific needs.",
        },
        {
            question: 'Do you provide coaching for Theory of Knowledge (TOK)?',
            answer:
                'Yes, we offer dedicated coaching for TOK, helping students understand the nuances of the course and develop their critical thinking skills.',
        },
        {
            question: 'How are Extended Essay (EE) sessions conducted?',
            answer:
                'Our EE sessions focus on topic selection, research methodology, structuring the essay, and refining writing skills, with individual guidance from experienced mentors.',
        },
        {
            question: 'What is your approach to teaching CAS (Creativity, Activity, Service)?',
            answer:
                'We guide students in selecting meaningful CAS activities, planning their projects, and maintaining reflective journals that meet IB requirements.',
        },
        {
            question: 'Can students choose only certain subjects for coaching?',
            answer: 'Yes, students have the flexibility to enroll in coaching for specific subjects as per their requirements.',
        },
        {
            question: 'Do you offer online and offline coaching sessions?',
            answer:
                'We offer online coaching options wherein we accommodate different learning preferences and schedules. Based on the requirements, we can offer offline coaching sessions.',
        },
        {
            question: 'What is the duration of each coaching session?',
            answer:
                'Each session typically lasts 1 hour. It can be customized as well, depending on the subject and the depth of the topic covered.',
        },
        {
            question: 'How often are coaching classes held each week?',
            answer:
                'Classes are usually held 4-5 times per week, with additional sessions closer to exams or assessments.',
        },
        {
            question: 'What qualifications do your IB coaches have?',
            answer:
                'Our coaches are highly qualified with extensive teaching experience, often holding advanced degrees in their respective subjects.',
        },
        {
            question: 'How experienced are your teachers with the IB curriculum?',
            answer:
                'Most of our teachers have extensive years of experience teaching a wide range of curriculum and are well-versed in its nuances.',
        },
        {
            question: 'Are the coaches familiar with the latest IB syllabus changes?',
            answer:
                'Yes, our coaches regularly update themselves with the latest IB syllabus changes to ensure up-to-date teaching.',
        },
        {
            question: '1. How do you ensure quality teaching in IB coaching?',
            answer:
                'We conduct regular training for our teachers, maintain student feedback systems, and have periodic reviews to ensure high- quality coaching.',
        },
        {
            question: '1. Do teachers offer personalized attention to each student?',
            answer:
                'Yes, our teachers provide personalized attention, ensuring that each student’s unique learning needs are met.',
        },
        {
            question: '1. How do you handle different learning styles in your coaching sessions?',
            answer:
                'We use a mix of visual aids, discussions, practical examples, and interactive activities to cater to various learning styles.',
        },
        {
            question: '1. Are the classes taught in small groups or one-on-one?',
            answer:
                'We offer both small group sessions and one-on-one coaching based on student preferences.',
        },
        {
            question: '1. Do teachers provide additional support outside class hours?',
            answer:
                'Yes, our teachers are available for doubt-clearing sessions and additional support as needed.',
        },
        {
            question: '1. How do you assess the progress of each student?',
            answer:
                'We conduct regular assessments, quizzes, and Mock tests to track and monitor student progress.',
        },
        {
            question: '1. Are regular feedback sessions held with parents?',
            answer:
                'Yes, we conduct feedback sessions with parents to keep them informed about their child’s progress.',
        },
        // studySection
        {
            question: 'What study materials do you provide for IB coaching?',
            answer: 'We provide comprehensive study notes, worksheets, past papers, and sample questions tailored to the IB syllabus.',
        },
        {
            question: 'Are your study materials updated regularly?',
            answer: 'Yes, our study materials are regularly updated to align with the latest IB curriculum.',
        },
        {
            question: 'Do you provide past papers and sample questions?',
            answer: 'Yes, we provide a wide range of past papers and sample questions for effective exam practice.',
        },
        {
            question: 'Are online resources available for students?',
            answer: 'We offer a digital library of resources, including videos, e-books, and interactive quizzes.',
        },
        {
            question: 'How do you help students with Internal Assessments (IAs)?',
            answer: 'We guide students through the entire IA process, from topic selection to data analysis and report writing.',
        },
        {
            question: 'Do you provide textbooks and reference books?',
            answer: 'We recommend textbooks and provide access to essential reference materials as part of the coaching package.',
        },
        {
            question: 'Is there any supplementary reading material recommended for students?',
            answer: 'Yes, we suggest additional reading materials that can enhance students\' understanding of the subjects.',
        },
        {
            question: 'How do you help students with lab reports in Science subjects?',
            answer: 'We guide students on how to structure and present lab reports, focusing on data analysis and evaluation.',
        },
        {
            question: 'Can students access digital resources like e-books and videos?',
            answer: 'Yes, students have access to our online portal, which includes e-books, videos, and other digital learning materials.',
        },
        {
            question: 'Are there additional practice questions for exam preparation?',
            answer: 'We provide an extensive question bank with various difficulty levels for thorough exam preparation.',
        },
    ];

    
    const coachingSection = faqs.slice(0, 10); // Assuming coaching-related FAQs are between indices 0 and 9
    const facultySection = faqs.slice(10,20); // Assuming faculty-related FAQs start at index 10-19
    const studySection = faqs.slice(20, 30); // Assuming study materials-related FAQs are between indices 21 and 29


    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle open/close
    };

    const renderFAQs = (faqs: FAQItem[], offset: number) =>
        faqs.map((faq, index) => (
            <div
                key={offset + index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-all"
            >
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(offset + index)}
                >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {faq.question}
                    </h3>
                    <span className="text-xl font-bold text-gray-500 dark:text-gray-300">
                        {openIndex === offset + index ? '-' : '+'}
                    </span>
                </div>
                {openIndex === offset + index && (
                    <p className="mt-3 text-gray-700 dark:text-gray-300">{faq.answer}</p>
                )}
            </div>
        ));

    return (
        <div className="p-6 sm:p-8 lg:p-12 font-sans container mx-auto max-w-4xl">
            <h1 className="text-2xl font-extrabold mb-8 text-center leading-tight">
                IB Course Structure and Coaching Details FAQs
            </h1>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Coaching Information</h2>
                <div className="space-y-4">{renderFAQs(coachingSection, 0)}</div>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-4">Faculty and Teaching Approach</h2>
                <div className="space-y-4">{renderFAQs(facultySection, coachingSection.length)}</div>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-4">Study Materials and Resources</h2>
                <div className="space-y-4">{renderFAQs(studySection, facultySection.length)}</div>
            </div>

            
        </div>
    );
};

export default IBCoachingFAQs;
