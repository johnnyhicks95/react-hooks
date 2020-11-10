import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: '', // description: igual <input name="description"
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (description.trim().length <= 1)
            return

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo( newTodo )
        reset()  // limpia el input a un estado inicial
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender... "
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}  // del useForm
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
