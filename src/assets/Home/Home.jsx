import SixProduct from "../AddQueryDetailquerySizquery/SixProduct";
import Banner from "./Banner";
import Couner from "./Couner";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="container mx-auto">
                <Banner></Banner>
                <SixProduct></SixProduct>
                <Couner></Couner>
            </div>
        </div>
    );
};

export default Home;