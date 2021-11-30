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
      state.countOfPizzas -= state.shoppingCart[action.payload].count;
      state.shoppingCart.splice(action.payload, 1);
    },
    clearCart: (state) => {
      state.shoppingCart = [];
      state.countOfPizzas = 0;
      state.totalPrice = 0;
    },
    addCount: (state, action) => {
      const item = state.shoppingCart[action.payload];
      const price = item.price;

      item.price += price / item.count;
      item.count += 1;

      state.totalPrice += item.price / item.count;
      state.countOfPizzas += 1;
    },
    decrement: (state, action) => {
      const item = state.shoppingCart[action.payload];

      if (item.count > 1) {
        item.price -= item.price / item.count;
        item.count -= 1;

        state.totalPrice -= item.price / item.count;
      } else {
        state.totalPrice -= state.shoppingCart[action.payload].price;
        state.shoppingCart.splice(action.payload, 1);
      }

      state.countOfPizzas -= 1;
    },
  },
});

export const { addToCart, deleteFromCart, clearCart, addCount, decrement } =
  cartSlice.actions;

export const getTotalPrice = (state) => state.cart.totalPrice;
export const getCount = (state) => state.cart.countOfPizzas;
export const getCart = (state) => state.cart.shoppingCart;

export default cartSlice.reducer;
