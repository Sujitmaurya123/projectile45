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
        //Assessment and Exam Preparation
        {
            question: '1. How do you help students prepare for their IB exams?',
            answer: 'We offer structured revision plans, regular mock tests, and personalized feedback to ensure students are well-prepared for their IB exams.',
        },
        {
            question: '2. Do you conduct mock exams for IB students?',
            answer: 'Yes, we conduct regular mock exams under exam-like conditions to help students practice and improve their performance.',
        },
        {
            question: '3. How often are mock tests conducted?',
            answer: 'Mock tests are conducted monthly, with more frequent tests as the exam dates approach.',
        },
        {
            question: '4. Are the mock tests based on the actual IB exam pattern?',
            answer: 'Yes, our mock tests are designed to closely mimic the format, difficulty level, and timing of actual IB exams.',
        },
        {
            question: '5. Do you provide feedback on mock test performance?',
            answer: 'Detailed feedback is provided after each mock test, highlighting strengths and areas for improvement.',
        },
        {
            question: '6. How do you help students manage exam stress?',
            answer: 'We offer stress management workshops, meditation techniques, and time management strategies to help students cope with exam pressure.',
        },
        {
            question: '7. What strategies do you use for effective revision?',
            answer: 'We focus on active recall, spaced repetition, and concept mapping to reinforce learning during revision sessions.',
        },
        {
            question: '8. Do you assist with exam techniques and time management?',
            answer: 'Yes, we provide training on exam techniques, question analysis, and effective time management to maximize scores.',
        },
        {
            question: '9. How do you ensure that students understand complex IB topics?',
            answer: 'Our coaches use real-life examples, interactive discussions, and visual aids to break down complex topics into manageable concepts.',
        },
        {
            question: '10. What tips do you provide for scoring high in IB assessments?',
            answer: 'We emphasize regular practice, understanding the assessment criteria, and developing strong analytical and critical thinking skills.',
        },
        //Internal Assessments (IAs), Extended Essay (EE), and TOK
        {
            question: '1. How do you guide students with their Internal Assessments (IAs)?',
            answer: 'We assist students with topic selection, research methodology, data collection, analysis, and presentation, ensuring they meet IB standards.',
        },
        {
            question: '2. What support do you offer for the Extended Essay (EE)?',
            answer: 'We provide guidance on choosing a research question, conducting research, structuring the essay, and refining the final draft.',
        },
        {
            question: '3. How do you help students with Theory of Knowledge (TOK) essays and presentations?',
            answer: 'We guide students through the TOK framework, helping them develop strong arguments, structure their essays, and prepare for presentations.',
        },
        {
            question: '4. Can you assist with TOK exhibition preparation?',
            answer: 'Yes, we provide guidance on object selection, analysis, and presentation skills for the TOK exhibition.',
        },
        {
            question: '5. How do you ensure students stay on track with their EE and IAs?',
            answer: 'We set regular milestones, provide ongoing feedback, and conduct progress reviews to keep students on track with their projects.',
        },
        {
            question: '6. Do you offer one-on-one guidance for EE, TOK, and IA projects?',
            answer: 'Yes, we provide personalized guidance to ensure that each student\'s project is original, well-researched, and meets IB criteria.',
        },
        {
            question: '7. How do you help students select appropriate IA topics?',
            answer: 'We assist students in identifying topics that align with their interests, subject requirements, and the IB assessment criteria.',
        },
        {
            question: '8. What resources do you provide for the Extended Essay (EE)?',
            answer: 'We offer access to research databases, sample essays, and guidance on academic writing to support the EE process.',
        },
        {
            question: '9. How do you help students develop a strong argument in their TOK essays?',
            answer: 'We guide students in exploring knowledge questions, constructing balanced arguments, and using real-life examples effectively.',
        },
        {
            question: '10. Can students submit drafts of their EE or TOK essays for feedback?',
            answer: 'Yes, students can submit drafts, and we provide constructive feedback to help them improve their essays.',
        },
        // IB Subject-Specific Questions
        {
            question: '1. How do you handle challenging topics in Mathematics HL?',
            answer: 'We break down challenging topics into simpler concepts, use visual aids, and provide plenty of practice questions to ensure mastery.',
        },
        {
            question: '2. Do you offer coaching for IB Science subjects (Physics, Chemistry, Biology)?',
            answer: 'Yes, we provide comprehensive coaching for all IB Science subjects at both SL and HL levels.',
        },
        {
            question: '3. How do you teach difficult concepts in Physics?',
            answer: 'We use real-world examples, simulations, and experiments to make abstract Physics concepts more tangible and understandable.',
        },
        {
            question: '4. Are there separate teachers for different subjects?',
            answer: 'Yes, we have subject specialists for each IB subject to provide expert guidance.',
        },
        {
            question: '5. How do you make IB Business Management and Economics engaging?',
            answer: 'We use case studies, real-world business scenarios, and interactive discussions to make these subjects engaging and relevant.',
        },
        {
            question: '6. Do you provide assistance with Mathematics Exploration projects?',
            answer: 'Yes, we guide students through topic selection, research, analysis, and presentation for their Mathematics Exploration projects.',
        },
        {
            question: '7. How do you teach Literature subjects effectively?',
            answer: 'We encourage discussions, analysis of themes, and understanding of literary techniques to help students appreciate and excel in Literature.',
        },
        {
            question: '8. Do you provide guidance for group projects in Individuals and Societies?',
            answer: 'Yes, we offer support in planning, researching, and presenting group projects effectively.',
        },
        {
            question: '9. How do you handle subject-specific challenges in Biology?',
            answer: 'We use detailed diagrams, interactive experiments, and step-by-step explanations to address challenging Biology concepts.',
        },
        {
            question: '10. Do you help with understanding IB\'s Geography fieldwork component?',
            answer: 'Yes, we assist students with planning, data collection, analysis, and report writing for Geography fieldwork.',
        },
    ];

    
    const coachingSection = faqs.slice(0, 10); // Assuming coaching-related FAQs are between indices 0 and 9
    const facultySection = faqs.slice(10,20); // Assuming faculty-related FAQs start at index 10-19
    const studySection = faqs.slice(20, 30); // Assuming study materials-related FAQs are between indices 21 and 29
    const assessmentFAQsSection = faqs.slice(30, 40);
    const iaEeTokFAQsSection = faqs.slice(40, 50);
    const subjectSpecificFAQsSection = faqs.slice(40, 50);
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
        <div className="p-6 sm:p-8 lg:p-12 font-sans container mx-auto max-w-6xl">
            <h1 className="text-5xl font-extrabold mb-8 text-center leading-tight text-headingcol">
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
            <div>
                <h2 className="text-xl font-semibold mb-4">Assessment and Exam Preparation</h2>
                <div className="space-y-4">{renderFAQs(assessmentFAQsSection, facultySection.length)}</div>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-4">Internal Assessments (IAs), Extended Essay (EE), and TOK</h2>
                <div className="space-y-4">{renderFAQs(iaEeTokFAQsSection, facultySection.length)}</div>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-4">IB Subject-Specific Questions</h2>
                <div className="space-y-4">{renderFAQs(subjectSpecificFAQsSection, facultySection.length)}</div>
            </div>
            
        </div>
    );
};

export default IBCoachingFAQs;
