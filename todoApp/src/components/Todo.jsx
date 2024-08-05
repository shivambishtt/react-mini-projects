import React, { useState, useRef, useEffect } from 'react'
import TodoItem from './TodoItem'

function Todo() {
    const [task, setTask] = useState("")
    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todo") || []))

    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const addTodo = () => {
        const newTodos = todo.map((todo) => {
            return { ...todo }
        })
        newTodos.push({ todo: task, isCompleted: false, id: new Date().getMilliseconds() })
        setTodo(newTodos)
        setTask("")
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addTodo()
        }
    }

    const deleteTodo = (id) => {
        const filteredTodo = todo.filter((todo) => {
            return todo.id !== id
        })
        setTodo(filteredTodo)
    }
    const handleComplete = (id) => {
        const newTodos = todo.map((todo) => {
            return { ...todo }
        })
        newTodos.forEach((todo) => {
            if (todo.id == id) {
                todo.isCompleted = !todo.isCompleted
            }
            setTodo(newTodos)
        })
    }

    // function async(a, b) {
    //     return a + b
    // }
    // async(1 + 2)

    //Function declaration
    const handleEdit = (id, editedValue) => {
        const newTodos = todo.map((todo) => {
            if (id === todo.id) {
                return { ...todo, todo: editedValue }
            }
            else {
                return todo;
            }
        });
        setTodo(newTodos)
    }
    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo))
    }, [todo])
    return (
        <>
            <input onKeyDown={handleKeyDown} value={task} onChange={handleChange} type="text" />
            <button onClick={addTodo}>Add Task</button>

            {todo.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} handleEdit={handleEdit} handleComplete={handleComplete} deleteTodo={deleteTodo} />
            })}
        </>
    )
}

export default Todo
