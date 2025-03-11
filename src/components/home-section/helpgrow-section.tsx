"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HelpGrowSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto flex flex-col px-6 md:px-10 lg:px-20 items-center md:flex-row md:justify-between">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="flex-1 text-center md:text-left md:mt-0"
                >
                    <h2 className="text-3xl font-bold mb-4 text-headingcol">Help them grow their own way</h2>
                    <p className="text-lg text-gray-500 lg:w-3/4 text-justify">
                        Our online tutoring service is tailored for students preparing for the SAT, GMAT, and GRE.
                        We don&apos;t just teach strategies—we ignite critical thinking, sharpen problem-solving skills,
                        and build confidence to tackle these competitive exams head-on.
                    </p>
                </motion.div>

                {/* Right Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="justify-end"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="md:mr-16"
                    >
                        <Image
                            src="/images/helpimg5.svg"
                            alt="Tutor helping students"
                            width={350}
                            height={350}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HelpGrowSection;
