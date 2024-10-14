import { createSlice } from "@reduxjs/toolkit";
import {
  createNewEvent,
  deleteEvent,
  fetchEventById,
  fetchEvents,
  fetchInstructorEvents,
  getInstructorUpcomingEvents,
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
  events: [],
  event: {},
  totalPages: 1,
  instructorEvents: [],
  upcomingEvents: [],
  isLoading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.events = action.payload;
      })
      .addCase(fetchInstructorEvents.fulfilled, (state, action) => {
        state.instructorEvents = action.payload;
      })
      .addCase(fetchEventById.fulfilled, (state, action) => {
        state.event = action.payload;
      })
      .addCase(getInstructorUpcomingEvents.fulfilled, (state, action) => {
        state.upcomingEvents = action.payload.events;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(createNewEvent.fulfilled, (state, action) => {
        state.event = action.payload;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.event = action.payload;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state) => {
        state.error = "someone use old function, fix it!";
      });
  },
});

export const eventsReducer = eventsSlice.reducer;
