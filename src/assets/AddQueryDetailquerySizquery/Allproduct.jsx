
import { useContext, useEffect, useState } from "react";
import './style.css'
import { Link } from "react-router-dom";
import { CreatAuthContext } from "../Firebase/Authprovider";
import { BallTriangle } from "react-loader-spinner";

const Allproduct = () => {
    const { loder, setloder } = useContext(CreatAuthContext)
    const [sixDatas, setSixdatas] = useState([])
    const [gridTogle, setgridTogle] = useState(3)
    console.log(sixDatas)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACEND_URL}/product`)
            .then(res => res.json())
            .then(data => {
                const sortedData = [...data].sort((a, b) => new Date(b.userData.timeAndDate) - new Date(a.userData.timeAndDate));
                setSixdatas(sortedData);
                setloder(false)
            })
    }, [])

    const handelChengelaout = e => {
        const griddata = e.target.value;
        setgridTogle(griddata);
    }



    return (
        <div className="z-50 pb-10 md:pb-20 container mx-auto">
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

            <div className="px-5 py-10 md:py-20 w-full md:w-[80%] lg:w-[70%] mx-auto space-y-5">
                <h1 data-aos="fade-left" className="kurali-font text-3xl md:text-5xl font-bold text-center">All Query/<span className="text-[#16A34A]">product</span></h1>
                <p data-aos="fade-right" className="text-center text-[18px]">Products are the backbone of modern life, serving a multitude of purposes across various industries and sectors. From everyday essentials like food, clothing, and electronics to specialized tools and equipment used in manufacturing and construction, products play a vital role in meeting human needs and driving economic activity. Whether it.s the latest smartphone, a high-performance automobile, or life-saving medical devices, each product serves a specific function and contributes to enhancing our quality of life. Moreover, advancements in technology continue to revolutionize the way products are designed, produced, and distributed, leading to constant innovation and improvement across different sectors.</p>
            </div>
            <div className="flex justify-center py-10">
                <select onChange={handelChengelaout} className="text-xl kurali-font font-medium select select-info w-full max-w-xs">
                    <option className="text-xl kurali-font font-medium" disabled selected>Chenge grid leout option</option>
                    <option className="text-xl kurali-font font-medium" value={1}>Creat laout1</option>
                    <option className="text-xl kurali-font font-medium" value={2}>Creat laout2</option>
                    <option className="text-xl kurali-font font-medium" value={3}>Creat laout3</option>
                    {/* <option className="text-xl kurali-font font-medium" value={4}>Creat laout4</option> */}
                </select>
            </div>
            <div className={`grid  md:grid-cols-${gridTogle} gap-10 px-5 md:px-0`}>
                {
                    sixDatas.map(product => (
                        <div data-aos="fade-down" key={product._id} className=' flex flex-col justify-between shadow rounded-lg relative'>
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
                                    Rrecommend Product

                                </Link>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Allproduct;