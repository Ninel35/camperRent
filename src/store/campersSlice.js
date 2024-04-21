import { createSlice } from "@reduxjs/toolkit";
import { getCampersThunk } from "./campersThunks";

const handlePending = (state) => {
  state.loading = true;
  state.error = "";
};

const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const handleFulfilled = (state) => {
  state.loading = false;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampersThunk.fulfilled, (state, { payload }) => {
        state.campers = payload;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("/rejected"), handleRejected)
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        handleFulfilled
      );
  },
});

export const campersReducer = campersSlice.reducer;
