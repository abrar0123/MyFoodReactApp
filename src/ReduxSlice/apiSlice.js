import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "api",
  initialState: { myFood: [] },
  reducers: {
    myFoodGet: (state, action) => {
      console.log("myFood__", action.payload);
      const obj = action.payload;
      state.myFood = obj;
    },
  },
});

export const apireducer = apiSlice.reducer;

export const apiActions = apiSlice.actions;
