import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";

const DashboardLayout = () => {
  return <>
 <div>
<Navbar/>
 </div>
    <div className="flex mt-20 min-h-screen bg-gray-100">
        
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
     
    </div>
    <div>
         <Footer/>
    </div>
 </>
};

export default DashboardLayout;
