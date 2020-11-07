import React, { useEffect, useState } from 'react'

export const Message = () => {


    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const { x, y } = coords

    useEffect(() => {
        // console.log('componente montado');

        const mouseMove = (e) => {
            const coords = { x: e.y, y: e.y }  // tiene un scope al evento
            console.log(coors); // todavia esta ejecutando el listener del effect
            // console.log(' :D '); 
            setCoords( coords )
        }

        window.addEventListener('mousemove', mouseMove ) 

        return () => {
            // que ejecuta despues para cerrar el effect
            // cleanup
            // console.log('componente desmontado');

            window.removeEventListener( 'mousemove', mouseMove ) // quita el listener y no vuelve a crear
        }
    }, [])

    return (
        <div>
            <h3>Eres genial!</h3>
            <p>
                x: { x } y: { y }
            </p>
        </div>
    )
}
