import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slice/todoSlice.js";

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export default store;
