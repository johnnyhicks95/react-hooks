import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'
import '../02-useEffect/effects.css'

export const Memorize = () => {

    const { counter, increment } = useCounter(10)

    const [show, setshow] = useState(true)

    return (
        <div>
            <h1>Memorize</h1>
            <h1>Counter: < Small value={ counter } /></h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primeary ml-3"
                onClick={()=>{
                    setshow( !show )  // vuelve a dibujar el componente *tambien small
                }}
            >
                Show/hide { JSON.stringify(show) }
            </button>
        </div>
    )
}
