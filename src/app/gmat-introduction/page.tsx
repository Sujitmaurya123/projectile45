// components/GMATOverview.tsx

import React from 'react';

const GMATOverview = () => {
    return (
        <div className=" container mx-auto px-14 py-5 text-justify max-w-6xl">
            <h1 className="text-3xl font-bold mb-4 text-headingcol">GMAT Overview</h1>

            <p className='text-gray-600'>
                The Graduate Management Admission Test (GMAT) is a standardized test designed to assess the skills
                necessary for success in business and management programs. Administered by the Graduate Management
                Admission Council (GMAC), the GMAT is widely accepted by over 2400 business schools globally for over
                7700 MBA programs.
            </p>

            <p className='text-gray-600'>
                The exam measures a candidate&apos;s abilities in analytical writing, quantitative reasoning, verbal reasoning,
                and data interpretation. It serves as a critical component in the admissions process for graduate
                management programs, providing schools with a standardized metric to compare applicants from diverse
                educational and professional backgrounds.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-headingcol ">Purpose and Importance in Business School Admissions</h2>

            <p className='text-gray-600'>
                The GMAT plays a pivotal role in the admissions process for business schools, serving as a key indicator
                of an applicant&apos;s readiness for the rigorous demands of graduate management education. It helps admissions
                committees assess a candidate&apos;s critical thinking, problem-solving abilities, and capacity to perform under
                pressure.
            </p>

            <p className='text-gray-600'>
                For candidates, a strong GMAT score can significantly enhance their application, often opening doors to
                prestigious programs and scholarships. It also provides a benchmark for applicants to gauge their
                preparedness and areas of improvement before applying to business schools.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-headingcol">Changes and Updates</h2>

            <p className='text-gray-600'>
                In 2024, the GMAT underwent significant updates to better align with the evolving needs of business schools
                and candidates. The most notable change was the introduction of the GMAT Focus Edition, which streamlined
                the test into three main sections: Quantitative Reasoning, Verbal Reasoning, and Data Insights. This new
                format eliminated the Analytical Writing Assessment, reducing the overall test duration to 2 hours and 15 minutes.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-headingcol">Key Features of the GMAT</h2>

            <ul className="list-disc ml-4 text-gray-600">
                <li> <strong className='text-gray-700'>Computer-Adaptive Format:</strong> The GMAT adapts the difficulty of questions based on the test-taker&apos;s performance.</li>
                <li><strong className='text-gray-700'>Three Core Sections:</strong> In the latest GMAT Focus Edition, the exam includes Quantitative Reasoning, Verbal Reasoning, and Data Insights.</li>
                <li><strong className='text-gray-700'>Flexible Section Order: </strong>Test-takers can choose the order in which they complete the sections.</li>
                <li><strong className='text-gray-700'>Score Validity: </strong>GMAT scores are valid for five years.</li>
                <li><strong className='text-gray-700'>Widely Accepted: </strong>The GMAT is accepted by over 2400 business schools globally.</li>
            </ul>
        </div>
    );
};

export default GMATOverview;