import { motion } from "framer-motion";

export const Hero = () => (
  <section className="relative bg-[#EBE4D6] overflow-hidden min-h-[90vh] lg:min-h-screen">
    <div
      className="absolute inset-0 lg:hidden bg-cover bg-center opacity-30"
      style={{
        backgroundImage: "url('/assets/background-section-hero.svg')",
      }}
    />

    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="hidden lg:block absolute top-0 right-[-30%] h-full w-[95%]"
    >
      <div
        className="w-full h-full bg-no-repeat bg-cover bg-right"
        style={{
          backgroundImage: "url('/assets/background-section-hero.svg')",
        }}
      />
    </motion.div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-[90vh] lg:min-h-screen flex items-center">
      <div className="max-w-2xl w-full text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-candal text-2xl sm:text-3xl lg:text-4xl font-bold text-green-900 leading-tight uppercase">
            Twój ogród, moja pasja -
            <br />
            od zieleni po wysokie drzewa
          </h1>

          <p className="mt-6 text-mont font-semibold sm:text-lg lg:text-xl text-gray-700">
            Kompleksowa pielęgnacja ogrodów, trawników i drzew. Wszystko, czego
            potrzebuje Twój ogród.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex gap-4 sm:gap-6 lg:gap-8 mt-10 lg:mt-20 justify-center lg:justify-start flex-wrap"
        >
          <button className="bg-green-800 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-green-900 transition hover:scale-105 active:scale-95 cursor-pointer">
            Nasze Usługi
          </button>

          <button className="bg-orange-500 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-orange-600 transition hover:scale-105 active:scale-95 cursor-pointer">
            Zadzwoń teraz
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
