import { services } from "../data/services";
import { useLocation, Link } from "react-router-dom";

function ServicesDropdown() {
  const { pathname } = useLocation();
  const isServicesActive = pathname.startsWith("/uslugi");

  return (
    <div className="relative group">
      <button
        className={`
        uppercase font-mont font-bold text-xs lg:text-sm px-1 py-1 relative transition-all duration-300
        ${isServicesActive ? "text-green-900" : "text-gray-700 hover:text-green-800"}
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-green-800 after:transition-all after:duration-300
        ${isServicesActive ? "after:w-full" : "after:w-0 group-hover:after:w-full"}
      `}
      >
        Usługi
      </button>

      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-60">
        <div className="w-64 bg-white border-2 border-gray-200 rounded-3xl shadow-2xl py-3 relative translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rotate-45 border-l-[3px] border-t-[3px] border-gray-200"></div>

          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/uslugi/${service.slug}`}
              className="group/item block px-5 py-3.5 text-gray-700 hover:text-green-900 transition-all duration-200 mx-2 rounded-xl hover:bg-[#EBE4D6]/60"
            >
              <div className="flex items-center justify-between">
                <span className="font-mont font-bold text-[11px] uppercase tracking-widest group-hover/item:translate-x-1 transition-transform">
                  {service.name}
                </span>
                <span className="opacity-0 group-hover/item:opacity-100 text-green-700 font-black transition-all transform scale-125">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesDropdown;
