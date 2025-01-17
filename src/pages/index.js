import HeroSection from "../components/heroSection";
import Navbar from "../components/navbar";
import UberSection from "../components/uberSection";
import ScholarshipCommunity from "@/components/scholarshipCommunity";
import { getImages } from "@/lib/getImages";
import { getScImages } from "@/lib/getScImages";
import Carousel from "@/components/communityImpact";
import SchoolCarousel from "@/components/schoolCaroursel";
import SchoolEligibility from "@/components/schoolEligibility";
import ImageCards from "@/components/imageCards";
import VideoSection from "@/components/videoSection";
import IconSection from "@/components/iconSection";

export async function getStaticProps() {
  const images = getImages();
  const scImages = getScImages();
  return {
    props: {
      images,
      scImages,
    },
  };
}

const HomePage = ({ images, scImages }) => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <UberSection />
      <ScholarshipCommunity />
      <Carousel images={images} />
      <SchoolCarousel images={scImages} />
      <SchoolEligibility />
      <ImageCards />
      <VideoSection />
      <IconSection />
    </>
  );
};

export default HomePage;