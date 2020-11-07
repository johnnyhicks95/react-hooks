// import React from 'react'
import { useState } from "react"

// si no manda valor , por defecto se manda por parametro
export const useCounter = ( initialState= 10 ) => {

    const [ counter, setCounter ] = useState( initialState )

    const increment = (  ) => {
        setCounter( state + 1)
    }

    const decrement = ( ) => {
        setCounter( state - 1)
    }

    const reset = () => {
        setCounter( initialState )
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
