import { createSlice } from "@reduxjs/toolkit";
import { fetchInstructors, getInstructorById } from "./operations";

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
  instructor: {},
  isLoading: false,
  error: null,
};

const instructorsSlice = createSlice({
  name: "instructors",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstructors.fulfilled, (state, action) => {
        state.instructors = action.payload;
      })
      .addCase(getInstructorById.fulfilled, (state, action) => {
        state.instructor = action.payload;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state) => {
        state.error = "someone use old function, fix it!";
      });
  },
});

export const instructorsReducer = instructorsSlice.reducer;
