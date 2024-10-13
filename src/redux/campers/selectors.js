// selectors.js

export const selectAllCampers = state => state.campers.items;

export const selectFilteredCampers = state => state.campers.filteredItems;

export const selectPaginatedCampers = state => state.campers.paginatedCampers;

export const selectSelectedCamper = state => state.campers.selectedCamper;

export const selectCurrentPage = state => state.campers.currentPage;

export const selectIsLoading = state => state.campers.isLoading;

export const selectError = state => state.campers.error;

export const selectItemsPerPage = state => state.campers.itemsPerPage;
