import { useState, useEffect } from 'react';

const ScholarshipCommunity = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState(6);

  useEffect(() => {
    fetch('/assets/data/leaderboard.json')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard data:', error));
  }, []);

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const showMoreCards = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 6);
  };

  return (
    <div className="bg-white p-10">
           <div className="flex flex-col justify-center items-center">
           
           <h2 className="text-3xl md:text-4xl font-bold text-center text-lightGreen">#alteryouthrevolution</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black">The Scholarship Community</h2>
          <p className="text-sm lg:text-base max-w-xl text-center text-black font-normal mt-2">
          Despite public primary schools being free of cost in Bangladesh,
many students still <span className="font-bold">drop out of school</span> to work and earn in order to support their families.
Your scholarship helps a child attend school and support their families at the same time.
          </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1300px] mx-auto p-4">
        {leaderboard.slice(0, visibleCards).map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <div>
                <div className="mb-1 group">
                  <div className="cursor-pointer flex items-center">
                    <span className="mr-1 mt-0.5 text-black font-bold cursor-pointer group-hover:underline underline-offset-2 decoration-lightGreen">@{item.invite_code}</span>
                    <img src={`https://flagicons.lipis.dev/flags/4x3/${item.country_code.toLowerCase()}.svg`} alt={`${item.country_code} flag`} width="16" height="12" className="rounded-sm object-cover" />
                  </div>
                </div>
                <span className="text-white bg-lightGreen rounded-full px-2 py-1 text-xs font-medium">{item.count} Scholarship{item.count > 1 ? 's' : ''}</span>
              </div>
              <div>
                <p className="text-xs text-black font-light">Joined {new Date(item.started_at).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex flex-col mt-4 gap-3">
              {item.student_imgs.slice(0, expandedCard === index ? item.student_imgs.length : 1).map((img, imgIndex) => (
                <div key={imgIndex} className="flex items-center">
                  <div className="relative rounded-full h-12 w-12 overflow-hidden">
                    <img src={img} alt="Student profile photo" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-black text-sm mb-0">Student {imgIndex + 1}</p>
                    <p className="text-black text-xs">School Name</p>
                  </div>
                </div>
              ))}
              {item.student_imgs.length > 1 && (
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-lightGreen font-medium text-sm mt-2"
                >
                  {expandedCard === index ? 'See Less' : 'See More'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {visibleCards < leaderboard.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={showMoreCards}
            className="px-4 py-2 bg-lightGreen text-white font-medium rounded-lg"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default ScholarshipCommunity;