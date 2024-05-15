// import ProductSlider from "./ProductSlider";

import ProductSlider from "./ProductSlider";

const Addslider = () => {
    return (

        <>
            <h2 className="text-2xl text-[#16A34A] uppercase font-bold text-center  lg:text-4xl">Product image carosol</h2>
            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">


                <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                    <img className="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Winding mountain road" />
                </div>



                <div
                    className="max-w-lg bg-[#16A34A]  md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
                    <ProductSlider></ProductSlider>

                </div>


            </div>
        </>
    );
};

export default Addslider;