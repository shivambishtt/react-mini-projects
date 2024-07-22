import { useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'


function App() {
  const [showBar, setShowBar] = useState(false)
  return (
    <>
      {showBar ? <ProgressBar /> : "Bar not found"}
      <button onClick={() => setShowBar(!showBar)}>Toggle</button>
    </>
  )
}

export default App
