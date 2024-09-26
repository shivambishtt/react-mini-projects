import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // {
  //   id: 1,
  //   name: "habit example",
  //   frequency: "daily",
  //   completedDate: [],
  // },
];

const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    // toh basically hume state update karni hai
    addHabit: (state, action) => {
      const newHabit = {
        id: Date.now(), // using current timestamp as an ID
        name: action.payload.name,
        newName: action.payload.newName,
        frequency: action.payload.frequency || "daily",
        completedDate: [],
      };
      state.push(newHabit);
    },
    toggleHabit: (state, action) => {
      const habit = state.find((habit) => {
        return habit.id === action.payload.id;
      });
      if (habit) {
        const index = habit.completedDate.indexOf(action.payload.date);
        if (index > -1) {
          habit.completedDate.splice(index, 1); //mark incomplete
        } else {
          habit.completedDate.push(action.payload.date); //mark complete
        }
      }
    },
    // removeHabit: (state, action) => {
    //   const habit = state.findIndex((habit) => {
    //     return habit.id === action.payload.id;
    //   });
    //   if (habit > -1) {
    //     state.splice(habit, 1);
    //   } else {
    //     state.push(action.payload.id);
    //   }
    // },
    // removeHabit: (state, action) => {
    //   const habit = state.filter((habit) => {
    //     return habit.id === action.payload.id;
    //   });
    //   return habit;
    // },
    removeHabit: (state, action) => {
      const habit = state.find((habit) => {
        return habit.id === action.payload.id;
      });
      // agat habit mil rahi hai to uska index nikaalo
      if (habit) {
        const index = state.indexOf(habit);
        if (index > -1) {
          state.splice(index, 1);
        }
      }
    },
    // sabse pehle to dekhenge ki humara habit hai ya nahi
    // find kare ke bad wo pehle document return kardega
    editHabit: (state, action) => {
      const habit = state.findIndex((habit) => {
        return habit.id === action.payload.id;
      });
      if (habit > -1) {
        state[habit] = {
          ...state[habit],
          name: action.payload.newName,
        };
      }
    },
  },
});

export const { addHabit, toggleHabit, removeHabit, editHabit } =
  habitSlice.actions;
export default habitSlice.reducer;
