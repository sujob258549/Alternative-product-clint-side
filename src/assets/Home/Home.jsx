import SixProduct from "../AddQueryDetailquerySizquery/SixProduct";
import Banner from "./Banner";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="container mx-auto">
                <Banner></Banner>
                <SixProduct></SixProduct>
            </div>
        </div>
    );
};

export default Home;