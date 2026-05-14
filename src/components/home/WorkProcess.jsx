import { steps } from "../../data/steps";
import StepCard from "./StepCard";
import { FaArrowRight } from "react-icons/fa";
import CallButton from "../ui/CallButton";
import Reveal from "../ui/Reveal";

export const WorkProcess = () => (
  <section className="bg-[#ebe4d6] pt-16 pb-6 lg:pt-18 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
      <Reveal width="100%">
        <p className="text-orange-500 font-bold mb-2 tracking-wide">
          Jak wygląda współpraca?
        </p>
        <h2 className="font-candal pb-8 text-2xl lg:text-3xl font-bold text-green-900 leading-tight">
          4 proste kroki do zadbanego ogrodu
        </h2>
      </Reveal>

      <div className="mt-12 flex flex-col lg:flex-row lg:flex-nowrap items-center justify-center gap-4 lg:gap-4">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="flex flex-col lg:flex-row items-center gap-3 lg:gap-2"
          >
            <Reveal delay={0.2 + index * 0.1}>
              <StepCard {...step} />
            </Reveal>

            {index < steps.length - 1 && (
              <FaArrowRight className="px-2 text-4xl text-green-800 rotate-90 lg:rotate-0 shrink-0 opacity-50 lg:opacity-100" />
            )}
          </div>
        ))}
      </div>

      <Reveal delay={0.4} width="100%">
        <div className="pt-20 pb-8 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-3">
          <p className="text-gray-700 font-semibold text-sm">
            <span className="text-orange-500 font-bold mr-2">
              Darmowa konsultacja.
            </span>
            Masz pytania? Skontaktuj się z nami
          </p>
          <CallButton variant="green" text="Zadzwoń" />
        </div>
      </Reveal>
    </div>
  </section>
);

export default WorkProcess;
