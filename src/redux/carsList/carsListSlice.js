import { createSlice } from "@reduxjs/toolkit";
import { getCarsList } from "./carsListOperation";

const carsListSlice = createSlice({
  name: "carsList",
  initialState: { list: [] },
  extraReducers: (builder) =>
    builder.addCase(getCarsList.fulfilled, (state, action) => {
      state.list = [...action.payload.cars];
    }),
});

export const carsListReducer = carsListSlice.reducer;
