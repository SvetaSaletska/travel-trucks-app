import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    type: '',
    ac: false,
    kitchen: false,
    bathroom: false,
    tv: false,
    transmission: '',
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setAC: (state, action) => {
      state.ac = action.payload;
    },
    setKitchen: (state, action) => {
      state.kitchen = action.payload;
    },
    setBathroom: (state, action) => {
      state.bathroom = action.payload;
    },
    setTV: (state, action) => {
      state.tv = action.payload;
    },
    setTransmission(state, action) {
      state.transmission = action.payload;
    },
    resetFilters: state => {
      state.location = '';
      state.type = '';
      state.ac = false;
      state.kitchen = false;
      state.bathroom = false;
      state.tv = false;
    },
  },
});

export const {
  setLocation,
  setType,
  setAC,
  setKitchen,
  setBathroom,
  setTV,
  setTransmission,
  resetFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

export const selectFilters = state => state.filters;
