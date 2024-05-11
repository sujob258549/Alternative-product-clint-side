import {  useContext } from "react";
import { CreatAuthContext } from "../Firebase/Authprovider";


const PrivateRoute = ({chidren}) => {
    const {user} = useContext(CreatAuthContext)
    if(user){
        return 
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;