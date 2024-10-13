// campersSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from './operations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    selectedCamper: null,
    filteredItems: [],
    paginatedCampers: [],
    currentPage: 1,
    itemsPerPage: 4,
    isLoading: false,
    error: null,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      const startIndex = (state.currentPage - 1) * state.itemsPerPage;
      const endIndex = state.currentPage * state.itemsPerPage;
      state.paginatedCampers = state.filteredItems.slice(startIndex, endIndex);
    },
    setFilteredCampers: (state, action) => {
      const filters = action.payload;
      state.filteredItems = state.items.filter(camper => {
        return (
          (!filters.location ||
            camper.location
              .toLowerCase()
              .includes(filters.location.toLowerCase())) &&
          (!filters.type || camper.form === filters.type) &&
          (!filters.ac || camper.AC === filters.ac) &&
          (!filters.kitchen || camper.kitchen === filters.kitchen) &&
          (!filters.bathroom || camper.bathroom === filters.bathroom)
        );
      });
      state.currentPage = 1; // Скидаємо на першу сторінку
      state.paginatedCampers = state.filteredItems.slice(0, state.itemsPerPage);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.filteredItems = action.payload; // Спочатку всі кемпери
        state.paginatedCampers = action.payload.slice(0, state.itemsPerPage);
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
      });
  },
});

export const { setCurrentPage, setFilteredCampers } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
