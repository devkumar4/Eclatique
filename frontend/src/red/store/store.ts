// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/UserSlice";
import Products from "../slices/Products";

const store = configureStore({
  reducer: {
    user: userReducer,
    addToCart: Products,
  },
});

export default store;
