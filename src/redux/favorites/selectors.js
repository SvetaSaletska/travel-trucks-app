export const selectFavoriteCampers = state => state.favorites.favoriteCampers;
export const selectIsFavorite = (state, camperId) =>
  state.favorites.favoriteCampers.some(camper => camper.id === camperId);
