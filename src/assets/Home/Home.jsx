import Banner from "./Banner";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="container mx-auto">
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;