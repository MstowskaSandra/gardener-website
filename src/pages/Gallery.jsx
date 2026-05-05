import React from "react";
import images from "../data/images";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const GardenGallery = () => {
  return (
    <section className="relative py-16 lg:py-24 font-text px-6 overflow-hidden bg-[#EBE4D6]">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, #f5f1e8 0%, transparent 100%)`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold mb-2 tracking-wide uppercase text-sm">
            Nasza praca
          </p>
          <h2 className="font-candal text-2xl lg:text-3xl font-bold text-green-900 leading-tight">
            Galeria Realizacji
          </h2>
          <div className="w-16 h-1.5 bg-green-800 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-[2.5rem] border-2 border-gray-300 shadow-md hover:border-green-700 hover:shadow-2xl transition-all duration-500 bg-white"
            >
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-mont text-xs font-bold tracking-widest uppercase">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#FAFFF4] backdrop-blur-md py-6 px-8 rounded-4xl border-2 border-green-800/20 flex flex-col items-center justify-center gap-4 shadow-sm max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center">
            <p className="font-mont text-md font-bold text-green-900">
              Chcesz zobaczyć więcej?
            </p>
            <span className="text-orange-600 font-bold text-md tracking-wide">
              Śledź nasze najnowsze projekty!
            </span>
          </div>

          <div className="flex items-center gap-6 text-green-800">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-120 hover:text-[#1877F2] transition-all duration-300"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-120 hover:text-[#E4405F] transition-all duration-300"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GardenGallery;
