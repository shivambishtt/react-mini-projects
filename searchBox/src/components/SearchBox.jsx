import React, { useRef, useState, useEffect } from "react";

function SearchBox() {
    const ref = useRef()
    const [data, setData] = useState([
        { id: 1, name: "shivam", email: "rajshivam2745@gmail.com" },
        { id: 2, name: "tanvi", email: "tanvisaini16@gmail.com" }
    ])
    const [searchResult, setSearchResult] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    const handleSearch = () => {
        const term = ref.current.value
        setSearchTerm(term)
        const result = data.find((user) => user.name == term || user.email == term)
        setSearchResult(result)
    }
    useEffect(() => {
        ref.current.focus()
    }, [])
    return (
        <>
            <input type="search" ref={ref} placeholder="Search by username or email" />
            <button onClick={handleSearch}>Search</button>
            {searchTerm && (
                <div>
                    {searchResult ? (
                        <div style={{ marginTop: '10px', padding: '10px', border: '1px solid black' }}>
                            <div>ID: {searchResult.id}</div>
                            <div>Name: {searchResult.name}</div>
                            <div>Email: {searchResult.email}</div>
                        </div>
                    ) : (
                        <div style={{ marginTop: '10px' }}>No user found</div>
                    )}
                </div>
            )}
        </>
    )


}
export default SearchBox
