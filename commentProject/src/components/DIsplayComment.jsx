import React from 'react'

function DisplayComment({ comments}) {
    return (
        <div>
            {comments && comments.map((item, index) => {
                return (
                    <ul>
                        <li key={index}>{item}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default DisplayComment
