"use client"

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";

import { FreeDemo } from "../free-demo-signup/FreeDemo";

const HeroSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className=" py-16">
  <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-col-reverse lg:flex-row items-center">
    {/* Left Content */}
    <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl sm:text-6xl lg:text-6xl font-extrabold text-[#091987] mb-6">
            Projectile 45: Your Launchpad to <span className="text-[#764f94]">Academic Success</span> 
      </h1>
      <p className="text-gray-600 text-base sm:text-lg font-medium text-justify sm:mb-2">
            In today&apos;s dynamic world, <strong>online test preparation</strong> must keep pace with your
            ambitions. At <strong>Projectile 45</strong>, we redefine <strong>IB, IGCSE, SAT, GMAT, and GRE
              preparation </strong>, offering a personalized, results-driven approach tailored to your
            learning style.
      </p>
          <p className="text-gray-600 text-base sm:text-lg font-medium text-justify sm:mb-2">
            Our expert educators—alumni of IITs, IIMs, and top global institutions—bring
            decades of experience to help you master complex concepts, develop critical
            thinking, and approach every challenge with confidence. <strong>Elevate your success with
              the best in online test preparation!</strong>
      </p>
      
          <Button onClick={() => setIsOpen(true)}
             className="text-purple-900 bg-white py-3 px-6 mt-10 rounded-full text-base sm:text-lg shadow-lg hover:bg-purple-900 hover:text-white ">
        Book Your Free Demo Session Today
      </Button>
     
    </div>

    {/* Right Illustration */}
    <div className="lg:w-1/2 mb-10 lg:mb-[100px]  ">
      <Image
        src="/images/heroimg6.svg"
        alt="Illustration"
            className="max-w-full mx-auto lg:mx-0 float-right  "
        width={450}
        height={450}
      />
    </div>
  </div>
   {isOpen && <FreeDemo  setIsOpen={setIsOpen} /> }
</section>
  );
};

export default HeroSection;