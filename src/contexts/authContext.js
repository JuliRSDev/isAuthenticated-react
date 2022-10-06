/* Aqui vamos a tener toda la logica de gestion de la autenticación
del usuario dentro de nuestr app */

import {createContext, useCallback, useContext, useMemo, useState} from "react";
import PropTypes from 'prop-types';

/* Esto nos va a proporcionar es un objeto que tiene en su interior un componente llamado provider que será con la
  cual tenemos que rodear a todos los componentes que queremos que puedan consumir el valor del contexto */
export const AuthContext = createContext();

const MY_AUTH_APP = 'MY_AUTH_APP_1';

export default function AuthContextProvider( { children } ) {

    const [ isAuthenticated, setIsAuthenticated ] = useState( window.localStorage.getItem(MY_AUTH_APP) ?? false );

    const login = useCallback( function () {
        window.localStorage.setItem( MY_AUTH_APP, true );
        setIsAuthenticated( true );
    }, [] );

    const logout = useCallback( function () {
        window.localStorage.removeItem( MY_AUTH_APP );
        setIsAuthenticated( false );
    }, [] );

    const value = useMemo( () => (
        {
            login,
            logout,
            isAuthenticated
        }
    ), [ login, logout, isAuthenticated ] );

    return <AuthContext.Provider value={value}>
        { children }
    </AuthContext.Provider>

}

AuthContextProvider.propTypes = {
    children: PropTypes.object
}

export function useAuthContext() {
    return useContext( AuthContext );
}
