
import { useContext, useEffect, useState } from "react";
import './style.css'
import { Link } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import { CreatAuthContext } from "../Firebase/Authprovider";

const SixProduct = () => {
    const [sixDatas, setSixdatas] = useState([])
    const { loder, setloder } = useContext(CreatAuthContext)
    console.log(sixDatas)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACEND_URL}/product`)
            .then(res => res.json())
            .then(data => {
                const sortedData = [...data].sort((a, b) => new Date(b.userData.timeAndDate) - new Date(a.userData.timeAndDate));
                setSixdatas(sortedData);
                setloder(false)
            })
    }, [setloder])

    return (
        <div className="pb-10 md:pb-20 md:px-0 px-5">
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
            <div className="py-10 md:pb-20 w-full md:w-[80%] lg:w-[70%] mx-auto space-y-5">
                <h1 data-aos="fade-down-right" className="kurali-font text-3xl md:text-5xl font-bold text-center"><span className="text-[#16A34A]">Product </span>section</h1>
                <p data-aos="fade-down-left" className="text-center text-[18px]">Products play a crucial role in our daily lives, serving diverse purposes across different sectors. Consumer goods are essential for personal use, ranging from electronics like smartphones to clothing and household items. Industrial products, on the other hand, are integral to manufacturing and construction processes, including machinery and equipment. Healthcare products, such as medications and medical devices, are vital for maintaining and improving health. Software products enable us to accomplish tasks efficiently and stay connected, while food and beverage products provide nourishment and enjoyment. Automotive products, including vehicles and accessories, facilitate transportation and mobility. Each category of products serves distinct needs, contributing to the functionality and convenience of modern life</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    sixDatas.slice(0, 6).map(product => (
                        <div key={product._id} data-aos="fade-left" className=' flex flex-col justify-between shadow rounded-lg relative'>
                            <div className="p-5">
                                <img className="h-56 object-contain p-5 w-full " src={product.photourl} alt="" />
                                <div className='product-info space-y-4 pb-3'>
                                    <h6 className='product-name text-2xl font-bold text-[#16A34A]'>{product.queeryTitle}</h6>
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
                            <div className="">
                                <Link to={`/detail-recomented/${product._id}`} className='b-radis inline-flex items-center justify-center  bg-green-600 py-3 px-6 text-xl  font-dm  font-semibold text-white shadow-xl shadow-green-600/85 transition-transform duration-200 ease-in-out  w-full'>
                                    Recommend Product

                                </Link>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SixProduct;