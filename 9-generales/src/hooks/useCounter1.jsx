// import React from 'react'
import { useState } from "react"

// si no manda valor , por defecto se manda por parametro
export const useCounter = ( initialState= 10 ) => {

    const [ state, setState ] = useState( initialState )

    const increment = ( factor=1 ) => {
        setState( state + factor)
    }

    const decrement = ( factor=1 ) => {
        setState( state - factor)
    }

    const reset = () => {
        setState( initialState )
    }

    return {
        state,
        increment,
        decrement,
        reset
    }
}
