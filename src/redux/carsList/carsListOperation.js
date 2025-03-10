import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCarsList = createAsyncThunk(
  "getCarsList",
  async ({ page }, thunkApi) => {
    try {
      const response = await axios.get(
        "https://car-rental-api.goit.global/cars",
        {
          params: {
            page,
            limit: 8,
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
