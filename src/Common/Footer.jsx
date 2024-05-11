

const Footer = () => {
    return (

        <footer className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div className="md:flex md:-mx-3 md:items-center md:justify-between">
                    <h1 className="text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl dark:text-white"></h1>

                    <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto mb-5 md:mb-0">
                        <a href="#" className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-bold btn-warning rounded-lg gap-x-3 bg-[#E7A500] text-black focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                            <span>Sign Up Now</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* < className="my-6 border-gray-200 md:my-10 dark:border-gray-700"> */}

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:text-left text-center">
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                        <div className="flex flex-col items-start mt-5 space-y-2 md:text-left text-center">
                            <a href="#" className="mx-auto  md:mx-0 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                            <a href="#" className="mx-auto  md:mx-0 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who We Are</a>
                            <a href="#" className="mx-auto  md:mx-0 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Philosophy</a>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="mx-auto  md:mx-0 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Retail & E-Commerce</a>
                            <a href="#" className="mx-auto  md:mx-0 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Information Technology</a>
                            <a href="#" className="mx-auto  md:mx-0 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Finance & Insurance</a>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Services</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="mx-auto  md:mx-0 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Translation</a>
                            <a href="#" className="mx-auto  md:mx-0 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Proofreading & Editing</a>
                            <a href="#" className="mx-auto  md:mx-0 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Content Creation</a>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Contact Us</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="mx-auto  md:mx-0 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">+880 768 473 4978</a>
                            <a href="#" className="mx-auto  md:mx-0 text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">info@merakiui.com</a>
                        </div>
                    </div>
                </div>

                <div className="my-6 border-gray-200 md:my-10 dark:border-gray-700">

                    <div className="flex flex-col items-center justify-between sm:flex-row">

                        <img className="h-16" src="https://i.ibb.co/p3Z6Tr4/altranatiove-removebg-preview.png" alt="" />


                        <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">© Copyright 2024. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>

    )
};

export default Footer;