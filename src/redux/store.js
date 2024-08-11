import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./start/slice.js";

export const store = configureStore({
  reducer: {
    count: countReducer,
  },
});
