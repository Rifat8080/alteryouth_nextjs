import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HeroSection = () => {
  const [count, setCount] = useState(0);
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    fetch('/assets/data/code.json')
      .then(response => response.json())
      .then(data => {
        setCountryCodes(data);
        getUserCountry(data);
      })
      .catch(error => console.error('Error fetching country codes:', error));
  }, []);

  const getUserCountry = (data) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
          .then(response => response.json())
          .then(locationData => {
            const country = data.find(country => country.name === locationData.countryName);
            if (country) {
              setSelectedCountry(country.dial_code);
            }
          })
          .catch(error => console.error('Error fetching location data:', error));
      });
    }
  };

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
    <section className="w-full h-screen">
      <ToastContainer />
      <div className="absolute inset-0 opacity-96">
        <div className="block md:hidden">
          <img src="assets/images/hero_home_phone.jpg" alt="Hero Mobile" className="w-full h-[90%] object-cover relative" />
        </div>
        <div className="hidden md:block">
          <img src="assets/images/hero_pc.jpg" alt="Hero Desktop" className="w-full h-[90%] object-cover relative" />
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full text-white px-8 pt-[100%] md:pt-0">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col space-y-4 text-left max-w-sm">
            <h1 className="text-4xl md:text-6xl font-bold">Start your scholarship</h1>
            <p className="text-lg md:text-2xl font-light">Directly for students in Government Primary Schools throughout Bangladesh</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <form className="flex flex-col flex-start space-y-4">
              <h2 className="text-xl font-semibold text-left" style={{ color: "#21252A" }}>
                Join the <span className='text-lightGreen'>#alteryouthrevolution</span>
              </h2>
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 border rounded-lg w-full text-black placeholder:text-sm md:placeholder:text-base focus:border-lightGreen focus:ring-lightGreen"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 border rounded-lg w-full text-black placeholder:text-sm md:placeholder:text-base focus:border-lightGreen focus:ring-lightGreen"
              />
              <div className="flex w-full space-x-2">
                <select
                  className="px-4 py-2 border rounded-lg text-black focus:border-lightGreen focus:ring-lightGreen"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  {countryCodes.map((country, index) => (
                    <option key={index} value={country.dial_code}>
                      {country.flag} {country.dial_code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="px-4 py-2 border rounded-lg w-full text-black placeholder:text-sm md:placeholder:text-base focus:border-lightGreen focus:ring-lightGreen"
                  pattern="[0-9]*"
                />
              </div>
              <span className="text-gray-700 font-medium">Number of Scholarships</span>
              <div className="flex flex-row items-center justify-between space-x-4">
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
                </div>
                <div>
                  <span className="text-sm md:text-3xl text-black font-bold">
                    BDT {getPrice()}
                    <span className="text-sm md:text-base text-black font-medium">/month</span>
                  </span>
                </div>
              </div>
              <button type="submit" className="px-4 py-2 rounded-lg w-full text-white font-medium bg-lightGreen">
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