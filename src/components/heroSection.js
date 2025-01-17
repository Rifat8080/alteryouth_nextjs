import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HeroSection = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 3) {
      setCount(count + 1);
    } else {
      toast.warn('Scholarship limit reached for current scholarship session');
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const getPrice = () => {
    return count * 1650;
  };

  return (
    <section className=" relative w-full h-screen bg-cover bg-center">
      <ToastContainer />
      <div className="absolute inset-0 bg-black opacity-65">
        <img src="assets/images/hero_pc.jpg" alt="Hero" className="w-full h-[90%] object-cover" />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full text-white px-8">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col space-y-4 text-left max-w-sm ">
            <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>Start your scholarship</h1>
            <p style={{ fontSize: "1rem", fontWeight: "lighter" }}>Directly for students in Government Primary Schools throughout Bangladesh</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <form className="flex flex-col flex-start space-y-4">
              <h2 className="text-xl font-semibold text-left"
              style={{ color: "#21252A" }}
              >Join the <span className='text-lightGreen'>#alteryouthrevolution</span> </h2>
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 border rounded-lg w-full "
                style={{ color: "black" }}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 border rounded-lg w-full"
                style={{ color: "black" }}
              />
              <div className="flex w-full space-x-2">
                <select className="px-4 py-2 border rounded-lg"
                style={{ color: "black" }}>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+91">+91</option>
                  <option value="+880">+880</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="px-4 py-2 border rounded-lg w-full"
                  pattern="[0-9]*"
                  style={{ color: "black" }}
                />
              </div>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-gray-700 font-medium">Number of Scholarships</span>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={decrement}
                    className="px-4 py-2 rounded-lg"
                    style={{ cursor: count === 0 ? 'not-allowed' : 'pointer', backgroundColor: count === 0 ? 'gray' : '#37C467' }}
                  >
                    -
                  </button>
                  <span style={{ color: "#37C467" }}>{count}</span>
                  <button
                    type="button"
                    onClick={increment}
                    className="px-4 py-2 rounded-lg"
                    style={{ cursor: count === 3 ? 'not-allowed' : 'pointer', backgroundColor: count === 3 ? 'gray' : '#37C467' }}
                  >
                    +
                  </button>
                  <span style={{ fontSize: "2rem", color: "black" }}>
                    BDT {getPrice()}
                    <span style={{ fontSize: "16px", color: "black" }}>/month</span>
                  </span>                </div>
              </div>
              <button type="submit" style={{ backgroundColor: "#37C467" }} className="px-4 py-2 rounded-lg w-full text-white font-medium">
                START NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;