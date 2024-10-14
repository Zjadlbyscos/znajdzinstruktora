export const selectFacilities = (state) => state.facilities.facilities;
export const selectFacilityById = (state) => state.facilities.facility;
export const selectFacilitiesTotalPages = (state) =>
  state.facilities.totalPages;
export const selectFacilitiesCurrentPage = (state) =>
  state.facilities.currentPage;
export const selectFacilitiesIsLoading = (state) => state.facilities.isLoading;
export const selectFacilitiesError = (state) => state.facilities.error;
