import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CreatAuthContext } from "../Firebase/Authprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const Login = () => {
    const { logineWithGoogle, signInUser } = useContext(CreatAuthContext);
    const [shoandHideIcone, setShoandHideIcone] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state || '/';
    const handelgoogleButton = () => {
        logineWithGoogle()
            .then(result => {
                console.log(result);
                navigate(from)
            })
            .catch(error => {
                console.error(error.message)
            })
    }

  
    const handelSubmitLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email ,password)
        .then(result => {
            console.log(result);
            navigate(from)
        })
        .catch(error => {
            console.log(error.message);
            toast.error('Alrady login')
        })
        console.log(email, password);
    }
    return (
        <div className="py-16">
            <Helmet>
                <title>Altranative product || login</title>
            </Helmet>
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')" }}>
                </div>

                <div className="w-full p-8 lg:w-1/2">

                    <h2 className="text-2xl  text-gray-700 text-center font-bold md:text-4xl palayfire-font">Login</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                    <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                        <div className="px-4 py-3">
                            <svg className="h-6 w-6" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                            </svg>
                        </div>
                        <button onClick={handelgoogleButton} className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</button>
                    </a>

                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <form className="card-body" onSubmit={handelSubmitLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Email address</span>
                            </label>
                            <input type="email" placeholder="Enter your email address" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Password</span>
                            </label>
                            <input type={shoandHideIcone ? 'text' : 'password'} name="password" placeholder="Enter your password" className="input input-bordered" required />
                            <div className="absolute right-5 bottom-4" onClick={() => setShoandHideIcone(!shoandHideIcone)}>
                                {
                                    shoandHideIcone ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>
                                }
                            </div>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>

                        {<p className="text-xl font-medium text-green-500 text-center "></p>}
                        <div className="form-control">
                            <button className="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02] ">Login</button>
                        </div>
                    </form>
                    <div className="mt-4  items-center justify-between">
                        {/* <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link to={'/signup'}  href="#" className="text-xs text-gray-500 uppercase">sign up</Link>
                        <span className="border-b w-1/5 md:w-1/4"></span> */}
                        <div className="flex items-center justify-center mt-6">
                            <Link title="Login" to={'/login'} href="#" className="w-1/3 dark:text-gray-300 pb-4 font-medium text-center  capitalize border-b-2  dark:border-blue-400 border-blue-500 ">
                                sign in
                            </Link>

                            <Link to={'/signup'} href="#" className="w-1/3  pb-4 font-medium text-center capitalize border-b-2   ">
                                sign up
                            </Link>
                        </div>
                    </div>
                </div >
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;