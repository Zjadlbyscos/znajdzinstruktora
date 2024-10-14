export const selectEvents = (state) => state.events.events;
export const selectEvent = (state) => state.events.event;
export const selectInstructorEvents = (state) => state.events.instructorEvents;
export const selectUpcomingInstructorEvents = (state) =>
  state.events.upcomingEvents;
