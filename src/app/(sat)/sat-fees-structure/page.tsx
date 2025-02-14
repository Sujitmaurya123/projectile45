// components/SATCourseFees.tsx
import SATPackageComparison from '@/components/sat-fees-structure-section/sat-maths-fees-comparison';
import SATMathsFees from '@/components/sat-fees-structure-section/sat-maths-fees-section';
import SATRWPackageComparison from '@/components/sat-fees-structure-section/sat-reading-writing-comparison';
import SATReadingWritingFees from '@/components/sat-fees-structure-section/sat-writing-fees-structure';
import React from 'react';



const SATCourseFees: React.FC = () => {
   

    return (
        <div className="p-6 font-sans container mx-auto max-w-6xl">
            <h1 className="text-5xl font-bold mb-4 text-center text-headingcol">SAT Fees Structure</h1>
            <p className="mb-4">
                The SAT course by Projectile 45 will focus on preparing students comprehensively for both Math and Reading & Writing sections. Here&apos;s the detailed breakdown of Course coverage
            </p>
            
       <SATMathsFees/>
       <SATReadingWritingFees/>
       <SATPackageComparison/>
       <SATRWPackageComparison/>
        
    </div> 
    );
};

export default SATCourseFees;


