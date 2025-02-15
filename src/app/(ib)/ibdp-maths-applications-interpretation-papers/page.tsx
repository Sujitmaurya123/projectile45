import React from 'react'

interface ContentItem {
    title: string;
}

const contentItems: ContentItem[] = [
    { title: 'Mathematics: applications and interpretation higher level paper 1 specimen paper' },
    { title: 'Mathematics: applications and interpretation higher level paper 1 markscheme' },
    { title: 'Mathematics: applications and interpretation higher level paper 2 specimen paper' },
    { title: 'Mathematics: applications and interpretation higher level paper 2 markscheme' },
    { title: 'Mathematics: applications and interpretation higher level paper 3 specimen paper' },
    { title: 'Mathematics: applications and interpretation higher level paper 3 markscheme' },
    { title: 'Mathematics: applications and interpretation standard level paper 1 specimen paper' },
    { title: 'Mathematics: applications and interpretation standard level paper 1 markscheme' },
    { title: 'Mathematics: applications and interpretation standard level paper 2 specimen paper' },
    { title: 'Mathematics: applications and interpretation standard level paper 2 markscheme' },
];

const IBDPMathsApplicationsInterpretationPapers: React.FC = () => {
    return (
        <div className="container  p-4 max-w-6xl  mx-auto ">
            <section>

                <h1 className="text-4xl font-bold mb-2 text-center text-headingcol">Mathematics: Applications and
                    Interpretation</h1>
                <p className="text-xl font-bold mb-4 text-center text-headingcol">
                    (Higher level and Standard level)</p>




                <p className="text-2xl font-bold  text-center text-headingcol">Specimen Papers 1, 2 and 3</p>
                <p className="text-2xl font-bold  text-center text-headingcol">First Examinations in 2021</p>
                <p className="text-2xl font-bold mb-2 mt-5 text-center text-headingcol">CONTENTS</p>


                <div className='flex items-center justify-center '>
                    <ul className="list-disc pl-6 ">
                        {contentItems.map((item, index) => (
                            <li key={index} className="mb-2">
                                {item.title}
                            </li>
                        ))}
                    </ul>

                </div>
            </section>
            <section>
                <div className="container mx-auto p-8"> {/* Container with padding */}
                    <div className=" p-8"> {/* Card-like styling */}
                        <div className="flex justify-between items-center mb-6"> {/* Header section */}
                            <div>
                                <h1 className="text-2xl font-bold">Mathematics: Applications and Interpretation</h1>
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
                                <li>A clean copy of the <strong>mathematics: applications and interpretation formula booklet</strong> is required for this paper.</li>
                                <li>The maximum mark for this examination paper is <strong>[110 marks]</strong>.</li>
                            </ul>
                        </div>

                        {/* Example Image Integration (Replace with your actual image path) */}
                        {/* <div className="mt-8">  
          <Image src="/path/to/your/image.png" alt="Exam Instructions Image" width={800} height={600} />
        </div> */}
                        <p>Answers must be written within the answer boxes provided. Full marks are not necessarily awarded
                            for a correct answer with no working. Answers must be supported by working and/or explanations.
                            Solutions found from a graphic display calculator should be supported by suitable working. For example,
                            if graphs are used to find a solution, you should sketch these as part of your answer. Where an answer
                            is incorrect, some marks may be given for a correct method, provided this is shown by written working.
                            You are therefore advised to show all working.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IBDPMathsApplicationsInterpretationPapers;