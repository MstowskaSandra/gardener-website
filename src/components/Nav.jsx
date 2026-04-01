import { Link } from "react-router-dom";
import ServicesDropdown from "./ServicesDropdown";

const Nav = () => {
    return (
        <nav className=" sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between bg-gray-200 shadow-md border-2 border-green-500 rounded-2xl">
            <div className="text-green-700 font-bold text-xl">Owca Ogrody</div>
            <div className="flex space-x-6 items-center">
              <Link to="/" className="text-gray-700 hover:text-green-700 transition">Strona Główna</Link>
              <ServicesDropdown />
              <Link to="/galeria" className="text-gray-700 hover:text-green-700 transition">Galeria</Link>
              <Link to="/kontakt" className="text-gray-700 hover:text-green-700 transition">Kontakt</Link>
            </div>
            <div className="flex flex-col items-end text-right">
              <span className="text-gray-600 text-sm">Zadzwoń do nas</span>
              <a href="tel:533615677" className="text-green-700 font-semibold hover:underline">533 615 677</a>
            </div>
          </div>
        </nav>
    )
};

export default Nav;