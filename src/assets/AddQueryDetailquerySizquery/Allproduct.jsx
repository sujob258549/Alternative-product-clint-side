
import { useEffect, useState } from "react";
import './style.css'

const Allproduct = () => {
    const [sixDatas, setSixdatas] = useState([])
    console.log(sixDatas)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACEND_URL}/product`)
            .then(res => res.json())
            .then(data => {
                setSixdatas(data)
            })
    }, [])

    return (
        <div className="pb-10 md:pb-20 container mx-auto">
            <div className="py-10 md:py-20 w-full md:w-[80%] lg:w-[70%] mx-auto space-y-5">
                <h1 className="kurali-font text-3xl md:text-5xl font-bold text-center">All Query/Product</h1>
                <p className="text-center text-[18px]">Products are the backbone of modern life, serving a multitude of purposes across various industries and sectors. From everyday essentials like food, clothing, and electronics to specialized tools and equipment used in manufacturing and construction, products play a vital role in meeting human needs and driving economic activity. Whether it.s the latest smartphone, a high-performance automobile, or life-saving medical devices, each product serves a specific function and contributes to enhancing our quality of life. Moreover, advancements in technology continue to revolutionize the way products are designed, produced, and distributed, leading to constant innovation and improvement across different sectors.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-0">
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
                            <div className="">
                                <button className='b-radis inline-flex items-center justify-center  bg-green-600 py-3 px-6 text-xl  font-dm  font-semibold text-white shadow-xl shadow-green-600/85 transition-transform duration-200 ease-in-out  w-full'>
                                    Rrecommend Product

                                </button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Allproduct;