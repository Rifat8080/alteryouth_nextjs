import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-hero-pattern relative w-full h-screen bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50">
        <img src="assets/images/hero_pc.jpg" alt="Hero" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl mb-8">We provide the best services for you.</p>
          <a href="#services" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;