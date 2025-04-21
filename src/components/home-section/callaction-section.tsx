"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { FreeDemo } from "../free-demo-signup/FreeDemo";

const CallToActionSection = () => {
     const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="py-16 bg-[#f5f5f6] bg-opacity-70">
            <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-col items-center md:flex-row md:justify-between">

                {/* Left Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="flex-1"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="md:mr-16"
                    >
                        <Image
                            src="/images/footerimg3.svg"
                            alt="Students studying together"
                            width={300}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                </motion.div>

                {/* Right Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="flex-1 text-center md:text-left md:mt-0"
                >
                    <h2 className="text-3xl font-bold mb-4 text-headingcol">
                        Are you ready to take the next step toward your goals?
                    </h2>
                    <p className="text-lg text-gray-500">
                        Join us to transform your test preparation—because the future belongs to
                        those who dare to dream big.
                    </p>
                    
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Button onClick={() => setIsOpen(true)} className="bg-white hover:bg-purple-600 text-purple-600 hover:text-white font-bold py-2 px-4 rounded mt-4">
                                Get Started
                            </Button>
                        </motion.div>
                   
                </motion.div>
            </div>
              {/* Modal for Free Demo */}
                        {isOpen && <FreeDemo setIsOpen={setIsOpen} />}
        </section>
    );
};

export default CallToActionSection;
