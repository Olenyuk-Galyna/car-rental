import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  },
  reducers: {
    setFilterAction: (state, { payload }) => {
      const { name, value } = payload;
      state[name] = value;
    },
  },
});

export const { setFilterAction } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
