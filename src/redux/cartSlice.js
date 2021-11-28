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
    deleteFromCart: (state, action) => {
      state.shoppingCart.splice(action.payload, 1);
      state.countOfPizzas -= 1;
      if (state.shoppingCart.length === 0) {
        state.totalPrice -= state.totalPrice;
        state.shoppingCart = [];
        state.countOfPizzas = 0;
      } else {
        state.totalPrice -= state.shoppingCart[action.payload].price;
      }
    },
    clearCart: (state) => {
      state.shoppingCart = [];
      state.countOfPizzas = 0;
      state.totalPrice = 0;
    },
    addCount: (state) => void (state.countOfPizzas += 1),
    setTotalPrice: (state, action) => void (state.totalPrice += action.payload),
  },
});

export const { addToCart, deleteFromCart, addCount, setTotalPrice, clearCart } =
  cartSlice.actions;

export const getCart = (state) => state.cart.shoppingCart;
export const getTotalPrice = (state) => state.cart.totalPrice;
export const getCount = (state) => state.cart.countOfPizzas;

export default cartSlice.reducer;
