import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    queryState: {
      query: "",
      searchBy: "title",
    },
    sortBy: "release_date",
    totalResults: 0,
  },
  reducers: {
    loadMovies(state, action) {
      state.movies = action.payload;
      state.totalResults = state.movies.length;
    },
    setQuery(state, action) {
      state.queryState = { ...state.queryState, ...action.payload };
    },

    sortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const movieReducers = moviesSlice.reducer;
export const movieActions = moviesSlice.actions;
