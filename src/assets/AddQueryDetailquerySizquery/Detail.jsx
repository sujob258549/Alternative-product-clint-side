import { useLoaderData } from "react-router-dom";


const Detail = () => {
    const detaildata = useLoaderData()
    console.log(detaildata);
    return (
        <div>
            <div className="container px-6 py-16 mx-auto text-center">

                <h1 className="kurali-font text-3xl md:text-5xl font-bold text-center md:pb-5">Detail Page</h1>
                <div className="flex justify-center mt-10">
                    <img className="rounded-xl" src={detaildata.photourl} alt="App illustration" />
                </div>
                <div className="max-w-lg mx-auto text-left py-10">
                    <h1 className="text-3xl font-semibold text-[#16A34A] kurali-font"> QueeryTitle :- {detaildata.queeryTitle}</h1>
                    <h1 className="text-3xl font-semibold py-3  text-gray-800 kurali-font">Product Name :- {detaildata.name}</h1>
                    <p className="text-xl font-semibold"> brandName :- {detaildata.brandName}</p>
                    <p className="text-xl font-semibold py-3 ">Publish Time & date :- {detaildata.userData.timeAndDate}</p>

                    <p className="mt-6 text-gray-500 dark:text-gray-600">{detaildata.text_area}</p>


                    <div className="flex gap-5 items-center pt-10 md:pt-10">
                        <div>
                            <img className="object-cover w-16 h-16 rounded-full ring ring-gray-300 dark:ring-gray-600" src={detaildata.userData.userPhotoUrl} alt="" />
                        </div>
                        <div>
                            <p className=" text-xl font-medium ">{detaildata.userData.userName}</p>
                            <p className=" text-xl font-medium">{detaildata.userData.userEmail}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Detail;