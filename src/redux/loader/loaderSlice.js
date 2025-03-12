import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: { isLoading: false },
  reducers: {
    setIsLoadingAction: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        (action) => {
          return action.type.endsWith("pending");
        },
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => {
          return (
            action.type.endsWith("fulfilled") ||
            action.type.endsWith("rejected")
          );
        },
        (state) => {
          state.isLoading = false;
        }
      ),
});

export const { setIsLoadingAction } = loaderSlice.actions;
export default loaderSlice.reducer;
