import CallButton from "../components/ui/CallButton";
import Hero from "../components/home/Hero";
import AboutFeatures from "../components/home/AboutFeatures";
import WorkProcess from "../components/home/WorkProcess";
import ServicesOverview from "../components/home/ServicesOverview";
import ReviewSection from "../components/home/ReviewSection";
import LocationArea from "../components/home/LocationArea";
import MidBanner from "../components/MidBanner";
import LargeBanner from "../components/LargeBanner";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutFeatures />
      <WorkProcess />
      <LargeBanner
        imgUrl="/assets/background-section4.svg"
        text="Dbamy o szczegóły."
      />
      <ServicesOverview />
      <MidBanner
        imgUrl="/assets/background-section-tools.svg"
        text="Najlepszy sprzęt."
      />
      <ReviewSection />
      <MidBanner
        imgUrl="/assets/background-section-path.svg"
        text="Można na Nas liczyć."
      />
      <LocationArea />
    </>
  );
};

export default Home;
