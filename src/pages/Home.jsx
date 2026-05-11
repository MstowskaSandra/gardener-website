import CallButton from "../components/ui/CallButton";
import Hero from "../components/home/Hero";
import AboutFeatures from "../components/home/AboutFeatures";
import WorkProcess from "../components/home/WorkProcess";
import ServicesOverview from "../components/home/ServicesOverview";
import ReviewSection from "../components/home/ReviewSection";
import LocationArea from "../components/home/LocationArea";
import MidBanner from "../components/MidBanner";
import LargeBanner from "../components/LargeBanner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>OwcaOgrody | Profesjonalne Usługi Ogrodnicze</title>
        <meta
          name="description"
          content="Twój wymarzony ogród w zasięgu ręki. Zajmujemy się pielęgnacją ogrodu, trawnika, wycinką drzew i koszeniem. Sprawdź naszą ofertę!"
        />
      </Helmet>
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
    </main>
  );
};

export default Home;
