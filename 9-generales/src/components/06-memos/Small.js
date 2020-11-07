import React, { memo } from 'react'

// memo: solo se dispar asi las properties cambia
export const Small =  memo(  ( { value } ) => { 
    console.log("desde small, valor cambió");
    return (
        <small> 
         { value }   
        </small>
    )
})
