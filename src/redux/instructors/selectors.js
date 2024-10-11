export const selectPaginatedInstructors = (state) =>
  state.instructors.paginatedInstructors;
export const selectAllInstructors = (state) => state.instructors.allInstructors;
export const selectInstructor = (state) => state.instructors.instructor;
export const selectTotalPages = (state) => state.instructors.totalPages;
export const selectCurrentPage = (state) => state.instructors.currentPage;
export const selectIsLoading = (state) => state.instructors.isLoading;
export const selectError = (state) => state.instructors.error;
