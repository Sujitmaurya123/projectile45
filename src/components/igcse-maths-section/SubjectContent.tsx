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

          <div className="mb-6 flex  ">
              <div className="mb-6">
                  <h2 className="text-xl font-semibold text-headingcol mb-2">1 Number (continued)</h2>
                  <div className="list-disc pl-6 text-gray-600">
                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C1.2 Sets</li>
                              <li>Understand and use set language, notation and Venn diagrams to describe sets.</li>
                          </ul>
                      </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                              <li>Venn diagrams are limited to two sets. The following set notation will be used:</li>
                              <li>n(A) Number of elements in set A</li>
                              <li>A&apos; Complement of set A</li>
                              <li>Universal set</li>
                              <li>A ∪ B Union of A and B</li>
                              <li>A ∩ B Intersection of A and B.</li>
                              <li>Example definition of sets:</li>
                              <li>A = {`{`}x: x is a natural number {`}`}</li>
                                  <li>B ={`{`} a, b, c, ...{`}`}</li>
                                  <li>C ={`{`} x: a ≤ x ≤ b.{`}`}</li>
                          </ul>
                      </section>
                  </div>

                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6 mt-6">
                          <section className="max-w-sm">
                          <ul className="list-disc pl-6">
                              <li className="mt-2 font-medium list-none mb-3 bg-red-100">C1.3 Powers and roots</li>
                              <li>Calculate with the following:</li>
                              <li>squares</li>
                              <li>square roots</li>
                              <li>cubes</li>
                              <li>cube roots</li>
                              <li>other powers and roots of numbers.</li>
                          </ul>
                      </section>
                      <section className="max-w-sm">
                          <ul className="list-disc pl-6">
                              <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                              <li>Includes recall of squares and their corresponding roots from 1 to 15, and recall of cubes and their corresponding roots of 1, 2, 3, 4, 5 and 10, e.g.:</li>
                              <li>Write down the value of √169.</li>
                              <li>Work out 5² x ³√8.</li>
                          </ul>
                      </section>
                  </div>

                  <div className="flex flex-col md:flex-row justify-center items-start space-x-6 mt-6">
                      <section className="max-w-sm">
                          <ul className="list-disc pl-6">
                              <li className="mt-2 font-medium list-none mb-3 bg-red-100">C1.4 Fractions, decimals and percentages</li>
                              <li>1 Use the language and notation of the following in appropriate contexts:</li>
                              <li>proper fractions</li>
                              <li>improper fractions</li>
                              <li>mixed numbers</li>
                              <li>decimals</li>
                              <li>percentages.</li>
                              <li>2 Recognise equivalence and convert between these forms.</li>
                          </ul>
                      </section>
                      <section className="max-w-sm">
                          <ul className="list-disc pl-6">
                              <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                              <li>Candidates are expected to be able to write fractions in their simplest form.</li>
                              <li>Candidates are not expected to use recurring decimal notation.</li>
                              <li>Candidates are not expected to demonstrate the conversion of a recurring decimal to a fraction and vice versa.</li>
                          </ul>
                      </section>
                  </div>

                  <div className="flex flex-col md:flex-row justify-center items-start space-x-6 mt-6">
                      <section className="max-w-sm">
                          <ul className="list-disc pl-6">
                              <li className="mt-2 font-medium list-none mb-3 bg-red-100">C1.5 Ordering</li>
                              <li>Order quantities by magnitude and demonstrate familiarity with the symbols {`=`}, {`>`}, {`<`}, and ≥.</li>
                          </ul>
                      </section>
                      <section className="max-w-sm">
                          <ul className="list-disc pl-6">
                              <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                          </ul>
                      </section>
                  </div>

              </div>
          </div>

        </div>

          <div className="mb-6 flex">
              <div className="mb-6">
                  <h2 className="text-xl font-semibold text-headingcol mb-2">1 Number (continued)</h2>
                  <div className="list-disc pl-6 text-gray-600">
                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C1.6 The four operations</li>
                                  <li>Use the four operations for calculations with integers, fractions and decimals, including correct ordering of operations and use of brackets.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                                  <li>Includes:</li>
                                  <li>negative numbers</li>
                                  <li>improper fractions</li>
                                  <li>mixed numbers</li>
                                  <li>practical situations, e.g. temperature changes.</li>
                              </ul>
                          </section>
                      </div>

                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6 mt-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C1.7 Indices I</li>
                                  <li>1 Understand and use indices (positive, zero and negative integers).</li>
                                  <li>2 Understand and use the rules of indices.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                                  <li>e.g. find the value of \(7^{-2}.\)</li>
                                  <li>e.g. find the value of \(2^{-3}\times2^{4}, (2^{3})^{2}, 2^{3}\div2^{4}\)</li>
                              </ul>
                          </section>
                      </div>

                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6 mt-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C1.8 Standard form</li>
                                  <li>1 Use the standard form A x 10^n where in is a positive or negative integer and {`1< A<10.`}</li>
                                  <li>2 Convert numbers into and out of standard form.</li>
                                  <li>3 Calculate with values in standard form.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                                  <li>Core candidates are expected to calculate with standard form only on Paper 3.</li>
                              </ul>
                          </section>
                      </div>

                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6 mt-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C1.9 Estimation</li>
                                  <li>1 Round values to a specified degree of accuracy.</li>
                                  <li>2 Make estimates for calculations involving numbers, quantities and measurements.</li>
                                  <li>3 Round answers to a reasonable degree of accuracy in the context of a given problem.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                                  <li>Includes decimal places and significant figures.</li>
                                  <li>e.g. write 5764 correct to the nearest thousand.</li>
                                  <li>e.g. by writing each number correct to 1 significant figure, estimate the value of 41.3/9.79x0.765</li>
                              </ul>
                          </section>
                      </div>

                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6 mt-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C1.10 Limits of accuracy</li>
                                  <li>Give upper and lower bounds for data rounded to a specified accuracy.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                                  <li>e.g. write down the upper bound of a length measured correct to the nearest metre.</li>
                                  <li>Candidates are not expected to find the bounds of the results of calculations which have used data rounded to a specified accuracy.</li>
                              </ul>
                          </section>
                      </div>

                  </div>
              </div>
          </div>

          
          <div className="mb-6 flex">
              <div className="mb-6">
                  <h2 className="text-xl font-semibold text-headingcol mb-2">1 Number (continued)</h2>
                  <div className="list-disc pl-6 text-gray-600">
                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C1.11 Ratio and proportion</li>
                                  <li>Understand and use ratio and proportion to:</li>
                                  <li>• give ratios in their simplest form</li>
                                  <li>• divide a quantity in a given ratio</li>
                                  <li>• use proportional reasoning and ratios in context.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                                  <li>e.g. 20:30:40 in its simplest form is 2:3:4.</li>
                                  <li>e.g. adapt recipes, use map scales; determine best value.</li>
                              </ul>
                          </section>
                      </div>

                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6 mt-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C1.12 Rates</li>
                                  <li>1 Use common measures of rate.</li>
                                  <li>2 Apply other measures of rate.</li>
                                  <li>3 Solve problems involving average speed.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                                  <li>e.g. calculate with:</li>
                                  <li>• hourly rates of pay</li>
                                  <li>• exchange rates between currencies</li>
                                  <li>• flow rates</li>
                                  <li>• fuel consumption.</li>
                                  <li>e.g. calculate with:</li>
                                  <li>• pressure</li>
                                  <li>• density</li>
                                  <li>• population density.</li>
                                  <li>Required formulas will be given in the question.</li>
                                  <li>Knowledge of speed/distance/time formula is required.</li>
                                  <li>e.g. A cyclist travels 45 km in 3 hours 45 minutes. What is their average speed?</li>
                                  <li>Notation used will be, e.g. m/s (metres per second), g/cm³ (grams per cubic centimetre).</li>
                              </ul>
                          </section>
                      </div>

                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6 mt-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C1.13 Percentages</li>
                                  <li>1 Calculate a given percentage of a quantity.</li>
                                  <li>2 Express one quantity as a percentage of another.</li>
                                  <li>3 Calculate percentage increase or decrease.</li>
                                  <li>4 Calculate with simple and compound interest.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                                  <li>Formulas are not given.</li>
                                  <li>Percentage calculations may include:</li>
                                  <li>• deposit</li>
                                  <li>• discount</li>
                                  <li>• profit and loss (as an amount or a percentage)</li>
                                  <li>• earnings</li>
                                  <li>• percentages over 100%.</li>
                              </ul>
                          </section>
                      </div>
                  </div>
              </div>
          </div>


          <div className="mb-6 flex">
              <div className="mb-6">
                  <h2 className="text-xl font-semibold text-headingcol mb-2">1 Number (continued)</h2>
                  <div className="list-disc pl-6 text-gray-600">
                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C1.14 Using a calculator</li>
                                  <li>1 Use a calculator efficiently.</li>
                                  <li>2 Enter values appropriately on a calculator.</li>
                                  <li>3 Interpret the calculator display appropriately.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                                  <li>e.g. know not to round values within a calculation and to only round the final answer.</li>
                                  <li>e.g. enter 2 hours 30 minutes as 2.5 hours or 2° 30' 0".</li>
                                  <li>e.g. in money 4.8 means $4.80; in time 3.25 means 3 hours 15 minutes.</li>
                              </ul>
                          </section>
                      </div>

                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6 mt-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C1.15 Time</li>
                                  <li>1 Calculate with time: seconds (s), minutes (min), hours (h), days, weeks, months, years, including the relationship between units.</li>
                                  <li>2 Calculate times in terms of the 24-hour and 12-hour clock.</li>
                                  <li>3 Read clocks and timetables.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                                  <li>1 year = 365 days.</li>
                                  <li>In the 24-hour clock, for example, 3.15 a.m. will be denoted by 0315 and 3.15 p.m. by 15 15.</li>
                                  <li>Includes problems involving time zones, local times and time differences.</li>
                              </ul>
                          </section>
                      </div>

                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6 mt-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C1.16 Money</li>
                                  <li>1 Calculate with money.</li>
                                  <li>2 Convert from one currency to another.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                              </ul>
                          </section>
                      </div>

                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6 mt-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C1.17 Extended content only.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                              </ul>
                          </section>
                      </div>

                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6 mt-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C1.18 Extended content only.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                              </ul>
                          </section>
                      </div>

                  </div>
              </div>
          </div>

          <div className="mb-6 flex">
              <div className="mb-6">
                  <h2 className="text-xl font-semibold text-headingcol mb-2">2 Algebra and graphs</h2>
                  <div className="list-disc pl-6 text-gray-600">
                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C2.1 Introduction to algebra</li>
                                  <li>1 Know that letters can be used to represent generalised numbers.</li>
                                  <li>2 Substitute numbers into expressions and formulas.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                              </ul>
                          </section>
                      </div>

                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6 mt-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C2.2 Algebraic manipulation</li>
                                  <li>1 Simplify expressions by collecting like terms.</li>
                                  <li>2 Expand products of algebraic expressions.</li>
                                  <li>3 Factorise by extracting common factors.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                                  <li>Simplify means give the answer in its simplest form, e.g. 2a + 3b + 5a - 9b = 7a - 6b.</li>
                                  <li>e.g. expand 3x(2x - 4y).</li>
                                  <li>Includes products of two brackets involving one variable, e.g. expand (2x + 1)(x - 4).</li>
                                  <li>Factorise means factorise fully, e.g. 9x^2 + 15xy = 3x(3x + 5y).</li>
                              </ul>
                          </section>
                      </div>

                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6 mt-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C2.3 Extended content only.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                              </ul>
                          </section>
                      </div>

                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6 mt-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C2.4 Indices II</li>
                                  <li>1 Understand and use indices (positive, zero and negative).</li>
                                  <li>2 Understand and use the rules of indices.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                                  <li>e.g. 2^x = 32. Find the value of x.</li>
                                  <li>e.g. simplify:</li>
                                  <ul>
                                      <li>(5x)^2</li>
                                      <li>12a^5 ÷ 3a^-2</li>
                                      <li>6xy x 5xy^2</li>
                                  </ul>
                                  <li>Knowledge of logarithms is not required.</li>
                              </ul>
                          </section>
                      </div>

                      <div className="flex flex-col md:flex-row justify-center items-start space-x-6 mt-6">
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-2 font-medium list-none mb-3 bg-red-100">C2.5 Equations</li>
                                  <li>1 Construct simple expressions, equations and formulas.</li>
                                  <li>2 Solve linear equations in one unknown.</li>
                                  <li>3 Solve simultaneous linear equations in two unknowns.</li>
                                  <li>4 Change the subject of simple formulas.</li>
                              </ul>
                          </section>
                          <section className="max-w-sm">
                              <ul className="list-disc pl-6">
                                  <li className="mt-4 font-medium list-none mb-3 bg-red-100">Notes and examples</li>
                                  <li>e.g. write an expression for a number that is 2 more than x.</li>
                                  <li>Includes constructing linear simultaneous equations.</li>
                                  <li>Examples include:</li>
                                  <ul>
                                      <li>3x + 4 = 10</li>
                                      <li>5 - 2x = 3(x + 7)</li>
                                  </ul>
                                  <li>e.g. change the subject of formulas where:</li>
                                  <ul>
                                      <li>the subject only appears once</li>
                                      <li>there is not a power or root of the subject.</li>
                                  </ul>
                              </ul>
                          </section>
                      </div>

                  </div>
              </div>
          </div>

          
        
    </>
  )
}

export default SubjectContent