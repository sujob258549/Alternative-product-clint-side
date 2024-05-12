import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CreatAuthContext } from "../Firebase/Authprovider";


const Recommend = () => {
    const recommendData = useLoaderData();
    const { user } = useContext(CreatAuthContext)
    const [recommendationCount, setrecommendationCount] = useState(0)
    console.log(recommendData);


    const handelRecomended = e => {
        e.preventDefault();
        const rtitle = e.target.rtitle.value;
        const rproductname = e.target.rproductname.value;
        const rphotourl = e.target.rphotourl.value;
        const text = e.target.text.value;
        const queeryTitle = recommendData.queeryTitle;
        const brandName = recommendData.brandName;
        const name = recommendData.name;
        const previseData = {
            queeryTitle, brandName, name
        }

        console.log(rtitle, rproductname, rphotourl, text );
    }
    return (
        <div className="container mx-auto md:pt-10 pb-10 md:pb-20 md:px-0 px-5">
            <h1 className="kurali-font text-3xl md:text-5xl font-bold text-center my-7 md:my-16">Detail <span className="text-[#16A34A]"> Query/Product</span> And <span className="text-[#16A34A]">Recommend</span> </h1>
            <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                <div className="overflow-hidden bg-white rounded-lg shadow">
                    <img className="object-contain w-full h-64" src={recommendData.photourl} alt="Article" />

                    <div className="p-6">
                        <div>
                            <h2 href="#" className="block mt-2 text-xl md:text-3xl font-semibold  transition-colors duration-300 transform " tabIndex="0" role="link"> Query Title : <span className="text-[#16A34A]">{recommendData.queeryTitle}</span></h2>
                            <h2 href="#" className="block mt-2 text-xl md:text-2xl font-semibold  transition-colors duration-300 transform " tabIndex="0" role="link">Product Name : <span className="text-[#16A34A]">{recommendData.brandName}</span></h2>
                            <a href="#" className="block mt-2 text-xl md:text-2xl font-semibold  transition-colors duration-300 transform " tabIndex="0" role="link">Product Name : {recommendData.name}</a>
                            <div className="flex gap-2">
                                <p className="mt-2 text-xl dark:text-gray-600"> <span className="md:text-2xl font-bold">Recommend text : </span>{recommendData.text_area}</p>
                            </div>
                            <p className="mt-2 text-xl "><span className="font-bold md:text-2xl">Publis time : </span>{recommendData.userData.timeAndDate}</p>
                            <p className="mt-2 text-xl "><span className="font-bold md:text-2xl">Recommendation Count : </span>{recommendationCount}</p>

                        </div>

                        <div className="mt-4">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <div className="relative">
                                        <img className="object-cover w-16 h-16 rounded-full" src={recommendData.userData.userPhotoUrl} alt="" />
                                        <span className={recommendData.userData.userPhotoUrl.userEmail === user?.email ? 'absolute bottom-0 w-3 h-3 rounded-full right-1 ring-1 ring-white' : 'absolute bottom-0 w-3 h-3 rounded-full bg-emerald-500 right-1 ring-1 ring-white'}></span>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-[16px] ">{recommendData.userData.userName} <span>{recommendData.userData.timeAndDate}</span></p>
                                        <p className="mx-1 text-[16px]">{recommendData.userData.userEmail}</p>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8 shadow">
                    <form onSubmit={handelRecomended}>
                        <div className="-mx-2 md:items-center md:flex ">
                            <div className="flex-1 px-2">
                                <label className="block mb-2 text-[16px] font-semibold   ">	Recommendation Title</label>
                                <input name="rtitle" type="text" placeholder="Recommendation Title " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-200 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-300   dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="flex-1 px-2 mt-4 md:mt-0">
                                <label className="block mb-2 text-[16px] font-semibold   ">Recommended product Name</label>
                                <input type="text" name="rproductname" placeholder="Recommended product Name" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-300   dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-[16px] font-semibold   ">Recommended Product Image</label>
                            <input type="text" name="rphotourl" placeholder="Recommended Product Image" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-300   dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="w-full mt-4">
                            <label className="block mb-2 text-[16px] font-semibold   ">Recommendation reason</label>
                            <textarea name="text" className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-300   dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Recommendation reason"></textarea>
                        </div>

                        <button className="w-full mt-8 mb-10 inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">
                            Send message
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Recommend;