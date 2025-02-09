const UberSection = () => {
  return (
    <section className="bg-uberColor py-12 px-4 lg:px-8 mt-[-300px] lg:mt-[10px] xl:mt-[80px] xxl:mt-[60px] 1.5xl:mt-[162px] 3xl:mt-[196px]  3.5xl:mt-[160px] 4xl:mt-[290px] 5xl:mt-[420px]">
      <div className="max-w-6xl mx-auto text-center pt-[400px] md:pt-[350px] lg:pt-0">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">The Uber for Scholarships</h2>
          <p className="text-sm lg:text-base max-w-lg text-black font-normal mt-2">
            A platform connecting the world with financially struggling students
            in Government Primary Schools of Bangladesh
          </p>
        </div>
        <div className="flex justify-center space-x-8">
          <img src="assets/icons/appstore_small.svg" alt="App Store" className="w-24 h-24" />
          <img src="assets/icons/playstore_small.svg" alt="Play Store" className="w-24 h-24" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  max-w-7xl mx-auto">
        <div className="p-6 flex flex-col items-center">
          <img src="assets/images/app_scholarship.jpg" alt="Scholarship" className="w-48 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold mt-4 text-black">Transfer directly</h3>
          <p className="text-gray-700 mt-2 font-medium text-center">Your scholarship is transferred directly to your student's family on their mobile bank account.</p>
        </div>
        <div className="p-6 flex flex-col items-center">
          <img src="assets/images/app_school.png" alt="School" className="w-48  object-cover rounded-lg" />
          <h3 className="text-xl font-semibold mt-4 text-black">Get school reports</h3>
          <p className="text-gray-700 mt-2 font-medium text-center">View attendance data and report cards from your student's school, until completion of Class 5.</p>
        </div>
        <div className="p-6 flex flex-col items-center">
          <img src="assets/images/app_graduation.png" alt="Graduation" className="w-48 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold mt-4 text-black">Ensure a literate citizen</h3>
          <p className="text-gray-700 mt-2 font-medium text-center">Your scholarship continues until completion of class 5, when your student achieves literacy.</p>
        </div>
      </div>
    </section>
  );
};

export default UberSection;