import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { CreatAuthContext } from "../Firebase/Authprovider";
import axios from "axios";
import Swal from "sweetalert2";
import { BallTriangle } from "react-loader-spinner";


const Recommend = () => {
    const navigate = useNavigate()
    const recommendData = useLoaderData();
    const { user ,loder ,setloder } = useContext(CreatAuthContext)
    console.log(recommendData);
    const [allrecomended, setAllRecommended] = useState([])
    // const [spisifayallrecomended, setspisifayAllRecommended] = useState([])
    console.log(allrecomended, recommendData.queeryTitle);

    const handelSubmitCofi = e => {
        e.preventDefault();
        const rtitle = e.target.rtitle.value;
        const rproductname = e.target.rproductname.value;
        const photourl = e.target.photourl.value;
        const text = e.target.text.value;
        const userEmail = user?.email
        const userName = user?.displayName
        const userPhotoUrl = user?.photoURL
        const timeAndDate = new Date();
        const queeryTitle = recommendData.queeryTitle;
        const brandName = recommendData.brandName;
        const name = recommendData.name;
        const autheruserEmail = recommendData.userData.userEmail;
        const authoruserName = recommendData.userData.userName;
        const previseData = {
            queeryTitle, brandName, name
        }
        const userData = {
            userEmail, userName, userPhotoUrl
        }
        const author = {
            authoruserName, autheruserEmail
        }

        const recomanded = { rtitle, rproductname, timeAndDate, photourl, text, userData, previseData ,author}
        console.log(recomanded)

        axios.post(`${import.meta.env.VITE_BACEND_URL}/recommendation`, recomanded)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: " Success...",
                        text: "Recommend Success!",
                        footer: '<a href="#">Recommend success</a>'
                    });
                    navigate('/myrequmentaction')
                }
            })

    }

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACEND_URL}/recommendation`)
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => item.previseData.queeryTitle === recommendData.queeryTitle);
                setAllRecommended(filteredData);
                setloder(false)
            });
    }, [recommendData.queeryTitle,setloder, user]);

    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_BACEND_URL}/recommendation`)
    //         .thenimport Recommend from './Recommend';
(res => res.json())
    //         .then(data => {
    //             setAllRecommended(data)
    //         })

    //     const filerdata = allrecomended.filter(data => data.previseData.queeryTitle === recommendData.queeryTitle)
    //     setspisifayAllRecommended(filerdata)
    // }, []);



    return (
        <div className="container mx-auto md:pt-10 pb-10 md:pb-20 md:px-0 px-5">
            <div className="absolute top-[50%] left-[50%]">
                {loder && <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />}
            </div>
            <h1 className="kurali-font text-3xl md:text-5xl font-bold text-center my-7 md:my-16">Detail <span className="text-[#16A34A]"> Query/Product</span> And <span className="text-[#16A34A]">Recommend</span> </h1>
            <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                <div className="overflow-hidden bg-white rounded-lg shadow">
                    <img className="object-contain w-full h-64" src={recommendData.photourl} alt="Article" />

                    <div className="p-6">
                        <div className="">
                            <div>
                                <h2 href="#" className="block mt-2 text-xl md:text-3xl font-semibold  transition-colors duration-300 transform " tabIndex="0" role="link"> Query Title : <span className="text-[#16A34A]">{recommendData.queeryTitle}</span></h2>
                                <h2 href="#" className="block mt-2 text-xl md:text-2xl font-semibold  transition-colors duration-300 transform " tabIndex="0" role="link">Product Name : <span className="text-[#16A34A]">{recommendData.brandName}</span></h2>
                                <a href="#" className="block mt-2 text-xl md:text-2xl font-semibold  transition-colors duration-300 transform " tabIndex="0" role="link">Product Name : {recommendData.name}</a>
                                <div className="flex gap-2">
                                    <p className="mt-2 text-xl dark:text-gray-600"> <span className="md:text-2xl font-bold">Recommend text : </span>{recommendData.text_area}</p>
                                </div>
                                <p className="mt-2 text-xl "><span className="font-bold md:text-2xl">Publis time : </span>{recommendData.userData.timeAndDate}</p>
                                <p className="mt-2 text-xl "><span className="font-bold md:text-2xl">Recommendation Count : </span>{allrecomended.length}</p>

                            </div>

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
                            <div className="mt-10">
                                {
                                    allrecomended.map(recommended => (
                                        <div key={recommended._id} className="mb-5 max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                            <img className="w-full h-48 object-cover" src={recommended.photourl} alt="" />
                                            <div className="flex items-center justify-between mt-5">
                                                <span className="text-sm font-light text-gray-600 dark:text-gray-400">{recommended.timeAndDate}</span>
                                                <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabIndex="0" role="button">{recommended.rtitle}</a>
                                            </div>

                                            <div className="mt-2">
                                                <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabIndex="0" role="link">{recommended.rproductname}</a>
                                                <p className="mt-2 text-gray-600 dark:text-gray-300">{recommended.text}</p>
                                            </div>

                                            <div className="flex items-center justify-between mt-4">
                                                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline" tabIndex="0" role="link">Read more</a>

                                                <div className="flex items-center">
                                                    <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src={recommended.userData.userPhotoUrl} alt="avatar" />
                                                    <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabIndex="0" role="link">{recommended.userData.userName}</a>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="shadow p-8 py-6 rounded-lg">
                        <h1 className="text-3xl font-bold text-center text-[#374151] font-rancho">Add Recommend from</h1>
                        <form onSubmit={handelSubmitCofi} className="">
                            <div className="form-control">
                                <div className="grid  grid-cols-1 md:gap-5 mt-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[16px] font-bold">Recommendation Title</span>
                                        </label>
                                        <input type="text" name="rtitle" placeholder="Recommendation Title" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[16px] font-bold">Recommended product Name</span>
                                        </label>
                                        <input type="text" name="rproductname" placeholder="Recommended product Name" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[16px] font-bold">Recommended Product Image</span>
                                        </label>
                                        <input type="text" name="photourl" placeholder="Recommended Product Image" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <label className="text-[16px] font-bold" htmlFor="">Alternation Reason Details</label><br />
                                    <textarea name="text" placeholder="Recommendation reason" className="textarea textarea-bordered textarea-lg w-full max--xs" ></textarea>

                                </div>
                            </div>
                            <button className="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02] w-full mt-5 md:mt-10 ">Add Recommendation</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Recommend;