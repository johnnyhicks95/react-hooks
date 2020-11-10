import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'

import './styles.css'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'

/* const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}] */

const init = () =>{
    /* un estado inicial para el useReducer 
    return  [{ 
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }] */

    // ***** para leer del localstorage
    // si todos regresa null, retorno un arreglo vacio
    return JSON.parse( localStorage.getItem('todos') )  || []
}


export const TodoApp = () => {

    // const [todos, dispatch] = useReducer(todoReducer, initialState, init)
    const [todos, dispatch] = useReducer(todoReducer, [ ], init)
    // init: computa un estado inicial
    // console.log(todos);

    // para GUARDAR EN EL LOCAL STORAGE - controla el estado
    useEffect(() => {
        // localstorage : solo guarda strings
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    // *****

    //*** DELETE TODO */
    const handleDelete = ( todoId ) =>{
        console.log(todoId);
        // crea la action 
        const action = {
            type: 'delete',
            payload: todoId
        }
        // dispatch
        dispatch( action)
    }
    /*    */

    const handleToggle = ( todoId ) =>{
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = ( newTodo ) => {
        
        dispatch( {
            type: 'add',
            payload: newTodo
        })
    }

    return (
        <div>
            <h1>Todo App ( {todos.length} ) </h1>
            <hr />

            <div className="row" >
                <div className="col-7" >
                    <TodoList 
                        todos={ todos }
                        handleDelete = { handleDelete }
                        handleToggle = { handleToggle }
                    />
                </div>

                <div className="col-5" >
                    <TodoAdd 
                        handleAddTodo = { handleAddTodo }
                    />
                </div>
            </div>

        </div>
    )
}
