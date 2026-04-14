const FeatureCard = ({ icon: Icon, title, description, variant }) => {
  return (
    <div
      className={`group flex items-start gap-4 p-5 rounded-2xl shadow-lg hover:shadow-md hover:-translate-y-0.5 transition border-2 border-gray-200 ${
        variant === "alt" ? "bg-[#93d832]/30" : "bg-white"
      }`}
    >
      <Icon className="text-2xl mt-1 mx-4 shrink-0 text-green-700 group-hover:scale-110 transition" />

      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;