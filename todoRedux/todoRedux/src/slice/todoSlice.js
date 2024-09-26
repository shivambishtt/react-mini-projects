import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: nanoid(), todo: action.payload, isCompleted: false });
    },
    deleteTodo: (state, action) => {
     return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
