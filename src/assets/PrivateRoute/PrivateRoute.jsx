import {  useContext } from "react";
import { CreatAuthContext } from "../Firebase/Authprovider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user} = useContext(CreatAuthContext)
    if(user){
        return children
    }
    return <Navigate to={'/login'} state={location.pathname || '/'}></Navigate>
       
};

export default PrivateRoute;