import CallButton from "../ui/CallButton";
import Reveal from "../ui/Reveal";

const ServiceInfoSection = ({
  title,
  text,
  subtitle,
  listElements,
  image,
  reverse = false,
}) => {
  console.log("reverse:", reverse);
  return (
    <section
      className={`
            ${reverse ? "bg-[#EBE4D6]" : "bg-[#FAFFF4]"} 
            flex flex-col
            ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} 
            
            items-center 
            justify-center 
            gap-16
            lg:gap-10 
            px-6
            md:px-20
            lg:px-28 
            py-24 
          
        `}
    >
      <Reveal className="flex-1" delay={0.2} width="100%">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="justify-self-center w-64 h-64 md:w-96 lg:w-120 md:h-96 lg:h-120 object-cover rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
        />
      </Reveal>

      <Reveal
        className={`flex-1 ${reverse ? "lg:pr-2" : "lg:pl-2"} lg:text-left`}
        delay={0.4}
        width="100%"
      >
        <h1 className="font-mont text-xl lg:text-4xl text-center font-extrabold text-green-900 uppercase tracking-wider">
          {title}
        </h1>
        <p className="mt-4 font-semibold text-center text-base lg:text-xl text-gray-700 pb-12 max-w-xl">
          {text}
        </p>
        <div className="flex flex-col items-start gap-3 pb-6 px-2">
          <h4 className="font-mont text-lg font-bold tracking-wider">
            {subtitle}
          </h4>
          <ul>
            {listElements.map((e, index) => (
              <li
                key={index}
                className="text-sm  font-medium lg:text-base font-mont py-1"
              >
                <span className="mx-2 font-bold text-green-900 text-lg">✓</span>{" "}
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`flex pt-6 ${reverse ? "justify-start" : "justify-end"}`}
        >
          <CallButton variant="orange" text="Zadzwoń" />
        </div>
      </Reveal>
    </section>
  );
};

export default ServiceInfoSection;
