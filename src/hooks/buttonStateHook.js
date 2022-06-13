import { useReducer } from "react";

const initialState = {
  btn1: true,
  btn2: false,
};
const reducerFn = function (state, action) {
  if (action.type === "setBtn1Active") {
    return {
      btn1: true,
      btn2: false,
    };
  } else if (action.type === "setBtn2Active") {
    // console.log("Here");
    return {
      btn1: false,
      btn2: true,
    };
  }

  return state;
};

export const useButtonState = function () {
  const [state, dispatchFn] = useReducer(reducerFn, initialState);

  return {
    state,
    dispatchFn,
  };
};
