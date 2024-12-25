"use client"
import React, { useState } from 'react';

const IBFAQ: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            question: '1. Common Misconceptions about IB',
            answer: (
                <>
                    <p className="mb-2">
                        While the International Baccalaureate (IB) program is renowned for
                        its rigor and global recognition, several misconceptions can deter
                        potential candidates from pursuing it. Let&apos;s address some of the
                        most common misunderstandings about the IB curriculum:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>
                            <span className="font-semibold">Myth 1: IB is only for the top-performing students.</span>{' '}
                            <p>While the IB Diploma Program (DP) is challenging, it is designed to accommodate students from diverse academic backgrounds. The program emphasizes critical thinking, global awareness, and well-rounded learning rather than just academic excellence. Students are encouraged to engage with various disciplines and are supported by teachers to succeed at their own pace. It&apos;s not about being the best in every subject; it&apos;s about growing as a thinker and a global citizen.</p>
                        </li>
                        <li>
                            <span className="font-semibold">Myth 2: IB is too difficult for students with average grades.</span>
                            <p>The IB program can indeed be demanding, but it is also structured to support all students. With its emphasis on inquiry-based learning, creativity, and service, students have the flexibility to approach subjects in a way that aligns with their strengths. Furthermore, teachers and mentors provide guidance, and the continuous assessment model gives students the chance to improve over time.</p>
                        </li>
                        <li>
                            <span className="font-semibold">Myth 3: The IB Diploma is the same as a regular high school diploma.</span>
                            <p>The IB Diploma Program (DP) is distinctively different from a regular high school diploma in terms of academic rigor and holistic development. The program integrates critical thinking, global perspectives, and personal development through unique components like Theory of Knowledge (TOK), Extended Essay (EE), and Creativity, Activity, Service (CAS). These elements are designed to foster independent research, self-discipline, and global awareness, which are not typically included in a regular diploma curriculum.</p>
                        </li>
                        <li>
                            <span className="font-semibold">Myth 4: Students need to be fluent in multiple languages to succeed in IB.</span>
                            <p>While proficiency in multiple languages is beneficial, it is not a strict requirement for success in the IB program. The IB offers various language options, including Language Acquisition and Language and Literature, allowing students to pursue subjects in their native or second languages. Many schools also offer additional language support for non-native speakers.</p>
                        </li>
                        <li>
                            <span className="font-semibold">Myth 5: The IB program is too time-consuming and leaves no room for extracurricular activities.</span>
                            <p>The CAS (Creativity, Activity, Service) component encourages students to engage in extracurricular activities, emphasizing a balanced approach to academic and personal development. While IB students may face a rigorous academic schedule, they are encouraged to manage their time effectively to participate in sports, arts, community service, and leadership activities.</p>
                        </li>
                    </ul>
                </>
            ),
        },
        {
            question: '2. IB for Students with Special Needs',
            answer: (
                <>
                    <p className="mb-2">
                        The IB Program is inclusive, and it aims to cater to a wide range of
                        learners, including those with special educational needs. While the
                        curriculum is rigorous, IB schools are required to provide
                        appropriate accommodations for students with disabilities or
                        learning challenges. Here&apos;s how the IB addresses the needs of
                        students with special requirements:
                    </p>
                    <h4 className="text-lg font-semibold mb-2">Individualized Support:</h4>
                    <p className="mb-2">
                        IB schools are encouraged to create personalized support plans for
                        students with special needs, which may include extended exam time,
                        use of assistive technology, or modified assessments. These
                        accommodations allow students to demonstrate their knowledge
                        without being disadvantaged by their learning difficulties.
                    </p>
                    <h4 className="text-lg font-semibold mb-2">IB Access and Inclusion Policy:</h4>
                    <p className="mb-2">
                        The IB&apos;s Access and Inclusion Policy ensures that all students,
                        regardless of their needs, have the opportunity to engage with the
                        curriculum. Students with learning difficulties, physical
                        disabilities, or other special needs are supported through
                        differentiated teaching methods, tailored resources, and
                        individualized assessments.
                    </p>
                    <h4 className="text-lg font-semibold mb-2">Professional Support:</h4>
                    <p className="mb-2">
                        Teachers are trained to accommodate students&apos; unique learning
                        needs. In many cases, schools offer additional tutoring or mentoring
                        support, and students may be given extra time for assessments or
                        allowed to take exams in a separate location. Students who require
                        a modified curriculum can also receive assistance to ensure they
                        meet the essential learning outcomes.
                    </p>
                    <h4 className="text-lg font-semibold mb-2">Conclusion:</h4>
                    <p>
                        IB is accessible to all students, including those with special
                        educational needs, provided there is the necessary support from both
                        the school and the students&apos; families. The program is designed to
                        offer a challenging yet flexible environment for growth and
                        learning.
                    </p>
                </>
            ),
        },
        {
            question: '3. How to Transition to IB from Other Curricula',
            answer: (
                <>
                    <p className="mb-2">
                        Transitioning from a different educational system to the IB
                        curriculum can be challenging but is certainly achievable with the
                        right support and preparation. The key differences between the IB
                        system and other curricula, such as national systems or even
                        A-Levels or AP programs, are in the scope, teaching approach, and
                        assessment styles. Here are steps to help make the transition
                        smoother:
                    </p>
                    <h4 className="text-lg font-semibold mb-2">Understanding the IB Approach:</h4>
                    <p className="mb-2">
                        Unlike traditional curricula that often focus on individual
                        subjects in isolation, the IB encourages a holistic approach to
                        education. The emphasis on critical thinking, interdisciplinary
                        connections, and the core components (i.e., Theory of Knowledge and
                        Extended Essay) might initially seem daunting, but these elements
                        develop essential skills that will benefit students in higher
                        education and beyond.
                    </p>
                    <h4 className="text-lg font-semibold mb-2">Step 1: Understand the Subject Structure</h4>
                    <p className="mb-2">
                        In the IB, students are required to take courses across six
                        subject groups, and these subjects span various disciplines. If
                        you&apos;re coming from a system with fewer subject options or more
                        specialized tracks (such as science, arts, or humanities), it&apos;s
                        important to familiarize yourself with the IB&apos;s wide-ranging
                        subject structure. You may find certain subjects more challenging,
                        but the Group 3 (Individuals and Societies) to Group 4 (Sciences)
                        options allow for a flexible approach to subject choices.
                    </p>
                    <h4 className="text-lg font-semibold mb-2">Step 2: Familiarize Yourself with the IB Core</h4>
                    <p className="mb-2">
                        The IB core elements—Theory of Knowledge (TOK), Extended Essay
                        (EE), and Creativity, Activity, Service (CAS)—represent a
                        significant departure from other curricula. TOK focuses on
                        philosophical inquiry and knowledge theories, while the Extended
                        Essay encourages independent research. Students will need to
                        develop strong time management and organizational skills to handle
                        these extra components alongside their regular subjects.
                    </p>
                    <h4 className="text-lg font-semibold mb-2">Step 3: Develop Effective Study Habits</h4>
                    <p className="mb-2">
                        Unlike other systems that may prioritize memorization, the IB
                        focuses on understanding and application of knowledge. This
                        requires students to engage with the material actively and
                        critically. If you are transitioning from a system that heavily
                        emphasizes rote learning, be prepared for a shift in how you
                        approach studying in the IB. Active learning, critical thinking,
                        and interdisciplinary connections are key components.
                    </p>
                    <h4 className="text-lg font-semibold mb-2">Step 4: Seek Support</h4>
                    <p className="mb-2">
                        Transitioning to the IB program may initially feel overwhelming,
                        especially in the first few months. It is important to seek
                        guidance from teachers and peers, join study groups, and utilize
                        available resources (e.g., past papers, study guides, and online
                        forums). Familiarizing yourself with IB terminology and assessment
                        methods (like marking rubrics) will help you adjust more quickly.
                    </p>
                    <h4 className="text-lg font-semibold mb-2">Step 5: Stay Organized and Manage Time Effectively</h4>
                    <p className="mb-2">
                        The IB Diploma Program demands consistent effort over two years.
                        Effective time management becomes essential to balancing academic,
                        extracurricular, and personal activities. Students transitioning to
                        IB should use planners, set goals, and keep a steady pace of study
                        to avoid last-minute stress.
                    </p>
                    <h4 className="text-lg font-semibold mb-2">Conclusion</h4>
                    <p>
                        The IB curriculum is designed to offer a rigorous and
                        comprehensive education that encourages intellectual curiosity and
                        global awareness. Addressing common misconceptions, ensuring
                        support for students with special needs, and making the transition
                        to IB from other educational systems are all important
                        considerations for students and their families. Understanding
                        these FAQs helps in preparing for the journey and making the
                        process smoother and more manageable for new IB students.
                    </p>
                </>
            ),
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions (FAQs) About the IB Curriculum</h2>
            <p className="mb-4">
                The International Baccalaureate (IB) curriculum is often surrounded by
                questions from parents, students, and educators, particularly for those
                new to the program. As a comprehensive and globally recognized academic
                pathway, the IB provides unique challenges and opportunities. This FAQ
                section addresses common misconceptions, the suitability of the program
                for students with special needs, and tips for transitioning into the IB
                from other curricula. These answers aim to clarify some of the most
                frequently asked questions and help students and their families make
                informed decisions about the IB journey.
            </p>

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

export default IBFAQ;