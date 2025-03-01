import { Metadata } from 'next';
import React from 'react'

interface ContentItem {
    title: string;
}

export const metadata: Metadata = {
    title: "IBDP Maths Analysis & Approaches",
    description: "Access IBDP Maths AA past papers, sample questions, and expert strategies with P45’s top tutors to master the subject and improve your IB scores.",
    keywords: ["ib subjects", "ib diploma subjects", "ib maths", "International Baccalaureate",
        "international baccalaureate program"],
}

const contentItems: ContentItem[] = [
    { title: 'Mathematics: analysis and approaches higher level paper 1 specimen paper' },
    { title: 'Mathematics: analysis and approaches higher level paper 1 markscheme' },
    { title: 'Mathematics: analysis and approaches higher level paper 2 specimen paper' },
    { title: 'Mathematics: analysis and approaches higher level paper 2 markscheme' },
    { title: 'Mathematics: analysis and approaches higher level paper 3 specimen paper' },
    { title: 'Mathematics: analysis and approaches higher level paper 3 markscheme' },
    { title: 'Mathematics: analysis and approaches standard level paper 1 specimen paper' },
    { title: 'Mathematics: analysis and approaches standard level paper 1 markscheme' },
    { title: 'Mathematics: analysis and approaches standard level paper 2 specimen paper' },
    { title: 'Mathematics: analysis and approaches standard level paper 2 markscheme' },
];

const IBDPMathsAnalysisApproachesPapers: React.FC = () => {
    return (
        <div className="container  p-4 max-w-6xl  mx-auto ">
            <section>

                <h1 className="text-4xl font-bold  text-center text-headingcol">Mathematics: Analysis and
                    Approaches</h1>
                <p className="text-xl font-bold mb-4 text-center text-headingcol">
                    (Higher level and Standard level)</p>
                <p className="text-2xl font-bold  text-center text-headingcol">Specimen Papers 1, 2 and 3</p>
                <p className="text-xl  text-center text-headingcol">First Examinations in 2021</p>
                <p className="text-2xl font-bold mb-2 mt-5 text-center text-headingcol">CONTENTS</p>


                <div className='flex items-center justify-center '>
                    <ul className="list-disc pl-6 text-lg font-semibold text-gray-700">
                        {contentItems.map((item, index) => (
                            <li key={index} className="mb-2">
                                {item.title}
                            </li>
                        ))}
                    </ul>

                </div>
            </section>
            <section>
                <div className="container mx-auto p-8 shadow-lg"> {/* Container with padding */}
                    <div className=" p-8"> {/* Card-like styling */}
                        <div className="flex justify-between items-center mb-6"> {/* Header section */}
                            <div>
                                <h1 className="text-2xl font-bold">Mathematics: Analysis and Approaches</h1>
                                <p className="text-lg">Higher level</p>
                                <p className="text-lg">Paper 1</p>
                                <p className="mb-2 mt-5">Specimen Paper</p>
                            </div>
                            <div className="text-right"> {/* Right-aligned text */}
                                <p className="mt-2">Candidate Session Number</p>
                                <div className="border border-black w-50 h-8"> {/* Session number box */}
                                    {/* You can add input fields here if needed */}
                                </div>
                            </div>
                        </div>

                        <div className="mb-6"> {/* Time and Instructions */}
                            <p className="text-lg mb-2">2 hours</p>
                            <h2 className="text-xl font-semibold mb-2">Instructions To Candidates</h2>
                            <ul className="list-disc pl-6 text-lg">
                                <li>Write your session number in the boxes above.</li>
                                <li>Do not open this examination paper until instructed to do so.</li>
                                <li>You are not permitted access to any calculator for this paper.</li>
                                <li>Section A: answer all questions. Answers must be written within the answer boxes provided.</li>
                                <li>Section B: answer all questions in the answer booklet provided. Fill in your session number on the front of the answer booklet, and attach it to this examination paper and your cover sheet using the tag provided.</li>
                                <li>Unless otherwise stated in the question, all numerical answers should be given exactly or correct to three significant figures.</li>
                                <li>A clean copy of the <strong>mathematics: analysis and approaches formula booklet</strong> is required for this paper.</li>
                                <li>The maximum mark for this examination paper is <strong>[110 marks]</strong>.</li>
                            </ul>
                        </div>

                        {/* Example Image Integration (Replace with your actual image path) */}
                        {/* <div className="mt-8">  
          <Image src="/path/to/your/image.png" alt="Exam Instructions Image" width={800} height={600} />
        </div> */}
                        <p>Full marks are not necessarily awarded for a correct answer with no working. Answers must be
                            supported by working and/or explanations. Where an answer is incorrect, some marks may be given
                            for a correct method, provided this is shown by written working. You are therefore advised to show all
                            working.</p>
                    </div>
                </div>
            </section>
            <section className='p-5 shadow-lg'>
                <p className='text-center text-2xl  font-semibold'>Section A</p>
                <p>Answer all questions. Answers must be written within the answer boxes provided. Working may be
                    continued below the lines, if necessary.</p>

                    <ul className='mt-2 '>
                    <li>1. [Maximum mark: 5]</li>
                    <li>Let A and B be events such that P(A) = 0.5, P(B) = 0.4 and P(A ∪ B) = 0.6.
                        Find P(A | B) .</li>
                    </ul>
                    <ul className='mt-4'>
                    <li>2. [Maximum mark: 5]</li>
                    <li>(a) Show that (2n - 1)²+ (2n + 1)²= 8n²+2 
                        , where n ∈ * .</li>
                    <li>(b) Hence, or otherwise, prove that the sum of the squares of any two consecutive odd
                        integers is even.</li>
                    </ul>
                <ul className='mt-4'>
                    <li>3. [Maximum mark: 5]</li>
                    <li>Let f&apos;(x) =8x/√(2x²+1)
                        . Given that f (0) = 5, find f (x)</li>
                    </ul>
                <ul className='mt-4'>
                    <li>4. [Maximum mark: 5]</li>
                    <li>The following diagram shows the graph of y =f (x). The graph has a horizontal asymptote
                        at y = -1. The graph crosses the x-axis at x = -1 and x = 1, and the y-axis at y = 2.</li>
                    <li>On the following set of axes, sketch the graph of y = [ f (x)]² = 1 , clearly showing any asymptotes with their equations and the coordinates of any local maxima or minima.</li>
                    </ul>

                    <ul className='mt-4'>
                    <li>5.[Maximum mark: 5]</li>
                    <li>The functions f and g are defined such that f (x) =  x + 3/ 4
                        and g (x) = 8x + 5 .</li>
                    <li>

                        (a)Show that ( g ∘ f )(x) = 2x + 11 .</li>
                    <li>
                      (b)Given that ( g ∘ f )^-1(a) = 4 , find the value of a .</li>
                    </ul>

                    <ul className='mt-4'>
                    <li>6.	[Maximum mark: 8]</li>
                    <li>(a)	Show that log9 (cos 2x + 2) + log3 + √(cos2x+2)</li>
                    <li>(b)Hence or otherwise solve log (2 sin x) = log (cos 2x + 2) for 0 {`<`} x {`<`} л/2 .</li>
                    </ul>
                    <ul>
                        <li></li>
                    </ul>
            </section>
        </div>
    );
};

export default IBDPMathsAnalysisApproachesPapers;