import React, { useEffect, useState } from 'react'
import Lights from './Lights.jsx'


function Traffic({ lights = ["red", "yellow", "green"] }) {
    const [lightActive, setLightActive] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLightActive(prevIndex => prevIndex + 1)
        }, 2000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return (
        <div>
            {lights.map((color, index) => {
                return <Lights isActive={lightActive === index} color={color} />
            })}
        </div>
    )
}

export default Traffic
