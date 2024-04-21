import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCampers } from "../api/api";

export const getCampersThunk = createAsyncThunk(
  "campers/getCampers",
  async (_, { rejectWithValue }) => {
    try {
      return await getCampers();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
