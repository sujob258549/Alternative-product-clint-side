import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { CreatAuthContext } from "../Firebase/Authprovider";
import { useLoaderData } from "react-router-dom";



const Update = () => {

    const { user } = useContext(CreatAuthContext)
    const updatedata = useLoaderData()

    const handelSubmitCofi = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const brandName = e.target.brandName.value;
        const queeryTitle = e.target.queeryTitle.value;
        const photourl = e.target.photourl.value;
        const text_area = e.target.text_area.value;
        const userEmail = user?.email
        const userName = user?.displayName
        const userPhotoUrl = user?.photoURL
        const timeAndDate = new Date();
        const userData = {
            userEmail, userName, userPhotoUrl, timeAndDate
        }

        const products = { name, brandName, queeryTitle, photourl, text_area, userData }
        console.log(products)

        axios.put(`${import.meta.env.VITE_BACEND_URL}/product/${updatedata._id}`, products)
            .then(res => {
                console.log(res.data);
                
                    Swal.fire({
                        icon: "success",
                        title: "Success...",
                        text: "Success!",
                        footer: '<a href="#">Create a User</a>'
                    });
                
            })


        // fetch('http://localhost:3000/product', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(products)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         // if (data.insertedId) {
        //         //     Swal.fire({
        //         //         icon: "success",
        //         //         title: "Success...",
        //         //         text: "user coffee create success",
        //         //         footer: '<a href="/">You add  success</a>'
        //         //     });
        //         //     navigate('/');

        //         // }
        //     })

    }
    return (
        <div>
            <div className="w-[90%] mx-auto">

                <div className="bg-[#F4F3F0] rounded-md mb-10 w-full md:w-[60%] lg:w-[50%] mx-auto p-5 md:p-10 mt-10">
                    <div className=" w-full md:w-[70%] mx-auto text-center pb-10 ">
                        <h1 className="text-3xl font-bold text-center text-[#374151] font-rancho">Update Query/product Page</h1>
                    </div>
                    <div >
                        <form onSubmit={handelSubmitCofi} className="">
                            <div className="form-control">
                                <div className="grid  grid-cols-1 md:gap-5 mt-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">	Product Name</span>
                                        </label>
                                        <input type="text" defaultValue={updatedata.name} name="name" placeholder="	Product Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Brand name</span>
                                        </label>
                                        <input type="text" defaultValue={updatedata.brandName} name="brandName" placeholder=" Brand name" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:gap-5 mt-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">	Query TItle </span>
                                        </label>
                                        <input type="text" defaultValue={updatedata.queeryTitle} name="queeryTitle" placeholder="Query TItle" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text"defaultValue={updatedata.photourl} name="photourl" placeholder="	Product Image-URL" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <label htmlFor="">	Alternation Reason Details</label><br />
                                    <textarea defaultValue={updatedata.text_area} className=" textarea h-32 mt-5 w-full" name="text_area" placeholder="Alternation Reason short description"></textarea>

                                </div>
                            </div>
                            <button className="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02] w-full mt-10 ">Update Query</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;