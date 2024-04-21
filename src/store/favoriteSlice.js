import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavoriteAction: (state, { payload }) => {
      return {
        favorites: [...state.favorites, payload],
      };
    },
    deleteFavoriteAction: (state, { payload }) => {
      return {
        favorites: state.favorites.filter((el) => {
          return el._id !== payload._id;
        }),
      };
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addFavoriteAction, deleteCdeleteFavoriteActio } =
  favoritesSlice.actions;
