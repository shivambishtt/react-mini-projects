import React, { useState } from 'react'

function Stepper({ stepper = 5 }) {
    const [currentStep, setCurrentStep] = useState(0)
    console.log(currentStep);

    const handleContinue = () => {
        if (currentStep < stepper.length - 1) {
            setCurrentStep(currentStep + 1)
        }
    }
    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
        }
        console.log(currentStep);

    }

    return (
        <>
            <div className='stepper'>
                <div>
                    {stepper.map(({ label }, index) => {
                        return <div key={index} className='step-container'>
                            <div className={`step-number ${index <= currentStep ? "active" : ""}`}>
                                {index + 1}
                                {index < stepper.length - 1 ? <div className={`step-line ${index < currentStep ? "active" : ""}`}></div> : ""}
                            </div>
                            <div className="step-label">{label}</div>
                        </div>
                    })}
                </div>

                {/* Content Part begins here */}
                <div className="stepper-content">
                    {stepper[currentStep].content}
                </div>
                <div className="stepper-controls">
                    <button onClick={handleBack}>Back</button>
                    <button onClick={handleContinue}>Continue</button>
                </div>
            </div >
        </>
    )
}

export default Stepper
