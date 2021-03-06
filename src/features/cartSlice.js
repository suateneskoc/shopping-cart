import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  itemCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      let alreadyInCart = false;
      state.items.forEach((item) => {
        if (item.id === payload.id) {
          alreadyInCart = true;
          item.number += payload.number;
        }
      });
      if (!alreadyInCart) {
        state.items.push(payload);
      }
      state.itemCount += payload.number;
    },
    changeNumberOfItem: (state, { payload }) => {
      let item = state.items.filter((item) => item.id === payload.id);
      if (item.length) {
        state.itemCount = state.itemCount + payload.number - item[0].number;
        item[0].number = payload.number;
      } else {
        console.log(
          "ERROR: Tried changing number of items in cart, for an item type that does not exist in cart."
        );
      }
    },
    clearCart: (state) => {
      state = initialState;
    },
  },
});

export const { addItem, changeNumberOfItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
