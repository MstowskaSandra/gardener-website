import { Link } from "react-router-dom";
import { services } from "../data/services";

function ServicesDropdown() {
  return (
    <div className="relative group">
      <button className="text-gray-700 hover:text-green-700 transition-all duration-300 uppercase font-text font-semibold text-sm lg:text-base px-1 -m-1">
        Usługi
      </button>

      <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-[#fafff4] border border-gray-200 rounded-xl shadow-xl py-2 z-[60] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {services.map((service) => (
          <Link
            key={service.slug}
            to={`/uslugi/${service.slug}`}
            className="block px-4 py-3 text-gray-700 hover:text-green-800 hover:bg-lime-100 font-text transition-all duration-300 rounded-lg mx-1"
          >
            {service.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ServicesDropdown;
