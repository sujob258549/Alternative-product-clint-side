import CountUp from "react-countup";


const Couner = () => {
    return (
        <div>
            <div className="px-2 py-20 w-full flex justify-center">
                <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                    <div className="lg:w-1/2">
                        <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')" }}>
                        </div>
                    </div>
                    <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                        <h2 className="text-3xl md:text-4xl kurali-font text-gray-800 font-bold">
                            Laptop vary slow This recomend use

                            <span className="text-[#16A34A]"> Dextop</span>
                        </h2>
                        <p className="mt-4 text-gray-600">
                            When considering whether a laptop or a desktop computer is the better option, several factors come into play. Firstly, portability stands out as a key feature of laptops. Their ability to be carried around and used in various locations makes them convenient for students, professionals, and anyone who needs to work on the go. Conversely, desktop computers are stationary, limiting their use to a specific location.

                            {/* Performance is another crucial aspect to consider. Generally, desktop computers boast more powerful hardware components compared to laptops. This makes them better suited for demanding tasks such as gaming, video editing, or running resource-intensive software. Additionally, desktop computers often offer greater customization and upgrade options, allowing users to easily swap out components like RAM, storage, and graphics cards to enhance performance further.

                            On the other hand, laptops offer the advantage of built-in displays, making them a self-contained unit suitable for single-user tasks. However, desktop computers excel in multi-monitor setups, enabling users to connect multiple displays for enhanced productivity or specialized work requirements. */}
                            {/* 
                            Price is also a significant consideration. While desktop computers typically offer more value for money in terms of performance, high-end laptops with premium features can be quite expensive. Furthermore, the space-saving design of laptops makes them ideal for users with limited workspace or those who prefer a clutter-free environment.

                            Battery life is a distinguishing factor for laptops, as they operate on battery power. The duration of battery life varies depending on usage and hardware specifications. In contrast, desktop computers require a constant power source.

                            Ultimately, the choice between a laptop and a desktop computer depends on individual needs, preferences, and budget constraints. By carefully considering factors such as performance requirements, portability, price, and workspace limitations, users can make an informed decision that aligns with their specific use cases. */}
                        </p>
                        <div className="mt-8">
                            <a href="#" className="w-full md:w-48 inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">Start Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-10 pb-10 md:pb-20">
                <h1 className="text-3xl py-10  md:text-5xl font-bold text-center text-[#374151] font-rancho"> Our Any Counter </h1>

                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

                    <div className="rounded overflow-hidden flex flex-col">



                        <a href="#">
                            <img className="w-full max-h-[500px] object-cover" src="https://sanjeevdatta.com/wp-content/uploads/2023/06/how-to-improve-critical-thinking.jpg" alt="Sunset in the mountains" />
                        </a>


                        <div className="relative -mt-32 px-10 pt-5 pb-1">
                            <dl className="rounded-lg md:py-10 bg-white dark:bg-gray-800 shadow-lg sm:grid sm:grid-cols-3">
                                <div className="flex flex-col border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-r">
                                    <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">Our Relavent prosuct count avarage </dt>
                                    <h1 className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400">

                                        <dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400"><span> <CountUp start={0} end={60}>
                                            {({ countUpRef, start }) => (
                                                <div>
                                                    <span ref={countUpRef} />
                                                    <button onClick={start}>5M+</button>
                                                </div>
                                            )}
                                        </CountUp></span></dd>

                                        <span>
                                        </span></h1>
                                </div>
                                <div className="flex flex-col border-t border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                    <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">Our Member  count avarage</dt>
                                    <dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400"><span> <CountUp start={0} end={40}>
                                        {({ countUpRef, start }) => (
                                            <div>
                                                <span ref={countUpRef} />
                                                <button onClick={start}>2M+</button>
                                            </div>
                                        )}
                                    </CountUp></span></dd>
                                </div>
                                <div className="flex flex-col border-t border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l">
                                    <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">Our Recomend message count avarage</dt>
                                    <dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400"><span>

                                        <dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400"><span> <CountUp start={0} end={100}>
                                            {({ countUpRef, start }) => (
                                                <div>
                                                    <span ref={countUpRef} />
                                                    <button onClick={start}>10M+</button>
                                                </div>
                                            )}
                                        </CountUp></span></dd>


                                    </span></dd>
                                </div>
                            </dl>
                        </div>

                    </div>

                </div>
            </div >
        </div >
    );
};

export default Couner;

