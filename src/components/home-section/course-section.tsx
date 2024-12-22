
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Course {
    name: string;
    logo: string; // Path to the logo image
    link: string; // URL for the course
}

const courses: Course[] = [
    {
        name: 'IB',
        logo: '/images/ib-logo.png', // Replace with your actual image paths
        link: '/ib-course',
    },
    {
        name: 'IGCSE',
        logo: '/images/igcse-logo.png',
        link: '/igcse-course',
    },
    {
        name: 'SAT',
        logo: '/images/sat-logo.png',
        link: '/sat-course',
    },
    {
        name: 'GMAT',
        logo: '/images/gmat-logo.png',
        link: '/gmat-course',
    },
    {
        name: 'GRE',
        logo: '/images/gre-logo.png',
        link: '/gre-course',
    },
];

const CourseCard: React.FC<Course> = ({ name, logo, link }) => (
    <div className="bg-green-500 rounded-lg shadow-md p-4 flex flex-col items-center hover:scale-105 transition-transform duration-200">
        <Image src={logo} alt={`${name} Logo`} width={80} height={80} objectFit="contain" /> {/* Adjust width/height as needed */}
        <Link href={link} className="mt-4 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-150">
            Go To Course
        </Link>
        <p className="text-white mt-2">Test Prep →</p>
    </div>
);


const CourseSection: React.FC = () => {
    return (
        <div className="container mx-auto p-8 bg-gray-100  flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">All the skills you need in one place</h1>
            <p className="text-lg text-gray-700 mb-8 text-center">
                From critical skills to technical topics, EdTech supports your professional development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {courses.map((course) => (
                    <CourseCard key={course.name} {...course} />
                ))}
            </div>
        </div>
    );
};

export default CourseSection;