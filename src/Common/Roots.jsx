import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Roots = () => {
    return (
        <div className="min-h-screen flex justify-between flex-col">
           <div className="border-b">
           <Header></Header>
           </div>
            <Outlet></Outlet>
           
            <Footer></Footer>
        </div>
    );
};

export default Roots;