import { createSlice } from "@reduxjs/toolkit";

const carsListSlice = createSlice({
  name: "carsList",
  initialState: { list: [] },
});
console.log(carsListSlice);

export const carsListReducer = carsListSlice.reducer;
