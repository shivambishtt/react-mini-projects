import React, { useState } from 'react'
import data from "../components/data.json"

function Accordion() {
    const [toggle, setToggle] = useState(false)

    return (
        <div className='accordionContainer'>
            <div >
                {data.faqs.map((obj, index) => {
                    return <div key={index} className='accordion'>
                        <h1>{obj.question}<span onClick={() => setToggle(!toggle)}>+</span></h1>
                        {toggle ? <h2 className='answer'> {obj.answer}</h2> : ""}



                    </div>
                })}
            </div>
        </div >
    )
}

export default Accordion
