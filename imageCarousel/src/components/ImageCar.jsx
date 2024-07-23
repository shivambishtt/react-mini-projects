import data from "../data.json"
import React, { useEffect, useState, useRef } from 'react'

export default function ImageCar() {
  const DATA_LENGTH = data.length
  const [index, setIndex] = useState(0);
  const ref = useRef(null)
  const handleRightClick = () => {
    setIndex((prevVal) => {
      if (prevVal == DATA_LENGTH - 1) {
        return 0
      }
      return prevVal + 1
    })

  }
  const handleLeftClick = () => {
    if (index == 0) {
      setIndex(DATA_LENGTH - 1)
    }
    else {
      setIndex(index - 1)
    }
  }
  useEffect(() => {
    ref.current = setInterval(() => {
      handleRightClick()
    }, 1000)
    return () => {
      clearInterval(ref.current)
    }
  }, [])

  return (

    <div onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => ref.current = setInterval(handleRightClick, 1000)}
      className='container'>
      <div onClick={handleLeftClick} className="left-btn">{"<"}</div>
      <img src={data[index].download_url} alt="" />
      <div onClick={handleRightClick} className="right-btn">{">"}</div>
    </div>
  )
}

