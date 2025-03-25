"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Course {
    name: string;
    logo: string; // Path to the logo image
    link: string;
    linkprep: string; // URL for the course
}

const courses: Course[] = [
    {
        name: "IB",
        logo: "/images/ib-logo.svg",
        link: "/about-ib",
        linkprep: "/ib-testprep",
    },
    {
        name: "IGCSE",
        logo: "/images/igcse-logo.svg",
        link: "/about-igcse",
        linkprep: "/igcse-testprep",
    },
    {
        name: "SAT",
        logo: "/images/sat-logo.svg",
        link: "/about-sat",
        linkprep: "/sat-testprep",
    },
    {
        name: "GMAT",
        logo: "/images/gmat-logo.svg",
        link: "/about-gmat",
        linkprep: "/gmat-testprep",
    },
    {
        name: "GRE",
        logo: "/images/gre-logo.svg",
        link: "/about-gre",
        linkprep: "/gre-testprep",
    },
];

// Animation variants for each card
const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8 } },
};

const CourseCard: React.FC<Course> = ({ name, logo, link }) => (
    <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
        className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center transition-transform duration-300"
    >
        <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4 overflow-hidden">
            <Image src={logo} alt={`${name} Logo`} width={80} height={80} />
        </div>
        <h2 className="text-lg font-semibold text-purple-900 mb-2">{name}</h2>
        <div className="flex flex-col gap-3 mt-auto">
            <Link
                href={link}
                className="inline-block bg-gray-100 text-purple-500 hover:bg-purple-700 hover:text-white px-6 py-2 rounded-xl shadow-lg font-medium transition duration-200 text-center"
            >
                Explore Course
            </Link>
        </div>
    </motion.div>
);

const CourseSection: React.FC = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="container mx-auto p-8 flex flex-col items-center"
        >
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-headingcol mb-6 text-center"
            >
                All the skills you need in one place
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg text-gray-500 mb-10 text-center max-w-3xl font-bold"
            >
                From critical skills to technical topics, P45 supports your professional development. Choose the
                right course to enhance your journey.
            </motion.p>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ staggerChildren: 0.2 }}
            >
                {courses.map((course) => (
                    <CourseCard key={course.name} {...course} />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default CourseSection;
