// components/IGCSECurriculum.tsx

import Link from 'next/link';
import React from 'react';



const IGCSECurriculum: React.FC= () => {
    return (
        <div className="container mx-auto px-14 py-5 text-justify max-w-6xl">
            <h1 className="text-3xl font-bold mb-4 text-headingcol text-center">IGCSE Curriculum</h1>
            <p className="text-lg mb-4 text-gray-500">
                The Cambridge IGCSE curriculum offers a variety of routes for learners with a wide
                range of abilities, including those whose first language is not English.
            </p>
            <ul className="list-disc ml-6 text-gray-500">
                <li>
                    We help schools build a programme around their specific needs. Starting from a
                    foundation of core subjects, it is easy to add breadth and cross-curricular perspectives.
                </li>
                <li>
                    Encouraging learners to engage with a variety of subjects, and make connections
                    between them, is fundamental to our approach.
                </li>
            </ul>

            <p className="text-lg mb-4 text-gray-500">
                For schools, Cambridge IGCSE offers a flexible and stimulating curriculum, supported
                with excellent resources and training.
            </p>
            <p className="text-lg mb-4 text-gray-500">
                For learners, Cambridge IGCSE helps improve performance by developing skills in
                creative thinking, enquiry and problem solving. It is the perfect springboard to advanced
                study.
            </p>

            <p className="text-lg mb-4 text-gray-500">
                There are over <Link className='text-blue-600 cursor-pointer underline' href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-igcse/subjects/" target='_blank' >70 subjects</Link>  available at Cambridge IGCSE, including 30 languages, and
                schools can offer them in any combination. Cambridge IGCSE develops learner
                knowledge, understanding and skills in:
            </p>
            <ul className="list-disc ml-6 text-gray-500">
                <li>Subject content</li>
                <li>Applying knowledge and understanding to new as well as familiar situations</li>
                <li>Intellectual enquiry</li>
                <li>Flexibility and responsiveness to change</li>
                <li>Working and communicating in English</li>
                <li>Influencing outcomes</li>
                <li>Cultural awareness.</li>
            </ul>

            <p className="text-lg mb-4 text-gray-500">
                Schools worldwide have been involved in the development of Cambridge IGCSE. The
                syllabuses are international in outlook, but retain a local relevance. They have been
                created specifically for an international student body and avoid cultural bias.
            </p>
            
            <p className='text-gray-500'>Find out more about <Link href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-igcse/subjects/" className='text-blue-600 cursor-pointer underline' target='_blank'>Cambridge IGCSE subjects</Link>.</p>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-headingcol">
                What is the difference between IGCSE Core and IGCSE Extended?
            </h2>
            <p className="text-lg mb-4 text-gray-500">
                To take into account differing abilities, there is a choice between Core and Extended
                curriculum papers in some subjects.
            </p>
            <ul className="list-disc ml-6 text-gray-500">
                <li>
                    The Core curriculum is within the ability range of a large majority of students. It provides
                    a full overview of the subject and is targeted at students expected to achieve grades C
                    to G.
                </li>
                <li>
                    The Extended curriculum has been designed for the more academically able. It is
                    targeted at those expected to achieve grades A* to E.
                </li>
            </ul>
            <p className='mt-5 text-gray-500'>Find out more about <Link href="https://help.cambridgeinternational.org/hc/en-gb/articles/203494082-What-is-the-difference-between-IGCSE-Core-and-Extended" className='text-blue-600 cursor-pointer underline' target='_blank'>IGCSE Core and IGCSE Extended</Link>.</p>
            <p className='text-gray-500'> Source: <Link href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-igcse/curriculum/" className='text-blue-600 cursor-pointer underline' target='_blank'>Go to website</Link></p>
        </div>
    );
};

export default IGCSECurriculum;