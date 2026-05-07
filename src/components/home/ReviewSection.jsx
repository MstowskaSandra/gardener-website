import { reviews } from "../../data/reviews";
import ReviewCard from "./ReviewCard";
import { FcGoogle } from "react-icons/fc";

export const ReviewSection = () => (
    <section className="bg-[#ebe4d6] pt-16 pb-6 lg:pt-18 font-text">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-orange-500 font-bold mb-2 tracking-wide">OPINIE</p>

          <h2 className="font-candal pb-8 text-2xl lg:text-3xl font-bold text-green-900 leading-tight">
            Nasza praca mówi sama za siebie, <br />
            tak samo jak opinie naszych klientów
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12 px-12">
          {reviews.map((item, index) => (
            <ReviewCard key={index} {...item} />
          ))}
        </div>

        <div className="mt-12 flex justify-end pr-12">
          <button className="flex items-center gap-2 cursor-pointer font-mont text-xs sm:text-sm font-semibold text-white px-5 py-2 rounded-full bg-orange-500 hover:bg-orange-600 hover:scale-105 transition">
            Sprawdź nas w Google
            <FcGoogle className="text-lg " />
          </button>
        </div>
    </section>
);

export default ReviewSection;