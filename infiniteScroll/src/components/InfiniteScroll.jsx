import React, { useEffect, useState } from 'react'
import Post from './Post'

function InfiniteScroll() {
    const [data, setData] = useState([])
    const [pageNo, setPageNo] = useState([1])

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
        <div className='container'>
            <Post data={data} setPageNo={setPageNo} />

        </div>
    )
}

export default InfiniteScroll
