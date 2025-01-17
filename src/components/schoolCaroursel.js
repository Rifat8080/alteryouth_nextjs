import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import schoolsData from "../../public/assets/data/schools.json";

const SchoolCarousel = ({ images }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    let interval;

    // Auto-slide for mobile devices
    if (isMobile) {
      interval = setInterval(() => {
        handleNext();
      }, 3000); // Change slide every 3 seconds
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

  const handleNext = () => {
    const carouselItems = carouselRef.current.querySelectorAll("[data-carousel-item]");
    carouselItems[currentIndex].classList.add("hidden");
    const nextIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[nextIndex].classList.remove("hidden");
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const carouselItems = carouselRef.current.querySelectorAll("[data-carousel-item]");
    carouselItems[currentIndex].classList.add("hidden");
    const prevIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[prevIndex].classList.remove("hidden");
    setCurrentIndex(prevIndex);
  };

  return (
    <div ref={carouselRef}>
      {/* Header */}
      <div className="flex flex-col px-4 md:px-16 xl:px-80 bg-white py-7">
        <h2 className="text-3xl md:text-4xl font-bold text-left text-black">
          Students from Government Primary Schools Nationwide
        </h2>
      </div>

      {/* Carousel */}
      <div id="school-carousel" className="relative w-full bg-white p-4 md:p-0" data-carousel="school-carousel">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-full">
          {groupedImages.map((group, index) => (
            <div
              key={index}
              className={`duration-200 ease-linear ${index === 0 ? "block" : "hidden"}`}
              data-carousel-item
            >
              <div className="flex justify-center">
                {group.map((image, imgIndex) => (
                  <div key={imgIndex} className={`${isMobile ? "w-full" : "w-1/3"} h-auto object-contain p-2`}>
                    <img
                      src={image}
                      alt={`Image ${imgIndex + 1}`}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                    <div className="p-4">
                      <h3 className="text-xl text-black font-semibold">{schoolsData[imgIndex]?.name}</h3>
                      <p className="text-black">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-lightGreen" />
                        {schoolsData[imgIndex]?.location}
                      </p>
                    </div>
                  </div>
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
              onClick={handlePrev}
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
              onClick={handleNext}
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
            {groupedImages.map((_, index) => (
              <span
                key={index}
                className={`inline-block w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? "bg-lightGreen" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        )}
      </div> 
    </div>
  );
};

export default SchoolCarousel;
