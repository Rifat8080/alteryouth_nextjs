import { useEffect, useState } from "react";

const Carousel = ({ images }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    let interval;
    const carouselItems = document.querySelectorAll("[data-carousel-item]");

    // Function to show the next slide
    const showNextSlide = () => {
      carouselItems[currentIndex].classList.add("hidden");
      const nextIndex = (currentIndex + 1) % carouselItems.length;
      carouselItems[nextIndex].classList.remove("hidden");
      setCurrentIndex(nextIndex);
    };

    // Auto-slide for mobile devices
    if (isMobile) {
      interval = setInterval(showNextSlide, 3000); // Change slide every 3 seconds
    }

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, currentIndex]);

  // Group images into sets of 3 for desktop, 1 for mobile
  const groupedImages = [];
  const groupSize = isMobile ? 1 : 3;
  for (let i = 0; i < images.length; i += groupSize) {
    groupedImages.push(images.slice(i, i + groupSize));
  }

  // Calculate the current set of indicators
  const indicatorSetSize = 4;
  const currentIndicatorSet = Math.floor(currentIndex / indicatorSetSize);
  const indicators = Array.from({ length: indicatorSetSize }, (_, i) => currentIndicatorSet * indicatorSetSize + i);

  return (
    <>
    <div className="flex flex-col pl-6 lg:pl-80 bg-white py-7">
  <h2 className="text-3xl md:text-4xl font-bold text-left text-black">Community Impact</h2>
  <p className="hidden lg:flex text-sm lg:text-base max-w-4xl text-left text-black font-medium mt-2">
  Every scholarship begins with shipping a mobile phone to the parent of the student. Then they create their own mobile bank account
  using that phone, to start receiving their child's scholarships directly, every month.
  </p>
  </div>
    <div id="animation-carousel" className="relative w-full bg-white p-4 md:p-0" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-full">
        {/* Slider Items */}
        {groupedImages.map((group, index) => (
          <div
            key={index}
            className={`duration-200 ease-linear ${index === 0 ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            <div className="flex justify-center">
              {group.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`Image ${imgIndex + 1}`}
                  className={`${isMobile ? 'w-full' : 'w-1/3'} h-auto object-contain `}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Slider Controls */}
      {!isMobile && (
        <>
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={() => {
              const carouselItems = document.querySelectorAll("[data-carousel-item]");
              const activeIndex = [...carouselItems].findIndex(
                (item) => !item.classList.contains("hidden")
              );
              carouselItems[activeIndex].classList.add("hidden");
              const prevIndex =
                (activeIndex - 1 + carouselItems.length) % carouselItems.length;
              carouselItems[prevIndex].classList.remove("hidden");
              setCurrentIndex(prevIndex);
            }}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={() => {
              const carouselItems = document.querySelectorAll("[data-carousel-item]");
              const activeIndex = [...carouselItems].findIndex(
                (item) => !item.classList.contains("hidden")
              );
              carouselItems[activeIndex].classList.add("hidden");
              const nextIndex = (activeIndex + 1) % carouselItems.length;
              carouselItems[nextIndex].classList.remove("hidden");
              setCurrentIndex(nextIndex);
            }}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </>
      )}
      {/* Indicators for mobile */}
      {isMobile && (
        <div className="flex justify-center mt-4">
          {indicators.map((index) => (
            <span
              key={index}
              className={`inline-block w-3 h-3 mx-1 rounded-full  ${
                index === currentIndex ? 'bg-lightGreen' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Carousel;