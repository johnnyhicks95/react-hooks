import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
// import '../02-useEffect/effects.css'
import './layout.css'

export const Layout = () => {

    const { counter, incremet } = useCounter( 1 )

    // const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    // cuando el url cambie se ejecutara useFetch
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)
    // console.log(state);
    // console.log(loading);
    
    // !!null: false ; !null: true
    // si hay data trae data[0] en array
    const { author, quote } = !!data && data[0] 
    // console.log(author, quote);

    const pTag = useRef()
    const [boxSize, setboxSize] = useState({})

    useLayoutEffect(() => {
        setboxSize.log(pTag.current.getBoundingClientRect());// mide la caja despues de un cambio
        /* return () => {
            cleanup
        }; */
    }, [quote])

    return (
        <div>
            <h1>Custom hooks</h1>
            <h1>Breaking bad quotes</h1>
            <hr/>

            
            <blockquote className="blockquote text-right" >
                <p 
                    className="mb-0"
                    ref={ pTag }
                >{ quote }</p>
                {/* <footer className="blockquote-footer" >John</footer> */}
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>


            <button
                className="btn btn-primary"
                onClick={ incremet }
            >
                Siguiente frase
            </button>

            
        </div>
    )
}
