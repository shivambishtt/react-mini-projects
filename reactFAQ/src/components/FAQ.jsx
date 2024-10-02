import React from 'react'
import data from "./data.js"
import { useState } from 'react'

function FAQ() {
    const [showIndex, setShowIndex] = useState(-1)
    const handleIndex = (index) => {
        setShowIndex((prevIndex) => {
            if (prevIndex === index) {
                return -1
            }
            return index
        })
    }
    return (
        <div>
            <h1>FAQ's</h1>
            {data.map((faq, index) => {
                return <>
                    <div key={index} className='faq-data'>
                        <h2 className='faq-question'>{faq.question}</h2>
                        {showIndex === index ? <h4>{faq.answer}</h4> : ""}
                        <button onClick={() => handleIndex(index)}>{showIndex === index ? "-" : "+"}</button>

                    </div>
                </>
            })}
        </div>
    )
}

export default FAQ
