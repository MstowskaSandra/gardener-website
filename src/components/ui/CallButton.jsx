import { MdOutlinePhoneCallback } from "react-icons/md";

export const CallButton = ({ variant = "green", text = "Zadzwoń do nas" }) => {
  const variants = {
    green: "bg-green-800 hover:bg-green-700",
    orange: "bg-orange-500 hover:bg-orange-600",
  };

  const selectedVariant = variants[variant] || variants.green;

  return (
    <a
      href="tel:734414640"
      className={`cursor-pointer flex items-center gap-2 text-white px-4 py-2 rounded-full transition w-fit font-mont font-bold text-sm ${selectedVariant}`}
    >
      <MdOutlinePhoneCallback className="w-5 h-5" />
      <span>{text}</span>
    </a>
  );
};

export default CallButton;
