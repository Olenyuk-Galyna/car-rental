import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    brend: "",
    price: "",
    run: { min: 0, max: 0 },
  },
});

export const filtersReducer = filtersSlice.reducer;
