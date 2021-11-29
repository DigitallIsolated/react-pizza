import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    countOfPizzas: 0,
    totalPrice: 0,
    shoppingCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.shoppingCart.push(action.payload);
      state.totalPrice += action.payload.price;
      state.countOfPizzas += 1;
    },
    deleteFromCart: (state, action) => {
      state.totalPrice -= state.shoppingCart[action.payload].price;
      state.countOfPizzas -= 1;
      state.shoppingCart.splice(action.payload, 1);
    },
    clearCart: (state) => {
      state.shoppingCart = [];
      state.countOfPizzas = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;

export const getTotalPrice = (state) => state.cart.totalPrice;
export const getCount = (state) => state.cart.countOfPizzas;
export const getCart = (state) => state.cart.shoppingCart;

export default cartSlice.reducer;
