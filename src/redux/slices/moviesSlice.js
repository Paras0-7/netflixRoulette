import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    totalResults: 0,
  },
  reducers: {
    loadMovies(state, action) {
      state.movies = action.payload;
      state.totalResults = state.movies.length;
    },
  },
});

export const movieReducers = moviesSlice.reducer;
export const movieActions = moviesSlice.actions;
