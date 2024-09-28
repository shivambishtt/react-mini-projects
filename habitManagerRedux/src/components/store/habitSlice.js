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
        filteredHabits: [],
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

    // filterHabit: (state, action) => {
    //   const { filterName, filterCompleted, filterFrequency } = action.payload;

    //   // state.habits.filter fix
    //   const filtered = state.habits.filter((habit) => {
    //     const matchesName = habit.name
    //       .toLowerCase()
    //       .includes(filterName)
    //       .toISOString()
    //       .split("T")[0];

    //     const matchesCompleted =
    //       filterCompleted === "" ||
    //       (filterCompleted === "completed" &&
    //         habit.completedDate.includes(
    //           new Date().toISOString().split("T")[0]
    //         )) ||
    //       (filterCompleted === "notCompleted" &&
    //         !habit.completedDate.includes(
    //           new Date().toISOString().split("T")[0]
    //         ));

    //     const matchesFrequency = filterFrequency
    //       ? habit.frequency === filterFrequency
    //       : true;

    //     return matchesCompleted && matchesFrequency && matchesName;
    //   });
    //   state.filteredHabits = filtered;
    // },
    filterHabit: (state, action) => {
      const { filterName, filterCompleted, filterFrequency } = action.payload;

      const filtered = state.filter((habit) => {
        const matchesName = filterName
          ? habit.name.toLowerCase().includes(filterName.toLowerCase()) // Correctly compare names
          : true;

        const matchesCompleted =
          filterCompleted === "" || // If no filter is applied, all habits match
          (filterCompleted === "completed" &&
            habit.completedDate.includes(
              new Date().toISOString().split("T")[0]
            )) || // Matches completed for today
          (filterCompleted === "notCompleted" &&
            !habit.completedDate.includes(
              new Date().toISOString().split("T")[0]
            )); // Matches not completed for today

        const matchesFrequency = filterFrequency
          ? habit.frequency === filterFrequency // Checks if frequency matches
          : true;

        return matchesCompleted && matchesFrequency && matchesName;
      });

      state.filteredHabits = filtered;
    },
  },
});

export const { addHabit, toggleHabit, removeHabit, editHabit, filterHabit } =
  habitSlice.actions;
export default habitSlice.reducer;
