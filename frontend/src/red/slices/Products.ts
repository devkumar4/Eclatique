import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.productId === newItem.productId
      );

      if (existingItemIndex !== -1) {
        // Create a new object for the existing item
        const existingItem = { ...state.cartItems[existingItemIndex] };

        // Modify the quantity of the new object
        existingItem.quantity += newItem.quantity;

        // Update the state with the new object
        state.cartItems[existingItemIndex] = existingItem;
      } else {
        state.cartItems.push(newItem);
      }
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemIdToRemove
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;
