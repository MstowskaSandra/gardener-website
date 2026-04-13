import { FaLeaf, FaClock, FaTools, FaHandshake } from "react-icons/fa";

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

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700">
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
            <p className="text-orange-500 font-semibold mb-2 tracking-wide">
              Dlaczego my?
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-black leading-tight">
              Mamy 9+ lat doświadczenia w pielęgnacji ogrodów
            </h2>

            <div className="mt-10 space-y-4">
              <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white shadow-lg hover:shadow-md hover:-translate-y-0.5 transition border-2 border-gray-200">
                <FaLeaf className="text-2xl text-green-700 mt-1 mx-4 shrink-0" />
                <div>
                  <p className="font-semibold">Wykwalifikowana kadra</p>
                  <p className="text-sm text-gray-600">
                    Doświadczeni specjaliści dbający o każdy szczegół.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-5 rounded-2xl bg-[#93d832]/30 shadow-lg hover:shadow-md hover:-translate-y-0.5 transition  border-2 border-gray-200">
                <FaClock className="text-2xl text-green-800 mt-1 mx-4 shrink-0" />
                <div>
                  <p className="font-semibold">Terminowość i dokładność</p>
                  <p className="text-sm text-gray-600">
                    Realizujemy usługi zgodnie z ustalonym terminem.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white shadow-lg hover:shadow-md hover:-translate-y-0.5 transition border-2 border-gray-200">
                <FaTools className="text-2xl text-green-700 mt-1 mx-4 shrink-0" />
                <div>
                  <p className="font-semibold">Profesjonalny sprzęt</p>
                  <p className="text-sm text-gray-600">
                    Nowoczesne narzędzia do pielęgnacji ogrodów i drzew.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-5 rounded-2xl bg-[#93d832]/30 shadow-lg hover:shadow-md hover:-translate-y-0.5 transition  border-2 border-gray-200">
                <FaHandshake className="text-2xl text-green-800 mt-1 mx-4 shrink-0" />
                <div>
                  <p className="font-semibold">Indywidualne podejście</p>
                  <p className="text-sm text-gray-600">
                    Każdy ogród traktujemy indywidualnie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
