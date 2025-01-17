import React from "react";
import SvgDisabledFather from "../components/DisabledFather";
import SvgOrphan from "../components/Orphan";
import SvgSingleMother from "../components/SingleMother";

const SchoolEligibility = () => {
  const cards = [
    {
      title: "Disabled Father",
      description: "Student's father is physically unable to work",
      svg: (
        <SvgDisabledFather />
      ),
    },
    {
      title: "Orphan",
      description: "Both parents are deceased or have abandoned the child",
      svg: (
        <SvgOrphan />
      ),
    },
    {
      title: "Single Mother",
      description: "Student's father is deceased or has abandoned the family",
      svg: (
       <SvgSingleMother />
      ),
    },
  ];

  return (
    <div className="bg-white py-16">
         <div className="flex flex-col items-center justify-center bg-white py-7">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black">Scholarship Eligibility</h2>
        <p className="flex text-sm lg:text-base max-w-4xl text-center text-black font-medium">
        Only students who are currently enrolled in Government Primary Schools and fall
        under any of the following criteria are eligible to apply for scholarships
        </p>
      </div>
    <div className="container mx-auto py-8 px-4 max-w-7xl ">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-6 shadow-md rounded-lg"
          >
            {/* SVG Icon */}
            <div className="flex-shrink-0 w-12 h-12 mr-4 flex items-center justify-center">
              {card.svg}
            </div>

            {/* Title and Description */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SchoolEligibility;