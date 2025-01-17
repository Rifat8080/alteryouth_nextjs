import HeroSection from "../components/heroSection";
import Navbar from "../components/navbar";
import UberSection from "../components/uberSection";
import ScholarshipCommunity from "@/components/scholarshipCommunity";


const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <UberSection />
      <ScholarshipCommunity />
    </>
  );
};

export default HomePage;