import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from '../redux/campers/campersSlice.js';
import { filtersReducer } from '../redux/filters/filtersSlice.js';
import { favoritesReducer } from '../redux/favorites/favoritesSlice.js';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});
