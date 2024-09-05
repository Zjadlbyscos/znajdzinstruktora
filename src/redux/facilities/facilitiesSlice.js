import { createSlice } from "@reduxjs/toolkit";
import { fetchFacilities, fetchFacilityById } from "./operations";

const isPendingAction = (action) => {
  return action.type.endsWith("/pending");
};

const isRejectAction = (action) => {
  return action.type.endsWith("/rejected");
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  facilities: [],
  facility: {},
  isLoading: false,
  error: null,
};

const facilitiesSlice = createSlice({
  name: "facilities",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFacilities.fulfilled, (state, action) => {
        state.facilities = action.payload;
      })
      .addCase(fetchFacilityById.fulfilled, (state, action) => {
        state.facility = action.payload;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state) => {
        state.error = "someone use old function, fix it!";
      });
  },
});

export const facilitiesReducer = facilitiesSlice.reducer;
