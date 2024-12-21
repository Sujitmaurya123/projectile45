import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
  <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-col-reverse lg:flex-row items-center">
    {/* Left Content */}
    <div className="text-center lg:text-left lg:w-1/2">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        Projectile 45: Your Launchpad to Academic Success
      </h1>
      <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8">
        In today's fast-changing world, your preparation should evolve with
        you. At Projectile 45, we transform IB, IGCSE, SAT, GMAT, and GRE
        preparation into an inspiring journey tailored to your unique
        learning style.
      </p>
      <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8">
        Our expert educators, alumni of IITs, IIMs, and global institutions,
        bring decades of experience to ensure you master complex concepts,
        think critically, and tackle challenges with confidence.
      </p>
      <button className="bg-black text-white py-3 px-6 rounded text-base sm:text-lg shadow-lg hover:bg-gray-800">
        Book Your Free Demo Session Today
      </button>
    </div>

    {/* Right Illustration */}
    <div className="lg:w-1/2 mb-10 lg:mb-0">
      <img
        src="/images/Analyze-Data-3--Streamline-Milano.png"
        alt="Illustration"
        className="max-w-full mx-auto lg:mx-0 float-right"
      />
    </div>
  </div>
</section>
  );
};

export default HeroSection;