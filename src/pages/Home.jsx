import { FaLeaf, FaClock, FaTools, FaHandshake } from "react-icons/fa";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

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

      <section className="bg-[#ebe4d6] py-16 lg:py-18 font-text">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-orange-500 font-bold mb-2 tracking-wide">
            Jak wygląda współpraca?
          </p>

          <h2 className="font-candal text-2xl lg:text-3xl font-bold text-green-900 leading-tight">
            4 proste kroki do zadbanego ogrodu
          </h2>

          <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-6">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="border-3 border-green-800 rounded-4xl bg-[#fafff4] px-4 py-12 w-full max-w-55 shadow-lg  flex flex-col gap-3 hover:scale-105 transition">
                <p className="font-text text-5xl font-bold [-webkit-text-stroke:2px_green] text-transparent leading-none">
                  1
                </p>
                <h3 className="font-bold text-green-900">
                  Darmowa konsultacja
                </h3>
                <p className="text-sm text-gray-600">
                  Rozmawiamy o potrzebach Twojego ogrodu
                </p>
              </div>

              <FaArrowRight className="text-4xl text-green-800 rotate-90 lg:rotate-0 transition-transform duration-300 ease-out hover:translate-x-1" />
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="border-3 border-lime-500 rounded-4xl bg-[#fafff4] px-4 py-12 w-full max-w-55 shadow-lg  flex flex-col gap-3 hover:scale-105 transition">
                <p className="font-text text-5xl font-bold [-webkit-text-stroke:2px_green] text-transparent leading-none">
                  2
                </p>
                <h3 className="font-bold text-green-900">Plan prac</h3>
                <p className="text-sm text-gray-600">
                  Wspólnie ustalamy plan prac oraz wycenę.
                </p>
              </div>

              <FaArrowRight className="text-4xl text-green-800 rotate-90 lg:rotate-0 transition-transform duration-300 ease-out hover:translate-x-1" />
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="border-3 border-green-800 rounded-4xl bg-[#fafff4] px-4 py-12 w-full max-w-55 shadow-lg flex flex-col gap-3 hover:scale-105 transition">
                <p className="font-text text-5xl font-bold [-webkit-text-stroke:2px_green] text-transparent leading-none">
                  3
                </p>
                <h3 className="font-bold text-green-900">Realizacja</h3>
                <p className="text-sm text-gray-600">
                  Wykonujemy prace profesjonalnie i terminowo.
                </p>
              </div>

              <FaArrowRight className="text-4xl text-green-800 rotate-90 lg:rotate-0 transition-transform duration-300 ease-out hover:translate-x-1" />
            </div>

            <div className="border-3 border-lime-400 rounded-4xl bg-[#fafff4] px-4 py-12 w-full max-w-55 shadow-lg  flex flex-col gap-3 hover:scale-105 transition">
              <p className="font-text text-5xl font-bold [-webkit-text-stroke:2px_green] text-transparent leading-none">
                4
              </p>
              <h3 className="font-bold text-green-900">Gotowy ogród</h3>
              <p className="text-sm text-gray-600">
                Ja sprzątam, Ty cieszysz się efektami
              </p>
            </div>
          </div>

          <div className="mt-8 pt-25 flex sm:flex-row flex-col items-center justify-end gap-4">
            <span className="text-orange-500 font-bold text-md">
              Darmowa konsultacja.
            </span>
            <p className="text-gray-700 font-semibold flex gap-2 items-center text-md ">
              Masz pytania? Skontaktuj się z nami
            </p>

            <button className="cursor-pointer flex items-center gap-2 bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
              <MdOutlinePhoneCallback className="w-6 h-6" />
              Zadzwoń
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
