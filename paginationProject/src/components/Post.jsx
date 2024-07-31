import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'

function Post() {
  const [data, setData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?${pageNo}&limit=3`)
      .then((res) => {
        return res.json()
      })
      .then((oldData) => {
        setData((newData) => {
          return [...newData, ...oldData]
        })
      })
  }, [pageNo])

  return (
    <div className="container">

      <div className='image-container'>
        {data.map((item, index) => {
          return (
            <img className='image' src={item.download_url} alt="" />
          )
        })}
      </div>
      < Pagination setPageNo={setPageNo} pageNo={pageNo} />
    </div>
  );

}

export default Post
