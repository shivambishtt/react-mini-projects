import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addHabit } from './store/habitSlice.js'

// dispatch se hum apne actions ko bhejte hain jese ki hum addHabit bhej rahe hain abhi
// dispatch hum jab bhi karte hain toh hum jo hai apna payload ya kuch actions hi to bhejte hain
function AddHabit() {
    const [name, setName] = useState("")
    const [frequency, setFrequency] = useState("daily")
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault()
        if (name.trim()) {
            dispatch(addHabit({
                name,
                frequency,

            }))
            setName("")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2
                }}>
                    <TextField
                        label="Habit Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder='Enter Habit name'
                        fullWidth
                    />
                    <FormControl fullWidth>
                        <InputLabel>Frequency</InputLabel>
                        <Select
                            label="Frequency"
                            value={frequency}
                            onChange={(event) => setFrequency(event.target.value)} >
                            <MenuItem value="daily">Daily</MenuItem>
                            <MenuItem value="weekly">Weekly</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type='submit' variant="contained" color="primary">Add Habit</Button>
                </Box>
            </form>
        </div>
    )
}

export default AddHabit
