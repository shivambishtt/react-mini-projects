import React, { useEffect, useState } from 'react'

function ProgressBar() {
    const [progressPercent, setProgressPercent] = useState(0)
    useEffect(() => {
        const runningStatus = setInterval(() => {
            console.log("Timer running");
            setProgressPercent((prevValue) => {
                if (prevValue >= 100) {
                    clearInterval(runningStatus)
                    setProgressPercent(0)
                }
                return Math.min(prevValue + 10, 100)
            })
        }, 250)
    }, [])

    return (
        <div className="container">
            <div style={{ transform: `translateX(${progressPercent - 100}%)` }} className="progress">
            </div>
        </div>
    )
}

export default ProgressBar
