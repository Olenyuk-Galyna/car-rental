import { configureStore } from "@reduxjs/toolkit";
import { carsListReducer } from "./carsList/carsListSlice";
import { filtersReducer } from "./filters/filtersSlice";

export const store = configureStore({
  reducer: {
    carsList: carsListReducer,
    filters: filtersReducer,
    favorits: (state = []) => state,
  },
});
