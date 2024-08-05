import React, { useState } from 'react'

function TodoItem({ id, todo, handleEdit, handleComplete, deleteTodo }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedValue, setEditedValue] = useState(todo.todo)
    return (
        <div>
            <div className="todoDetails" key={id}>
                {todo.isCompleted ? (
                    <h2
                        style={{ textDecoration: "line-through" }}>{todo.todo}</h2>
                ) :
                    isEditing ? <input type='text'
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key == "Enter") {
                                return handleEdit(todo.id, editedValue), setIsEditing(false)
                            }

                        }}
                    /> : (
                        < h2 > {todo.todo}</h2>
                    )
                }
                {!isEditing && todo.isCompleted== false ? <button onClick={() => setIsEditing(true)}>✏</button> : ""}

                <button onClick={() => handleComplete(todo.id)} style={{ margin: "0.5rem" }}>✔</button>
                <button style={{ marginRight: "2rem" }} onClick={() => deleteTodo(todo.id)}>❌</button>
            </div>
        </div >
    )
}

export default TodoItem

// function async(a, b) {
//     return a + b
// }
// async(1 + 2)