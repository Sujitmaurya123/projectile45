import React from 'react'


const topics = [
    "natural numbers",
    "integers (positive, zero, and negative)",
    "prime numbers",
    "square numbers",
    "cube numbers",
    "common factors",
    "common multiples",
    "rational and irrational numbers",
    "reciprocals",
];

const examples = [
    "Convert between numbers and words, e.g., six billion is 6000000000 or 10007 is ten thousand and seven.",
    "Express 72 as a product of its prime factors.",
    "Find the highest common factor (HCF) of two numbers.",
    "Find the lowest common multiple (LCM) of two numbers.",
];
const SubjectContent:React.FC= () => {
  return (
    <>  
    <div>
          <p className="text-gray-800">
              This syllabus gives you the flexibility to design a course that will
              interest, challenge, and engage your learners. Where appropriate, you
              are responsible for selecting resources and examples to support your
              learners’ study. These should be appropriate for the learners’ age,
              cultural background, and learning context, as well as complying with
              your school policies and local legal requirements.
          </p>
          <p className="text-gray-800">
              Learners should pursue an integrated course that allows them to fully
              develop their skills and understanding both with and without the use of
              a calculator.
          </p>
          <p className="text-gray-800">
              Candidates study either the Core subject content or the Extended
              subject content. Candidates aiming for grades A* to C should study the
              Extended subject content.
          </p>
          <p className="text-gray-800">
              A List of formulas is provided on page 2 of the examination papers for
              candidates to refer to during the examinations. Please note that not
              all required formulas are given; the ‘Notes and examples’ column of the
              subject content will indicate where a formula is given in the
              examination papers and when a formula is not given, i.e., knowledge of
              a formula is required.
          </p>
      </div>
          <div className="container mx-auto p-4 text-gray-600">
              <h1 className="text-2xl font-bold text-headingcol">Core Subject Content</h1>
              <h2 className="text-xl font-semibold mt-4 text-gray-700">1. Number</h2>
              <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                  <div className="flex-1">
                      <h3 className="text-lg font-semibold bg-red-100 px-2 py-1 rounded-md">C1.1 Types of Number</h3>
                      <ul className="list-disc list-inside mt-2 text-gray-800">
                          {topics.map((topic, index) => (
                              <li key={index}>{topic}</li>
                          ))}
                      </ul>
                  </div>

                  <div className="flex-1">
                      <h3 className="text-lg font-semibold bg-red-100 px-2 py-1 rounded-md">Notes and Examples</h3>
                      <ul className="list-disc list-inside mt-2 text-gray-800">
                          {examples.map((example, index) => (
                              <li key={index}>{example}</li>
                          ))}
                      </ul>
                  </div>
              </div>

          </div>
    </>
  )
}

export default SubjectContent