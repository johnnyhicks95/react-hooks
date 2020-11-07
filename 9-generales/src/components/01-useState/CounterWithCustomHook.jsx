import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter( 100 )

    return (
        <>
            <h1>Counter with Hook: { state } </h1>
            <hr/>

            // por defecto se va a mandar el evento, por eso hay que pasar la funcion
            // en esa funcion tambien acepta parametros(o no)
            <button onClick={ ()=>increment( 2 ) } className="btn" >+ 1</button>
            <button onClick={ reset } className="btn" >Reset</button>
            <button onClick={ ()=>decrement( 2 ) } className="btn" >- 1</button>
        </>
    )
}
