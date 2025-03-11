"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const FirstStripSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#eceff2] bg-opacity-70">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-col-reverse lg:flex-row-reverse items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:w-3/4 font-medium"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 text-justify"
          >
            <strong>Projectile 45 Test Preparation (P45)</strong> offers expert <strong>online tutoring</strong> for <strong>IB, IGCSE, SAT, GMAT, and GRE</strong> aspirants. More than just strategies, we cultivate <strong>critical thinking, problem-solving skills, and confidence</strong> to conquer competitive exams.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 text-justify"
          >
            With <strong>personalized, flexible learning</strong>, our top-tier tutors ensure you <strong>master complex concepts and excel under pressure</strong>. At <strong>P45</strong>, preparation is inspiring, not overwhelming—tailored to your unique strengths for <strong>exam success. Join Projectile 45 Test Preparation today and unlock your full potential!</strong>
          </motion.p>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="lg:w-1/4 mb-10 lg:mb-0 mr-12 ml-5"
        >
          <Image
            src="/images/onlineservice4.svg"
            alt="Illustration"
            className="max-w-full mx-auto lg:mx-0 float-left"
            width={300}
            height={400}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FirstStripSection;
