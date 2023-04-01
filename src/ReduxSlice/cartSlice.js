import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";

const initialState = {
  userFoodCart: [],
  isLoggedIn: true,
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

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
// };

// const persistedreducer = persistReducer(persistConfig, foodCartSlice.reducer);

const rootReducer = combineReducers({
  foodcart: foodCartSlice.reducer,
});

const mystore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// const store = configureStore({
//   reducer: foodCartSlice.reducer,
// });

export const mypersistor = persistStore(mystore);

export default mystore;

export const foodCartActions = foodCartSlice.actions;
