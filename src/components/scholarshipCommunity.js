import { useState, useEffect } from 'react';

const ScholarshipCommunity = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('/assets/data/leaderboard.json')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard data:', error));
  }, []);

  return (
    <div className="bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1300] mx-auto p-4 ">
      {leaderboard.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <div>
              <div className="mb-1 group">
                <div className="cursor-pointer flex items-center">
                  <span className="mr-1 mt-0.5  text-black font-bold cursor-pointer group-hover:underline underline-offset-2 decoration-lightGreen">@{item.invite_code}</span>
                  <img src={`https://flagicons.lipis.dev/flags/4x3/${item.country_code.toLowerCase()}.svg`} alt={`${item.country_code} flag`} width="16" height="12" className="rounded-sm object-cover" />
                </div>
              </div>
              <span className="text-white bg-lightGreen rounded-full px-2 py-1 text-xs font-medium">{item.count} Scholarship{item.count > 1 ? 's' : ''}</span>
            </div>
            <div>
              <p className="text-xs text-black">{new Date(item.started_at).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="flex flex-col mt-4 gap-3">
            {item.student_imgs.map((img, imgIndex) => (
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
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ScholarshipCommunity;