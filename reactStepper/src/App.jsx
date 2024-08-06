import './App.css'
import Stepper from './components/Stepper'

function App() {
  const stepper = [
    {
      label: "Personal Info",
      content: <div>Personal Information Content</div>
    },
    {
      label: "Account Info",
      content: <div>Account Information Content</div>
    },
    {
      label: "Payment",
      content: <div>Payment Content</div>
    },
    {
      label: "Confirmation",
      content: <div>Confirmation Content</div>
    },
    {
      label: "Review",
      content: <div>Review Content</div>
    }
  ]
  return (
    <>
      <Stepper stepper={stepper} />
    </>
  )
}

export default App
