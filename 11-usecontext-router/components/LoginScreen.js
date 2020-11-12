import React from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    // 1 obtener la referencia al context
    const { setUser } = useContext( UserContext )
    // 2 setUSer en el onclick

/*     {
        id: 1234,
        name: 'Fernando',
        email: 'usuario.usuario@gmail.com'
    } */


    return (
        <div>
            <h1>Login screen</h1>
            <hr/>

            <button 
                className="btn btn-primary"
                onClick={ ()=> setUser( {
                    id: 123,
                    name: 'Fernando'
                } ) }
            >
                Login
            </button>
        </div>
    )
}
