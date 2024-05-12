import { Link, NavLink } from "react-router-dom";
import './style.css'
import { useContext, useEffect, useState } from "react";
import { CreatAuthContext } from "../assets/Firebase/Authprovider";
import { CgProfile } from "react-icons/cg";


const Header = () => {

    const { user, signout } = useContext(CreatAuthContext)

    const [checkeed, setchecked] = useState('light')
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', checkeed);
    }, [checkeed])

    const handelchange = e => {
        const data = e.target.checked;
        if (data) {
            setchecked("aqua")
        }
        else {
            setchecked('light')
        }
    }
    console.log(checkeed);
    const handelsingnout = () => {
        signout()
    }
    const manuber = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/allproduct'}>Query</NavLink>

        {
            user && (
                <>
                    {user && (
                        <>
                            <NavLink to="/addproduct">Add Queries</NavLink>
                            <NavLink to="/myquerys">My Queries</NavLink>
                        </>
                    )}
                </>
            )

        }


    </>
    return (
        <div className="container mx-auto py-5">
            <div className="navbar bg-base-100  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu navmanu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                manuber
                            }
                        </ul>
                    </div>
                    {/* <h2 className="kurali-font text-4xl font-bold">All <span className="text-[#3F73D3]">Disition</span></h2> */}
                    <img className="h-16 hidden md:block" src="https://i.ibb.co/p3Z6Tr4/altranatiove-removebg-preview.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            manuber
                        }
                    </ul>
                </div>
                <div className="navbar-end z-50">
                    <input onChange={handelchange} type="checkbox" className="toggle bg-[#16A34A] mr-2 border-2 border-[#16A34A]" />
                    {
                        user ?
                            <div className="flex">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img referrerPolicy="no-referrer" src={user?.photoURL ? user?.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                            {/* https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg */}
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li
                                            className=""><Link to={'/profile'} className="flex items-center text-xl font-semibold"><CgProfile className="mr-2"></CgProfile> Profile</Link>
                                        </li>

                                    </ul>
                                </div>
                                <button onClick={handelsingnout} className="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                                    href="#">
                                    Sign Out
                                </button>

                            </div>
                            :
                            <Link to={'/login'} className="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                                href="#">
                                Sign in
                            </Link>
                    }


                    {/* <Link to={'/signup'} className="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                        href="#">
                        Sign up 
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Header;