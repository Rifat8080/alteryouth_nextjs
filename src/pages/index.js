import HeroSection from "../components/heroSection";
import Navbar from "../components/navbar";
import "../styles/globals.css";


const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* Other sections of your homepage */}
    </>
  );
};

export default HomePage;