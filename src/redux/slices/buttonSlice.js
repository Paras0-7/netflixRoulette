import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "button",
  initialState: {
    btn1: true,
    btn2: false,
  },
  reducers: {
    setBtn1Active(state) {
      state.btn1 = true;
      state.btn2 = false;
    },
    setBtn2Active(state) {
      state.btn1 = false;
      state.btn2 = true;
    },
  },
});

export const buttonReducers = buttonSlice.reducer;
export const buttonActions = buttonSlice.actions;
