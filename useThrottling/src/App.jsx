import React, { useEffect, useState } from 'react'
import useThrottle from './components/useThrottle.js'

function App() {
  const [top, setTop] = useState(0)
  const throttledValue = useThrottle(top, 1000)

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY)
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <>
      <div style={{ height: "500rem" }}>
        <div style={{ position: "fixed", top: "0rem" }} >
          <h1>Throttling in action</h1>
          <hr />
          <h2>Normal:{top}</h2>
          <hr />
          <h2>Throttled:{throttledValue}</h2>
        </div>
      </div>
    </>
  )
}

export default App
