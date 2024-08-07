import React, { useState } from 'react'

function Tabs({ tabs = 4 }) {
    const [tabActive, setTabActive] = useState(0)

    return (
        <>
            <div className='tabs'>
                <div className='tabs-container'>
                    {tabs.map((tabName, index) => {
                        return <button onClick={() => setTabActive(index)} className={`${tabActive === index ? "active btn" : ""}`} key={index}>{tabName.label}</button>
                    })}
                </div>
                <div className="tabs-content">
                    {tabs[tabActive].content}
                </div>

            </div>
        </>
    )
}

export default Tabs
