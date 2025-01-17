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
    <section className="py-10 bg-white flex justify-center">
      <div className="max-w-screen-xl xl:max-w-screen-2xl px-2 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-6">
        {/* Video Thumbnail */}
        <h2 className="text-3xl font-bold mb-4 text-black lg:hidden">Embark on a scholarship journey</h2>

        <div className="w-full flex justify-center relative">
          <div className="relative w-full lg:w-3/4 max-w-lg">
            <img
              src="/assets/images/ay_video_poster.jpg"
              alt="Video Thumbnail"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center text-white text-6xl rounded-lg"
              style={{ background: "rgba(0, 0, 0, 0.5)" }}
            >
              ▶
            </button>
          </div>
          
        </div>
        <p className="text-sm text-black lg:hidden">
        Here's a 100 second video that takes you to a village of Bangladesh and shows how your scholarship impacts a day in the life of a student who needs it          </p>
        {/* Text Section */}
        <div className=" hidden lg:flex w-full text-black  flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-10">
          <h2 className=" text-3xl font-bold mb-4">The scholarship app</h2>
          <p className="text-lg ">
            In Bangladesh, while 98% of children enroll in school, 2 million children drop out to work before achieving literacy in order to support their families financially. On the flipside, Bangladesh has a diaspora population of 10 million in advanced economies who wish to make an impact on their homeland. AlterYouth, imagine Uber for scholarships, is a C2C scholarship app enabling users from around the world to start scholarships directly for financially struggling students in Government Primary Schools of Bangladesh, through digital banking.
          </p>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleBackdropClick} // Close modal on backdrop click
          >
            <div className="relative w-full lg:w-3/4 max-w-3xl bg-black rounded-lg">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-2xl rounded-lg z-50"
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
      </div>
    </section>
  );
};

export default VideoSection;