import { createBrowserRouter } from "react-router-dom"
import Roots from "../Common/Roots"
import Home from "../assets/Home/Home";
import Login from "../assets/SignUpandLogine/Login";
import Signup from "../assets/SignUpandLogine/Signup";
import AddProduct from "../assets/AddQueryDetailquerySizquery/AddProduct";
import Profiel from "../Common/Profiel";
import PrivateRoute from "../assets/PrivateRoute/PrivateRoute";
import Allproduct from "../assets/AddQueryDetailquerySizquery/Allproduct";
import MyQuerys from "../assets/AddQueryDetailquerySizquery/MyQuerys";
import Detail from "../assets/AddQueryDetailquerySizquery/Detail";
import Update from "../assets/AddQueryDetailquerySizquery/Update";
import Recommend from "../assets/AddQueryDetailquerySizquery/Recommend";
import Myreqummendection from "../assets/AddQueryDetailquerySizquery/Myreqummendection";
import UpdateRequmendction from "../assets/AddQueryDetailquerySizquery/UpdateRequmendction ";
import Errorpage from "../assets/Errorpage/Errorpage";
import MeRecomndaction from "../assets/AddQueryDetailquerySizquery/MeRecomndaction";
import DetailMeRecomended from "../assets/AddQueryDetailquerySizquery/DetailMeRecomended";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
            ,
            {
                path: '/signup',
                element: <Signup></Signup>
            }
            ,
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            }
            ,
            {
                path: '/myquerys/:id',
                element: <Detail></Detail>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_BACEND_URL}/product/${params.id}`)
            }
            ,
            {
                path: '/allproduct',
                element: <Allproduct></Allproduct>
            }
            ,
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_BACEND_URL}/product/${params.id}`)

            }
            ,
            {
                path: '/myrequmentaction',
                element: <PrivateRoute> <Myreqummendection></Myreqummendection></PrivateRoute>

            }
            ,
            {
                path: '/detail-recomented/:id',
                element: <Recommend></Recommend>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_BACEND_URL}/product/${params.id}`)

            },
            {
                path: '/updaterecomendection/:id',
                element: <PrivateRoute><UpdateRequmendction></UpdateRequmendction></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_BACEND_URL}/recommendation/${params.id}`)

            }
            ,
            {
                path: '/profile',
                element: <PrivateRoute><Profiel></Profiel></PrivateRoute>
            }
            ,
            {
                path: '/requmentactionme',
                element: <PrivateRoute><MeRecomndaction></MeRecomndaction></PrivateRoute>,
                loader: () => fetch(`${import.meta.env.VITE_BACEND_URL}/recommendationme`)
            },
            {
                path: '/recomendeddatail/:id',
                element: <PrivateRoute><DetailMeRecomended></DetailMeRecomended></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_BACEND_URL}/recommendation/${params.id}`)
            }
            ,
            {
                path: '/myquerys',
                element: <PrivateRoute><MyQuerys></MyQuerys></PrivateRoute>

            }
        ]

    }
])




export default router;