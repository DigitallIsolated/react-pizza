import { createSlice } from "@reduxjs/toolkit";

const { isMatch } = require("underscore");

const objectsEquals = (object, list) => {
  const indexes = [];

  list.map((item, index) =>
    isMatch(item, {
      type: object.type,
      size: object.size,
      name: object.name,
    })
      ? indexes.push(index)
      : null
  );

  return indexes;
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    countOfPizzas: 0,
    totalPrice: 0,
    shoppingCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const sameObjects = objectsEquals(action.payload, state.shoppingCart);

      if (sameObjects.length !== 0) {
        for (let i of sameObjects) {
          state.shoppingCart[i].price += action.payload.price;
          state.shoppingCart[i].count += action.payload.count;
        }
      } else {
        state.shoppingCart.push(action.payload);
      }
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
