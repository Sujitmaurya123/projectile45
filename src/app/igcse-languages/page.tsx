'use client';
import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Page: NextPage = () => {
    const router = useRouter();

    const handleNavigate = () => {
        router.push('/'); // Navigate to the home page
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen  p-6">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Coming Soon</h1>
                <p className="text-xl text-gray-600 mb-8">
                    We’re working hard to bring something amazing. Stay tuned for updates!
                </p>
                <Button
                    className="bg-blue-600 text-white hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 rounded-lg px-6 py-3 transition duration-300"
                    onClick={handleNavigate}
                    aria-label="Notify Me Button"
                >
                    Notify Me
                </Button>
            </div>

        </main>
    );
};

export default Page;