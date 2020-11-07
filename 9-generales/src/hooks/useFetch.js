import React, { useState, useEffect, useRef } from 'react'

export const useFetch = ( url ) => {

    // cuando no se ejecuta el set state y evitar fugas de memoria
    const isMounted = useRef(true) // mantiene la referencia cuando el componente esta montado

    const [ state, setState ] = useState({ 
        data: null,
        loading: true,
        error: null,
    })

    // para el ref
    useEffect ( () => {
        return () => {  // cuando se desmonte se cambia el valor
            isMounted.current = false
        }
    }, [] )
       
    useEffect( () => {
        setState({ data: null, loading: true, error: null })
        
        fetch( url )
        .then( resp => resp.json )
        .then( data => {
            // controla cuando el componente se desmonta
            if ( isMounted.current ){
                
                setState({
                    loading: false,
                    error: null,
                    data   
                })
            } else {
                console.log('no se llamó');
            }

          /*   setTimeout(() => {
                if ( isMounted.current ){
                    
                    setState({
                        loading: false,
                        error: null,
                        data   
                    })
                } else {
                    console.log('no se llamó');
                }
            }, 4000); */
        
        })

    }, [ url ]) // escucha cuando sucede un cambio en la url
}
