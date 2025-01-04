// components/IBComparison.tsx
import React from 'react';


const IBCore: React.FC = () => {



    return (
        <div className="container mx-auto px-14 py-5 text-justify">

            <h1 className="text-2xl font-bold mb-4">
                1. Introduction to the Core Components of the IB Diploma
            </h1>
            <p className="mb-4">
                The Core Components of the International Baccalaureate Diploma Program
                (DP) are integral to the holistic education that the program promotes.
                These components—Theory of Knowledge (TOK), the Extended Essay (EE), and
                Creativity, Activity, Service (CAS)—are designed to foster critical
                thinking, independent research, and personal growth, enabling students
                to explore the broader purposes of education. Together, these elements
                aim to shape well-rounded individuals who are capable of reflecting on
                their learning, engaging with complex ideas, and contributing to
                society in meaningful ways. In the following sections, we will explore
                each of these core components in greater detail.
            </p>

            {/* Theory of Knowledge (TOK) */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Theory of Knowledge (TOK)</h2>
                <p className="mb-4">
                    Theory of Knowledge (TOK) is one of the defining features of the IB
                    Diploma Program, providing students with a framework for critically
                    reflecting on the nature of knowledge itself. This course challenges
                    students to explore how knowledge is acquired and understood,
                    encouraging them to question assumptions, examine the reliability of
                    sources, and consider the cultural and historical contexts in which
                    knowledge is constructed.
                </p>
                <p className="mb-4">
                    The TOK course focuses on areas of knowledge (AOKs) such as the
                    natural sciences, human sciences, history, ethics, and the arts.
                    Students are encouraged to investigate the ways in which knowledge is
                    produced in these areas and to evaluate the strengths and limitations
                    of different methods of inquiry. In addition, the course explores
                    ways of knowing (WOKs) such as reason, perception, emotion, and
                    language, helping students understand the role these elements play in
                    shaping our understanding of the world.
                </p>
                <p className="mb-4">
                    A key component of TOK is the TOK essay, which requires students to
                    explore a prescribed title and develop a coherent argument that
                    addresses a knowledge question. The essay challenges students to
                    present and analyze different perspectives and to draw on examples
                    from various disciplines. In addition, students must complete a TOK
                    presentation, in which they analyze a real-world issue or situation
                    through the lens of TOK concepts.
                </p>
                <p className="mb-4">
                    Overall, TOK aims to cultivate critical thinking, encouraging
                    students to reflect on how they know what they know and how this
                    understanding influences their decision-making and worldview. The
                    course helps students develop an open-minded and inquisitive
                    approach to knowledge, making it an essential component of the IB
                    Diploma.
                </p>
            </div>

            {/* Extended Essay (EE) */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Extended Essay (EE)</h2>
                <p className="mb-4">
                    The Extended Essay (EE) is an independent research project that
                    allows IB students to delve deeply into a topic of their choice,
                    typically within one of the subjects they are studying for the
                    Diploma. The EE provides an opportunity for students to develop
                    research, writing, and analytical skills, as they work through the
                    entire research process, from formulating a research question to
                    presenting their findings in a 4,000-word essay.
                </p>
                <p className="mb-4">
                    The EE is a student-driven project, allowing them to explore a
                    subject they are passionate about in a focused, academic manner.
                    Students must choose a topic that is appropriate for in-depth research
                    and that fits within the framework of the IB subjects. They are
                    expected to consult with a supervisor who provides guidance and
                    feedback throughout the research and writing process.
                </p>
                <p className="mb-4">
                    The EE is assessed based on several criteria, including the quality
                    of the research question, the organization and structure of the essay,
                    the critical analysis and use of evidence, and the clarity and
                    coherence of the writing. In addition to these academic elements,
                    students must demonstrate self-reflection and an understanding of the
                    research process through reflections on planning and progress (RPPF),
                    which tracks their development throughout the project.
                </p>
                <p className="mb-4">
                    The Extended Essay plays a crucial role in developing skills such as
                    independent research, time management, and academic writing. It
                    provides students with a taste of university-level research and
                    offers an excellent opportunity for students to demonstrate
                    intellectual curiosity and depth of knowledge. For many students, the
                    EE is a highlight of the IB experience, as it encourages independent
                    learning and exploration of areas of interest.
                </p>
            </div>

            {/* Creativity, Activity, Service (CAS) */}
            <div>
                <h2 className="text-xl font-semibold mb-4">
                    Creativity, Activity, Service (CAS)
                </h2>
                <p className="mb-4">
                    Creativity, Activity, Service (CAS) is a core component of the IB
                    Diploma that emphasizes the importance of personal development
                    outside the classroom. CAS encourages students to engage in
                    activities that promote their physical, emotional, and intellectual
                    growth, while also fostering a sense of responsibility toward others
                    and the community.
                </p>
                <p className="mb-4">The CAS program is structured around three strands:</p>
                <ul className="list-decimal pl-6 mb-4">
                    <li>
                        <span className="font-semibold">Creativity:</span> This strand
                        focuses on engaging in creative pursuits, such as visual arts,
                        music, drama, or design. Students are encouraged to explore their
                        artistic talents and engage in activities that challenge them to
                        think creatively and problem-solve.
                    </li>
                    <li>
                        <span className="font-semibold">Activity:</span> This strand
                        promotes physical activity and encourages students to participate
                        in sports, exercise, or outdoor activities. The goal is to develop
                        a healthy lifestyle while fostering qualities such as perseverance,
                        teamwork, and leadership.
                    </li>
                    <li>
                        <span className="font-semibold">Service:</span> The service
                        component requires students to engage in meaningful community
                        service activities that contribute to the well-being of others.
                        Whether through volunteer work, social action projects, or
                        environmental initiatives, students are expected to demonstrate
                        empathy and take an active role in addressing societal issues.
                    </li>
                </ul>
                <p className="mb-4">
                    Throughout the CAS program, students are encouraged to set personal
                    goals, reflect on their experiences, and document their progress. CAS
                    is not about accumulating a number of hours but about making a
                    genuine commitment to growth, learning, and contributing to society.
                    The focus is on fostering a balanced lifestyle that extends beyond
                    academic achievement.
                </p>
                <p className="mb-4">
                    By engaging in CAS, students develop important life skills such as
                    leadership, collaboration, time management, and reflection. They also
                    gain a sense of fulfillment by making a positive impact on the
                    community and developing a broader perspective on the world.
                    Ultimately, CAS plays a crucial role in helping students become
                    well-rounded individuals with a strong sense of social responsibility.
                </p>
            </div>
        </div>
    );
};

export default IBCore;