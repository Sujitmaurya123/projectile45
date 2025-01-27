import React from 'react'
import Link from 'next/link';


const SyllabusOverview:React.FC= () => {
    const aimsData = {
        aims: [
            'Develop a positive attitude towards mathematics in a way that encourages enjoyment, establishes confidence and promotes enquiry and further learning.',
            'Develop a feel for number and understand the significance of the results obtained.',
            'Apply their mathematical knowledge and skills to their own lives and the world around them.',
            'Use creativity and resilience to analyse and solve problems.',
            'Communicate mathematics clearly.',
            'Develop the ability to reason logically, make inferences and draw conclusions.',
            'Develop fluency so that they can appreciate the interdependence of, and connections between, different areas of mathematics.',
            'Acquire a foundation for further study in mathematics and other subjects.',
        ],
    };

    const contentOverviewData = {
        topics: [
            '1 Number',
            '2 Algebra and graphs',
            '3 Coordinate geometry',
            '4 Geometry',
            '5 Mensuration',
            '6 Trigonometry',
            '7 Transformations and vectors',
            '8 Probability',
            '9 Statistics',
        ],
        core: 'The Core subject content is intended for learners targeting grades C–G.',
        extended: 'The Extended subject content is intended for learners targeting grades A*–C. The Extended subject content contains the Core subject content as well as additional content.',
        note: 'The subject content is organised by topic and is not presented in a teaching order. This content structure and the use of tiering allows flexibility for teachers to plan delivery in a way that is appropriate for their learners. Learners are expected to use techniques listed in the content and apply them to solve problems with or without the use of a calculator, as appropriate.',
    };
  return (
    <>
         {/* Aims Section */}
                    <div className="container mx-auto text-gray-600">
                        <h2 className="text-2xl font-semibold mb-4 text-headingcol">Aims</h2>
                        <p className="mb-4">
                            The aims describe the purposes of a course based on this syllabus.
                        </p>
                        <ul className="list-disc ml-6">
                            {aimsData.aims.map((aim, index) => (
                                <li key={index}>{aim}</li>
                            ))}
                        </ul>
                    </div>
        
                    {/* Content Overview Section */}
                    <div className="container mx-auto py-16 text-gray-600">
                        <h2 className="text-2xl font-semibold mb-4 text-headingcol">Content Overview</h2>
                        <p className="mb-4">All candidates study the following topics:</p>
                        <ul className="list-disc ml-6">
                            {contentOverviewData.topics.map((topic, index) => (
                                <li key={index}>{topic}</li>
                            ))}
                        </ul>
        
                        <p className="mt-8">
                            Cambridge IGCSE Mathematics is tiered to enable effective differentiation for learners.
                        </p>
                        <ul className="list-disc ml-6">
                            <li>{contentOverviewData.core}</li>
                            <li>{contentOverviewData.extended}</li>
                        </ul>
        
                        <p className="mt-8">{contentOverviewData.note}</p>
                    </div>
        
                    {/* Assessment Overview */}
                    <div className="max-w-6xl mx-auto   ">
                        <h1 className="text-2xl font-bold text-headingcol mb-4">Assessment Overview</h1>
        
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">General Information</h2>
                            <p className="text-gray-600">
                                All candidates take two components. Candidates who have studied the Core subject content, or who are expected to achieve a grade D or below, should be entered for Paper 1 and Paper 3. These candidates will be eligible for grades C to G.
                            </p>
                            <p className="text-gray-600 mt-2">
                                Candidates who have studied the Extended subject content, and who are expected to achieve a grade C or above, should be entered for Paper 2 and Paper 4. These candidates will be eligible for grades A* to E.
                            </p>
                            <p className="text-gray-600 mt-2">
                                Candidates should have a scientific calculator for Paper 3 and Paper 4. Calculators are not allowed for Paper 1 and Paper 2.
                            </p>
                            <p className="text-gray-600 mt-2">
                                Please see the Cambridge Handbook at <Link href="https://www.cambridgeinternational.org/eoguide" target="_blank" className="text-blue-500 underline">www.cambridgeinternational.org/eoguide</Link> for guidance on the use of calculators in the examinations.
                            </p>
                        </div>
        
                        <div className="mb-6 ">
                            <h2 className="text-xl font-semibold text-headingcol mb-2">Core Assessment</h2>
                            <div className="list-disc pl-6 text-gray-600 ">
                                <p>Core candidates take Paper 1 and Paper 3. The questions are based on the Core subject content only:</p>
                                <div className="flex flex-col md:flex-row justify-center items-start space-x-6">
                                    <section >
                                        <ul className="list-disc pl-6">
                                            <li className="mt-2 font-medium list-none mb-3 bg-red-100">Paper 1: Non-calculator (Core)</li>
                                            <li>1 hour 30 minutes</li>
                                            <li>80 marks</li>
                                            <li>50%</li>
                                            <li>Structured and unstructured questions</li>
                                            <li>Use of a calculator is not allowed</li>
                                            <li>Externally assessed</li>
                                        </ul>
                                    </section>
                                    <section >
                                        <ul className="list-disc ">
                                            <li className="mt-2 font-medium list-none mb-3 bg-red-100">Paper 3: Calculator (Core)</li>
                                            <li>1 hour 30 minutes</li>
                                            <li>80 marks</li>
                                            <li>50%</li>
                                            <li>Structured and unstructured questions</li>
                                            <li>A scientific calculator is required</li>
                                            <li>Externally assessed</li>
                                        </ul>
                                    </section>
                                </div>
        
                            </div>
                        </div>
        
                        <div>
                            <h2 className="text-xl font-semibold text-headingcol mb-2">Extended Assessment</h2>
                            <div className="list-disc pl-6 text-gray-600">
                                <p>Extended candidates take Paper 2 and Paper 4. The questions are based on the Extended subject content only:</p>
                                <div className="flex flex-col md:flex-row justify-center items-start space-x-6">
                                    <section className="max-w-sm">
                                        <ul className="list-disc pl-6">
                                            <li className="mt-2 font-medium list-none mb-3 bg-red-100">Paper 2: Non-calculator (Extended)</li>
                                            <li>2 hours</li>
                                            <li>100 marks</li>
                                            <li>50%</li>
                                            <li>Structured and unstructured questions</li>
                                            <li>Use of a calculator is not allowed</li>
                                            <li>Externally assessed</li>
                                        </ul>
                                    </section>
                                    <section className="max-w-sm">
                                        <ul className="list-disc">
                                            <li className="mt-2 font-medium list-none mb-3 bg-red-100">Paper 4: Calculator (Extended)</li>
                                            <li>2 hours</li>
                                            <li>100 marks</li>
                                            <li>50%</li>
                                            <li>Structured and unstructured questions</li>
                                            <li>A scientific calculator is required</li>
                                            <li>Externally assessed</li>
                                        </ul>
                                    </section>
                                </div>
                                    <p>Information on availability is in the <strong>Before you start</strong>  section.</p>
        
                            </div>
                        </div>
                    </div>
                    {/* Assessment Objectives */}
                    <div className="flex flex-col  px-6 py-8 text-gray-600">
                        <h1 className="text-2xl text-headingcol font-bold mb-6">Assessment Objectives</h1>
                        <div className="max-w-4xl space-y-8">
                            <section>
                                <h2 className="text-xl font-semibold mb-4 text-headingcol">
                                    AO1 Knowledge and Understanding of Mathematical Techniques
                                </h2>
                                <p className="mb-4">
                                    Candidates should be able to:
                                </p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Recall and apply mathematical knowledge and techniques.</li>
                                    <li>Carry out routine procedures in mathematical and everyday situations.</li>
                                    <li>Understand and use mathematical notation and terminology.</li>
                                    <li>Perform calculations with and without a calculator.</li>
                                    <li>
                                        Organise, process, present, and understand information in written
                                        form, tables, graphs, and diagrams.
                                    </li>
                                    <li>
                                        Estimate, approximate, and work to degrees of accuracy appropriate
                                        to the context and convert between equivalent numerical forms.
                                    </li>
                                    <li>Understand and use measurement systems in everyday use.</li>
                                    <li>
                                        Measure and draw using geometrical instruments to an appropriate
                                        degree of accuracy.
                                    </li>
                                    <li>
                                        Recognise and use spatial relationships in two and three dimensions.
                                    </li>
                                </ul>
                            </section>
                            <section>
                                <h2 className="text-xl font-semibold mb-4 text-headingcol">
                                    AO2 Analyse, Interpret and Communicate Mathematically
                                </h2>
                                <p className="mb-4">
                                    Candidates should be able to:
                                </p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        Analyse a problem and identify a suitable strategy to solve it,
                                        including using a combination of processes where appropriate.
                                    </li>
                                    <li>Make connections between different areas of mathematics.</li>
                                    <li>
                                        Recognise patterns in a variety of situations and make and justify
                                        generalisations.
                                    </li>
                                    <li>
                                        Make logical inferences and draw conclusions from mathematical data
                                        or results.
                                    </li>
                                    <li>Communicate methods and results in a clear and logical form.</li>
                                    <li>
                                        Interpret information in different forms and change from one form of
                                        representation to another.
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>

        {/*  Weighting for Assessment Objectives*/}
          <div className="px-6 py-8 text-gray-600">
              <h1 className="text-2xl font-bold mb-6 text-headingcol">Weighting for Assessment Objectives</h1>
              <p className="mb-6">
                  The approximate weightings allocated to each of the assessment objectives (AOs) are summarised below.
              </p>

              {/* Core Qualification Table */}
              <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-headingcol">
                      Assessment objectives as a percentage of the Core qualification
                  </h2>
                  <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                          <thead className="bg-orange-100">
                              <tr>
                                  <th className="border border-gray-300 px-4 py-2 text-left">Assessment Objective</th>
                                  <th className="border border-gray-300 px-4 py-2 text-left">Weighting in IGCSE %</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td className="border border-gray-300 px-4 py-2">
                                      AO1 Knowledge and understanding of mathematical techniques
                                  </td>
                                  <td className="border border-gray-300 px-4 py-2">60–70</td>
                              </tr>
                              <tr>
                                  <td className="border border-gray-300 px-4 py-2">
                                      AO2 Analyse, interpret and communicate mathematically
                                  </td>
                                  <td className="border border-gray-300 px-4 py-2">30–40</td>
                              </tr>
                              <tr className="bg-gray-100">
                                  <td className="border border-gray-300 px-4 py-2 font-semibold">Total</td>
                                  <td className="border border-gray-300 px-4 py-2 font-semibold">100</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </section>

              {/* Extended Qualification Table */}
              <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-headingcol">
                      Assessment objectives as a percentage of the Extended qualification
                  </h2>
                  <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                          <thead className="bg-orange-100">
                              <tr>
                                  <th className="border border-gray-300 px-4 py-2 text-left">Assessment Objective</th>
                                  <th className="border border-gray-300 px-4 py-2 text-left">Weighting in IGCSE %</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td className="border border-gray-300 px-4 py-2">
                                      AO1 Knowledge and understanding of mathematical techniques
                                  </td>
                                  <td className="border border-gray-300 px-4 py-2">40–50</td>
                              </tr>
                              <tr>
                                  <td className="border border-gray-300 px-4 py-2">
                                      AO2 Analyse, interpret and communicate mathematically
                                  </td>
                                  <td className="border border-gray-300 px-4 py-2">50–60</td>
                              </tr>
                              <tr className="bg-gray-100">
                                  <td className="border border-gray-300 px-4 py-2 font-semibold">Total</td>
                                  <td className="border border-gray-300 px-4 py-2 font-semibold">100</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </section>

              {/* Component-Specific Weighting Table */}
              <section>
                  <h2 className="text-xl font-semibold mb-4 text-headingcol">
                      Assessment objectives as a percentage of each component
                  </h2>
                  <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                          <thead className="bg-orange-100">
                              <tr>
                                  <th className="border border-gray-300 px-4 py-2 text-left">Assessment Objective</th>
                                  <th className="border border-gray-300 px-4 py-2">Paper 1</th>
                                  <th className="border border-gray-300 px-4 py-2">Paper 2</th>
                                  <th className="border border-gray-300 px-4 py-2">Paper 3</th>
                                  <th className="border border-gray-300 px-4 py-2">Paper 4</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td className="border border-gray-300 px-4 py-2">
                                      AO1 Knowledge and understanding of mathematical techniques
                                  </td>
                                  <td className="border border-gray-300 px-4 py-2">60–70</td>
                                  <td className="border border-gray-300 px-4 py-2">40–50</td>
                                  <td className="border border-gray-300 px-4 py-2">60–70</td>
                                  <td className="border border-gray-300 px-4 py-2">40–50</td>
                              </tr>
                              <tr>
                                  <td className="border border-gray-300 px-4 py-2">
                                      AO2 Analyse, interpret and communicate mathematically
                                  </td>
                                  <td className="border border-gray-300 px-4 py-2">30–40</td>
                                  <td className="border border-gray-300 px-4 py-2">50–60</td>
                                  <td className="border border-gray-300 px-4 py-2">30–40</td>
                                  <td className="border border-gray-300 px-4 py-2">50–60</td>
                              </tr>
                              <tr className="bg-gray-100">
                                  <td className="border border-gray-300 px-4 py-2 font-semibold">Total</td>
                                  <td className="border border-gray-300 px-4 py-2 font-semibold">100</td>
                                  <td className="border border-gray-300 px-4 py-2 font-semibold">100</td>
                                  <td className="border border-gray-300 px-4 py-2 font-semibold">100</td>
                                  <td className="border border-gray-300 px-4 py-2 font-semibold">100</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </section>
          </div>
    </>
  )
}

export default SyllabusOverview