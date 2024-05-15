import { useContext, useEffect, useState } from "react";
import { CreatAuthContext } from "../Firebase/Authprovider";
import { Link, useLoaderData } from "react-router-dom";



const MeRecomndaction = () => {
    const data = useLoaderData()

    const { user } = useContext(CreatAuthContext)
    const [allrecomended, setAllRecommended] = useState([])
    console.log(allrecomended);

    useEffect(() => {
        const filteredData = data.filter(item => item.author.autheruserEmail === user.email);
        setAllRecommended(filteredData);
    }, [user, data])

    // const handelRecomendactiondelete = (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axios.delete(`${import.meta.env.VITE_BACEND_URL}/recommendation/${id}`)
    //                 .then(result => {
    //                     console.log(result.data)

    //                     Swal.fire({
    //                         title: "Deleted!",
    //                         text: "Your file has been deleted.",
    //                         icon: "success"
    //                     });

    //                 })
    //             const updatedUsers = allrecomended.filter(user => user._id !== id);
    //             setAllRecommended(updatedUsers);
    //         }
    //     });

    // }
    return (
        <div className="py-10 md:py-20">
            <section className="container px-4 mx-auto">
                <div className="flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <h1 className="flex justify-center py-10 md:pb-20 kurali-font text-3xl md:text-5xl font-bold text-center">Recomendaction for <span className="ml-2 text-[#16A34A] flex justify-center">

                      me   </span></h1>
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 ">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right  text-black">
                                                <div className="flex items-center gap-x-3">
                                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Invoice</span>

                                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                            <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                            <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  text-black">
                                                Date
                                            </th>



                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  text-black">
                                                Recommend user
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  text-black">
                                                Your query name
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  text-black">
                                                Recommend query name
                                            </th>

                                            <th scope="col" className="relative py-3.5 px-4">
                                                <span className="sr-only">Actions</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    {
                                        allrecomended.map((recomended, index) => (
                                            <tbody key={index} className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                                                <tr>
                                                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                        <div className="inline-flex items-center gap-x-3">
                                                            <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />

                                                            <span>{index + 1}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-blackwhitespace-nowrap">{recomended.timeAndDate}</td>
                                                    <td className="px-4 py-4 text-sm text-blackwhitespace-nowrap">
                                                        <div className="flex items-center gap-x-2">
                                                            <img className="object-cover w-8 h-8 rounded-full" src={recomended.userData.userPhotoUrl} alt="" />
                                                            <div>
                                                                <h2 className="text-sm font-medium text-black ">{recomended.userData.userName}</h2>
                                                                <p className="text-xs font-normal text-black">{recomended.userData.userEmail}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                        <div className="">
                                                            <h2 className="text-sm font-normal"> {recomended.previseData.name}</h2>
                                                        </div>
                                                    </td>

                                                    <td className="px-4 py-4 text-sm text-blackwhitespace-nowrap">{recomended.rtitle}</td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div className="flex items-center justify-between  gap-x-6">
                                                            <button className=" transition-colors duration-200 dark:hover:text-indigo-500 font-bold hover:text-indigo-500 focus:outline-none">
                                                                {
                                                                    user?.email === recomended.userData.userEmail ? "Active" : "UnActive"
                                                                }
                                                            </button>

                                                            <Link to={`/recomendeddatail/${recomended._id}`} className="btn bg-green-600 py-3 px-6 font-semibold text-white shadow-xl shadow-green-600/85 transition-transform duration-200 ease-in-out btn-success  justify-end">
                                                                Details
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>


                                            </tbody>
                                        ))
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MeRecomndaction;