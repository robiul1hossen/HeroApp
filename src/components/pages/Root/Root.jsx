import { Outlet } from "react-router";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
