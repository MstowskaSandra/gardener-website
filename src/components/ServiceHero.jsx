export const ServiceHero = ({ title, text, image }) => {
    return (
      <section className=" bg-[#EBE4D6] flex flex-col lg:flex-row items-center justify-center gap-10 px-8 py-24 lg:px-18">
        <div className="flex-1 pl-8 sm:pl-4 text-center lg:text-start ">
          <h1 className="font-mont text-3xl lg:text-4xl font-extrabold text-green-900 uppercase tracking-wider">
            {title}
          </h1>
          <p className="mt-6 font-semibold text-xl text-gray-700 ">{text}</p>
          <div className="flex gap-4 sm:gap-6 lg:gap-8 mt-10 lg:mt-20 lg:justify-start justify-center flex-wrap">
            <button className="bg-green-800 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-green-900 transition cursor-pointer">
              Inne Usługi
            </button>

            <button className="bg-orange-500 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-orange-600 transition cursor-pointer">
              Zadzwoń teraz
            </button>
          </div>
        </div>

        <div className="flex-1">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="justify-self-center w-80 md:w-96 lg:w-120 h-80 md:h-96 lg:h-120 object-cover rounded-4xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
          />
        </div>
      </section>
    );
};

export default ServiceHero;