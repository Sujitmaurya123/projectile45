import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

const Footer = () => {
    return (
        <footer className="bg-green-100 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Logo and Get Started Section */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex flex-row  items-center mb-4">
                        <Image
                            src="/logo_projectile45.jpg"
                            alt="Projectile 45 Logo"
                            width={80}
                            height={80}
                            className="h-15 w-auto rounded-full"
                        />
                        <span className="text-xl font-bold ml-2">Projectile 45</span>
                    </div>
                    <div className="flex flex-col items-center md:items-start space-y-4 w-full sm:space-y-0 sm:flex-row sm:space-x-4">
                        <Link href="/get-started">
                            <Button
                                className="bg-green-500 text-white hover:bg-green-600 focus:ring-2 focus:ring-green-400 rounded focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 px-6 py-3 shadow-md w-full sm:w-auto"
                            >
                                Get Started for Free
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                className="bg-green-500 text-white hover:bg-green-600 focus:ring-2 focus:ring-green-400 rounded focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 px-6 py-3 shadow-md w-full sm:w-auto"
                            >
                                Contacts
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Company Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <Link href="/about-us">About us</Link>
                    <Link href="/careers">Careers</Link>
                    <Link href="/press">Press</Link>
                </div>

                {/* Resources Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <Link href="/big-ideas">Big Ideas</Link>
                    <Link href="/training">Training</Link>
                    <Link href="/remote-learning">Remote Learning</Link>
                </div>

                {/* Community Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-4">Community</h3>
                    <Link href="/teacher-community">Teacher Community</Link>
                    <a href="https://www.facebook.com/projectile45" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                    <a href="https://www.twitter.com/projectile45" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                    <a href="https://www.instagram.com/projectile45" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-8">
                <p className="text-sm">
                    &copy; Projectile 45, Inc.{' '}
                    <Link href="/terms-of-service" className="underline">
                        Terms of Service
                    </Link>{' '}
                    |{' '}
                    <Link href="/product-privacy-policy" className="underline">
                        Product Privacy Policy
                    </Link>{' '}
                    |{' '}
                    <Link href="/website-privacy-policy" className="underline">
                        Website Privacy Policy
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
