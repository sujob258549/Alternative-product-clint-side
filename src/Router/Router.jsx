import { createBrowserRouter } from "react-router-dom"
import Roots from "../Common/Roots"
import Home from "../assets/Home/Home";
import Login from "../assets/SignUpandLogine/Login";
import Signup from "../assets/SignUpandLogine/Signup";
import AddProduct from "../assets/AddQueryDetailquerySizquery/AddProduct";
import Profiel from "../Common/Profiel";
import PrivateRoute from "../assets/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
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
                element: <AddProduct></AddProduct>
            }
            ,
            {
                path: '/profile',
                element: <PrivateRoute><Profiel></Profiel></PrivateRoute>
            }
        ]

    }
])




export default router;