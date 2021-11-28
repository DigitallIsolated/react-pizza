import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    shoppingCart: [],
    countOfPizzas: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => void state.shoppingCart.push(action.payload),
    deleteFromCart: (state, action) =>
      void state.shoppingCart.splice(action.payload, 1),
    clearCart: (state) => void (state.shoppingCart = []),
    addCount: (state) => void (state.countOfPizzas += 1),
    setTotalPrice: (state, action) => void (state.totalPrice += action.payload),
  },
});

export const { addToCart, deleteFromCart, addCount, setTotalPrice } =
  cartSlice.actions;

export const getCart = (state) => state.cart.shoppingCart;
export const getTotalPrice = (state) => state.cart.totalPrice;
export const getCount = (state) => state.cart.countOfPizzas;

export default cartSlice.reducer;
