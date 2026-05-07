import { cities } from "../../data/cities"
import { FaMapMarkerAlt } from "react-icons/fa";
import CallButton from "../ui/CallButton";

export const LocationArea = () => (
    <section className="bg-[#FAFFF4] py-12 px-8 sm:px-12 lg:py-16 lg:px-12 font-text">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative w-full aspect-4/3 md:aspect-5/4 overflow-hidden rounded-2xl">
            <img
              src="/assets/map.svg"
              alt="Mapa"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div className="flex flex-col gap-4 font-mont">
            <p className="text-orange-500 font-bold tracking-wide">
              Gdzie działamy?
            </p>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-green-800 tracking-wider">
              Ogrodnik w Strzelinie i okolicach
            </h2>

            <p className="text-sm sm:text-base pb-4">
              Świadczymy kompleksowe usługi ogrodnicze w Strzelinie oraz
              miejscowościach w promieniu ok 50 km. Obsługujemy zarówno prywatne
              ogrody, jak i tereny zielone przy firmach.
            </p>

            <div className="relative bg-[#ebe4d6] border border-gray-200 shadow-xl rounded-3xl px-6 sm:px-8 lg:px-12 py-6 max-w-full md:max-w-fit hover:scale-[1.03] hover:shadow-2xl transition duration-500">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-200 rounded-full blur-2xl opacity-50"></div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
                {cities.map((city) => (
                  <li
                    key={city}
                    className="flex items-center gap-3 text-green-900 font-semibold tracking-wide transition duration-300 hover:translate-x-1 hover:text-green-700"
                  >
                    <span className="text-green-600 text-lg">✓</span>
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-row flex-wrap items-center justify-between gap-12 mt-12">
          <a
            href="https://maps.app.goo.gl/1YNFGqNLspPWdPC46"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex items-center gap-2 bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-fit font-mont font-bold text-sm"
          >
            <FaMapMarkerAlt className="w-5 h-5" />
            Znajdź nas
          </a>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-green-800 font-mont text-sm font-semibold text-center md:text-left">
            <p className="max-w-xl">
              Mieszkasz poza naszym zasięgiem? Daj znać, zobaczymy co da się
              zrobić
            </p>

            <CallButton />
          </div>
        </div>
      </section>
);

export default LocationArea;