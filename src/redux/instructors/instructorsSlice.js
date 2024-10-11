import { createSlice } from "@reduxjs/toolkit";
import {
  createInstructorProfile,
  fetchInstructors,
  getInstructorById,
} from "./operations";

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
  paginatedInstructors: [],
  instructor: {},
  allInstructors: [],
  totalPages: null,
  currentPage: 1,
  isLoading: false,
  error: null,
};

const instructorsSlice = createSlice({
  name: "instructors",
  initialState,
  reducers: {
    reset: (state) => {
      state.paginatedInstructors = [];
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstructors.fulfilled, (state, action) => {
        state.paginatedInstructors = [
          ...state.paginatedInstructors,
          ...action.payload.paginatedInstructors,
        ];
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.allInstructors = action.payload.allInstructors;
      })
      .addCase(getInstructorById.fulfilled, (state, action) => {
        state.instructor = action.payload;
      })
      .addCase(createInstructorProfile.fulfilled, (state, action) => {
        state.instructor = action.payload;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state) => {
        state.error = "someone used an old function, fix it!";
      });
  },
});

export const { reset } = instructorsSlice.actions;
export const instructorsReducer = instructorsSlice.reducer;
