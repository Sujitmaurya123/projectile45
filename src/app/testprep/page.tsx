'use client'
import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';  
import { Button } from '@/components/ui/button';

const Page: NextPage = () => {
  const router = useRouter();  // Move this inside the component

  const handleNavigate = () => {
    router.push('/'); // Navigate to the home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-semibold text-center text-dark-600 mb-4">Coming Soon</h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        This page is under construction. Stay tuned for updates!
      </p>
      <Button 
        className="bg-black text-white hover:bg-black/90 rounded"
        onClick={handleNavigate}
      >
        Notify Me
      </Button>
    </div>
  );
};

export default Page;
