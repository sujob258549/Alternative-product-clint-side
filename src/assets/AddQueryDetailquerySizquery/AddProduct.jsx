


const AddProduct = () => {

    // const {user} = useContext(CreatAuthContext)

    const handelSubmitCofi = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const brandName = e.target.brandName.value;
        const queeryTitle = e.target.queeryTitle.value;
        const photourl = e.target.photourl.value;
        const text_area = e.target.text_area.value;

        const torestSport = { name, brandName, queeryTitle, photourl, text_area }
        console.log(torestSport)

        // fetch('https://asea-ture-zone-10.vercel.app/torestplase', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(torestSport)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 icon: "success",
        //                 title: "Success...",
        //                 text: "user coffee create success",
        //                 footer: '<a href="/">You add  success</a>'
        //             });
        //             navigate('/');

        //         }
        //     })

    }
    return (
        <div>
            <div className="w-[90%] mx-auto">

                <div className="bg-[#F4F3F0] rounded-md mb-10 w-full md:w-[60%] lg:w-[50%] mx-auto p-5 md:p-10 mt-10">
                    <div className=" w-full md:w-[70%] mx-auto text-center pb-10 ">
                        <h1 className="text-3xl font-bold text-center text-[#374151] font-rancho">Add Query/product Page</h1>
                    </div>
                    <div >
                        <form onSubmit={handelSubmitCofi} className="">
                            <div className="form-control">
                                <div className="grid  grid-cols-1 md:gap-5 mt-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">	Product Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="	Product Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Brand name</span>
                                        </label>
                                        <input type="text" name="brandName" placeholder=" Brand name" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:gap-5 mt-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">	Query TItle </span>
                                        </label>
                                        <input type="text" name="queeryTitle" placeholder="Query TItle" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text" name="photourl" placeholder="	Product Image-URL" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <label htmlFor="">short description</label><br />
                                    <textarea className=" textarea h-32 mt-5 w-full" name="text_area" placeholder="short description"></textarea>

                                </div>
                            </div>
                            <button className="btn text-white text-2xl font-rancho btn-outline  mt-5 w-full text-center bg-red-500">Add Query</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;