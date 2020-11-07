import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const { counter, incremet } = useCounter( 1 )

    // const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    // cuando el url cambie se ejecutara useFetch
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)
    // console.log(state);
    // console.log(loading);
    console.log(data);
    
    // !!null: false ; !null: true
    // si hay data trae data[0] en array
    const { author, quote } = !!data && data[0] 
    console.log(author, quote);

    return (
        <div>
            <h1>Custom hooks</h1>
            <h1>Breaking bad quotes</h1>
            <hr/>

            {
                loading
                ? (
                    <div
                        className="alert alert-info text-center"
                    >Loading...</div>
                )
                : (
                    <blockquote className="blockquote text-right" >
                        <p className="mb-0" >Hola mundo</p>
                        <footer className="blockquote-footer" >John</footer>
                    </blockquote>
                )
            }

            <button
                className="btn btn-primary"
                onClick={ incremet }
            >
                Siguiente frase
            </button>

            
        </div>
    )
}
