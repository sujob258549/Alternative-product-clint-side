import { useContext, useEffect, useState } from "react";
import { CreatAuthContext } from "../Firebase/Authprovider";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Typewriter from 'typewriter-effect';

const Myreqummendection = () => {
    const { user  } = useContext(CreatAuthContext)
    const [allrecomended, setAllRecommended] = useState([])
    console.log(allrecomended);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACEND_URL}/recommendation?email=${user.email}`, {withCredentials : true})
            // .then(res => res.json())
            .then(data => {
                // const filteredData = data.filter(item => item.userData.userEmail === user.email);
                setAllRecommended(data?.data);
            });
    }, [user]);


    const handelRecomendactiondelete = (id) => {
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
                axios.delete(`${import.meta.env.VITE_BACEND_URL}/recommendation/${id}`)
                    .then(result => {
                        console.log(result.data)

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });

                    })
                const updatedUsers = allrecomended.filter(user => user._id !== id);
                setAllRecommended(updatedUsers);
            }
        });

    }

    return (
        <div className="py-10 ">
            <section className="container px-4 mx-auto">
                <h1 className="flex justify-center py-10 md:pb-20 kurali-font text-3xl md:text-5xl font-bold text-center">My Query/<span className="text-[#16A34A] flex justify-center"><Typewriter
                    options={{
                        strings: [ 'My Query', 'Recomendaction'],
                        autoStart: true,
                        loop: true,
                    }}
                /></span></h1>
                <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium ">Team members</h2>

                    <span className="px-3 py-1 text-[16px] text-blue-600  rounded-full  dark:text-blue-400">Recommend Count <span className="ml-2">{allrecomended.length}</span></span>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className=" ">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right  ">
                                                <div className="flex items-center gap-x-3">
                                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />
                                                    <span>Name</span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right  ">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Recommendation Title</span>
                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  ">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Recommended product Name</span>
                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  ">Author email address</th>


                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-slate-200">
                                        {
                                            allrecomended.map(data => (
                                                <tr key={data._id} className="">
                                                    <td className="px-4 py-4 text-sm font-medium  whitespace-nowrap">
                                                        <div className="inline-flex items-center gap-x-3">
                                                            <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />

                                                            <div className="flex items-center gap-x-2">
                                                                <img className="object-cover w-10 h-10 rounded-full" src={data.userData.userPhotoUrl} alt="" />
                                                                <div>
                                                                    <h2 className="font-medium  ">{data.userData.userName}</h2>
                                                                    <p className="text-sm font-normal text-gray-600 ">{data.userData.userEmail}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium  whitespace-nowrap">
                                                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 ">


                                                            <h2 className="text-sm font-normal">{data.rproductname}</h2>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm   whitespace-nowrap">{data.rtitle}</td>
                                                    <td className="px-4 py-4 text-sm   whitespace-nowrap">{data.author.autheruserEmail}</td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">

                                                    </td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div className="flex items-center gap-x-6">
                                                            <button onClick={() => handelRecomendactiondelete(data._id)} className=" transition-colors duration-200 dark:hover:text-red-500  hover:text-red-500 focus:outline-none">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                </svg>
                                                            </button>

                                                            <Link to={`/updaterecomendection/${data._id}`} className=" transition-colors duration-200 dark:hover:text-yellow-500  hover:text-yellow-500 focus:outline-none">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                </svg>
                                                            </Link >
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default Myreqummendection;