import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";
import { persistedreducer } from "../cartSlice";
import { persistedreducerauth } from "../authSlice";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  foodcart: persistedreducer,
  auth: persistedreducerauth,
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
