import { createSlice } from "@reduxjs/toolkit";
import { fetchInstructorRating, rateInstructor } from "./operations";
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
  rating: null,
  comment: "",
  isLoading: false,
  error: null,
  isSuccess: false,
};

const rateSlice = createSlice({
  name: "rate",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(rateInstructor.fulfilled, (state, action) => {
        state.rating = action.payload.rating;
        state.isSuccess = true;
      })
      .addCase(fetchInstructorRating.fulfilled, (state, action) => {
        state.rating = action.payload.rating;
        state.comment = action.payload.comment;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state) => {
        state.error = "someone used an old function, fix it!";
      });
  },
});

export const rateReducer = rateSlice.reducer;
