import { useState } from 'react';

const HeroSection = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 3) {
      setCount(count + 1);
    } else {
      alert('Limit reached');
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <section className="bg-hero-pattern relative w-full h-screen bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50">
        <img src="assets/images/hero_pc.jpg" alt="Hero" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full text-white px-8">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col space-y-4 text-left max-w-sm ">
          <h1 style={{ fontSize: "3rem", fontWeight:"bold" }}>Start your
          scholarship</h1>
          <p style={{ fontSize: "1rem", fontWeight: "lighter" }}>Directly for students in Government Primary
          Schools throughout Bangladesh</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <form className="flex flex-col items-center space-y-4">
              
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 border rounded-lg w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 border rounded-lg w-full"
              />
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={decrement}
                  className="px-4 py-2  rounded-lg"
                >
                  -
                </button>
                <span className="text-xl">{count}</span>
                <button
                  type="button"
                  onClick={increment}
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                >
                  +
                </button>
              </div>
              <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;