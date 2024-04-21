import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      var myitem = state.cart.filter((key) => key.id === action.payload.id);
      if (myitem.length > 0) {
        state.cart.map((key) => {
          if (key.id === action.payload.id) {
            key.quantity++;
            key.tprice = key.quantity * key.price;
          }
        });
      } else {
        state.cart.push(action.payload);
      }
    },
    decqty: (state, action) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === action.payload.id) {
          if (state.cart[i].quantity < 2) {
            state.cart.splice(i, 1);
          } else {
            state.cart[i].quantity--;
            state.cart[i].tprice = state.cart[i].quantity * state.cart[i].price;
          }
        }
      }
    },
  },
});
export const { addToCart, decqty } = cartSlice.actions;
export default cartSlice.reducer;
