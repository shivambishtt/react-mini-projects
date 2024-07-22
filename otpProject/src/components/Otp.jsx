import React, { useEffect, useState } from 'react'

function Otp({ otpLength = 6 }) {
    const ref = React.useRef([])
    const [otpBoxes, setOtpBoxes] = useState(new Array(otpLength).fill(""))
    const handleKeyDown = (event, index) => {
        const key = event.key
        const copyOtpFields = [...otpBoxes]

        if (key === "Backspace") {
            copyOtpFields[index] = ""
            setOtpBoxes(copyOtpFields)
            if (otpBoxes[index] > 0) {
                ref.current[index - 1].focus()

            }
            return
        }

        if (key === "ArrowRight") {
            if (index + 1 < otpBoxes.length) {
                ref.current[index + 1].focus()
            }
        }

        if (key === "ArrowLeft") {
            if (index > 0) {
                ref.current[index - 1].focus()
            }
        }

        if (isNaN(key)) {
            return;
        }

        copyOtpFields[index] = key
        setOtpBoxes(copyOtpFields)

        if (index + 1 < otpLength) {
            ref.current[index + 1].focus()
        }

    }

    useEffect(() => {
        return ref.current["0"].focus()
    }, [])

    return (
        < div className='container' >
            {
                otpBoxes.map((value, index) => {
                    return <input key={index}
                        type="text"
                        value={value}
                        ref={(currentInput) => (ref.current[index] = currentInput)}
                        onKeyDown={(event) => handleKeyDown(event, index)}

                    />
                })}
        </div >
    )
}

export default Otp
