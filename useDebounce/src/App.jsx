import React, { useState } from 'react'
import useDebounce from './components/useDebounce.js'

function App() {
  const [search, setSearch] = useState("")
  const debounceValue = useDebounce(search, 1000)
  return (
    <div
      className='main'
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "slategray"
      }}>

      <input
        type="text"
        onChange={(event) => setSearch(event.target.value)}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,50%)",
          position: "absolute",
          fontSize: "2vw"
        }} />

      <h2>Normal Value: {search}</h2>
      <hr />
      <h2>Debounced Value:{debounceValue}</h2>
    </div>
  )
}

export default App
