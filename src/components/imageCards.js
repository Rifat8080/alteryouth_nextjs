import React from 'react';

const ImageCard = ({ imageSrc, altText, caption, linkText, linkHref, isHeadteacher }) => (
  <figure className="relative w-96 transition-all duration-300 cursor-pointer transform hover:scale-105">
    <a href="#">
      <img className="rounded-lg h-96 w-full object-cover" src={imageSrc} alt={altText} />
    </a>
    <figcaption className="absolute px-4 text-2xl font-bold max-w-60 text-white top-6">
      <p>{caption}</p>
      <a href={linkHref} className="underline text-white hover:text-gray-300 flex items-center mt-2">
        {linkText}
        <span className="ml-2 transition-transform duration-300 transform hover:translate-x-1">→</span>
      </a>
    </figcaption>
    {isHeadteacher && (
      <figcaption className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-lg text-white text-center">
        <p>{caption}</p>
      </figcaption>
    )}
  </figure>
);

const ImageCards = () => {
  const cardsData = [
    {
      imageSrc: "/assets/images/headteacher.jpg",
      altText: "image description 1",
      caption: "Are you a teacher? Get your students listed on the platform.",
      linkText: "Learn more",
      linkHref: "#",
      isHeadteacher: true
    },
    {
      imageSrc: "/assets/images/person.jpg",
      altText: "image description 2",
      caption: "You can be anywhere in the world",
      linkText: "Discover more",
      linkHref: "#",
      isHeadteacher: false
    },
    {
      imageSrc: "/assets/images/applicant.jpg",
      altText: "image description 3",
      caption: "While students get closer to their dreams",
      linkText: "Join us",
      linkHref: "#",
      isHeadteacher: false
    }
  ];

  return (
    <div className="bg-white py-7">
      <div className="flex space-x-11 justify-center items-center">
        {cardsData.map((card, index) => (
          <ImageCard
            key={index}
            imageSrc={card.imageSrc}
            altText={card.altText}
            caption={card.caption}
            linkText={card.linkText}
            linkHref={card.linkHref}
            isHeadteacher={card.isHeadteacher}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCards;