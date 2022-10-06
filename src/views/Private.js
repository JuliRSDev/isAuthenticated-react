import {Link} from "react-router-dom";
import {LOGOUT} from "../config/routes/paths";

export default function Private() {

    return (
        <div>
            <h1>Mi ruta privada</h1>
            <Link to={LOGOUT}>Cerrar Sesión</Link>
        </div>
    );

}
