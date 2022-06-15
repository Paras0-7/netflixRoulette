import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movie: {},
    queryState: {
      query: "",
      searchBy: "title",
    },
    sortBy: "release_date",
    totalResults: 0,
    isLoading: false,
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
    loadMovie(state, action) {
      state.movie = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const movieReducers = moviesSlice.reducer;
export const movieActions = moviesSlice.actions;
