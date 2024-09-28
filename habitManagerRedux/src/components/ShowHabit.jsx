import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material'
import CheckCircle from "@mui/icons-material/CheckCircle"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from '@mui/icons-material/Edit';
import { removeHabit, toggleHabit, editHabit, filterHabit } from './store/habitSlice'

function ShowHabit() {
    const habits = useSelector((state) => state.habit)
    const filteredHabits = useSelector((state) => state.habit.filteredHabits);
    const today = new Date().toISOString().split("T")[0]
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(null)
    const [newHabitName, setNewHabitName] = useState("")
    const [filterName, setFilterName] = useState('');
    const [filterCompleted, setFilterCompleted] = useState('');
    const [filterFrequency, setFilterFrequency] = useState('');

    const handleEditButton = (habit) => {
        setIsEditing(habit.id)
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


    const handleFilter = () => {
        dispatch(filterHabit({ filterName, filterCompleted, filterFrequency }));
    };

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


            <Box sx={{ mb: 2 }}>
                <TextField
                    label="Filter by Habit Name"
                    variant="outlined"
                    value={filterName}
                    onChange={(e) => setFilterName(e.target.value)}
                />
                <TextField
                    select
                    label="Completion Status"
                    variant="outlined"
                    value={filterCompleted}
                    onChange={(e) => setFilterCompleted(e.target.value)}
                    sx={{ ml: 2 }}
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="notCompleted">Not Completed</MenuItem>
                </TextField>
                <TextField
                    select
                    label="Filter by Frequency"
                    variant="outlined"
                    value={filterFrequency}
                    onChange={(e) => setFilterFrequency(e.target.value)}
                    sx={{ ml: 2 }}
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Weekly</MenuItem>
                    <MenuItem value="monthly">Monthly</MenuItem>
                    {/* Add other frequency options as needed */}
                </TextField>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleFilter}
                    sx={{ ml: 2 }}>
                    Filter
                </Button>
            </Box>


            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2
                }}>
                {filteredHabits?.map((habit) => (
                    <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
                        <Typography variant='h6'>{habit.name}</Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Frequency: {habit.frequency}
                        </Typography>
                    </Paper>
                ))}
            </Box>

        </div>
    )
}

export default ShowHabit