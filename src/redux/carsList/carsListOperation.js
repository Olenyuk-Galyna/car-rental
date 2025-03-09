import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCarsList = createAsyncThunk(
  "getCarsList",
  async (query, thunkApi) => {
    try {
      const response = await axios.get(
        "https://car-rental-api.goit.global/cars"
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
