import { servicesCards } from "../../data/servicesCards";
import ServiceCard from "./ServiceCard";
import CallButton from "../ui/CallButton";

export const ServicesOverview = () => (
    <section className="bg-[#fafff4] pt-16 pb-8 lg:pt-20 font-text px-12">
        <div className="max-w-8xl mx-auto px-12 lg:px-10 text-center">
          <p className="text-orange-500 font-bold mb-2 tracking-wide">
            Nasze usługi
          </p>

          <h2 className="font-candal text-2xl lg:text-3xl font-bold text-green-900 leading-tight">
            Kompleksowo zadbamy o Twój ogród
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mt-16">
            {servicesCards.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-end gap-4 pt-30 px-4 sm:px-0 font-mont text-sm font-semibold text-green-800 text-center sm:text-left">
            <p className="max-w-xl">
              Nie znalazłeś usługi dla siebie? Skontaktuj się z nami, postaramy
              się pomóc
            </p>

            <CallButton />
          </div>
        </div>
    </section>
);

export default ServicesOverview;