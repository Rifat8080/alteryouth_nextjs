import React from 'react';

const ImageCard = ({ imageSrc, altText, caption, linkText, linkHref, isHeadteacher, bottomCaption }) => (
  <figure className="relative px-4 xl:px-0 lg:w-80 xl:w-96 transition-all duration-300 cursor-pointer transform hover:scale-105">
    <a href="#">
      <img className="rounded-lg h-96 w-full object-cover" src={imageSrc} alt={altText} />
    </a>
    <figcaption className="absolute px-4 text-2xl font-bold max-w-60 text-white top-6">
      <p>{caption}</p>
      <a href={linkHref} className="hover:underline text-white hover:text-gray-300 flex items-center mt-2">
        {linkText}
        <span className="ml-2 transition-transform duration-300 transform hover:translate-x-1">→</span>
      </a>
    </figcaption>
    {isHeadteacher && (
      <figcaption className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-white text-center">
        <p>{bottomCaption}</p>
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
      isHeadteacher: true,
      bottomCaption: "Only for Government Primary Schools in Bangladesh"
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
    <div className="bg-white py-7 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-12">
        {cardsData.map((card, index) => (
          <ImageCard
            key={index}
            imageSrc={card.imageSrc}
            altText={card.altText}
            caption={card.caption}
            linkText={card.linkText}
            linkHref={card.linkHref}
            isHeadteacher={card.isHeadteacher}
            bottomCaption={card.bottomCaption}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCards;