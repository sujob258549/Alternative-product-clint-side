import SixProduct from "../AddQueryDetailquerySizquery/SixProduct";
import Banner from "./Banner";
import Couner from "./Couner";
import ProductSlider from "./ProductSlider";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="container mx-auto">
                <Banner></Banner>
                <SixProduct></SixProduct>
                <div>
                    <h1 className="kurali-font text-[#16A34A] text-3xl md:text-5xl font-bold text-center py-5 md:py-10" >Our product slider</h1>
                    <ProductSlider></ProductSlider>
                </div>
                <Couner></Couner>

            </div>
        </div>
    );
};

export default Home;