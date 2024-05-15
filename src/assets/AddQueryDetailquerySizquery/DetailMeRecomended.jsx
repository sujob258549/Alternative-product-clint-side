
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";




const DetailMeRecomended = () => {
    const recommendDetail = useLoaderData();
    console.log(recommendDetail);
    const [spisifayAllrecommendDetail, setspisifayAllrecommendDetail] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACEND_URL}/allproduct`)
            .then(res => res.json())
            .then(data => {
                const sortedData = data.filter(d => d.queeryTitle === recommendDetail.previseData.queeryTitle)
                setspisifayAllrecommendDetail(sortedData);

            })
    }, [recommendDetail])
    console.log(spisifayAllrecommendDetail);


    // const [spisifayallrecomended, setspisifayAllrecommendDetail] = useState([])



    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_BACEND_URL}/recommendation`)
    //         .then(res => res.json())
    //         .then(data => {
    //             const filteredData = data.filter(item => item.previseData.queeryTitle === recommendData.queeryTitle);
    //             setAllrecommendDetail(filteredData);
    //             setloder(false)
    //         });
    // }, [recommendData.queeryTitle, setloder, user]);

    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_BACEND_URL}/recommendation`)
    //         .thenimport Recommend from './Recommend';
    // (res => res.json())
    //         .then(data => {
    //             setAllrecommendDetail(data)
    //         })

    //     const filerdata = allrecomended.filter(data => data.previseData.queeryTitle === recommendData.queeryTitle)
    //     setspisifayAllrecommendDetail(filerdata)
    // }, []);



    return (
        <div className="container mx-auto md:pt-10 pb-10 md:pb-20 md:px-0 px-5">
            <div className="absolute top-[50%] left-[50%]">
            </div>
            <h1 className="kurali-font text-3xl md:text-5xl font-bold text-center my-7 md:my-16">Detail <span className="text-[#16A34A]"> Query/Product</span> And <span className="text-[#16A34A]">Recommend</span> </h1>
            <hr />
            <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                <div>
                    <h1 className="kurali-font text-3xl md:text-4xl font-bold text-center py-10">My Query/<span className="text-[#16A34A]">product</span></h1>
                    {
                        spisifayAllrecommendDetail.map(recommend => (
                            <div key={recommend._id} className="">
                                <div className="">
                                    <div className="overflow-hidden bg-white rounded-lg shadow">
                                        <img className="object-contain w-full h-64" src={recommend.photourl} alt="Article" />
                                        <div className="p-6">
                                            <div>
                                                <h2 className="block mt-2 text-xl md:text-3xl font-semibold transition-colors duration-300 transform" tabIndex="0" role="link">
                                                    Query Title : <span className="text-[#16A34A]">{recommend.queeryTitle}</span>
                                                </h2>
                                                <h2 className="block mt-2 text-xl md:text-2xl font-semibold transition-colors duration-300 transform" tabIndex="0" role="link">
                                                    Product Name : <span className="text-[#16A34A]">{recommend.brandName}</span>
                                                </h2>
                                                <a href="#" className="block mt-2 text-xl md:text-2xl font-semibold transition-colors duration-300 transform" tabIndex="0" role="link">
                                                    Product Name : {recommend.name}
                                                </a>
                                                <div className="flex gap-2">
                                                    <p className="mt-2 text-xl dark:text-gray-600">
                                                        <span className="md:text-2xl font-bold">Recommend text : </span>
                                                        {recommend.text_area}
                                                    </p>
                                                </div>
                                                <p className="mt-2 text-xl ">
                                                    <span className="font-bold md:text-2xl">Publish time : </span>
                                                    {recommend.userData.timeAndDate}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="mt-4">


                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="">
                    <h1 className="py-10 kurali-font text-3xl md:text-4xl font-bold text-center"><span className="text-[#16A34A]">Recommend Query</span>/product</h1>
                    <div className="mb-5 max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <img className="mx-auto py-5 object-cover" src={recommendDetail.photourl} alt="" />
                        <div className="flex items-center justify-between mt-5">
                            <span className="text-sm font-light text-gray-600 dark:text-gray-400">{recommendDetail.timeAndDate}</span>
                            <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabIndex="0" role="button">{recommendDetail.rtitle}</a>
                        </div>

                        <div className="mt-2">
                            <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabIndex="0" role="link">{recommendDetail.rproductname}</a>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{recommendDetail.text}</p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline" tabIndex="0" role="link">Read more</a>

                            <div className="flex items-center">
                                <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src={recommendDetail.userData.userPhotoUrl} alt="avatar" />
                                <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabIndex="0" role="link">{recommendDetail.userData.userName}</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default DetailMeRecomended;