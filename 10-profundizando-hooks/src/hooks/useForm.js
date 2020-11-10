import { useState } from 'react'

// initialstate: solo acepta los valores que se reciben
export const useForm = ( initialState={} ) => {

    const [values, setValues] = useState(initialState)

    const reset = () => { // resetea el formulario
        setValues(initialState)
    }

    const handleInputChange = ({ target }) => {
        /*console.log(e.target.name); */

        setValues({
            // recibe todos los parametros del evento y del estado
            ...values,
            [target.name]: target.value
        })
    }

    /*return (
        <div>
            
        </div>
    ) */
    // que valores quiero regresar 
    return [ values, handleInputChange, reset ]
}
