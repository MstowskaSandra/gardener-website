export const ContactForm = () => {
    return (
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
    );
}

export default ContactForm;