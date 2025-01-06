// components/VerbalReasoningSection.tsx
import React from 'react';

const VerbalReasoningSection: React.FC = () => {
    return (
        <div className="container mx-auto p-4 max-w-6xl">
            <h2 className="text-xl font-bold mb-4">VERBAL REASONING SECTION</h2>
            <p className="mb-4">
                The Verbal Reasoning section of the GRE General Test assesses critical
                reading, vocabulary usage, and analytical skills. It includes three types
                of questions:
            </p>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">1. Reading Comprehension:</h3>
                <ul className="list-disc pl-6 mb-2">
                    <li>Tests your ability to understand and interpret written material.</li>
                    <li>You&apos;ll read passages and answer related questions.</li>
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">2. Text Completion:</h3>
                <ul className="list-disc pl-6 mb-2">
                    <li>Requires filling in blanks within a passage using context clues.</li>
                    <li>Focuses on understanding sentence structure and logical flow.</li>
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">3. Sentence Equivalence:</h3>
                <ul className="list-disc pl-6 mb-2">
                    <li>
                        Involves completing a sentence with two words that create meaningfully
                        similar sentences.
                    </li>
                    <li>Tests vocabulary and comprehension of nuanced word meanings.</li>
                </ul>
            </div>

            <p className="mb-4">
                About half of the Verbal Reasoning questions involve passage-based tasks,
                while the rest focus on interpreting and completing individual sentences
                or short paragraphs.
            </p>

            {/* Reading Comprehension Details Section */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                    Reading Comprehension in GRE Verbal Reasoning:
                </h3>
                <p className="mb-4">
                    The Reading Comprehension questions assess your ability to read and
                    critically evaluate texts similar to those encountered in graduate
                    school. This includes tasks like:
                </p>
                <ul className="list-disc pl-6 mb-2">
                    <li>Understanding meanings at word, sentence, and text levels.</li>
                    <li>
                        Distinguishing major points from minor ones and summarizing passages.
                    </li>
                    <li>
                        Drawing inferences, reasoning from incomplete data, and analyzing
                        text structure.
                    </li>
                    <li>
                        Evaluating arguments, identifying assumptions, and considering
                        alternative explanations.
                    </li>
                </ul>
                <p className="mb-4">
                    Active engagement is crucial, requiring you to:
                </p>
                <ul className="list-disc pl-6 mb-2">
                    <li>Ask questions, form hypotheses, and evaluate them.</li>
                    <li>
                        Relate the given text to broader contexts or external information.
                    </li>
                </ul>

                <h4 className="text-md font-semibold mt-4 mb-2">Passage Types and Sources</h4>
                <ul className="list-disc pl-6 mb-2">
                    <li>Structure: Most passages are one paragraph long, with a few longer ones</li>
                    <li>Topics: Content spans physical sciences, biological sciences, social sciences, business, arts, humanities, and everyday issues.</li>
                </ul>

                <h4 className="text-md font-semibold mt-4 mb-2">Question Types</h4>
                <ul className="list-disc pl-6 mb-2">
                    <li>1. Select a single correct answer.</li>
                    <li>2. Select multiple correct answers (e.g., choosing two or three correct options)</li>
                    <li>3. Select a sentence from the passage that answers the question or supports a claim.</li>
                </ul>

                <p className="mt-4">This question diversity ensures comprehensive evaluation, from vocabulary usage to logical reasoning. About half of Verbal Reasoning questions derive from passages, with 1-6 questions per passage</p>
            </div>
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Text Completion in GRE Verbal Reasoning</h2>
                <p className="mb-4">
                    Text Completion questions assess your ability to interpret and evaluate
                    incomplete passages by filling in missing words or phrases. This tests
                    your reasoning skills and understanding of context.
                </p>
                <h3 className="text-lg font-semibold mb-2">Question Structure:</h3>
                <ul className="list-disc pl-6 mb-4">
                    <li>Passage Length: 1 to 5 sentences.</li>
                    <li>Number of Blanks: 1 to 3 per passage.</li>
                    <li>
                        Answer Choices:
                        <ul className="list-disc pl-6 mt-2">
                            <li>1 Blank: 5 answer choices.</li>
                            <li>2-3 Blanks: 3 answer choices per blank.</li>
                        </ul>
                    </li>
                    <li>
                        Answer Independence: Choices for each blank function independently.
                        Selecting an answer for one blank doesn&apos;t affect other blanks.
                    </li>
                    <li>Scoring: No partial credit, all blanks must be filled correctly for points.</li>
                </ul>
                <h3 className="text-lg font-semibold mb-2">Key Skills Assessed:</h3>
                <ul className="list-disc pl-6">
                    <li>Understanding sentence structure and logical flow.</li>
                    <li>Reasoning from context and interpreting meaning.</li>
                    <li>Revising interpretations as more information becomes available.</li>
                </ul>
                <p className="mt-4">
                    To master this section, focus on expanding vocabulary, practicing
                    context-based reasoning, and identifying logical relationships in text.
                </p>
            </div>

            {/* Sentence Equivalence */}
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Sentence Equivalence in GRE Verbal Reasoning</h2>
                <p className="mb-4">
                    Sentence Equivalence questions assess your ability to complete a sentence
                    meaningfully while producing two sentences with similar meanings. This
                    section focuses on contextual vocabulary and logical reasoning.
                </p>
                <h3 className="text-lg font-semibold mb-2">Question Structure:</h3>
                <ul className="list-disc pl-6 mb-4">
                    <li>Sentence Format: Single sentence with one blank.</li>
                    <li>Answer Choices: Six possible words or phrases.</li>
                    <li>
                        Task: Select two correct answers that complete the sentence coherently
                        and produce equivalent meanings.
                    </li>
                    <li>Scoring: No partial credit, both correct choices must be selected.</li>
                </ul>
                <h3 className="text-lg font-semibold mb-2">Key Skills Assessed:</h3>
                <ul className="list-disc pl-6">
                    <li>Vocabulary Mastery: Knowing precise word meanings.</li>
                    <li>Contextual Reasoning: Using context clues to infer intended meanings.</li>
                    <li>Logical Consistency: Ensuring both choices fit the sentence&apos;s tone and meaning.</li>
                </ul>
                <p className="mt-4">
                    Success in this section requires a broad vocabulary, an understanding of
                    synonyms, and careful reading of context.
                </p>
            </div>

            {/* Quantitative Reasoning Overview */}
            <div>
                <h2 className="text-xl font-bold mb-4">Overview of the GRE Quantitative Reasoning Measure</h2>
                <p>The Quantitative Reasoning section of the GRE General Test evaluates:</p>
                <ul className="list-decimal pl-6 mt-4">
                    <li>
                        Basic Mathematical Skills: Fundamental arithmetic, algebra, geometry, and
                        data analysis.
                    </li>
                    <li>Understanding of Concepts: Grasping elementary mathematical principles.</li>
                    <li>Quantitative Reasoning: Applying quantitative methods to solve problems.</li>
                </ul>
            </div>
            {/* Content Areas Covered */}
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Content Areas Covered:</h2>
                <div>
                    <h3 className="text-lg font-semibold mb-2">1. Arithmetic:</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>
                            Integers: Divisibility, factorization, prime numbers, remainders,
                            even/odd numbers
                        </li>
                        <li>
                            Operations: Exponents, roots, percentages, ratios, rates, and
                            absolute values
                        </li>
                        <li>Concepts: Number lines, decimal representation, and numeric sequences</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">2. Algebra:</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Expressions: Operations with exponents, simplifying expressions</li>
                        <li>
                            Equations/Inequalities: Solving linear and quadratic equations,
                            simultaneous equations
                        </li>
                        <li>
                            Functions: Understanding relations, functions, graphs, slopes, and
                            intercepts
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">3. Geometry:</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Figures: Lines, circles, triangles, quadrilaterals, polygons, and 3D shapes</li>
                        <li>Measurements: Area, perimeter, volume, and angle measurement</li>
                        <li>Key Theorems: Pythagorean theorem (proofs not required).</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">4. Data Analysis:</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Statistics: Mean, median, mode, range, standard deviation, percentiles.</li>
                        <li>
                            Data Interpretation: Graphs (line, bar, circle), scatterplots, and
                            frequency tables
                        </li>
                        <li>
                            Probability: Elementary probability, conditional probability,
                            combinations, and permutations
                        </li>
                    </ul>
                </div>
            </div>

            {/* Question Types and Data Interpretation Sets */}
            <div>
                <h2 className="text-xl font-bold mb-4">
                    GRE Quantitative Reasoning: Question Types and Data Interpretation Sets
                </h2>
                <p className="mb-4">
                    The Quantitative Reasoning section features four types of questions
                    designed to assess a range of mathematical skills and reasoning
                    abilities
                </p>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">1. Quantitative Comparison Questions:</h3>
                    <p className="mb-2">Task: Compare two quantities, labeled Quantity A and Quantity B.</p>
                    <p className="mb-2">Answer Choices:</p>
                    <ul className="list-disc pl-6">
                        <li>Quantity A is greater.</li>
                        <li>Quantity B is greater.</li>
                        <li>The two quantities are equal</li>
                        <li>The relationship cannot be determined from the information provided.</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">
                        2. Multiple-Choice Questions-Select One Answer Choice:
                    </h3>
                    <p className="mb-2">
                        Task: Solve the problem and select the single correct answer from five
                        choices.
                    </p>
                    <p>Format Standard problem-solving format, covering all content areas</p>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">
                        3. Multiple-Choice Questions - Select One or More Answer Choices:
                    </h3>
                    <p className="mb-2">
                        Task: Choose one or more correct answers from a list (usually three to
                        seven options)
                    </p>
                    <p>
                        Scoring: Correct answers require selecting all valid choices, no
                        partial credit is awarded
                    </p>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">4. Numeric Entry Questions:</h3>
                    <p className="mb-2">Task: Enter the correct numerical answer directly into a blank box</p>
                    <p>Format: No answer choices provided, requiring precise calculations</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Data Interpretation Sets:</h3>
                    <p className="mb-2">Structure:</p>
                    <ul className="list-disc pl-6 mb-2">
                        <li>A set of multiple questions based on the same dataset.</li>
                        <li>
                            Data is presented through tables, graphs (bar, line, pie charts), or
                            other visual representations
                        </li>
                    </ul>
                    <p className="mb-2">Skills Assessed:</p>
                    <ul className="list-disc pl-6">
                        <li>Interpreting and analyzing data</li>
                        <li>Performing calculations and making inferences based on quantitative data.</li>
                    </ul>
                </div>
            </div>
            <h2 className="text-xl font-bold mb-4">
                Overview of the GRE Analytical Writing Measure
            </h2>
            <p className="mb-4">
                The Analytical Writing section assesses critical thinking and analytical
                writing skills by evaluating how well you:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Articulate and support complex ideas.</li>
                <li>Construct logical arguments.</li>
                <li>Maintain a focused and coherent discussion.</li>
            </ul>

            <p className="mb-4 font-semibold">
                Key Focus: This section doesn&apos;t test specific content knowledge but
                rather your ability to evaluate issues and communicate ideas clearly and
                effectively.
            </p>

            <h3 className="text-lg font-semibold mb-2">Task Structure:</h3>
            <div className="mb-6">
                <h4 className="text-md font-semibold mb-2">&quot;Analyze an Issue&quot; Task</h4>
                <p className="mb-2">Format: A 30-minute task presenting an opinion on an issue.</p>
                <p className="mb-2">Task Requirements:</p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Evaluate the issue and explore its complexities.</li>
                    <li>Develop a reasoned argument with supporting examples.</li>
                    <li>Maintain clarity, logic, and coherence throughout the essay.</li>
                </ul>
                <p className="mb-4 font-semibold">
                    Key Focus: This section doesn&apos;t test specific content knowledge but
                    rather your ability to evaluate issues and communicate ideas clearly and
                    effectively.
                </p>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Writing Environment:</h3>
                <h4 className="text-md font-semibold mb-2">ETS Word Processor</h4>
                <ul className="list-disc pl-6 mb-4">
                    <li>Basic functionalities: insert, delete, cut, paste, and undo.</li>
                    <li>No spell check or grammar-check tools are provided.</li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Preparation Tips:</h3>
                <ol className="list-decimal pl-6">
                    <li>
                        <span className="font-semibold">Understand Scoring Criteria:</span> Review
                        official scoring guides and rubrics.
                    </li>
                    <li>
                        <span className="font-semibold">Practice with Prompts:</span> Use sample
                        topics and essay responses from ETS.
                    </li>
                    <li>
                        <span className="font-semibold">Read Rater Commentary:</span> Learn how
                        essays are evaluated for content, clarity, and organization.
                    </li>
                </ol>
            </div>
            <p className="mt-4">The topics cover a wide range of subjects, from arts and humanities to social and physical sciences, without requiring subject-specific knowledge.</p>
        </div>
    );
};

export default VerbalReasoningSection;