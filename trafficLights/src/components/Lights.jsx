import React from 'react'


function Lights({ color, isActive }) {
    return (
        <div style={{
            backgroundColor: `${isActive ? color : "grey"}`
        }} className='light' >

        </div>
    )
}

export default Lights
