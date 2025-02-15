import React from 'react'

interface ContentItem {
    title: string;
}

const contentItems: ContentItem[] = [
    { title: 'Physics higher level paper 1A specimen question paper' },
    { title: 'Physics higher level paper 1A specimen markscheme' },
    { title: 'Physics higher level paper 1B specimen question paper ' },
    { title: 'Physics higher level paper 1B specimen markscheme ' },
    { title: 'Physics higher level paper 2 specimen question paper ' },
    { title: 'Physics higher level paper 2 specimen markscheme ' },
    { title: 'Physics standard level paper 1A specimen question paper ' },
    { title: 'Physics standard level paper 1A specimen markscheme' },
    { title: 'Physics standard level paper 1B specimen question paper ' },
    { title: 'Physics standard level paper 1B specimen markscheme' },
    { title: 'Physics standard level paper 2 specimen question paper ' },

    { title: 'Physics standard level paper 2 specimen markscheme' },

];

const IBDPPhysicsPapers: React.FC = () => {
    return (
        <div className="container  p-4 max-w-6xl  mx-auto ">
            <section>

                <h1 className="text-4xl font-bold mb-2 text-center text-headingcol">Physics
                    Higher and Standard level
                    </h1>
                <p className="text-xl font-bold mb-4 text-center text-headingcol">
                    (Higher level and Standard level)</p>




                <p className="text-2xl font-bold  text-center text-headingcol">Specimen papers 1A, 1B and 2</p>
                <p className="text-2xl font-bold  text-center text-headingcol">First examinations in 2025</p>
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
                                <h1 className="text-2xl font-bold">Physics</h1>
                                <p className="text-lg">Higher level</p>
                                <p className="text-lg">Paper 1</p>
                                <p className="mb-2 mt-5">Specimen paper</p>
                            </div>
                            
                        </div>

                        <div className="mb-6"> {/* Time and Instructions */}
                            <p className="text-lg mb-2">2 hours [Paper 1A and Paper 1B]</p>
                            <h2 className="text-xl font-semibold mb-2">Instructions to candidates</h2>
                            <ul className="list-disc pl-6 text-lg">
                               
                                <li>Do not open this examination paper until instructed to do so.</li>
                                <li>Answer all questions.</li>
                                <li>For each question, choose the answer you consider to be the best and indicate your choice on
                                    the answer sheet provided.</li>
                                <li> A calculator is required for this paper.</li>
                                <li>Unless otherwise stated in the question, all numerical answers should be given exactly or correct to three significant figures.</li>
                                <li>A clean copy of the <strong>physics data booklet</strong> is required for this paper.</li>
                                <li>The maximum mark for paper 1A is <strong>[40 marks]</strong>.</li>
                                <li>The maximum mark for paper 1A and paper 1B is <strong>[60 marks]</strong></li>

                            </ul>
                        </div>

                    
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IBDPPhysicsPapers;