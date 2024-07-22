import React from 'react'
import { useState, useRef } from 'react'

function StarRating({ starCount = 5 }) {
    const ref = useRef()
    const [starValue, setStarValue] = useState()
    const [hoverValue, setHoverValue] = useState("")
    return (
        <div className='container'>
            {new Array(starCount).fill(0).map((value, index) => {
                return <span key={index}
                    ref={ref}
                    className={index < (starValue || hoverValue) ? "gold" : ""}
                    onMouseEnter={() => setHoverValue(index + 1)}
                    onMouseLeave={() => setHoverValue("")}
                    onClick={() => setStarValue(index + 1)}
                >&#9733;</span>
            })}
        </div>
    )
}

export default StarRating
