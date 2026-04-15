const FeatureCard = ({ icon: Icon, title, description, variant }) => {
  return (
    <div
      className={`font-mont w-full max-w-[500px] group flex items-center gap-6 p-5 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition border-2 border-gray-300 ${
        variant === "alt" ? "bg-[#93d832]/30" : "bg-white"
      }`}
    >
      <Icon className="text-2xl mt-1 mx-4 shrink-0 text-green-700 group-hover:scale-110 transition" />

      <div>
        <p className="font-bold text-md text-green-800">{title}</p>
        <p className="text-sm font-semibold text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

