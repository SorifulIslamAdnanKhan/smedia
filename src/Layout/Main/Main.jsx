import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";
import Navbar from "../../Pages/Navbar/Navbar";

const Main = () => {
    return (
        <>
           <Navbar/>
           <Outlet/>
           <Footer/>
        </>
    );
};

export default Main;