import { MdOutlinePhoneCallback } from "react-icons/md";

export const CallButton = () => (
    <a 
    href="tel:+48533615677" 
    className="cursor-pointer flex items-center gap-2 bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-fit font-mont font-bold text-sm"
  >
    <MdOutlinePhoneCallback className="w-5 h-5" />
    <span>Zadzwoń</span>
  </a>
);

export default CallButton;