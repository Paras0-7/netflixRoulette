import { configureStore } from "@reduxjs/toolkit";

import { buttonReducers } from "../slices/buttonSlice";

export const store = configureStore({
  reducer: {
    button: buttonReducers,
  },
});
