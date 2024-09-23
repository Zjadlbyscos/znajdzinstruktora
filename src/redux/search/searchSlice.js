import { createSlice } from "@reduxjs/toolkit";
import { searchEvents } from "./operations";

const isPendingAction = (action) => {
  return action.type.endsWith("/pending");
};

const isRejectAction = (action) => {
  return action.type.endsWith("/rejected");
};

const handlePending = (state) => {
  state.isLoading = true;
  state.isSuccess = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isSuccess = false;
};

const initialState = {
  results: [],
  loading: false,
  error: null,
  isSuccess: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(searchEvents.fulfilled, (state, action) => {
        state.results = action.payload;
        state.loading = false;
        state.isSuccess = true;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state) => {
        state.error = "someone use old function, fix it!";
      });
  },
});

export const searchReducer = searchSlice.reducer;
