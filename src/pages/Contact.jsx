import React from "react";
import {
  MdOutlinePhoneCallback,
  MdOutlineMail,
  MdLocationOn,
  MdAccessTime,
} from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#EBE4D6] font-mont">
      <div className="relative h-[35vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/background-section4.svg')",
            backgroundPosition: "center 30%",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 lg:px-12 flex items-center">
          <h1 className="text-white text-4xl lg:text-5xl font-extrabold uppercase tracking-tighter">
            Kontakt
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          <div className="flex flex-col gap-6 text-green-900 order-2 lg:order-1">
            <div>
              <h2 className="text-3xl font-extrabold uppercase mb-6 tracking-tight">
                Skontaktuj się z nami
              </h2>
              <p className="text-gray-700 font-semibold mb-10 max-w-md text-sm leading-relaxed">
                Masz pytania dotyczące Twojego ogrodu? Chętnie pomożemy.
                Skontaktuj się z nami telefonicznie lub przez formularz.
              </p>
            </div>

            <div className="space-y-10">
              <a
                href="tel:+48123456789"
                className="flex items-center gap-6 group cursor-pointer w-fit"
              >
                <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 group-hover:bg-green-800 group-hover:text-white transition-all duration-300">
                  <MdOutlinePhoneCallback
                    size={28}
                    className="text-green-800 group-hover:text-lime-400 transition-colors"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600 mb-1">
                    Zadzwoń do nas
                  </p>
                  <p className="text-xl font-extrabold">+48 123 456 789</p>
                </div>
              </a>

              <a
                href="mailto:biuro@ogrodnik.pl"
                className="flex items-center gap-6 group cursor-pointer w-fit"
              >
                <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 group-hover:bg-green-800 group-hover:text-white transition-all duration-300">
                  <MdOutlineMail
                    size={28}
                    className="text-green-800 group-hover:text-lime-400 transition-colors"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600 mb-1">
                    Napisz e-mail
                  </p>
                  <p className="text-xl font-extrabold text-wrap">
                    biuro@ogrodnik.pl
                  </p>
                </div>
              </a>

              <a
                href="https://maps.app.goo.gl/1YNFGqNLspPWdPC46"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group cursor-pointer w-fit"
              >
                <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 group-hover:bg-green-800 group-hover:text-white transition-all duration-300">
                  <MdLocationOn
                    size={28}
                    className="text-green-800 group-hover:text-lime-400 transition-colors"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600 mb-1">
                    Znajdź nas
                  </p>
                  <p className="text-xl font-extrabold">
                    Brzegowa 48, 57-100 Strzelin
                  </p>
                </div>
              </a>
            </div>

            <div className="flex gap-4 pt-6">
              <a
                href="#"
                className="bg-green-800 p-4 rounded-2xl text-white hover:bg-orange-500 transition-all shadow-lg hover:-translate-y-1"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="bg-green-800 p-4 rounded-2xl text-white hover:bg-orange-500 transition-all shadow-lg hover:-translate-y-1"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white p-8 lg:p-12 rounded-4xl shadow-2xl border border-gray-200 order-1 lg:order-2">
            <h3 className="text-xl font-extrabold text-green-900 mb-8 uppercase tracking-tight text-center">
              Zadaj pytanie
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-xs font-black text-green-900 mb-2 uppercase tracking-widest">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  placeholder="np. Jan Kowalski"
                  className="w-full px-5 py-3 rounded-xl bg-transparent border-2 border-gray-200 focus:border-green-700 outline-none transition-all text-xs font-semibold"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-green-900 mb-2 uppercase tracking-widest">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    placeholder="Numer kontaktowy..."
                    className="w-full px-5 py-3 rounded-xl bg-transparent border-2 border-gray-200 focus:border-green-700 outline-none transition-all text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-green-900 mb-2 uppercase tracking-widest">
                    Temat
                  </label>
                  <input
                    type="text"
                    placeholder="W czym możemy pomóc?"
                    className="w-full px-5 py-3 rounded-xl bg-transparent border-2 border-gray-200 focus:border-green-700 outline-none transition-all text-xs font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-green-900 mb-2 uppercase tracking-widest">
                  Wiadomość
                </label>
                <textarea
                  rows="4"
                  placeholder="Opisz krótko zakres prac..."
                  className="w-full px-5 py-3 rounded-xl bg-transparent border-2 border-gray-200 focus:border-green-700 outline-none transition-all resize-none text-xs font-semibold"
                ></textarea>
              </div>

              <div className="flex items-start gap-3 py-2">
                <input
                  type="checkbox"
                  id="rodo"
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-green-700 focus:ring-green-600 cursor-pointer"
                />
                <label
                  htmlFor="rodo"
                  className="text-[9px] text-gray-500 leading-tight uppercase font-bold tracking-tight cursor-pointer"
                >
                  Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie
                  z ustawą o ochronie danych osobowych w związku z wysłaniem
                  zapytania przez formularz kontaktowy.
                </label>
              </div>

              <div className="flex justify-center pt-4">
                <button className="cursor-pointer w-full sm:w-auto bg-green-800 text-white font-black text-[10px] uppercase tracking-[0.2em] px-14 py-4 rounded-xl shadow-xl hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300">
                  Wyślij zapytanie
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
