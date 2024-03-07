import { Fragment } from "react/jsx-runtime";
import { navigationData } from "../../utils/navigationData";
import { LiaEyeSolid } from "react-icons/lia";
import { GrHomeRounded } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  return (
    <Fragment>
      <div className="mobile-nav hidden custom:flex p-2 items-center gap-4">
        <p>
          <GrHomeRounded className="text-2xl cursor-pointer" />
        </p>
        <p>
          <IoIosArrowForward className="text-2xl" />
        </p>
        <p>
          <FaRegUser className="text-2xl text-green-500" />
        </p>
        <p className="text-2xl font-semibold cursor-pointer">Mon Compte</p>
      </div>
      <div className="custom:hidden header pr-8 flex w-full gap-6 mt-10 p-4 bg-white rounded-lg">
        {navigationData.map((item, index) => (
          <div
            key={index}
            className="header-item flex items-center text-2xl text-gray-500 gap-2 cursor-pointer"
          >
            {item.icon}
            <span>{item.title}</span>
          </div>
        ))}
        <div>
          <p className="bg-green-500 text-white pl-7 pr-1 py-1 rounded-2xl flex justify-end ml-16">
            <LiaEyeSolid className="bg-white text-green-500 rounded-full" />
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
