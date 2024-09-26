import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import CheckCircle from "@mui/icons-material/CheckCircle"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from '@mui/icons-material/Edit';
import { removeHabit, toggleHabit, editHabit } from './store/habitSlice'

function ShowHabit() {
    const habits = useSelector((state) => state.habit)
    const today = new Date().toISOString().split("T")[0]
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(null)
    const [newHabitName, setNewHabitName] = useState("")


    // when we are completing the task we want to add that our streaks

    const handleEditButton = (habit) => {
        setIsEditing(habit.id) //is habit id ko me edit kara chahta hu
        setNewHabitName(habit.name)
    }

    const handleSaveButton = (habitId) => {
        dispatch(editHabit({
            id: habitId,
            newName: newHabitName
        }))
        setIsEditing(null)
    }

    const getStreaks = (habit) => {
        let streak = 0
        const currentDate = new Date()

        while (true) {
            const dateString = currentDate.toISOString().split("T")[0] //YYYY MM DD
            if (habit.completedDate.includes(dateString)) {
                streak++
                currentDate.setDate(currentDate.getDate() - 1)
            }
            else {
                break
            }
        }
        return streak
    }

    return (
        <div>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 4
            }}>

                {habits.map((habit) => {
                    return <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
                        <Grid container alignItems="center" >
                            <Grid xs={12} sm={6} >
                                {isEditing === habit.id ?
                                    <TextField
                                        value={newHabitName}
                                        onChange={(event) => setNewHabitName(event.target.value)}
                                        variant="outlined"
                                    />
                                    :
                                    <>
                                        <Typography
                                            variant='h6'>
                                            {habit.name}
                                        </Typography    >
                                        <Typography variant='body2' color='text.secondary'>
                                            {habit.frequency}
                                        </Typography>
                                    </>
                                }

                            </Grid>
                            <Grid xs={12} sm={6}>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "flex-end",
                                    gap: 1,
                                    mt: -2,
                                    ml: 8
                                }}>
                                    <Button
                                        variant='outlined'
                                        color={habit.completedDate.includes(today) ? "success" : "primary"}
                                        startIcon={<CheckCircle />}
                                        onClick={() => dispatch(toggleHabit(
                                            {
                                                id: habit.id,
                                                date: today
                                            }))}
                                    >{habit.completedDate.includes(today) ? "Completed" : "Mark Completed"}
                                    </Button>

                                    <Button
                                        onClick={() => dispatch(removeHabit({
                                            id: habit.id
                                        }))}
                                        variant='outlined'
                                        color="error"
                                        startIcon={<DeleteIcon />}
                                    >

                                        Remove
                                    </Button>

                                    {isEditing === habit.id ?
                                        <Button
                                            variant='outlined'
                                            color="secondary"
                                            onClick={() => handleSaveButton(habit.id)}
                                        >Save
                                        </Button>
                                        :
                                        <Button
                                            onClick={() => handleEditButton(habit)}
                                            variant='outlined'
                                            color="secondary"
                                            startIcon={<EditIcon />}
                                        >
                                            Edit
                                        </Button>}

                                </Box>
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body2">
                                Current Streak:{getStreaks(habit)}days
                            </Typography>
                        </Box>
                    </Paper>
                })}
            </Box>
        </div>
    )
}

export default ShowHabit