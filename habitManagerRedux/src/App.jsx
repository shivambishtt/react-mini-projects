import React from 'react'
import { Container, Typography } from "@mui/material"
import AddHabit from "./components/AddHabit.jsx"
import ShowHabit from './components/ShowHabit.jsx'
function App() {
  return (
    <div>
      <Container maxWidth="md">
        <Typography component="h1" variant='h3' align='center'>
          Habit Tracker
        </Typography>
        <AddHabit />
        <ShowHabit />
      </Container>
    </div>
  )
}

export default App
