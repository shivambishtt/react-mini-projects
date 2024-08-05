import React, { useEffect, useState } from 'react'
import DisplayData from './DisplayData'

function SearchBar() {
    const STATE = {
        LOADING: 'LOADING',
        ERROR: 'ERROR',
        SUCCESS: "SUCCESS"
    }
    const [inputValue, setInputValue] = useState("") //Rhis state is responsible for the input value 
    const [result, setResult] = useState([]) //This state will be responsible to show data on html
    const [status, setStatus] = useState(STATE.LOADING)

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const cache = useRef({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                setStatus(STATE.LOADING)
                console.log("API CALL");
                const API_REQ = await fetch(`https://dummyjson.com/products/search?q=${inputValue}&limit=10`)
                const API_DATA = await API_REQ.json()
                setStatus(STATE.SUCCESS)
                setResult(API_DATA.products)
            }
            catch (error) {
                setStatus(STATE.ERROR)
            }
        }
        const timerID = setTimeout(fetchData, 1000)
        return () => {
            clearTimeout(timerID)
        }
    }, [inputValue])


    return (
        <>
            <input type="text" value={inputValue} onChange={handleChange} />
            {status === STATE.LOADING && <div>...LOADING</div>}
            {status === STATE.ERROR && <div>Error Occured</div>}
            <DisplayData status={status} result={result} STATE={STATE} />

        </>
    )
}

export default SearchBar
