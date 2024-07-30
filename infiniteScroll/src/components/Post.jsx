import React, { useEffect } from 'react'

function Post({ data, setPageNo }) {
    useEffect(() => {
        const observer = new IntersectionObserver((param) => {
            console.log(param);
            if (param[0].isIntersecting) {
                // observer.unobserve(lastImage)
                setPageNo((pageNo) => {
                    return pageNo + 1
                })
            }
        });

        const lastImage = document.querySelector(".last-image:last-child")
        if (!lastImage) {
            return;
        }
        observer.observe(lastImage)
    }, [data])
    return (
        <div >
            {data.map((item) => {
                return <img className='last-image' key={item.id} src={item.download_url} alt="" />
            })}
        </div>
    )
}

export default Post
