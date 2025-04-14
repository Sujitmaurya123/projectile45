import React from 'react';

const CourseOverview = () => {
    return (
        <div className=" p-8">
            <div className="max-w-6xl mx-auto space-y-12">
                <header className="text-center">
                    <h1 className="text-5xl font-semibold text-headingcol">IGCSE Physics - Complete Course Overview</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
                        Cambridge IGCSE Physics provides students with a deep understanding of fundamental physics concepts, experimental techniques, and problem-solving strategies. The syllabus is designed for learners aged 14-16 years and offers a strong foundation for higher-level studies such as A-Level, IB, and university-level STEM courses.

                    </p>
                    <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
                        This qualification emphasizes scientific inquiry, practical applications, and analytical skills, preparing students for real-world problem-solving and careers in science and engineering.
                    </p>
                </header>

                <section>
                    <h2 className="text-3xl font-semibold text-headingcol">Core Concepts & Learning Outcomes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 border rounded-md p-6 bg-gray-100">
                        {/* Motion, Forces & Energy */}
                        <div className="space-y-4 bg-white rounded-md p-4 shadow-md">
                            <h3 className="text-xl font-semibold text-headingcol">1️ Motion, Forces & Energy</h3>
                            <p className='text-gray-600'>
                              Understanding how objects move and interact with forces and energy.
                            </p>
                            <h6 className='text-gray-900'>1.1 Motion</h6>
                            <ul className="list-inside list-disc text-gray-600">
                                <li>Defining distance, displacement, speed, velocity, and acceleration</li>
                                <li>Interpreting distance-time and velocity-time graphs</li>
                                <li>Equations of motion:</li>
                                
                                <li>Free fall and acceleration due to gravity (g=9.8 m/s^2)</li>
                            </ul>
                            <h6 className='text-gray-900'>1.2 Forces & Newton’s Laws</h6>
                            <ul className='text-gray-600 list-inside list-disc'>
                                <li>Newton’s First Law: Objects remain at rest or in uniform motion unless acted upon by an external force</li>
                                
                                <li>Newton’s Third Law: Action-reaction pairs in interactions</li>
                                <li>Friction, air resistance, and terminal velocity</li>
                                <li>Circular motion: Centripetal force and real-life examples (e.g., satellites, roller coasters)</li>

                            </ul>
                            <h6 className='text-gray-900'>1.3 Momentum & Impulse</h6>
                            <ul className='text-gray-600 list-inside list-disc'>
                                <li>Momentum formula</li>
                                <li>Law of Conservation of Momentum</li>

                                <li>Impulse</li>

                            </ul>
                            <h6 className='text-gray-900'>1.4 Work, Energy & Power</h6>
                            <ul className='text-gray-600 list-inside list-disc' >
                                <li>Kinetic Energy formula: KE= 1/2 mv^2</li>
                                <li>Potential Energy formula: PE= mgh</li>

                                <li>Work Done: W= F x d</li>
                                <li>Power: P= W/t, efficiency calculations, and real-world applications</li>

                            </ul>

                        </div>

                        {/* Thermal Physics */}
                        <div className="space-y-4 bg-white rounded-md p-4 shadow-md ">
                            <h3 className="text-xl font-semibold text-headingcol">2️ Thermal Physics</h3>
                            <p className='text-gray-600'>Understanding heat, temperature, and energy transfer mechanisms.</p>
                            <h6 className='text-gray-900'>2.1 Kinetic Particle Theory</h6>
                            <ul className="list-inside list-disc text-gray-600">
                                <li>Properties of solids, liquids, and gases</li>
                                <li>Brownian motion and evidence for particle movement</li>
                                <li>Absolute zero (-273°C) and the Kelvin temperature scale</li>
                            </ul>
                            <h6 className='text-gray-900'>2.2 Thermal Expansion</h6>
                            <ul className='text-gray-600 list-inside list-disc'>
                                <li>Expansion in solids, liquids, and gases</li>
                                <li>Applications: Railway tracks, bridges, bimetallic strips</li>
                            </ul>
                            <h6 className='text-gray-900'>2.3 Heat Transfer</h6>
                            <ul className='text-gray-600 list-inside list-disc'>
                                <li>Conduction: Role of free electrons in metals</li>
                                <li>Convection: Density-driven movement in fluids</li>
                                <li>Radiation: Infrared waves and emission/absorption of heat</li>
                                <li>Applications: Greenhouse effect, vacuum flasks, thermal insulation</li>
                            </ul>
                            <h6 className='text-gray-900'>2.4 Specific Heat Capacity & Latent Heat</h6>
                            <ul className='text-gray-600 list-inside list-disc'>
                                <li>Formula for heat energy: Q=mcΔT</li>
                                <li>Latent heat formula: Q=ml (no temperature change during phase changes)</li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 border rounded-md p-6 bg-gray-100">
                        {/* Waves */}
                        <div className="space-y-4 bg-white rounded-md p-4 shadow-md">
                            <h3 className="text-xl font-semibold text-headingcol">3️ Waves</h3>
                            <p className='text-gray-600'>Understanding oscillations, sound, light, and electromagnetic waves.</p>
                            <h6 className='text-gray-900'>3.1 General Properties of Waves</h6>
                            <ul className="list-inside list-disc text-gray-600">
                                <li>Transverse vs. Longitudinal waves</li>
                                <li>Wave parameters: Wavelength, frequency, amplitude, speed</li>
                                <li>Wave equation: v=fλ</li>
                            </ul>
                            <h6 className='text-gray-900'>3.1 General Properties of Waves</h6>
                            <ul className='text-gray-600 list-inside list-disc'>
                                <li>Transverse vs. Longitudinal waves</li>
                                <li>Wave parameters: Wavelength, frequency, amplitude, speed</li>
                                <li>Wave equation: v=fλ</li>
                            </ul>
                            <h6 className='text-gray-900'>3.2 Sound</h6>
                            <ul className='text-gray-600 list-inside list-disc'>
                                <li>Speed of sound in air (~340 m/s), solids, and liquids</li>
                                <li>Echoes and ultrasound applications (medical scans, SONAR)</li>
                            </ul>
                            <h6 className='text-gray-900'>3.3 Light & Optics</h6>
                            <ul className='text-gray-600 list-inside list-disc'>
                                <li>Reflection Laws: Angle of incidence = angle of reflection</li>
                                <li>Refraction Index Formula: n= sin i/(sin r)</li>
                                <li>Total Internal Reflection: Fiber optics, periscopes</li>
                            </ul>
                            <h6 className='text-gray-900'>3.4 Electromagnetic Spectrum</h6>
                            <ul className='text-gray-600 list-inside list-disc'>
                                <li>Order: Radio waves → Microwaves → Infrared → Visible Light → UV → X-rays → Gamma rays</li>
                                <li>Uses and dangers of each wave type</li>
                            </ul>

                            
                        </div>

                        {/* Electricity & Magnetism */}
                        <div className="space-y-4 bg-white rounded-md p-4 shadow-md">
                            <h3 className="text-xl font-semibold text-headingcol"> Electricity & Magnetism</h3>
                            <p className='text-gray-600'>Understanding circuits, electrical energy, magnetism, and electromagnetism.</p>
                            <h6 className='text-gray-900'>4.1 Electric Circuits</h6>
                            <ul className="list-inside list-disc text-gray-600">
                                <li>Ohm’s Law: V=IR</li>
                                <li>Series vs. Parallel Circuits</li>
                                <li>Power and Energy equations: P=IV </li>
                            </ul>
                            <h6 className='text-gray-900'>4.2 Magnetism & Electromagnetism</h6>
                            <ul className='text-gray-600 list-inside list-disc'>
                                <li>Magnetic field patterns</li>
                                <li>Electromagnetic induction: Faraday’s Law, Transformers</li>
                            </ul>
                            <h6 className='text-gray-900'>4.3 Electrical Safety</h6>
                            <ul className='text-gray-600 list-inside list-disc'>
                                <li>Hazards: Damaged insulation, overheating, damp conditions</li>
                                <li>Fuses & Circuit Breakers</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 border rounded-md p-6 bg-gray-100">
                        {/* Nuclear Physics */}
                        <div className="space-y-4 bg-white rounded-md p-4 shadow-md">
                            <h3 className="text-xl font-semibold text-headingcol"> Nuclear Physics</h3>
                            <p className='text-gray-600'>Understanding atomic structure, radioactivity, and nuclear reactions.</p>
                            <h6 className='text-gray-900'>5.1 Atomic Structure</h6>
                            <ul className="list-inside list-disc text-gray-600">
                                <li>Protons, neutrons, electrons, isotopes</li>
                                
                            </ul>
                            <h6 className='text-gray-900'>5.2 Radioactivity</h6>
                            <ul className='text-gray-600 list-inside list-disc'>
                                <li>Alpha, beta, and gamma radiation: Penetration & ionization properties</li>
                                <li>Half-life calculations and decay equations</li>
                            </ul>
                            <h6 className='text-gray-900'>5.3 Nuclear Fission & Fusion</h6>
                            <ul className='text-gray-600 list-inside list-disc'>
                                <li>Nuclear power plants vs. energy production in the Sun</li>
                            </ul>
                        </div>

                        {/* Space Physics */}
                        <div className="space-y-4 bg-white rounded-md p-4 shadow-md">
                            <h3 className="text-xl font-semibold text-headingcol"> Space Physics</h3>
                            <p className='text-gray-600'>Understanding planetary motion, gravity, and the universe.</p>
                            <h6 className='text-gray-900'>6.1 The Solar System</h6>
                            <ul className="list-inside list-disc text-gray-600">
                                <li>Planets, moons, comets, asteroids</li>
                                <li>Gravitational Field Strength: g=9.8 m/s2</li>
                            </ul>
                            <h6 className='text-gray-900'>6.2 The Expanding Universe</h6>
                            <ul className='text-gray-600 list-inside list-disc'>
                                <li>Redshift & Hubble’s Law</li>
                                <li>The Big Bang Theory and Cosmic Microwave Background Radiation</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-headingcol mt-4">Assessment Structure</h2>
                    <h3 className='text-headingcol mt-2'>Assessment overview</h3>
                    <p className="mt-1 text-lg text-gray-600">
                        All candidates take three papers. Candidates who have studied the Core syllabus content, or who are expected to achieve a grade D or below, should be entered for Paper 1, Paper 3 and either Paper 5 or Paper 6. These candidates will be eligible for grades C to G. Candidates who have studied the Extended syllabus content (Core and Supplement), and who are expected to achieve a grade C or above, should be entered for Paper 2, Paper 4 and either Paper 5 or Paper 6. These candidates will be eligible for grades A* to G.
                    </p>
                </section>
           
                
                    

                    <main className="container mx-auto py-2 px-2 sm:px-3 lg:px-4">
                       
                        {/* Core Assessment */}
                        <section className="mb-8 border rounded-md p-6 bg-gray-100 text-gray-600">
                            <h2 className="text-xl font-semibold mb-4 text-headingcol">Core Assessment</h2>
                            <p className="mb-2">Core candidates take Paper 1 and Paper 3. The questions are based on the Core subject content only:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Paper 1 */}
                                <div className="bg-white rounded-md p-4 shadow-md">
                                    <h3 className="font-semibold mb-2 text-headingcol">Paper 1: Multiple Choice (Core)</h3>
                                    <ul className="list-disc list-inside text-sm">
                                        <li>Duration: 45 minutes</li>
                                        <li>Marks: 40</li>
                                        <li>Weighting: 30%</li>
                                        <li>Format: 40 four-option multiple-choice questions</li>
                                        <li>Assessment: Externally assessed</li>
                                    </ul>
                                </div>

                                {/* Paper 3 */}
                                <div className="bg-white rounded-md p-4 shadow-md">
                                    <h3 className="font-semibold mb-2 text-headingcol">Paper 3: Theory (Core)</h3>
                                    <ul className="list-disc list-inside text-sm">
                                        <li>Duration: 1 hour 15 minutes</li>
                                        <li>Marks: 80</li>
                                        <li>Weighting: 50%</li>
                                        <li>Format: Short-answer and structured questions</li>
                                        <li>Assessment: Externally assessed</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Extended Assessment */}
                        <section className="mb-8 border rounded-md p-6 bg-gray-100">
                            <h2 className="text-xl font-semibold mb-4 text-headingcol">Extended Assessment</h2>
                            <p className="mb-2 text-gray-600">Extended candidates take Paper 2 and Paper 4. The questions are based on the Core and Supplement subject content:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Paper 2 */}
                                <div className="bg-white rounded-md p-4 shadow-md">
                                    <h3 className="font-semibold mb-2 text-headingcol">Paper 2: Multiple Choice (Extended)</h3>
                                    <ul className="list-disc list-inside text-sm text-gray-600">
                                        <li>Duration: 45 minutes</li>
                                        <li>Marks: 40</li>
                                        <li>Weighting: 30%</li>
                                        <li>Format: 40 four-option multiple-choice questions</li>
                                        <li>Assessment: Externally assessed</li>
                                    </ul>
                                </div>

                                {/* Paper 4 */}
                                <div className="bg-white rounded-md p-4 shadow-md">
                                    <h3 className="font-semibold mb-2 text-headingcol">Paper 4: Theory (Extended)</h3>
                                    <ul className="list-disc list-inside text-sm text-gray-600">
                                        <li>Duration: 1 hour 15 minutes</li>
                                        <li>Marks: 80</li>
                                        <li>Weighting: 50%</li>
                                        <li>Format: Short-answer and structured questions</li>
                                        <li>Assessment: Externally assessed</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Practical Assessment */}
                        <section className="mb-8 border rounded-md p-6 bg-gray-100">
                            <h2 className="text-xl font-semibold mb-4 text-headingcol">Practical Assessment</h2>
                            <p className="mb-2 text-gray-600">All candidates take one practical paper from a choice of two:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Paper 5 */}
                                <div className="bg-white rounded-md p-4 shadow-md">
                                    <h3 className="font-semibold mb-2 text-headingcol">Paper 5: Practical Test</h3>
                                    <ul className="list-disc list-inside text-sm text-gray-600">
                                        <li>Duration: 1 hour 15 minutes</li>
                                        <li>Marks: 40</li>
                                        <li>Weighting: 20%</li>
                                        <li>Content: Questions will be based on the experimental skills in Section 4</li>
                                        <li>Assessment: Externally assessed</li>
                                    </ul>
                                </div>

                                {/* Paper 6 */}
                                <div className="bg-white rounded-md p-4 shadow-md">
                                    <h3 className="font-semibold mb-2 text-headingcol">Paper 6: Alternative to Practical</h3>
                                    <ul className="list-disc list-inside text-sm text-gray-600">
                                        <li>Duration: 1 hour</li>
                                        <li>Marks: 40</li>
                                        <li>Weighting: 20%</li>
                                        <li>Content: Questions will be based on the experimental skills in Section 4</li>
                                        <li>Assessment: Externally assessed</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </main>
               
                <section>
                    <h2 className="text-3xl  font-semibold text-headingcol">Why Choose IGCSE Physics?</h2>
                    <ul className="mt-4 space-y-4 text-lg text-gray-600">
                        <li className="flex items-center">
                            <span className="text-green-500 mr-3">1.</span>
                            Recognized worldwide – Accepted by universities and employers globally
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-3">2.</span>
                            Strong STEM foundation – Prepares for A-Level, IB, and engineering careers
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-3">3.</span>
                            Hands-on learning – Practical applications and real-world problem-solving
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-3">4.</span>
                            Comprehensive & engaging – Covers classical and modern physics concepts
                        </li>
                    </ul>
                </section>

                <section className=" p-8 mb-4">
                    <h2 className="text-3xl font-semibold text-headingcol text-center mb-6">
                        Why Choose Projectile 45 (P45) for IGCSE Physics?
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-6">
                        At Projectile 45 (P45), we go beyond just teaching IGCSE Physics – we help students develop a deep conceptual understanding,
                        problem-solving ability, and exam-ready skills that set them apart.
                    </p>

                    <h3 className="text-2xl font-semibold text-headingcol mb-4">What Makes P45 Unique?</h3>

                    <ul className="space-y-6">
                        <li>
                            <h4 className="text-xl font-semibold text-headingcol"> Expert Faculty from Premier Institutes</h4>
                            <ul className="list-disc ml-6 text-gray-600">
                                <li>Taught by educators from IITs, IIMs, and leading global institutions</li>
                                <li>Subject-matter experts in Physics and Mathematics</li>
                                <li>Proven track record of student success in IGCSE & beyond</li>
                            </ul>
                        </li>
                        <li>
                            <h4 className="text-xl font-semibold text-headingcol"> Personalized, 1:1 Learning Approach</h4>
                            <ul className="list-disc ml-6 text-gray-600">
                                <li>Tailored sessions that cater to individual student needs</li>
                                <li>Real-time doubt solving & conceptual clarity</li>
                                <li>Pace adjusted based on student’s strengths and challenges</li>
                            </ul>
                        </li>
                        <li>
                            <h4 className="text-xl font-semibold text-headingcol"> Mastery Through a 360° Approach</h4>
                            <ul className="list-disc ml-6 text-gray-600">
                                <li>Concept building from fundamentals to advanced applications</li>
                                <li>Focus on problem-solving skills for exams & real-world scenarios</li>
                                <li>Wide range of questions: Conceptual, Exam-style, Application-based, and Challenging</li>
                            </ul>
                        </li>
                        <li>
                            <h4 className="text-xl font-semibold text-headingcol"> Data-Driven Learning & Performance Insights</h4>
                            <ul className="list-disc ml-6 text-gray-600">
                                <li>Regular assessments, quizzes, and mock tests</li>
                                <li>Detailed analytics to track progress & improve weaknesses</li>
                                <li>Customized study plans to maximize learning efficiency</li>
                            </ul>
                        </li>
                        <li>
                            <h4 className="text-xl font-semibold text-headingcol"> Comprehensive Study Resources</h4>
                            <ul className="list-disc ml-6 text-gray-600">
                                <li>Well-structured notes & PPTs for quick revision</li>
                                <li>Exclusive practice questions covering all IGCSE exam patterns</li>
                                <li>Exam techniques & time-management strategies</li>
                            </ul>
                        </li>
                        <li>
                            <h4 className="text-xl font-semibold text-headingcol"> Real-World Applications & STEM Readiness</h4>
                            <ul className="list-disc ml-6 text-gray-600">
                                <li>Connecting IGCSE Physics to real-life phenomena</li>
                                <li>Exposure to engineering, space science, and AI-driven applications</li>
                                <li>Strong foundation for A-Level, IB, SAT, GRE, GMAT & beyond</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className="text-center">
                    <h2 className="text-3xl font-bold text-headingcol mb-4">The P45 Edge – Your Success, Our Mission</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        If you’re looking for a result-oriented, engaging, and expert-led IGCSE Physics learning experience, Projectile 45 (P45) is your best choice!
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg text-xl font-semibold hover:bg-blue-700"
                    >
                        Join P45 Today & Experience the Difference!
                    </a>
                </section>
            </div>
        </div>
    );
};

export default CourseOverview;
