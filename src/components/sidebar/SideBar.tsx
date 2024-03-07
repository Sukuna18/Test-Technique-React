import { FaRegSmile } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { Fragment, useEffect, useState } from "react";
import user from "../../assets/images/770137_man_512x512.png";
import { RiCloseLine } from "react-icons/ri";

function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Fragment>
      {windowWidth < 768 && (
        <div className="flex z-[1000] justify-around text-2xl items-center bg-white p-4 rounded-lg w-full">
          <img
            src={user}
            alt=""
            className="w-14 h-14 rounded-full border-4 border-white shadow-lg"
          />
          <div className="title">
            <h2 className="flex gap-2 text-3xl items-center">
              <FaRegSmile className="text-green-600" /> KayFay
            </h2>
          </div>
          {!isSidebarOpen ? (
            <div className="lg:hidden cursor-pointer" onClick={toggleSidebar}>
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </div>
          ) : (
            <RiCloseLine
              className="lg:hidden cursor-pointer w-10 h-10"
              onClick={toggleSidebar}
            />
          )}
        </div>
      )}

      <div
        className={`relative bg-white w-full md:w-[25%] h-full min-h-screen p-10 ${
          isSidebarOpen
            ? "absolute z-[1000] lg:static transition-all duration-500 ease-in-out right-0"
            : "hidden md:block lg:block lg:static transition-all duration-500 ease-in-out"
        } ${isSidebarOpen ? "no-scroll" : ""}`}
      >
        <div className="title">
          <h2 className="flex gap-2 text-2xl items-center">
            <FaRegSmile className="text-green-600" /> KayFay
          </h2>
        </div>
        <div className="time-of mt-6 flex flex-col justify-center">
          <p className="text-gray-500 text-2xl text-center">Congés</p>
          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="text-gray-500">Solde N-1</p>
              <p className="font-semibold text-center">16</p>
            </div>
            <div>
              <p className="text-gray-500">Solde</p>
              <p className="font-semibold text-center">10</p>
            </div>
            <div>
              <p className="text-gray-500">Pris</p>
              <p className="font-semibold text-center">20</p>
            </div>
          </div>
        </div>
        <div className="time-off-staying bg-green-50 w-full mt-6 rounded-lg p-4 flex justify-between items-center">
          <p className="text-gray-500">Congés restant</p>
          <p className="font-semibold">6 jours</p>
        </div>
        <div className="contract flex bg-green-50 w-full mt-6 rounded-lg flex-col">
          <div className="flex justify-between p-4">
            <p className="text-gray-500 flex items-center gap-1">
              <FaFileAlt className="text-white rounded p-1 bg-green-500" />
              Contrat
            </p>
            <p className="font-semibold px-2 py-1 text-green-500 bg-green-100">
              CDI
            </p>
          </div>
          <div className="date flex justify-between p-4">
            <div className="text-left">
              <p className="text-gray-500">Date de début</p>
              <p className="font-semibold">01/01/2021</p>
            </div>
            <div className="text-left">
              <p className="text-gray-500">Date de fin</p>
              <p className="font-semibold">Indeterminé</p>
            </div>
          </div>
          <div className="salary w-full bg-green-500 flex p-4 gap-4 items-center rounded-b-2xl rounded-br-2xl">
            <p className="text-green-600 text-center font-semibold p-5 rounded-full bg-white text-2xl">
              <MdOutlineWorkOutline />
            </p>
            <div>
              <p className="text-white">Salaire de base</p>
              <p className="text-white">1 500 000 F CFA</p>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="text-left text-xl text-gray-500 mt-8">
            INFOS PERSONNELLES
          </div>
          <div className="flex justify-between">
            <div className="mt-4">
              <p className="font-semibold mt-2">Prénom</p>
              <p className="font-semibold mt-2">Nom</p>
              <p className="font-semibold mt-2">Fonction</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 mt-2">Abdoulaye</p>
              <p className="text-gray-500 mt-2">Goumballa</p>
              <p className="text-gray-500 mt-2">Analyse développeur</p>
            </div>
          </div>
        </div>
        <div className="action mt-32">
          <p className="flex gap-4 items-center text-xl text-gray-500 cursor-pointer">
            <FaRegUser className="text-black font-semibold" /> Mon compte
          </p>
          <p className="flex gap-4 items-center text-xl mt-4 text-gray-500 cursor-pointer">
            <MdLogout className="text-black font-semibold" /> Déconnexion
          </p>
        </div>
      </div>
      {isSidebarOpen && <div className="dark-overlay"></div>}
    </Fragment>
  );
}

export default SideBar;
