import { Helmet } from "react-helmet-async";
import SixProduct from "../AddQueryDetailquerySizquery/SixProduct";
import Addslider from "./Addslider";
import Banner from "./Banner";
import Couner from "./Couner";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Altranative product || Home</title>
            </Helmet>
            <Slider></Slider>
            <div className="container mx-auto">
                <Banner></Banner>
                <SixProduct></SixProduct>
                <div>
                    <Addslider></Addslider>
                </div>
                <Couner></Couner>

            </div>
        </div>
    );
};

export default Home;