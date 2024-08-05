import React from 'react'

function DisplayData({ status, result, STATE }) {
    return (
        <>
            {status === STATE.SUCCESS && (
                <ul >
                    {result.map((product) => {
                        return <li key={product.id}>
                            {product.title}
                        </li>
                    })}
                </ul>
            )}
        </>
    )
}

export default DisplayData
