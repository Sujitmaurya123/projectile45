

import SubjectContent from '@/components/igcse-maths-section/SubjectContent';

import SyllabusOverview from '@/components/igcse-maths-section/SyllabusOverview';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
    title: "IGCSE Mathematics | Expert Tutoring & Past Papers",
    description: "Master IGCSE Mathematics with expert tutoring, past papers, and problem-solving techniques. Improve your grades with personalized learning from P45 tutors.",
    keywords: ["igcse syllabus",
        "igcse maths past papers",
        "igcse mathematics past papers",
        "igcse tuition",
        "igcse maths tutor"],
}

const IGCSEMaths: React.FC = () => {
    const iGCSEData = {
        title: 'Cambridge IGCSE is the world’s most popular international qualification for 14 to 16 year olds, although it can be taken by students of other ages. It is tried, tested and trusted.',
        description: 'Students can choose from 70 subjects in any combination – it is taught by over 4500 schools in over 140 countries.',
        benefits: [
            'Our programmes balance a thorough knowledge and understanding of a subject and help to develop the skills learners need for their next steps in education or employment.',
            'Cambridge IGCSE Mathematics supports learners in building competency, confidence and fluency in their use of techniques and mathematical understanding.',
            'Learners develop a feel for quantity, patterns and relationships, as well as developing reasoning, problem-solving and analytical skills in a variety of abstract and real-life contexts.',
            'Cambridge IGCSE Mathematics provides a strong foundation of mathematical knowledge both for candidates studying mathematics at a higher level and those who will require mathematics to support skills in other subjects.',
        ],
        features: [
            'The course is tiered to allow all candidates to achieve and progress in their mathematical studies.',
            'Our approach in Cambridge IGCSE Mathematics encourages learners to be:',
            'confident, in using mathematical language and techniques to ask questions, explore ideas and communicate',
            'responsible, by taking ownership of their learning, and applying their mathematical knowledge and skills so that they can reason, problem solve and work collaboratively',
            'reflective, by making connections within mathematics and across other subjects, and in evaluating methods and checking solutions',
            'innovative, by applying their knowledge and understanding to solve unfamiliar problems creatively, flexibly and efficiently',
            'engaged, by the beauty, patterns and structure of mathematics, becoming curious to learn about its many applications in society and the economy',
        ],
    };

    

    return (
        <div className="container mx-auto px-14 py-5 text-justify max-w-6xl">
            {/* IGCSE Section */}
            <div className="container mx-auto  text-gray-600">
                <div className=" mx-auto   flex flex-col-reverse lg:flex-row items-center gap-8">
                    {/* Text Section */}
                    <div className=" lg:text-left lg:w-3/4 space-y-4 ">
                        <p className="text-2xl font-semibold text-justify text-headingcol">{iGCSEData.title}</p>
                        <p className="text-gray-700">{iGCSEData.description}</p>

                        <div className="space-y-2">
                            {iGCSEData.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <span className="text-gray-600"> {benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-1/2 flex  justify-end">
                        <Image
                            src="/images/igcsemaths.png"
                            alt="iGCSE Maths"
                           
                            width={550}
                            height={550}
                        />
                    </div>
                </div>


                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4 text-headingcol">Key Features</h2>
                    <ul className="list-disc ml-6">
                        {iGCSEData.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Syllabus-Overview */}
            <SyllabusOverview/>
            {/* Subject-Content */}
            <SubjectContent/>
            

           
        </div>
    );
};

export default IGCSEMaths;
