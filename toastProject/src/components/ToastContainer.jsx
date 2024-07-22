import React, { useRef, useState } from 'react'

function ToastContainer() {
    const [toast, setToast] = useState([])
    const timeRef = useRef({})
    const handleClose = (id) => {
        clearTimeout(() => {
            timeRef.current[id]
            delete timeRef.current[id]
        })
        const filteredArray = toast.filter((elem) => {
            return elem.id !== id
        })
        setToast(filteredArray)
    }
    const handleOpen = (message, type) => {
        const id = new Date().getTime()
        const newToast = [...toast, { id, message, type }]
        setToast(newToast)

        timeRef.current[id] = setTimeout(() => {
            handleClose(id)
        }, 5000);
    }

    return (
        <div className='container'>
            <div className="toast-container">
                {toast.map(({ id, message, type }) => {
                    return < div key={id}
                        className={`toast ${type}`}>{message}
                        < span onClick={() => {
                            handleClose(id)
                        }}> X</span>
                    </div>
                })}
            </div >
            <div className="button-container">
                <button onClick={() => handleOpen("Success Message", "Success")}>Success Toast</button>
                <button onClick={() => handleOpen("Info Message", "Info")}>Info Toast</button>
                <button onClick={() => handleOpen("Warning Message", "Warning")}>Warning Toast</button>
                <button onClick={() => handleOpen("Error Message", "Error")}>Error Toast</button>
            </div>
        </div >
    )
}

export default ToastContainer
