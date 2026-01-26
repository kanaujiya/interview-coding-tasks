import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/todoSlice";

const store = configureStore({
  reducer: todoReducer,
});

export default store;
