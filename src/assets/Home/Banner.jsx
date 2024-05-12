

const Banner = () => {
    return (
        <div>
            <div className="container px-6 py-16 mx-auto">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-semibold lg:text-4xl">
                                Don,t use a wild one all the time<br /> your <span className="text-blue-500">That product will not always be in the market</span></h1>

                            <p className="mt-3 text-gray-600 dark:text-gray-400">Choosing a different product can be a thoughtful decision influenced by various factors. One of the primary reasons for switching products is to ensure satisfaction with the quality. If the current product doesn,t meet expectations or if there,s another option with better features, durability, or performance, it makes sense to explore alternatives. Cost-effectiveness is another consideration, as different products may offer similar benefits at varying price points. Additionally, brand loyalty plays a significant role. While customers often develop loyalty towards specific brands, better deals or superior products from competitors can lead to a change in brand preference. Innovation drives product development,.</p>

                            <button className="mt-10 inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">Show All Product</button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className="w-full h-full lg:max-w-3xl" src="https://i.ibb.co/5s8WVp2/1212121212.png" alt="Catalogue-pana.svg" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;