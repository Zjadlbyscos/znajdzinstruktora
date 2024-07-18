import { createSlice } from "@reduxjs/toolkit";
import { createInstructorProfile, fetchInstructors } from "./operations";

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
  instructors: [],
  isLoading: false,
  error: null,
  isInstructor: false,
};

const instructorsSlice = createSlice({
  name: "instructors",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstructors.fulfilled, (state, action) => {
        state.instructors = action.payload;
      })
      .addCase(createInstructorProfile.fulfilled, (state) => {
        state.isInstructor = true;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state) => {
        state.error = "someone use old function, fix it!";
      });
  },
});

export const instructorsReducer = instructorsSlice.reducer;
