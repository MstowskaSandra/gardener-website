import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import ServicesDropdown from "./ServicesDropdown";
import { services } from "../data/services";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className="sticky top-0 z-50 bg-[#fafff4] shadow-md">
        <div className="mx-auto px-4 py-4 sm:px-6 sm:py-4 lg:px-12 flex items-center justify-between">
          <div className="text-xl sm:text-2xl lg:text-2xl font-candal font-bold uppercase text-black-700">
            Owca Ogrody
          </div>

          <div className="hidden lg:flex space-x-6 items-center uppercase font-text">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-700 transition-all duration-300"
            >
              Strona Główna
            </Link>
            <ServicesDropdown />
            <Link
              to="/galeria"
              className="text-gray-700 hover:text-green-700 transition-all duration-300"
            >
              Galeria
            </Link>
            <Link
              to="/kontakt"
              className="text-gray-700 hover:text-green-700 transition-all duration-300"
            >
              Kontakt
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform"
              >
                <FaInstagram size={24} />
              </a>
            </div>
            <div className="flex flex-col items-end font-text">
              <a
                href="tel:533615677"
                className="text-black-700 font-semibold hover:underline"
              >
                533 615 677
              </a>
              <span className="text-gray-600 text-sm">
                Skontaktuj się z nami
              </span>
            </div>
          </div>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-200 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`
        fixed top-0 right-0 h-full w-3/4 max-w-sm font-text bg-[#fafff4] border-l-3 border-[#12572B] shadow-2xl transform 
        transition-transform duration-300 ease-in-out z-50 lg:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="p-4 flex justify-end border-b border-gray-200">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto h-full">
          <div className="space-y-1">
            <Link
              to="/"
              className="block text-2xl font-semibold text-gray-700 hover:text-green-700 py-1 transition-colors "
              onClick={() => setIsOpen(false)}
            >
              Strona Główna
            </Link>

            <div>
              <span className="block text-2xl font-semibold text-gray-700 py-1">
                Usługi
              </span>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/uslugi/${service.slug}`}
                  className="block pl-6 text-xl text-gray-700 hover:text-green-700 py-1.5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <Link
              to="/galeria"
              className="block text-2xl font-semibold text-gray-700 hover:text-green-700 py-1 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Galeria
            </Link>
            <Link
              to="/kontakt"
              className="block text-2xl font-semibold text-gray-700 hover:text-green-700 py-1 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </div>

          <div className="pt-8 border-t border-gray-200 space-y-6">
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:scale-110 transition-transform"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:scale-110 transition-transform"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-gray-600 text-lg">Skontaktuj się z nami</p>
              <a
                href="tel:533615677"
                className="block text-2xl font-bold text-black-700 hover:underline"
              >
                533 615 677
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
