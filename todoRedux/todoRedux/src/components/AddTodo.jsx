import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { todoActions } from '../slice/todoSlice';

function AddTodo() {
    const [inputValue, setInputValue] = useState("")

    const dispatch = useDispatch()
    const todo = useSelector((state) => state.todo)

    const handleOnChange = (event) => {
        setInputValue(event.target.value)
    }
    const handleAddTodo = () => {
        dispatch(todoActions.addTodo(inputValue))
        setInputValue("")

    }
    const handleDeleteTodo = (todo) => {
        dispatch(todoActions.deleteTodo(todo))

    }

    // abhi humare saath ye problem aarahi hai ki jab me koi todo ko delete kar raha hu aur fir page refresh kar raha hu to by default kya hona chahiye ki wo todo humko dikhna nahi chaiye wo permantely delte hojata cahaiye aur hume dikhna nahi cahiye

    // toh ye functionality hum achieve kar sakte hain simply by using a single useEffect aur us useEffect me hum depenency array hoga todo hi aur simply hum us todo ko remove kar denge

    useEffect(() => {
        const deleteTodo = localStorage.removeItem("todo")
        if (deleteTodo && deleteTodo.length > 0) {
            dispatch(todoActions.deleteTodo(deleteTodo.todo))
        }
    }, [todo])

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todo"));
        if (savedTodos && savedTodos.length > 0) {
            savedTodos.forEach(todo => {
                dispatch(todoActions.addTodo(todo.todo));  // Add each saved todo to Redux
            });


        }
    }, [dispatch])

    useEffect(() => {
        if (todo.length > 0) {
            localStorage.setItem("todo", JSON.stringify(todo))
        }
    }, [todo])
    return (
        <div>
            <input
                onChange={handleOnChange}
                value={inputValue}
                type="text"
            /> <br /> <br />
            <button onClick={handleAddTodo}>Add Todo</button>

            {todo.map((todo, index) =>
                <li key={index}>
                    {todo.todo}
                    <button
                        onClick={() => handleDeleteTodo(todo.id)}>Delete Todo</button>
                </li>)
            }
        </div >
    )
}

export default AddTodo
