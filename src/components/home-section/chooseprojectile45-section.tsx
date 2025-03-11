"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Projectile45Benefit {
    icon: string;
    title: string;
    description: string;
}

const benefits: Projectile45Benefit[] = [
    {
        icon: "/images/puzzle2.png",
        title: "Enhance Understanding",
        description: "Enhance understanding by tying complex lessons to practical, real-world examples.",
    },
    {
        icon: "/images/target2.png",
        title: "Monitor Progress",
        description: "Monitor and measure progress for each learner with clear milestones and detailed reports.",
    },
    {
        icon: "/images/book5.png",
        title: "Develop Foundational Literacy",
        description: "Develop the foundational literacy skills children need for lifelong learning and achievement.",
    },
];

// Animation variants for each card
const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8 } },
};

const Projectile45Benefits = () => {
    return (
        <section className="text-black py-16 bg-[#f1eef5] bg-opacity-70">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="container px-6 md:px-10 lg:px-20 mx-auto text-center"
            >
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold mb-8 text-headingcol"
                >
                    Why Choose - Projectile 45
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                            className="flex flex-col items-center justify-center rounded-lg p-6 bg-white shadow-lg transition-transform duration-300"
                        >
                            <Image src={benefit.icon} alt={benefit.title} width={100} height={100} className="mb-4 opacity-90" />
                            <h3 className="text-xl font-semibold mb-2 text-headingcol">{benefit.title}</h3>
                            <p className="text-lg text-gray-500">{benefit.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projectile45Benefits;
