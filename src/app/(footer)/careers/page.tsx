"use client";

import { useState } from 'react';

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        resume: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFormData((prev) => ({
            ...prev,
            resume: file,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission, maybe send data to API
        console.log('Form Data Submitted: ', formData);
    };

    return (
        <div className="container mx-auto py-10 px-4 max-w-6xl">
            <h2 className="text-4xl font-semibold mb-4 text-center text-headingcol">
                Join the Team at Projectile 45
            </h2>
            <p className='mt-8 text-gray-600 '>
                At Projectile 45, we believe in passion, persistence, and the power of taking ownership. We are looking for go-getters, hustlers, and driven individuals who thrive in dynamic environments and take initiative to make an impact. Whether you’re an inspiring educator, a digital marketing enthusiast, or a results-driven institutional sales expert, if you have the hunger to grow and the mindset to lead, we want to hear from you!
            </p>
            <p className='mt-5 font-semibold text-gray-600'>Take the next step in your career—submit your resume today and be part of a team that’s shaping the future of education!</p>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-center text-headingcol">
                    Join the Team at Projectile 45
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                            Mobile
                        </label>
                        <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                            Attach Resume
                        </label>
                        <input
                            type="file"
                            id="resume"
                            name="resume"
                            onChange={handleFileChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            accept=".pdf,.doc,.docx"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
