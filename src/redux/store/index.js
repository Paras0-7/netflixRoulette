import { configureStore } from "@reduxjs/toolkit";

import { movieReducers } from "../slices/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducers,
  },
});
