import React from 'react';
import SvgGoogle from './logo/Google';


const IconSection = () => {
  return (
    <section className="py-10 bg-white flex flex-col items-center">
      <h2 className="text-lg text-black font-bold mb-8 text-center">In Association With</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 w-full max-w-screen-lg px-4">
        <div className="flex flex-col items-center relative">
            
          <img src="/assets/images/undp.jpg" alt="Logo 1" className="w-48 h-48 object-contain" />
          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-16 border-r-2 border-gray-300"></div>
        </div>
        <div className="flex flex-col items-center relative">
        <img src="/assets/images/expo.png" alt="Logo 1" className="w-48 h-48 object-contain" />
        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-16 border-r-2 border-gray-300"></div>
        </div>
        <div className="flex flex-col items-center">
        <SvgGoogle className="h-48 w-48" />
        </div>
      </div>
    </section>
  );
};

export default IconSection;