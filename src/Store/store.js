import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Slice/todoSlice";

const store = configureStore({
  reducer: todoSlice,
});

export default store;
