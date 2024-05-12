
import { useContext, useEffect, useState } from "react";
import './style.css'
import { CreatAuthContext } from "../Firebase/Authprovider";
import { Link } from "react-router-dom";
import { MdDelete, MdLocalLibrary, MdOutlineModeEdit } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";

const MyQuerys = () => {
    const { user } = useContext(CreatAuthContext)
    const [sixDatas, setSixdatas] = useState([])
    console.log(sixDatas)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACEND_URL}/product`)
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => item.userData.userEmail === user.email);
                setSixdatas(filteredData);
            });
    }, [user.email]);

    const handeldelet =(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_BACEND_URL}/product/${id}`)
                .then(result => {
                    console.log(result.data)
                        
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
    
                })
                const updatedUsers = sixDatas.filter(user => user._id !== id);
                setSixdatas(updatedUsers);
            }
        });

    }

    return (
        <div className="pb-10 md:pb-20 container mx-auto">
            <div className="container px-6 py-16 mx-auto">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">My Add query <br /> your <span className="text-blue-500 ">Section</span></h1>

                            <p className="mt-3 text-gray-600 md:py-5 dark:text-gray-400">Definitions. The verb whine means to make a high-pitched noise or to complain or beg in a childish way. The noun whine refers to the act of whining or to a complaint uttered in a whining tone. The noun wine refers to the fermented juice of grapes (or other fruits), used as an alcoholic beverage and in cooking.</p>

                            <Link to={'/addproduct'} className="mt-5 inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">Add Queries </Link>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className="w-full rounded-md h-full lg:max-w-3xl" src="https://web-assets.esetstatic.com/wls/2019/04/creat-hero-1.jpg" alt="Catalogue-pana.svg" />
                    </div>
                </div>
            </div>

            <div className="py-10 md:py-20 w-full md:w-[80%] lg:w-[70%] mx-auto space-y-5">
                <h1 className="kurali-font text-3xl md:text-5xl font-bold text-center md:pb-5">My Query/Product</h1>
                <p className="text-center text-[18px]">Products are the backbone of modern life, serving a multitude of purposes across various industries and sectors. From everyday essentials like food, clothing, and electronics to specialized tools and equipment used in manufacturing and construction, products play a vital role in meeting human needs and driving economic activity. Whether it.s the latest smartphone, a high-performance automobile, or life-saving medical devices, each product serves a specific function and contributes to enhancing our quality of life. Moreover, advancements in technology continue to revolutionize the way products are designed, produced, and distributed, leading to constant innovation and improvement across different sectors.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    sixDatas.map(product => (
                        <div key={product._id} className=' flex flex-col justify-between shadow rounded-lg relative'>
                            <div className="p-5">
                                <img className="h-56 object-contain p-5 w-full " src={product.photourl} alt="" />
                                <div className='product-info space-y-4 pb-3'>
                                    <h6 className='product-name text-2xl font-bold text-red-700'>{product.queeryTitle}</h6>
                                    <p className="text-xl font-medium">Product Name :{product.name}</p>
                                    <p className="text-xl font-medium">Brang Name : {product.brandName}</p>
                                    <p className="text-xl font-medium">Alternation Reason : {product.text_area.slice(0, 60)}...</p>
                                    <p className="text-xl font-medium kurali-font">Post date : {product.userData.timeAndDate}</p>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <img className="object-cover w-12 h-12 -mx-2 rounded-full ring ring-white dark:ring-gray-900" src={product.userData.userPhotoUrl} alt="" />
                                        <p className="text-xl font-medium ">{product.userData.userName} Stars</p>
                                    </div>
                                </div>
                            </div>

                            {/* buttons */}
                            <div className=" h-10 mx-auto inline-flex items-center justify-center b-radis bg-green-600 py-3 w-full font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out">
                                <div className="flex items-center gap-3 sm:gap-x-5 -translate-y-3">
                                    <Link to={`/myquerys/${product._id}`} className="bg-white dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5">
                                        <MdLocalLibrary className="text-2xl text-white"></MdLocalLibrary>
                                    </Link>

                                    <Link to={`/update/${product._id}`}className="bg-[#1877F2] rounded-lg hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-8 py-2.5">
                                       <MdOutlineModeEdit className="text-white text-2xl"></MdOutlineModeEdit>
                                    </Link>

                                    <button onClick={()=>handeldelet(product._id)} className="bg-red-500 rounded-lg hover:bg-red-500/80 duration-300 transition-colors border border-transparent px-8 py-2.5">
                                       <MdDelete className="text-2xl text-white"></MdDelete>
                                    </button>
                                </div>

                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyQuerys;