import {useAuthContext} from "../contexts/authContext";
import {useEffect} from "react";
import { Navigate } from "react-router-dom";
import {HOME} from "../config/routes/paths";

function Logout() {

    const { logout } = useAuthContext();

    useEffect( () => {
        logout();
    } );

    return <Navigate to={ HOME } />;

}

export default Logout;
