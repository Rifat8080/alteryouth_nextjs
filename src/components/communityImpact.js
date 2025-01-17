import { useEffect } from "react";

const Carousel = ({ images }) => {
  useEffect(() => {
    let interval;
    const carouselItems = document.querySelectorAll("[data-carousel-item]");
    let currentIndex = 0;

    // Function to show the next slide
    const showNextSlide = () => {
      carouselItems[currentIndex].classList.add("hidden");
      currentIndex = (currentIndex + 1) % carouselItems.length;
      carouselItems[currentIndex].classList.remove("hidden");
    };

    // Auto-slide for mobile devices
    if (window.innerWidth < 768) {
      interval = setInterval(showNextSlide, 3000); // Change slide every 3 seconds
    }

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  // Group images into sets of 3
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 3) {
    groupedImages.push(images.slice(i, i + 3));
  }

  return (
    <div id="animation-carousel" className="relative w-full" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Slider Items */}
        {groupedImages.map((group, index) => (
          <div
            key={index}
            className={`duration-200 ease-linear ${index === 0 ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            <div className="flex justify-center gap-4">
              {group.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`Image ${imgIndex + 1}`}
                  className="w-1/3 h-auto object-contain rounded-lg"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Slider Controls */}
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
    </div>
  );
};

export default Carousel;