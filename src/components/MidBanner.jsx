export const MidBanner = ({ imgUrl, text }) => (
    <section
        className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] w-full bg-cover bg-bottom bg-no-repeat"
        style={{
            backgroundImage: `url(${imgUrl})`,
        }}
        >
        <div className="absolute inset-0 bg-white/40"></div>

        <div className="relative z-10 flex h-full items-center justify-start pl-8">
          <h2 className="font-mont px-4 md:px-8 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#fafff4] tracking-wider drop-shadow-lg">
            {text}
          </h2>
        </div>
    </section>
);

export default MidBanner;