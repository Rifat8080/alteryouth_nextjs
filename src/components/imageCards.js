import React from 'react';

const ImageCard = ({ imageSrc, altText, caption }) => (
  <figure className="relative max-w-sm transition-all duration-300 cursor-pointer transform hover:scale-105">
    <a href="#">
      <img className="rounded-lg" src={imageSrc} alt={altText} />
    </a>
    <figcaption className="absolute px-4 text-lg text-white top-6">
      <p>{caption}</p>
    </figcaption>
  </figure>
);

const ImageCards = () => {
  const cardsData = [
    {
      imageSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
      altText: "image description 1",
      caption: "Do you want to get notified when a new component is added to Flowbite?"
    },
    {
      imageSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
      altText: "image description 2",
      caption: "Stay updated with our latest features."
    },
    {
      imageSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
      altText: "image description 3",
      caption: "Join our community for more updates."
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