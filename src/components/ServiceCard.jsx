import { Link } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";

const ServiceCard = ({
  icon: Icon,
  title,
  items,
  buttonText,
  link,
  variant,
}) => {
  const headerStyles =
    variant === "alt"
      ? "bg-green-800 text-white"
      : "bg-lime-400 text-green-900";

  return (
    <div className="flex-1 min-w-55 max-w-70 h-80 bg-[#fafff4] rounded-3xl border border-gray-300 shadow-lg flex flex-col justify-between overflow-hidden hover:scale-[1.1] hover:shadow-2xl transition-transform">
    
      <div className="pb-3">
        <div className={`flex items-center justify-center gap-2  px-2 py-4 rounded-full ${headerStyles}`}>
            <Icon className="text-base sm:text-lg lg:text-xl shrink-0" />
            <h3 className="text-sm sm:text-sm lg:text-base font-bold text-center leading-tight">
            {title}
            </h3>
        </div>
      </div>

      <ul className="space-y-4 px-6 py-2 text-left">
        {items?.map((item, index) => (
          <li key={index} className="flex gap-2 text-sm font-semibold text-green-900 items-center">
            <span className="text-green-700 text-lg"><IoMdCheckmark /></span>
            {item}
          </li>
        ))}
      </ul>

      <div className="flex justify-end pr-6 pb-4">
        <Link
          to={link}
          className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-orange-600 transition"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;