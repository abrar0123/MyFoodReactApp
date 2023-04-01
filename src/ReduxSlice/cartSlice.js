import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  userFoodCart: [],
  cartIndex: 2,
};

const foodCartSlice = createSlice({
  name: "foodcart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const findIndex = state.userFoodCart.findIndex(
        (e) => e.id === newProduct.id
      );

      if (findIndex >= 0) {
        state.userFoodCart[findIndex].quant++;
      } else {
        state.userFoodCart.push(newProduct);
        state.cartIndex++;
      }
    },

    deleteToCart: (state, action) => {
      const newProduct = action.payload;
      const userFood = state.userFoodCart;
      const findIndex = userFood.findIndex((e) => e.id === newProduct.id);
      if (findIndex >= 0) {
        if (userFood[findIndex].quant > 1) {
          state.userFoodCart[findIndex].quant--;
        }
      }
    },

    deleteProduct: (state, action) => {
      state.userFoodCart = state.userFoodCart.filter(
        (e) => e.id !== action.payload.id
      );
    },
  },
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

export const persistedreducer = persistReducer(
  persistConfig,
  foodCartSlice.reducer
);

export const foodCartActions = foodCartSlice.actions;
