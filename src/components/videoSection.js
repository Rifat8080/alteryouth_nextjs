import React, { useState } from "react";

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlay = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBackdropClick = (e) => {
    // Ensure the click is on the backdrop, not the video or close button
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center  py-10 bg-white gap-6">
      {/* Video Thumbnail */}
      <div className="w-full flex justify-center relative">
        <div className="relative w-full lg:w-3/4">
          <img
            src="/assets/images/ay_video_poster.jpg"
            alt="Video Thumbnail"
            className="rounded-lg w-full object-cover"
          />
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center text-white text-6xl"
            style={{ background: "rgba(0, 0, 0, 0.5)" }}
          >
            ▶
          </button>
        </div>
      </div>

      {/* Text Section */}
      <div className="hidden w-full lg:flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-10">
        <h2 className="text-3xl font-bold mb-4">The scholarship app</h2>
        <p className="text-lg">
        In Bangladesh, while 98% of children enroll in school, 2 million children drop out to work before achieving literacy in order to support their families financially. On the flipside, Bangladesh has a diaspora population of 10 million in advanced economies who wish to make an impact on their homeland. AlterYouth, imagine Uber for scholarships, is a C2C scholarship app enabling users from around the world to start scholarships directly for financially struggling students in Government Primary Schools of Bangladesh, through digital banking.</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleBackdropClick} // Close modal on backdrop click
        >
          <div className="relative w-full lg:w-3/4 max-w-3xl bg-black">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl z-50"
            >
              ✖
            </button>
            {/* Video Player */}
            <video
              className="rounded-lg w-full h-96"
              controls
              autoPlay
            >
              <source src="/assets/videos/ay_explainer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
