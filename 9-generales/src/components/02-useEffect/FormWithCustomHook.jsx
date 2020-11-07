import React, { useEffect } from 'react'
import './effects.css'
import { useForm } from '../../hooks/useForm'

export const FormWithCustomHook = () => {

    // un formulario con estado
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formValues

    // hooks
    useEffect(() => {
        /* effect
        return () => {
            cleanup
        } */
        console.log('email cambió');
    }, [ email ])

    // -- Funciones
    const handleSubmit = ( e ) =>{
        e.preventDefault()
        console.log( formValues );

    }


    return (
        <form
        onSubmit={ handleSubmit }
        >
            <h1>Form with custom hook</h1>
            // permite ejecutar un efecto cuando algo sucede
            <hr />

            <div>
                <input
                    type="text"
                    name="name" // name": es el identificador del estado
                    className="form-control"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <input
                    type="text"
                    name="email" // email": es el identificador del estado
                    className="form-control"
                    placeholder="email@gmail.com"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            
            <div>
                <input
                    type="text"
                    name="password" // email": es el identificador del estado
                    className="form-control"
                    placeholder="*******"
                    value={ password }
                    onChange={handleInputChange}
                />
            </div>

            <button  
                type="submit"
                className="btn btn-primary"
            >
                Guardar
            </button>
            
        </form>
    )
}
