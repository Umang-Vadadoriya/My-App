import React, { useReducer, useRef } from 'react'

const ToDoReduser = () => {

    const ref = useRef(null);

    const ini = { todos: [] }
    const [state, dispatch] = useReducer(reduser, ini);

    function AddEventHandler(event) {
        event.preventDefault();
        if (event.target[0].value != "")
            dispatch({ type: "A", payload: event.target[0].value });

        // Better UI / UX
        event.target[0].value = "";
        ref.current.focus();
    }

    function reduser(state, action) {
        switch (action.type) {
            case "A":
                return { todos: [...state.todos, { id: Date.now(), text: action.payload }] }
        }
    }


    return (
        <div className='container py-5'>
            <form onSubmit={AddEventHandler}>
                <input className='me-3 rounded' type='text' ref={ref}></input>
                <button className='btn-warning rounded' type='submit'>Submit</button>
            </form>

            <ul className='list-group list-group-flush'>
                {state.todos.map((todo) => (<li className='list-group-item' key={todo.id}>{todo.text}</li>))}
            </ul>
        </div>
    )
}

export default ToDoReduser