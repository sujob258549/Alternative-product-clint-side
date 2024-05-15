
import { useContext, useEffect, useState } from "react";
import './style.css'
import { Link } from "react-router-dom";
import { CreatAuthContext } from "../Firebase/Authprovider";
import { BallTriangle } from "react-loader-spinner";
import { motion } from "framer-motion"
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Allproduct = () => {
    const { loder, setloder } = useContext(CreatAuthContext)
    const [sixDatas, setSixdatas] = useState([])
    const [search, setSecarch] = useState('')
    const [order, setOrder] = useState()
    const [gridTogle, setgridTogle] = useState(3)
    console.log(search)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACEND_URL}/allproduct?search=${search}`)
            // .then(res => res.json())
            .then(data => {
                // const sortedData = [...data].sort((a, b) => new Date(b.userData.timeAndDate) - new Date(a.userData.timeAndDate));
                console.log(data);
                setSixdatas(data?.data);
                setloder(false)
            })
    }, [search, setloder])

    useEffect(() => {
        if (order === 'ass') {
            const sortedData = [...sixDatas].sort((a, b) => new Date(b.userData.timeAndDate) - new Date(a.userData.timeAndDate));
            setSixdatas(sortedData);
        }
        else if (order === 'des') {
            const sortedData = [...sixDatas].sort((a, b) => new Date(a.userData.timeAndDate) - new Date(b.userData.timeAndDate));
            setSixdatas(sortedData);

        }

    }, [order])
    console.log(sixDatas);

    const handelChengelaout = e => {
        const griddata = e.target.value;
        setgridTogle(griddata);
    }

    const hendelsurch = e => {
        e.preventDefault()
        const secarhText = e.target.secrch.value;
        setSecarch(secarhText);
    }


    const hendelorder = e => {
        const griddata = e.target.value;
        setOrder(griddata);
        console.log(griddata);
    }



    return (
        <div className="z-50 pb-10 md:pb-20 container mx-auto">
             <Helmet>
                <title>Altranative product || All Query</title>
            </Helmet>
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


            <form action="" onSubmit={hendelsurch}>
                <div className="flex justify-end mt-10">
                    <div className="flex  relative rounded-md w-full px-4 max-w-xl">
                        <input type="text" name="secrch" id="query" placeholder="Enter product title"
                            className="w-full p-3 rounded-md border-2 border-r-white rounded-r-none border-gray-300 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500 dark:text-gray-300 dark:border-none " />
                        <button className="inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md">
                            <span>search</span>
                            <span className="hidden md:block">
                                <svg className="text-gray-200 h-5 w-5 p-0 fill-current" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                    viewBox="0 0 56.966 56.966" style={{ enableBackground: 'new 0 0 56.966 56.966;' }} xmlSpace="preserve"
                                    width="512px" height="512px">
                                    <path
                                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </span>
                        </button>
                    </div>

                </div>
            </form>

            <div className="px-5 py-10 md:py-20 w-full md:w-[80%] lg:w-[70%] mx-auto space-y-5">
                <motion.h1
                    animate={{ x: 200 }}
                    transition={{ type: "spring", stiffness: 100 }}
                     data-aos="fade-left" data-aos-duration="2000"
                    className="kurali-font text-3xl md:text-5xl font-bold"
                >
                    All Query/<span className="text-[#16A34A]">product</span>
                </motion.h1>
                <p data-aos="fade-right" className="text-center text-[18px]">Products are the backbone of modern life, serving a multitude of purposes across various industries and sectors. From everyday essentials like food, clothing, and electronics to specialized tools and equipment used in manufacturing and construction, products play a vital role in meeting human needs and driving economic activity. Whether it.s the latest smartphone, a high-performance automobile, or life-saving medical devices, each product serves a specific function and contributes to enhancing our quality of life. Moreover, advancements in technology continue to revolutionize the way products are designed, produced, and distributed, leading to constant innovation and improvement across different sectors.</p>
            </div>
            <div className="flex gap-5 flex-wrap justify-center">
                <div className="flex justify-center py-10">
                    <select onChange={hendelorder} className="text-xl kurali-font font-medium select select-info w-full max-w-xs">
                        <option className="text-xl kurali-font font-medium" disabled selected>Creat a Sort</option>
                        <option className="text-xl kurali-font font-medium" value={'ass'}>Assanding</option>
                        <option className="text-xl kurali-font font-medium" value={"des"}>Dessanding</option>

                    </select>
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
            </div>
            <div className={`grid  md:grid-cols-${gridTogle} gap-10 px-5 md:px-0`}>
                {
                    sixDatas.map(product => (
                        <div data-aos="fade-down" data-aos-duration="1000"   key={product._id} className=' flex flex-col justify-between shadow rounded-lg relative'>
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
                                <Link to={`/detail-recomented/${product._id}`} className='b-radis inline-flex items-center justify-center  bg-green-600 py-3 px-6 text-[16px] font-dm  font-semibold text-white shadow-xl shadow-green-600/85 transition-transform duration-200 ease-in-out  w-full'>
                                    Rrecommend Product / detail

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