import { Outlet } from "react-router-dom";
import Header from "./Header";

const Roots = () => {
    return (
        <div>
           <div className="border-b">
           <Header></Header>
           </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;