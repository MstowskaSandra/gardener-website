const StepCard = ({ number, title, description, variant }) => {
  const borderStyles =
    variant === "light" ? "border-lime-400" : "border-green-800";

  return (
    <div
      className={`bg-[#fafff4] font-text font-mont px-4 lg:px-6 py-8 w-full max-w-60 lg:w-56 xl:w-60 rounded-4xl border-4 ${borderStyles} shadow-lg flex flex-col gap-2 lg:gap-4 hover:scale-105 transition hover:shadow-2xl`}
    >
      <p className="text-5xl lg:text-6xl  pb-2 lg:pb-4 font-bold [-webkit-text-stroke:2px_green] text-transparent leading-none">
        {number}
      </p>

      <h3 className="font-bold text-green-900">{title}</h3>

      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default StepCard;
