import React from 'react';

const ImageCard = ({ imageSrc, altText, caption }) => (
  <figure className="relative max-w-sm transition-all duration-300 cursor-pointer transform hover:scale-105">
    <a href="#">
      <img className="rounded-lg" src={imageSrc} alt={altText} />
    </a>
    <figcaption className="absolute px-4 text-xl font-bold max-w-60 text-white top-6">
      <p>{caption}</p>
    </figcaption>
  </figure>
);

const ImageCards = () => {
  const cardsData = [
    {
      imageSrc: "/assets/images/headteacher.jpg",
      altText: "image description 1",
      caption: "Are you a teacher? Get your students listed on the platform."
    },
    {
      imageSrc: "/assets/images/person.jpg",
      altText: "image description 2",
      caption: "You can be anywhere in the world"
    },
    {
      imageSrc: "/assets/images/applicant.jpg",
      altText: "image description 3",
      caption: "While students get closer to their dreams"
    }
  ];

  return (
    <div className="bg-white py-7">
      <div className="flex space-x-11  justify-center items-center">
        {cardsData.map((card, index) => (
          <ImageCard
            key={index}
            imageSrc={card.imageSrc}
            altText={card.altText}
            caption={card.caption}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCards;