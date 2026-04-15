import { MdOutlinePhoneCallback } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { features } from "../data/features";
import FeatureCard from "../components/FeatureCard";
import { servicesCards } from "../data/servicesCards";
import ServiceCard from "../components/ServiceCard";
import { steps } from "../data/steps";
import StepCard from "../components/StepCard";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../data/reviews";
import { FcGoogle } from "react-icons/fc";

const Home = () => {
  return (
    <>
      <section className="relative bg-[#EBE4D6] overflow-hidden min-h-[90vh] lg:min-h-screen">
        <div
          className="absolute inset-0 lg:hidden bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/assets/background-section-hero.svg')",
          }}
        />

        <div className="hidden lg:block absolute top-0 right-[-30%] h-full w-[95%]">
          <div
            className="w-full h-full bg-no-repeat bg-cover bg-right"
            style={{
              backgroundImage: "url('/assets/background-section-hero.svg')",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-[90vh] lg:min-h-screen flex items-center">
          <div className="max-w-2xl w-full text-center lg:text-left">
            <h1 className="font-candal text-2xl sm:text-3xl lg:text-4xl font-bold text-green-900 leading-tight uppercase">
              Twój ogród, moja pasja -
              <br />
              od zieleni po wysokie drzewa
            </h1>

            <p className="mt-6 text-mont font-semibold sm:text-lg lg:text-xl text-gray-700">
              Kompleksowa pielęgnacja ogrodów, trawników i drzew. Wszystko,
              czego potrzebuje Twój ogród.
            </p>

            <div className="flex gap-4 sm:gap-6 lg:gap-8 mt-10 lg:mt-20 justify-center lg:justify-start flex-wrap">
              <button className="bg-green-800 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-green-900 transition">
                Nasze Usługi
              </button>

              <button className="bg-orange-500 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-orange-600 transition">
                Zadzwoń teraz
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafff4] py-16 lg:py-24 font-text">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative w-full aspect-4/3 lg:aspect-5/4 overflow-hidden rounded-3xl shadow-2xl border-2 border-gray-300">
            <img
              src="/assets/image-section2.svg"
              alt="Ogrodnik"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition duration-700 "
            />
          </div>

          <div>
            <p className="text-orange-500 font-bold mb-2 tracking-wide">
              Dlaczego my?
            </p>
            <h2 className="text-2xl lg:text-3xl font-mont font-extrabold text-green-800 tracking-wider">
              Mamy 9+ lat doświadczenia w pielęgnacji ogrodów
            </h2>
            <div className="flex flex-col py-12 gap-6 items-center">
              {features.map((item) => (
                <FeatureCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ebe4d6] pt-16 pb-6 lg:pt-18 font-text">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-orange-500 font-bold mb-2 tracking-wide">
            Jak wygląda współpraca?
          </p>

          <h2 className="font-candal pb-8 text-2xl lg:text-3xl font-bold text-green-900 leading-tight">
            4 proste kroki do zadbanego ogrodu
          </h2>

          <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-6 flex-wrap">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-col lg:flex-row items-center gap-6"
              >
                <StepCard {...step} />

                {index < steps.length - 1 && (
                  <FaArrowRight className="text-4xl text-green-800 rotate-90 lg:rotate-0 transition-transform duration-300 ease-out hover:scale-120" />
                )}
              </div>
            ))}
          </div>

          <div className="pt-25 pb-8 flex sm:flex-row flex-col items-center justify-end gap-2">
            <span className="text-orange-500 font-bold text-md">
              Darmowa konsultacja.
            </span>
            <p className="text-gray-700 font-semibold flex gap-2 items-center text-md ">
              Masz pytania? Skontaktuj się z nami
            </p>

            <button className="ml-4 cursor-pointer flex items-center gap-2 bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
              <MdOutlinePhoneCallback className="w-6 h-6" />
              Zadzwoń
            </button>
          </div>
        </div>
      </section>

      <section
        className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/background-section4.svg')" }}
      >
        <div className="absolute inset-0 bg-white/40"></div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <h2 className="font-candal px-4 md:px-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#fafff4] tracking-wider drop-shadow-lg">
            Dbamy o szczegóły.
          </h2>
        </div>
      </section>

      <section className="bg-[#fafff4] pt-16 pb-8 lg:pt-20 font-text">
        <div className="max-w-8xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-orange-500 font-bold mb-2 tracking-wide">
            Nasze usługi
          </p>

          <h2 className="font-candal text-2xl lg:text-3xl font-bold text-green-900 leading-tight">
            Kompleksowo zadbamy o Twój ogród
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mt-16">
            {servicesCards.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="flex justify-end  items-center gap-4 pt-30 pr-6 font-mont text-sm font-semibold text-green-800">
            <p>
              Nie znalazłeś usługi dla siebie? Skontaktuj się z nami, postaramy
              się pomóc{" "}
            </p>
            <button className="cursor-pointer flex items-center gap-2 bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
              <MdOutlinePhoneCallback className="w-6 h-6" />
              Zadzwoń
            </button>
          </div>
        </div>
      </section>

      <section
        className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] w-full bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/background-section-tools.svg')",
        }}
      >
        <div className="absolute inset-0 bg-white/40"></div>

        <div className="relative z-10 flex h-full items-center justify-start pl-8">
          <h2 className="font-mont px-4 md:px-8 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#fafff4] tracking-wider drop-shadow-lg">
            Najlepszy sprzęt.
          </h2>
        </div>
      </section>

      <section className="bg-[#ebe4d6] pt-16 pb-6 lg:pt-18 font-text">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-orange-500 font-bold mb-2 tracking-wide">OPINIE</p>

          <h2 className="font-candal pb-8 text-2xl lg:text-3xl font-bold text-green-900 leading-tight">
            Nasza praca mówi sama za siebie, <br />
            tak samo jak opinie naszych klientów
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12 px-12">
          {reviews.map((item, index) => (
            <ReviewCard key={index} {...item} />
          ))}
        </div>

        <div className="mt-12 flex justify-end pr-12">
          <button className="flex items-center gap-2 cursor-pointer font-mont text-xs sm:text-sm font-semibold text-white px-5 py-2 rounded-full bg-orange-500 hover:bg-orange-600 hover:scale-105 transition">
            Sprawdź nas w Google
            <FcGoogle className="text-lg " />
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
