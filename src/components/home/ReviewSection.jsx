import { reviews } from "../../data/reviews";
import ReviewCard from "./ReviewCard";
import { FcGoogle } from "react-icons/fc";
import Reveal from "../ui/Reveal";

export const ReviewSection = () => (
  <section className="bg-[#ebe4d6] pt-16 pb-6 lg:pt-18 font-text overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
      <Reveal width="100%">
        <p className="text-orange-500 font-bold mb-2 tracking-wide uppercase">
          OPINIE
        </p>
      </Reveal>

      <Reveal delay={0.2} width="100%">
        <h2 className="font-candal pb-8 text-2xl lg:text-3xl font-bold text-green-900 leading-tight">
          Nasza praca mówi sama za siebie, <br />
          tak samo jak opinie naszych klientów
        </h2>
      </Reveal>
    </div>

    <div className="flex flex-wrap justify-center gap-6 mt-12 px-12">
      {reviews.map((item, index) => (
        <ReviewCard key={index} {...item} delay={0.3 + index * 0.15} />
      ))}
    </div>

    <Reveal delay={0.8} width="100%">
      <div className="mt-12 flex justify-end pr-12">
        <button className="flex items-center gap-2 cursor-pointer font-mont text-xs sm:text-sm font-semibold text-white px-5 py-2 rounded-full bg-orange-500 hover:bg-orange-600 hover:scale-105 transition">
          Sprawdź nas w Google
          <FcGoogle className="text-lg " />
        </button>
      </div>
    </Reveal>
  </section>
);

export default ReviewSection;
