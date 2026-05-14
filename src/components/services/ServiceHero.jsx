// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const ServiceHero = ({ title, text, image }) => {
  return (
    <section className=" bg-[#EBE4D6] flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6 py-12 lg:px-22 lg:py-24">
      <motion.div
        className="flex-1 text-center lg:text-start "
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-mont text-xl lg:text-4xl font-extrabold text-green-900 uppercase tracking-wider">
          {title}
        </h1>
        <p className="mt-6 font-semibold  text-md lg:text-xl text-gray-700 ">
          {text}
        </p>
        <div className="flex gap-4 sm:gap-6 lg:gap-8 mt-10 lg:mt-20 lg:justify-start justify-center flex-wrap">
          <a
            href="#services-overview"
            className="bg-green-800 text-white text-sm lg:text-lg px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-green-900 transition cursor-pointer"
          >
            Inne Usługi
          </a>

          <a
            href="tel:734414640"
            className="bg-orange-500 text-white text-sm lg:text-lg px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-orange-600 transition cursor-pointer"
          >
            Zadzwoń teraz
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="justify-self-center w-64 h-64 sm:w-80 sm:h-80 lg:w-120 lg:h-120 object-cover rounded-4xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
        />
      </motion.div>
    </section>
  );
};

export default ServiceHero;
