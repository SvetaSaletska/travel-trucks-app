// favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteCampers: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const existingIndex = state.favoriteCampers.findIndex(
        camper => camper.id === action.payload.id,
      );
      if (existingIndex === -1) {
        state.favoriteCampers.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favoriteCampers = state.favoriteCampers.filter(
        camper => camper.id !== action.payload.id,
      );
    },
    clearFavorites: state => {
      state.favoriteCampers = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
