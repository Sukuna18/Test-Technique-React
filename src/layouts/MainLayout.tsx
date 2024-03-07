import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";
import Header from "../components/header/Header";

const MainLayout = () => {
  return (
    <div className="flex custom:flex-col gap-8">
      <SideBar />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
