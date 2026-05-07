import { features } from "../../data/features";
import FeatureCard from "./FeatureCard";
import Reveal from "../ui/Reveal";

export const AboutFeatures = () => (
  <section className="bg-[#fafff4] py-16 px-12 lg:py-24 font-text overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <Reveal width="100%">
        <div className="relative w-full aspect-4/3 lg:aspect-5/4 overflow-hidden rounded-3xl shadow-2xl border-2 border-gray-300">
          <img
            src="/assets/image-section2.svg"
            alt="Ogrodnik"
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition duration-700 "
          />
        </div>
      </Reveal>

      <div>
        <Reveal delay={0.2}>
          <p className="text-orange-500 font-bold mb-2 tracking-wide">
            Dlaczego my?
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <h2 className="text-2xl lg:text-3xl font-mont font-extrabold text-green-800 tracking-wider">
            Mamy 9+ lat doświadczenia w pielęgnacji ogrodów
          </h2>
        </Reveal>

        <div className="flex flex-col py-12 gap-6 items-center">
          {features.map((item, index) => (
            <Reveal key={item.title} delay={0.4 + index * 0.3} width="100%">
              <FeatureCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutFeatures;
