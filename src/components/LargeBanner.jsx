export const LargeBanner = ({ imgUrl, text }) => (
    <section
        className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imgUrl})`, }}
      >
        <div className="absolute inset-0 bg-white/40"></div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <h2 className="font-mont px-4 md:px-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#fafff4] tracking-widest drop-shadow-lg">
            {text}
          </h2>
        </div>
      </section>
);

export default LargeBanner;