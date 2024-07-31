import React from 'react'

function Pagination({ pageNo, setPageNo }) {
  const prevThreeArr = Array.from({ length: 3 }, (_, index) => pageNo - 1 - index)
    .filter((value) => {
      return value > 0
    }).reverse()
  //   5-1 -0 = 4
  //   5-1 -1 = 3
  //   5-1 -2 = 2
  console.log(prevThreeArr);

  const nextFourArr = Array.from({ length: 4 }, (_, index) => pageNo + index)
  // 5 +0 =  5
  // 5 +1 =  6
  // 5 +2 =  7
  // 5 +3 =  8
  console.log(nextFourArr)
  const paginationArray = [...prevThreeArr, ...nextFourArr]
  const handlePrevious = () => {
    setPageNo(pageNo - 1)
  }
  const handleNext = () => {
    setPageNo(pageNo + 1)
  }
  return (
    <div className='btn-container'>
      {pageNo > 1 ? <div onClick={handlePrevious} className="btn">
        {"<"}
      </div> : ""}

      {paginationArray.map((value) => {
        return <div onClick={() => setPageNo(value)} className={pageNo == value ? `btn active` : `btn`}  >
          {value}
        </div>
      })}


      <div onClick={handleNext} className="btn">
        {">"}
      </div>
    </div >
  )
}

export default Pagination
