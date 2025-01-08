
"use client"
import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string | JSX.Element | JSX.Element[];
}

const FAQ: React.FC<{ faqs: FAQItem[]; title: string }> = ({ faqs, title }) => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-5xl font-bold mb-4 text-headingcol">{title}</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4 border border-gray-300 rounded p-4">
                    <button
                        className="w-full text-left font-semibold flex justify-between items-center"
                        onClick={() => toggleFAQ(index)}
                    >
                        {faq.question}
                        <span>{openFAQ === index ? '-' : '+'}</span>
                    </button>
                    {openFAQ === index && <div className="mt-2">{faq.answer}</div>}
                </div>
            ))}
        </div>
    );
};

const CombinedFAQPage: React.FC = () => {
    const coachingFAQs: FAQItem[] = [
        {
            question: '1. What is the fee structure for IB coaching?',
            answer: 'Our fee structure varies based on the subjects chosen, coaching duration, and whether the student opts for one-on-one or group sessions.',
        },
        {
            question: '2. Are there any discounts available for enrolling in multiple subjects?',
            answer: 'Yes, we offer discounts for students enrolling in multiple subjects or opting for long-term coaching packages.',
        },
        {
            question: '3. Can students join in the middle of the academic year?',
            answer: 'Yes, students can join at any time, and we will provide extra support to help them catch up.',
        },
        {
            question: '4. Do you offer a trial class before enrollment?',
            answer: 'Yes, we offer a free trial class to help students experience our teaching methods before committing.',
        },
        {
            question: '5. What are the payment options for IB coaching fees?',
            answer: 'We accept payments through various methods, including bank transfers, credit/debit cards, and online payment gateways.',
        },
        {
            question: '6. Do you have flexible scheduling options?',
            answer: 'Yes, we offer flexible class timings to accommodate students\' schedules.',
        },
        {
            question: '7. Are weekend classes available for working students?',
            answer: 'Yes, we offer weekend classes for students with busy schedules during the week.',
        },
        {
            question: '8. Is there a refund policy if a student withdraws?',
            answer: 'We have a clear refund policy, which can be discussed during enrollment.',
        },
        {
            question: '9. How do I register for IB coaching classes?',
            answer: 'You can register through our website, by phone, or by visiting our coaching center.',
        },
        {
            question: '10. Is there any registration fee to enroll in your coaching program?',
            answer: 'We do not charge a separate registration fee; the coaching fee includes all registration costs.',
        },
    ];

    const classStructureFAQs: FAQItem[] = [
        {
            question: '1. How are your coaching classes structured?',
            answer: 'Our classes are structured into topic-wise modules, with regular assessments, doubt-clearing sessions, and concept reinforcement exercises.',
        },
        {
            question: '2. How do you manage different learning speeds in a group?',
            answer: 'We offer differentiated instruction, extra practice material, and one-on-one support to ensure every student progresses at their own pace.',
        },
        {
            question: '3. Do you provide separate batches for Standard Level (SL) and Higher Level (HL) subjects?',
            answer: 'Yes, we have separate batches to cater to the specific needs and curriculum requirements of SL and HL students.',
        },
        {
            question: '4. How many students are there in one batch?',
            answer: 'We maintain small batch sizes, typically 8-10 students, to ensure personalized attention.',
        },
        {
            question: '5. Are there opportunities for students to interact and collaborate during classes?',
            answer: 'Yes, we encourage group discussions, peer learning, and collaborative projects to foster a supportive learning environment.',
        },
        {
            question: '6. Do you offer personalized coaching for students who require extra help?',
            answer: 'Yes, we offer one-on-one coaching sessions for students who need additional support.',
        },
        {
            question: '7. How do you track individual student progress?',
            answer: 'We track progress through regular assessments, quizzes, homework, and performance analytics.',
        },
        {
            question: '8. Do you provide feedback to parents about their child\'s progress?',
            answer: 'Yes, we conduct regular parent-teacher meetings and provide detailed reports on the student\'s progress.',
        },
        {
            question: '9. Can students switch between subjects during the coaching program?',
            answer: 'Yes, students can switch subjects, but we recommend doing so early in the program for better alignment with the curriculum.',
        },
        {
            question: '10. Do you offer remedial classes for students struggling with specific topics?',
            answer: 'Yes, we conduct remedial classes to help students grasp challenging topics and catch up with their peers.',
        },
    ];
    const curriculumFAQs: FAQItem[] = [
        {
            question: '1. Do you offer remedial classes for students struggling with specific topics?',
            answer: 'Our coaching is fully aligned with the IB curriculum, ensuring complete coverage of all syllabus topics and assessment criteria.',
        },
        {
            question: '2. Do you cover the entire IB syllabus in your coaching?',
            answer: 'Yes, we cover the entire IB syllabus in a structured and comprehensive manner, ensuring students are well-prepared.',
        },
        {
            question: '3. How do you stay updated with changes in the IB curriculum?',
            answer: 'Our team constantly monitors IB updates, attends workshops, and collaborates with IB-certified educators to stay current.',
        },
        {
            question: '4. Do you cover all IB subject groups?',
            answer: 'Yes, we offer coaching for subjects across all six IB groups, ensuring comprehensive support.',
        },
        {
            question: '5. How do you approach interdisciplinary topics in IB coaching?',
            answer: 'We emphasize interdisciplinary learning by integrating concepts from different subjects and encouraging students to make connections.',
        },
        {
            question: '6. Are there any special sessions for Internal Assessment preparation?',
            answer: 'Yes, we conduct dedicated IA sessions to guide students through topic selection, research, analysis, and presentation.',
        },
        {
            question: '7. Do you provide additional resources beyond textbooks?',
            answer: 'Yes, we offer supplementary notes, practice questions, online resources, and interactive materials to support learning.',
        },
        {
            question: '8. How do you handle subjects with practical components, such as Science or Visual Arts?',
            answer: 'We provide practical demonstrations to help students understand experimental concepts.',
        },
        {
            question: '9. Do you follow a specific teaching methodology for IB coaching?',
            answer: 'Our teaching methodology is inquiry-based, focusing on conceptual understanding, critical thinking, and application of knowledge.',
        },
        {
            question: '10. Are your tutors experienced in teaching the IB curriculum?',
            answer: 'Yes, all our tutors have extensive experience in teaching IB subjects and are well-versed in the curriculum requirements.',
        },
    ];

    const languageFAQs: FAQItem[] = [
        {
            question: '1. Do you offer coaching for IB Language A and Language B subjects?',
            answer: 'Yes, we provide coaching for both Language A (Literature) and Language B (Language Acquisition) subjects.',
        },
        {
            question: '2. Is coaching available for non-English IB subjects?',
            answer: 'We offer coaching for non-English subjects like Spanish, French, and German, based on demand.',
        },
        {
            question: '3. How do you help students who are not fluent in English?',
            answer: 'We offer bilingual support and additional language classes to help non-fluent students understand the material.',
        },
        {
            question: '4. Can you assist with improving English proficiency for IB students?',
            answer: 'Yes, we provide additional coaching in English language skills, focusing on reading, writing, and oral communication.',
        },
        {
            question: '5. Do you offer support for the IB Diploma Programme Core (EE, TOK) in multiple languages?',
            answer: 'Yes, we can provide guidance in multiple languages for the Diploma Programme Core components, based on student requirements.',
        },
        {
            question: '6. How do you help students excel in IB Language Acquisition (Language B) subjects?',
            answer: 'We emphasize interactive activities, listening exercises, speaking practice, and grammar drills to improve language acquisition.',
        },
        {
            question: '7. Do you offer coaching for Self-Taught Language A Literature students?',
            answer: 'Yes, we offer support and guidance for students pursuing Self-Taught Language A Literature.',
        },
        {
            question: '8. Are there language immersion programs available?',
            answer: 'We offer language immersion workshops and practice sessions to enhance language skills.',
        },
        {
            question: '9. Can you provide coaching for IB Literature courses in different languages?',
            answer: 'Yes, we offer coaching for IB Literature courses in languages like French, Spanish, and German.',
        },
        {
            question: '10. Do you help with essay writing in different languages?',
            answer: 'Yes, we assist students with essay writing, providing guidance in structure, content, and language use in various languages.',
        },
    ];
    const extracurricularFAQs: FAQItem[] = [
        {
            question: '1. Do you provide guidance for the Creativity, Activity, Service (CAS) component?',
            answer: 'Yes, we help students plan, document, and reflect on their CAS activities to fulfill the IB requirements.',
        },
        {
            question: '2. How do you support students in developing extracurricular skills?',
            answer: 'We encourage participation in workshops, clubs, and activities that help develop leadership, teamwork, and other soft skills.',
        },
        {
            question: '3. Are there opportunities for students to engage in community service?',
            answer: 'Yes, we provide guidance on finding and participating in meaningful community service projects.',
        },
        {
            question: '4. Do you offer any extracurricular coaching for IB students?',
            answer: 'We offer extracurricular coaching in areas like public speaking, debate, creative writing, and coding.',
        },
        {
            question: '5. How do you help students maintain a balance between academics and extracurricular activities?',
            answer: 'We assist in creating balanced schedules that prioritize both academic success and personal growth.',
        },
        {
            question: '6. Do you organize any workshops or seminars for IB students?',
            answer: 'Yes, we organize workshops on various topics, including time management, stress relief, and exam techniques.',
        },
        {
            question: '7. Can you help students develop their portfolios for university applications?',
            answer: 'Yes, we provide guidance on creating impressive portfolios, including CAS reflections, personal projects, and achievements.',
        },
        {
            question: '8. Do you have any leadership programs for IB students?',
            answer: 'We offer leadership training and activities to help students develop essential leadership skills.',
        },
        {
            question: '9. Are there opportunities for students to participate in international events?',
            answer: 'We guide students in participating in international conferences, competitions, and exchange programs.',
        },
        {
            question: '10. Do you offer career counseling for IB students?',
            answer: 'Yes, we provide career counseling sessions to help students explore potential career paths and university options.',
        },
    ];

    const parentInvolvementFAQs: FAQItem[] = [
        {
            question: '1. How do you involve parents in the coaching process?',
            answer: 'We keep parents informed through regular updates, progress reports, and parent-teacher meetings.',
        },
        {
            question: '2. Can parents attend coaching sessions if they wish to understand the process?',
            answer: 'Parents are welcome to attend specific sessions or workshops to gain insight into the coaching process.',
        },
        {
            question: '3. Do you provide resources for parents to support their child\'s IB journey?',
            answer: 'Yes, we offer parent workshops, guides, and resources to help them support their child\'s learning.',
        },
        {
            question: '4. How often do you communicate with parents?',
            answer: 'We communicate with parents regularly through monthly reports, emails, and scheduled meetings.',
        },
        {
            question: '5. Can parents reach out to teachers with concerns or queries?',
            answer: 'Yes, parents can contact teachers via email or scheduled calls to discuss any concerns or queries.',
        },
        {
            question: '6. Are there any parent-teacher meetings conducted?',
            answer: 'We conduct parent-teacher meetings at regular intervals to discuss student progress and address concerns.',
        },
        {
            question: '7. Do you provide workshops for parents on the IB curriculum?',
            answer: 'Yes, we conduct workshops to help parents understand the IB curriculum and how they can support their child\'s learning.',
        },
        {
            question: '8. How do you handle feedback from parents?',
            answer: 'We value parent feedback and regularly incorporate it to improve our coaching services.',
        },
        {
            question: '9. Do you offer any guidance for parents on helping students with time management?',
            answer: 'Yes, we provide tips and strategies for parents to help their children manage time effectively.',
        },
        {
            question: '10. Can parents track their child\'s attendance and participation?',
            answer: 'Yes, parents have access to an online portal where they can track their child\'s attendance and participation.',
        },
    ];

    

    return (
        <div className=' container mx-auto px-14 py-5 text-justify max-w-6xl'>
            <FAQ faqs={coachingFAQs} title="Coaching FAQs" />
            <FAQ faqs={classStructureFAQs} title="Class Structure and Student Interaction" />
            <FAQ faqs={curriculumFAQs} title="IB Curriculum Alignment and Syllabus Coverage" />
            <FAQ faqs={languageFAQs} title="Language and Bilingual Support" />
            <FAQ faqs={extracurricularFAQs} title="Extracurricular Activities and Holistic Development" />
            <FAQ faqs={parentInvolvementFAQs} title="Parent Involvement and Communication" />

        </div>
    );
};

export default CombinedFAQPage;