import React, { useState } from 'react'
import DisplayComment from './DIsplayComment'

function AddComment() {
    const [comments, setComments] = useState([])
    const [inputValue, setInputValue] = useState("")
    const handleClick = () => {
        if (inputValue !== "") {
            setComments([...comments, inputValue])
            setInputValue("")
        }

    }
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    const deleteComment = (id) => {
        const updatedValue = comments.filter(comment => comment.id !== id);
        setComments(updatedValue)
    };
    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={handleClick}>Add Comment</button>
            {comments.length !== 0 ? <button onClick={() => { deleteComment([comments.length - 1].id) }}>Delete </button> : ""}
            <DisplayComment comments={comments} />
        </div>
    )
}

export default AddComment
