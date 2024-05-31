import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { AuthContextProvider } from "../../contexts/authContext";

const DashboardLayout = () => {
  return (
    <AuthContextProvider>
      <div className="">
        <div>
          <Sidebar />
        </div>

        <div className="ps-72 w-full ">
          <Outlet />
        </div>
      </div>
    </AuthContextProvider>
  );
};



export default DashboardLayout;
