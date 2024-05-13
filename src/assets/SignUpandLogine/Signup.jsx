import { useContext, useState } from "react";
import { FaAddressBook, FaEye, FaEyeSlash } from "react-icons/fa6";
import { MdInsertPhoto } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { CreatAuthContext } from "../Firebase/Authprovider";
import Swal from "sweetalert2";
 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
    const { creatUser, upadateprofile, user, setuser } = useContext(CreatAuthContext)
    const navigete = useNavigate()
    const [shoandHideIcone, setShoandHideIcone] = useState(false);
    const handelRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photourl = e.target.photourl.value;
        const email = e.target.email.value;
        const password = e.target.passwird.value;
        const conframpassword = e.target.conframpassword.value;
        const users = { name, photourl, email, password, conframpassword };
        console.log(users);
        if (password.length < 6) {
            toast.error('password enter 6 carector or  a longer!! ');
            return;
        }
        if (password !== conframpassword) {
            return toast.error('password and confam password No carect!!')
        }
        else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
            toast.error('Please use a stronger password.');
            return;
        }
        creatUser(email, password)
            .then(result => {
                upadateprofile(name, photourl)
                setuser({ ...user, photoURL: photourl, displayName: name })
                console.log(result)
                Swal.fire({
                    icon: "success",
                    title: "Success...",
                    text: "Creat a User!",
                    footer: '<a href="#">Creat User?</a>'
                });
                navigete('/login')
            })
            .catch(error => {
                console.error(error.message)
            })

    }
    return (
        <div>
            <section className="bg-cover bg-center bg-no-repeat" style={{ background: "url('https://t3.ftcdn.net/jpg/01/22/71/96/360_F_122719641_V0yw2cAOrfxsON3HeWi2Sf4iVxhv27QO.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div data-aos="fade-down" className="container  items-center justify-center min-h-screen px-6 mx-auto">
                    <div className="min-h-screen  py-6  -col justify-center sm:py-12">
                        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                            </div>
                            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

                                <form onSubmit={handelRegister} className="w-full max-w-md">
                                    <div className="flex justify-center mx-auto">
                                        <FaAddressBook className="text-4xl md:text-7xl"></FaAddressBook>
                                    </div>

                                    <div className="flex items-center justify-center mt-6">
                                        <Link to={'/login'} href="#" className="w-1/3 pb-4 font-medium text-center capitalize border-b dark:border-gray-400 ">
                                            sign in
                                        </Link>

                                        <a href="#" className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 ">
                                            sign up
                                        </a>
                                    </div>

                                    <div className="relative flex items-center mt-8">
                                        <span className="absolute">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </span>

                                        <input name="name" type="text" className="block w-full py-3  bg-white border rounded-lg px-11   dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
                                    </div>
                                    <div className="relative flex items-center mt-8">
                                        <span className="absolute">
                                            <MdInsertPhoto className="ml-3 text-2xl"></MdInsertPhoto >
                                        </span>

                                        <input name="photourl" type="text" className="block w-full py-3  bg-white border rounded-lg px-11   dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter Your Photo Url" />
                                    </div>

                                    {/* <label for="dropzone-file" className=" items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>

                <h2 className="mx-3 text-gray-400">Profile Photo</h2>

                <input id="dropzone-file" type="text" className="hidden" />
            </label> */}

                                    <div className="relative flex items-center mt-6">
                                        <span className="absolute">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </span>

                                        <input name="email" type="email" className="block w-full py-3  bg-white border rounded-lg px-11   dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                                    </div>

                                    <div className="relative flex items-center mt-4">
                                        <span className="absolute">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </span>

                                        <input name="passwird" className="block w-full px-10 py-3  bg-white border rounded-lg   dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" type={shoandHideIcone ? 'text' : 'password'} />
                                        <div className="absolute right-5 bottom-4" onClick={() => setShoandHideIcone(!shoandHideIcone)}>
                                            {
                                                shoandHideIcone ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>
                                            }
                                        </div>
                                    </div>

                                    <div className="relative flex items-center mt-4">
                                        <span className="absolute">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </span>

                                        <input name="conframpassword" type={shoandHideIcone ? 'text' : "password"} className="block w-full px-10 py-3  bg-white border rounded-lg   dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Confirm Password" />

                                        <div className="absolute  right-5" onClick={() => setShoandHideIcone(!shoandHideIcone)}>
                                            {
                                                shoandHideIcone ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>
                                            }
                                        </div>

                                    </div>

                                    <div className="mt-6">
                                        <button className="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02] w-full">
                                            Sign Up
                                        </button>

                                        <div className="mt-6 text-center ">
                                            <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                                Already have an account?
                                            </a>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Signup;