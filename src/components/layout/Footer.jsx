import { services } from "../../data/services";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#12572b] text-white font-mont">
      
      <div className="max-w-7xl mx-auto px-12 py-12 border-b border-white/30 flex flex-col lg:flex-row justify-between gap-12">
        

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <h5 className="font-bold mb-4 text-lg">Nasze usługi</h5>
            <ul className="space-y-2 text-sm text-white/80">
              {services.map((item) => (
                <li key={item.slug}>
                    <Link
                        to={`/services/${item.slug}`}
                        className="hover:text-white transition hover:translate-x-1 inline-block"
                    >
                        {item.name}
                    </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4 text-lg">Nasze media</h5>
            <div className="flex flex-col gap-2 text-sm text-white/80">
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition hover:translate-x-1 inline-block"
                >
                    Instagram
                </a>
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition hover:translate-x-1 inline-block"
                >
                    Facebook
                </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-4 text-lg">Kontakt</h5>
            <div className="flex flex-col gap-2 text-sm text-white/80">
                <a
                    href="tel:512512512"
                    className="hover:text-white transition hover:translate-x-1 inline-block"
                >
                    <span className="font-semibold text-white">Tel:</span> 512 512 512
                </a>

                <a
                    href="mailto:owcaogrody@gmail.com"
                    className="hover:text-white transition hover:translate-x-1 inline-block"
                >
                    <span className="font-semibold text-white">Email:</span> owcaogrody@gmail.com
                </a>

                <a
                    href="https://maps.google.com/?q=ul.Brzegowa 48, Strzelin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition hover:translate-x-1 inline-block"
                >
                    <span className="font-semibold text-white">Adres:</span> ul. Brzegowa 48, 57-100 Strzelin
                </a>

            </div>
          </div>

        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src="/assets/logo-owca-white.svg"
            alt="Logo Owca Ogrody"
            className="w-32 h-32 object-contain"
          />
          <p className="font-bold text-lg tracking-wider uppercase">Owca Ogrody</p>
        </div>
      </div>

      <div className="text-center text-xs font-semibold text-white/70 py-4 px-6">
        Strona i jej treść jest własnością firmy Owca Ogrody | Prawa autorskie Sandra Mstowska
      </div>
    </footer>
  );
};

export default Footer;