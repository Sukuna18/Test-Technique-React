import { FaRegUser } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";
import UserProfil from "./UserProfil";
import UserData from "./UserData";
const Formular = () => {
  return (
    <div className="formular h-auto bg-white w-full mt-10 rounded-lg mb-6">
      <div className="heading flex gap-10 p-4">
        <p className="text-2xl font-semibold flex items-center gap-2 cursor-pointer">
          <span className="p-2 bg-green-100 rounded-full text-center">
            <FaRegUser className="text-sm text-green-500 font-bold" />
          </span>
          Information personnelles
        </p>
        <p className="w-1 h-auto opacity-20 bg-gray-500"></p>
        <p className="text-gray-500 text-2xl flex items-center gap-2 cursor-pointer">
          <MdAccountBalance />
          Coordonnées Bancaires
        </p>
      </div>
      <div className="border-t border-gray-500 w-full opacity-20"></div>
      <div className="form-data flex gap-8 p-4 custom:flex-col">
        <UserProfil />
        <UserData />
      </div>
    </div>
  );
};

export default Formular;
