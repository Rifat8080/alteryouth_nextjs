import HeroSection from "../components/heroSection";
import Navbar from "../components/navbar";
import UberSection from "../components/uberSection";
import ScholarshipCommunity from "@/components/scholarshipCommunity";
import { getImages } from "@/lib/getImages";
import Carousel from "@/components/communityImpact";

export async function getStaticProps() {
  const images = getImages();
  return {
    props: {
      images,
    },
  };
}

const HomePage = ({ images }) => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <UberSection />
      <ScholarshipCommunity />
      <Carousel images={images} />
    </>
  );
};

export default HomePage;