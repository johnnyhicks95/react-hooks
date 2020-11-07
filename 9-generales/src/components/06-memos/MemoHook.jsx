import React from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'

export const MemoHook = () => {

    const { counter, increment } = useCounter(10)

    const [show, setshow] = useState(true)

    const memoProcesoPesado = useMemo( () => procesoPesado(counter), [ counter ] )

    return (
        <div>
            <h3>Memorize: useMemo </h3>
            <h1>Counter: <small>{ counter }</small> </h1>
            <hr/>

            {/* <p>{ procesoPesado(counter) }</p> */}
            <p>{memoProcesoPesado}</p>

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
