import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

    // const [ counter, setCounter ] = useState(10)
    // --- usando desctructuring en un objeto del state
    // const [ counter, setCounter ] = useState({
    // const [ { counter1, counter2 }, setCounter ] = useState({
    //     counter1: 10,
    //     counter2: 20
    // })
    // console.log(counter );

    // usando spread para destructurar solo las variables necesarias
    cosnt [ state, setState ] = useState({
        counter1: 10,
        counter1: 20,
        counter1: 30,
        counter1: 40,
    })
    // desctruturing de los valores del state
    const { counter1, counter2 } = state
    

    return (
        <>
            {/* <h1>Counter {counter}</h1>*/}
            <h1>Counter1 { counter1 }</h1>
            <h1>Counter2 { counter2 }</h1>

            <hr/>

            <button 
                className="btn btn-primary"
                onClick={ () => {
                // () => { setCounter( counter + 1 ) }
                    setState({
                        ...state,
                        counter1: counter + 1
                    })

                } }     
            >
                + 1
            </button>
        </>
    )
}
