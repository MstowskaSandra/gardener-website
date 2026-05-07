import { steps } from "../../data/steps";
import StepCard from "./StepCard";
import { FaArrowRight } from "react-icons/fa";
import CallButton from "../ui/CallButton";
import Reveal from "../ui/Reveal";

export const WorkProcess = () => (
  <section className="bg-[#ebe4d6] pt-16 pb-6 lg:pt-18 font-text overflow-hidden">
    <div className="max-w-7xl mx-auto px-16 lg:px-12 text-center">
      <Reveal width="100%">
        <p className="text-orange-500 font-bold mb-2 tracking-wide">
          Jak wygląda współpraca?
        </p>
      </Reveal>

      <Reveal delay={0.2} width="100%">
        <h2 className="font-candal pb-8 text-2xl lg:text-3xl font-bold text-green-900 leading-tight">
          4 proste kroki do zadbanego ogrodu
        </h2>
      </Reveal>

      <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-6 flex-wrap">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="flex flex-col lg:flex-row items-center gap-6"
          >
            <Reveal delay={0.4 + index * 0.3}>
              <StepCard {...step} />
            </Reveal>

            {index < steps.length - 1 && (
              <Reveal delay={0.5 + index * 0.3}>
                <FaArrowRight className="text-4xl text-green-800 rotate-90 lg:rotate-0 transition-transform duration-300 ease-out hover:scale-120" />
              </Reveal>
            )}
          </div>
        ))}
      </div>

      <Reveal delay={2.2} width="100%">
        <div className="pt-25 pb-8 flex sm:flex-row flex-col items-center justify-end gap-2">
          <span className="text-orange-500 font-bold text-md">
            Darmowa konsultacja.
          </span>
          <p className="text-gray-700 font-semibold flex gap-2 items-center text-md ">
            Masz pytania? Skontaktuj się z nami
          </p>
          <CallButton />
        </div>
      </Reveal>
    </div>
  </section>
);

export default WorkProcess;
