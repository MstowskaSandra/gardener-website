import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";

function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      style={{ position: "relative" }}
    >
      <button>
        Usługi
      </button>

      {isOpen && (
        <div className="dropdown">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/uslugi/${service.slug}`}
            >
              {service.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default ServicesDropdown;