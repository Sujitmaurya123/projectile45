"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { FreeDemo } from '../free-demo-signup/FreeDemo';

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <footer className="py-8 bg-slate-100 shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Logo and Get Started Section */}
                <div className="flex flex-col items-center justify-center md:items-start text-center md:text-left">
                    
                    <div className="flex flex-col  items-center  sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-2 w-full">
                        {/* <Button
                            onClick={() => setIsOpen(true)}
                            className="bg-white hover:bg-purple-600 text-purple-600 hover:text-white focus:ring-2 focus:ring-green-400 rounded focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 px-6 py-3 shadow-md w-full sm:w-auto"
                        >
                            Get Started for Free
                        </Button> */}
                        <Link href="/new-fees">
                            <Button
                                className="bg-white hover:bg-purple-600 text-purple-600 hover:text-white focus:ring-2 focus:ring-green-400 rounded focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 px-6 py-3 shadow-md w-full sm:w-auto mt-3 sm:mt-0"
                            >
                                Fees Structure
                            </Button>
                        </Link>
                        {/* <Link href="/contact">
                            <Button
                                className="bg-white hover:bg-purple-600 text-purple-600 hover:text-white focus:ring-2 focus:ring-green-400 rounded focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 px-6 py-3 shadow-md w-full sm:w-auto mt-3 sm:mt-0"
                            >
                                Contacts
                            </Button>
                        </Link> */}
                    </div>
                    <div className="flex items-center mb-4 ml-2 md:ml-9">
                        <Image
                            src="/logo_projectile45.svg"
                            alt="Projectile 45 Logo"
                            width={100}
                            height={100}
                            style={{ objectFit: "cover" }}
                            className="h-8 w-auto rounded-full"
                        />
                        <span className="text-xl font-bold ml-2">Projectile 45</span>
                    </div>
                </div>

                {/* Company Links */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <Link href="/about-us" className="hover:underline">About us</Link>
                    <Link href="/careers" className="hover:underline">Careers</Link>
                </div>

                {/* Resources Links */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                     <Link href="/blogs" className="hover:underline">Blogs</Link>
                    <Link href="/sample-paper" className="hover:underline">Sample Paper</Link>
                    
                </div>

                {/* Community Links */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-4">Community</h3>
                   
                    <a
                        href="https://www.facebook.com/Projectile.45"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://www.twitter.com/projectile45"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://www.instagram.com/projectile.45"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Instagram
                    </a>
                </div>
                
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-8">
                <p className="text-sm">
                    &copy; Projectile 45, Inc.{' '}
                    <Link href="/terms-of-conditions" className="underline hover:no-underline">
                        Terms of Conditions
                    </Link>{' '}
                    |{' '}
                   
                    <Link href="/website-privacy-policy" className="underline hover:no-underline">
                        Website Privacy Policy
                    </Link>
                </p>
                <div className=' flex justify-center mt-3'>

                <p className='text-center w-1/2 '>
                    GRE® is a registered trademark of ETS. GMAT® is a registered trademark of GMAC. SAT® is a registered trademark of the College Board. None of these organizations endorse or are affiliated with P45.
                </p>
                </div>
            </div>

            {/* Modal for Free Demo */}
            {isOpen && <FreeDemo setIsOpen={setIsOpen} />}
        </footer>
    );
};

export default Footer;
