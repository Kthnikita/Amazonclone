import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Createslice";
import cartReducer from "./cartslice";
const store = configureStore({
  reducer: {
    user: userReducer,
    cart:cartReducer,
  },
});

export default store;