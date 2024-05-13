

import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div>
            <div className="px-5 bg-gray-100 errorimg h-3/5 py-5 md:h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">404 - Page Not Found</h1>
                    <p className="text-gray-600 mb-6">The page you are looking for might have been removed, had its name changed or is
                        temporarily unavailable.</p>
                    <Link href="/" className="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02] mt-5">Go
                        back to homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default Errorpage;