import { Helmet } from "react-helmet-async";
import SixProduct from "../AddQueryDetailquerySizquery/SixProduct";
import Addslider from "./Addslider";
import Banner from "./Banner";
import Couner from "./Couner";
import Slider from "./Slider";
import RatingSlider from "./RatingSlider";
import RadialProgressber from "./RadialProgressber";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Altranative product || Home</title>
            </Helmet>
            <Slider></Slider>
            <div className="container mx-auto">
                <RadialProgressber></RadialProgressber>
                <Banner></Banner>
                <SixProduct></SixProduct>
                <div className="pb-10 md:pb-20">
                    <h1 className='text-3xl md:text-4xl font-bold text-center py-10 md:py-20'> Our Author Revew section</h1>
                    <RatingSlider></RatingSlider>
                </div>

                <div>
                    <Addslider></Addslider>
                </div>
                <Couner></Couner>

            </div>
        </div>
    );
};

export default Home;