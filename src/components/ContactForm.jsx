import { useRef, useState } from "react";
import { validateForm } from "../utils/validation";

export const ContactForm = () => {
  const formRef = useRef();
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataObj = new FormData(formRef.current);
    const data = {
      userName: formDataObj.get("userName"),
      phone: formDataObj.get("phone"),
      subject: formDataObj.get("subject"),
      message: formDataObj.get("message"),
      rodo: formDataObj.get("rodo") === "on",
    };

    const validationErrors = validateForm(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Formularz gotowy do wysyłki EmailJS:", data);
      alert("Wysłano!");
      formRef.current.reset();
    }
  };

  return (
    <div className="bg-white p-8 lg:p-12 rounded-4xl shadow-2xl border border-gray-200 order-1 lg:order-2">
      <h3 className="text-xl font-extrabold text-green-900 mb-8 uppercase tracking-tight text-center">
        Zadaj pytanie
      </h3>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-xs font-black text-green-900 mb-2 uppercase tracking-widest">
            Imię i nazwisko
          </label>
          <input
            name="userName"
            type="text"
            placeholder="np. Jan Kowalski"
            className={`w-full px-5 py-3 rounded-xl bg-transparent border-2 focus:border-green-700 outline-none transition-all text-xs font-semibold ${errors.userName ? "border-red-500" : "border-gray-200"}`}
          />
          {errors.userName && (
            <p className="text-red-500 text-[10px] mt-1 font-bold">
              {errors.userName}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-black text-green-900 mb-2 uppercase tracking-widest">
              Telefon
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="Numer kontaktowy..."
              className={`w-full px-5 py-3 rounded-xl bg-transparent border-2 focus:border-green-700 outline-none transition-all text-xs font-semibold ${errors.phone ? "border-red-500" : "border-gray-200"}`}
            />
            {errors.phone && (
              <p className="text-red-500 text-[10px] mt-1 font-bold">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-black text-green-900 mb-2 uppercase tracking-widest">
              Temat
            </label>
            <input
              name="subject"
              type="text"
              placeholder="W czym możemy pomóc?"
              className={`w-full px-5 py-3 rounded-xl bg-transparent border-2 focus:border-green-700 outline-none transition-all text-xs font-semibold ${errors.subject ? "border-red-500" : "border-gray-200"}`}
            />
            {errors.subject && (
              <p className="text-red-500 text-[10px] mt-1 font-bold">
                {errors.subject}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-black text-green-900 mb-2 uppercase tracking-widest">
            Wiadomość
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Opisz krótko zakres prac..."
            className={`w-full px-5 py-3 rounded-xl bg-transparent border-2 focus:border-green-700 outline-none transition-all resize-none text-xs font-semibold ${errors.message ? "border-red-500" : "border-gray-200"}`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-[10px] mt-1 font-bold">
              {errors.message}
            </p>
          )}
        </div>

        <div className="py-2">
          <div className="flex items-start gap-3">
            <input
              name="rodo"
              type="checkbox"
              id="rodo"
              className={`mt-0.5 h-4 w-4 shrink-0 rounded border-2 transition-colors cursor-pointer 
                ${errors.rodo ? "border-red-500" : "border-gray-300 text-green-700 focus:ring-green-600"}`}
            />
            <label
              htmlFor="rodo"
              className="text-[9px] leading-tight uppercase font-bold tracking-tight cursor-pointer transition-colors text-gray-500"
            >
              Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
              ustawą o ochronie danych osobowych w związku z wysłaniem zapytania
              przez formularz kontaktowy.
            </label>
          </div>

          {errors.rodo && (
            <p className="text-red-500 text-[10px] font-bold mt-2 ml-7">
              {errors.rodo}
            </p>
          )}
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="cursor-pointer w-full sm:w-auto bg-green-800 text-white font-black text-[10px] uppercase tracking-[0.2em] px-14 py-4 rounded-xl shadow-xl hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300"
          >
            Wyślij zapytanie
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
