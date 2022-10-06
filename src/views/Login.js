import {useAuthContext} from "../contexts/authContext";
import {useState} from "react";
import {MAGIC_WORD} from "../consts/magicWord";

export default function Login() {

    const { login } = useAuthContext();
    /* vamos a crear une estado que va almacenar el valor del input */
    const [ magicWord, setMagicWord ] = useState( '' );

    const setInputChange = ( event ) => {
        setMagicWord( event.target.value );
    }

    const handleSubmit = ( event ) => {
        event.preventDefault();
        if ( magicWord === MAGIC_WORD ) {
            login();
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={magicWord} onChange={setInputChange} />
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    );

}
