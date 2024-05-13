import { useLoaderData } from "react-router-dom";


const UpdateRequmendction = () => {
    const data = useLoaderData();

    console.log(data);
    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center container mx-auto py-10 md:py-20">
            <div>
                <img className="w-full" src="https://i.ibb.co/gPrrYtZ/update-removebg-preview.png" alt="" />
            </div>
            <div className="">
                <div className="shadow p-8 py-6 rounded-lg">
                    <h1 className="text-3xl font-bold text-center text-[#374151] font-rancho">Add Recommend from</h1>
                    <form onSubmit={handelupdaterecommend} className="">
                        <div className="form-control">
                            <div className="grid  grid-cols-1 md:gap-5 mt-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-[16px] font-bold">Recommendation Title</span>
                                    </label>
                                    <input defaultValue={data.rtitle} type="text" name="rtitle" placeholder="Recommendation Title" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-[16px] font-bold">Recommended product Name</span>
                                    </label>
                                    <input defaultValue={data.rproductname} type="text" name="rproductname" placeholder="Recommended product Name" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-[16px] font-bold">Recommended Product Image</span>
                                    </label>
                                    <input defaultValue={data.photourl} type="text" name="photourl" placeholder="Recommended Product Image" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="mt-5">
                                <label className="text-[16px] font-bold" htmlFor="">Alternation Reason Details</label><br />
                                <textarea defaultValue={data.text} name="text" placeholder="Recommendation reason" className="textarea textarea-bordered textarea-lg w-full max--xs" ></textarea>

                            </div>
                        </div>
                        <button className="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02] w-full mt-5 md:mt-10 ">Add Recommendation</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateRequmendction;