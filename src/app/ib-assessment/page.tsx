// components/IBAssessmentSystem.tsx
import React from 'react';

const IBAssessmentSystem: React.FC = () => {
    return (
        <div className="container mx-auto p-4 text-justify">
            <h1 className="text-2xl font-bold mb-4">
                4. Introduction to the IB Assessment System
            </h1>
            <p className="mb-4">
                The IB assessment system is designed to evaluate a student&apos;s knowledge,
                skills, and understanding across the full spectrum of the International
                Baccalaureate Diploma Program. The system is comprehensive, assessing
                students through a combination of internal and external evaluations.
                The goal is to ensure that the assessment process is rigorous, fair,
                and aligned with the philosophy of the IB, which focuses on developing
                students&apos; critical thinking, independent learning, and holistic
                development. Below, we explore the grading scale, the differences
                between internal and external assessments, and how students can
                interpret their IB scores.
            </p>

            {/* Grading Scale and Criteria */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Grading Scale and Criteria</h2>
                <p className="mb-4">
                    The IB grading scale for the Diploma Program (DP) uses a numerical
                    system from 1 to 7, with 7 being the highest score possible. This
                    grading scale is applied to each subject, and the final grade is
                    based on the student&apos;s performance in both internal assessments (IA)
                    and external assessments (EA).
                </p>
                <p className="mb-4">
                    Each subject in the IB program is assessed according to specific
                    criteria, which are designed to evaluate students&apos; understanding of
                    the subject content as well as their ability to apply knowledge in a
                    variety of contexts. The criteria are clearly outlined in each
                    subject guide and include specific skills, such as analysis,
                    evaluation, and synthesis, that students must demonstrate in their
                    assessments.
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Scores of 1 to 3 typically indicate a lower level of achievement.</li>
                    <li>Scores of 4 to 5 indicate satisfactory to good performance.</li>
                    <li>Scores of 6 to 7 represent excellent to outstanding achievement.</li>
                </ul>
                <p className="mb-4">
                    Additionally, the Extended Essay (EE) and Theory of Knowledge (TOK)
                    are also graded on a scale from A to E, where A is the highest grade.
                    Students can earn up to 3 bonus points based on their combined
                    performance in the EE and TOK components, which contribute to the
                    total diploma score.
                </p>
            </div>

            {/* Internal vs. External Assessments */}
            <div>
                <h2 className="text-xl font-semibold mb-4">
                    Internal vs. External Assessments
                </h2>
                <p className="mb-4">
                    One of the unique aspects of the IB assessment system is the
                    combination of internal assessments (IA) and external assessments
                    (EA).
                </p>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">1. Internal Assessments (IA):</h3>
                    <p className="mb-4">
                        These assessments are designed and graded by teachers, although they
                        are subject to moderation by external examiners to ensure
                        consistency and fairness across the IB system. Internal assessments
                        typically include projects, presentations, essays, and practical
                        work, depending on the subject. For example, in sciences, the IA
                        might involve conducting an experiment, while in languages, it
                        could involve oral assessments. These assessments are an essential
                        part of the student&apos;s grade, often making up 20% to 30% of the final
                        score.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">2. External Assessments (EA):</h3>
                    <p className="mb-4">
                        These are the exams that are externally set, administered, and
                        marked. They form the bulk of the assessment in many subjects and
                        are held at the end of the IB program, typically in May or
                        November. External assessments include written exams, which may
                        involve essays, problem-solving tasks, or multiple-choice questions,
                        depending on the subject. These assessments ensure that a student&apos;s
                        performance is measured against international standards and is
                        independent of teacher bias.
                    </p>
                </div>
                <p className="mb-4">
                    Both types of assessments are important, as they contribute to the
                    final grade and help to ensure a balanced evaluation of the student&apos;s
                    abilities, with external assessments providing an objective measure
                    of performance, while internal assessments allow for a deeper
                    exploration of a student&apos;s work throughout the year.
                </p>
            </div>
            <h2 className="text-xl font-bold mb-4">Understanding Your IB Scores</h2>

            <p className="mb-4">
                Once the assessments are completed, students receive their final IB
                scores, which are used for university admissions and other
                post-secondary opportunities. The maximum score a student can achieve
                is 45 points, with 42 points coming from six subjects (each scored
                from 1 to 7), and a maximum of 3 bonus points awarded for the EE and
                TOK components.
            </p>

            <h3 className="text-lg font-semibold mb-2">Here&apos;s how the scoring works:</h3>
            <ol className="list-decimal pl-6 mb-4">
                <li>Each subject contributes a score from 1 to 7.</li>
                <li>
                    The Extended Essay and Theory of Knowledge together can contribute a
                    maximum of 3 bonus points.
                </li>
                <li>
                    Bonus points are awarded based on the quality of work in the EE and
                    TOK. These bonus points are not simply added to the subject grades;
                    instead, they are combined with the overall subject score.
                </li>
            </ol>

            <p className="mb-4">
                For example, a student with the following scores:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>6 in Biology</li>
                <li>7 in Chemistry</li>
                <li>6 in English</li>
                <li>5 in Mathematics</li>
                <li>7 in History</li>
                <li>6 in Spanish</li>
            </ul>
            <p className="mb-4">
                Would have a total of 37 points. If they score B for both EE and TOK
                (which gives them 2 bonus points), their final score would be 39 points.
            </p>

            <p className="mb-4">
                Understanding your IB scores is key to planning your next steps. Many
                universities set specific IB score requirements, which vary by country
                and institution. A score of 35-40 points is often considered
                competitive, but some highly selective universities may expect scores
                of 40+. Furthermore, the individual subject scores also play an
                important role, as universities may have specific subject requirements
                for admission.
            </p>

            <p className="mb-4">
                In conclusion, the IB assessment system provides a comprehensive and
                balanced approach to evaluating students&apos; capabilities. By
                incorporating both internal and external assessments, the IB ensures
                that students are evaluated in a fair, rigorous, and holistic manner,
                with clear criteria and grading scales to guide them through the
                process.
            </p>
        </div>
    );
};

export default IBAssessmentSystem;