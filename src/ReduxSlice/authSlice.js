import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";

const authSlice = createSlice({
  name: "auth",
  initialState: { authToken: "", isLoggedIn: false, userEmail: "" },

  reducers: {
    auth_Login: (state, action) => {
      const obj = action.payload;
      console.log("token_In_Store", obj.token);
      state.authToken = obj.token;
      state.isLoggedIn = obj.status;
      state.userEmail = obj.email;
    },
    aut_Logout: (state) => {
      state.authToken = "";
      state.isLoggedIn = false;
      state.email = "";
    },
  },
});

const persistConfig1 = {
  key: "root",
  storage: AsyncStorage,
};
export const persistedreducerauth = persistReducer(
  persistConfig1,
  authSlice.reducer
);

export const authActions = authSlice.actions;
