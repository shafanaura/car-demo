import { configureStore } from "@reduxjs/toolkit";
import CarReducer from "./reducer/CarReducer";

export const store = configureStore({
  reducer: {
    car: CarReducer,
  },
});
