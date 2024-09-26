import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./habitSlice.js";

const store = configureStore({
  reducer: {
    habit: habitReducer,
  },
});

export default store;
