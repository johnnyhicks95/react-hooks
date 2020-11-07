import React from 'react'
import './effects.css'
import { Message } from './Message'

export const SimpleForm = () => {

    // un formulario con estado
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState

    // no importa cual sea el cambio se va a volver a ejecutar este efecto
    useEffect(() => {
        // console.log('hey!');


    }, []) // [] : hace que se dispare una vez  cuando se carga e lcomponente  

    // segundo efecto: escucha todo el formulario
    useEffect(() => {
        // console.log('formState cambio');
    }, [formState])    // ejecutara cuando se haga un cambio en formstate

    // tercer efecto: solo para cuando cambie el email
    useEffect(() => {
        // console.log('email cambio');

    }, [email])

    // -- Funciones
    // (e) : desestructuro el target
    const handleInputChange = ({ target }) => {
        /*console.log(e.target.name); 
        console.log(e.target.value); */
        console.log(target.name);

        setFormState({
            ...formState,
            [target.name]: target.value

        })
    }


    return (
        <>
            <h1>useEffect</h1>
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
            { (name === '123') && <Message />}
        </>
    )
}
