const Home = () => {
  return (
    <section className="relative bg-[#EBE4D6] overflow-hidden min-h-[90vh] lg:min-h-screen">
      <div
        className="absolute inset-0 lg:hidden bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/assets/background-section-hero.svg')",
        }}
      />

      <div className="hidden lg:block absolute top-0 right-[-30%] h-full w-[95%]">
        <div
          className="w-full h-full bg-no-repeat bg-cover bg-right"
          style={{
            backgroundImage: "url('/assets/background-section-hero.svg')",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-[90vh] lg:min-h-screen flex items-center">
        <div className="max-w-2xl w-full text-center lg:text-left">
          <h1 className="font-candal text-3xl sm:text-4xl lg:text-4xl font-bold text-green-900 leading-tight uppercase">
            Twój ogród, moja pasja -
            <br />
            od zieleni po wysokie drzewa
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700">
            Kompleksowa pielęgnacja ogrodów, trawników i drzew. Wszystko, czego
            potrzebuje Twój ogród.
          </p>

          <div className="flex gap-4 sm:gap-6 lg:gap-8 mt-10 lg:mt-20 justify-center lg:justify-start flex-wrap">
            <button className="bg-green-800 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-green-900 transition">
              Nasze Usługi
            </button>

            <button className="bg-orange-500 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-orange-600 transition">
              Zadzwoń teraz
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
