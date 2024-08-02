import React, { useEffect, useRef, useState } from 'react'

function Timer() {
    const [time, setTime] = useState({
        hours: "",
        minutes: "",
        seconds: "",
    })
    const [timerRunning, setTimerRunning] = useState(false)
    const timerRef = useRef(null)
    const handleChange = (e, field) => {
        const value = parseInt(e.target.value, 10) || 0;
        const timeCopy = { ...time }
        timeCopy[field] = value
        timeCopy.minutes += Math.floor(timeCopy.seconds / 60)
        timeCopy.seconds = timeCopy.seconds % 60
        timeCopy.hours += Math.floor(timeCopy.minutes / 60)
        timeCopy.minutes = timeCopy.minutes % 60
        setTime(timeCopy)

    }
    const handleStart = () => {
        setTimerRunning(!timerRunning)
    }
    const handleReset = () => {
        clearInterval(timerRef.current)
        setTimerRunning(false)
        setTime({
            hours: "",
            minutes: "",
            seconds: "",
        })

    }
    useEffect(() => {
        if (timerRunning) {
            if (time.hours.length === 0 && time.minutes.length === 0 && time.seconds.length === 0) {
                return
            }
            timerRef.current = setInterval(() => {
                setTime((prevTime) => {
                    const copy = { ...prevTime }
                    copy.seconds--
                    if (copy.seconds < 0) {
                        copy.minutes--
                        copy.seconds = 59
                    }
                    if (copy.minutes < 0) {
                        copy.hours--
                        copy.minutes = 59
                    }
                    if (copy.hours < 0) {
                        clearInterval(timerRef.current)
                        return { hours: "", minutes: "", seconds: "" }
                    }
                    return copy
                })
            }, 1000)
        }
        return () => {
            clearInterval(timerRef.current)
        }

    }, [timerRunning])
    return (
        <>
            <input disabled={timerRunning} value={time.hours} onChange={(e) => handleChange(e, "hours")} type="text" placeholder='HH' />
            <input disabled={timerRunning} value={time.minutes} onChange={(e) => handleChange(e, "minutes")} type="text" placeholder='MM' />
            <input disabled={timerRunning} value={time.seconds} onChange={(e) => handleChange(e, "seconds")} type="text" placeholder='SS' />


            <div>
                <button onClick={handleStart}>{timerRunning ? "Pause" : "Start"}</button>
                <button onClick={handleReset}>Reset</button>

            </div>
        </>
    )
}

export default Timer
