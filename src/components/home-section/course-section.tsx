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
        link: '/ib',
    },
    {
        name: 'IGCSE',
        logo: '/images/igcse-logo.png',
        link: '/igcse',
    },
    {
        name: 'SAT',
        logo: '/images/sat-logo.png',
        link: '/about-sat',
    },
    {
        name: 'GMAT',
        logo: '/images/gmat-logo.png',
        link: '/gmat-course',
    },
    {
        name: 'GRE',
        logo: '/images/gre-logo.png',
        link: '/gre',
    },
];

const CourseCard: React.FC<Course> = ({ name, logo, link }) => (
    <div className=" bg-white rounded-xl shadow-lg p-5 flex flex-col items-center hover:shadow-3xl transition-shadow duration-300">
        <div className="w-24 h-24 rounded-full  flex items-center justify-center mb-4 overflow-hidden">
            <Image src={logo} alt={`${name} Logo`} width={80} height={80} objectFit="contain" />
        </div>
        <h2 className="text-lg font-semibold text-purple-900 mb-2">{name}</h2>
        <div className="flex flex-col sm:flex-col gap-3 mt-auto">
            <Link href={link} className="inline-block bg-gray-100 text-purple-500 hover:bg-purple-700 hover:text-white px-6 py-2 rounded-xl shadow-lg font-medium transition duration-200 text-center">             
                    Explore Course              
            </Link>
            <Link href={link} className=" font-bold inline-block text-purple-500 hover:underline  transition duration-200 text-center">                
                    Test Prep →              
            </Link>
        </div>
    </div>
);

const CourseSection: React.FC = () => {
    return (
        <div className="container mx-auto p-8  flex flex-col items-center">
            <h1 className="text-4xl font-bold text-headingcol mb-6 text-center ">
                All the skills you need in one place
            </h1>
            <p className="text-lg text-gray-500 mb-10 text-center max-w-3xl font-bold">
                From critical skills to technical topics, EdTech supports your professional development. Choose the
                right course to enhance your journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {courses.map((course) => (
                    <CourseCard key={course.name} {...course} />
                ))}
            </div>
        </div>
    );
};

export default CourseSection;
