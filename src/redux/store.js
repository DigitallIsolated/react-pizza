import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import sortSlice from "./sortSlice";
import cartSlice from "./cartSlice";

export default configureStore({
  reducer: {
    categories: categoriesSlice,
    sort: sortSlice,
    cart: cartSlice,
  },
});