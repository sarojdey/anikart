import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    getCart: (state, action) => {
      const newItem = action.payload.productInfo;
      const newItemQuantity = action.payload.quantity;
      const index = state.cart.findIndex((p) => p.id === newItem.id);

      if (index !== -1) {
        // If item already exists, create a new array with updated quantity
        state.cart = state.cart.map((item, idx) =>
          idx === index
            ? {
                ...item,
                attributes: {
                  ...item.attributes,
                  quantity: item.attributes.quantity + newItemQuantity,
                },
              }
            : item
        );
      } else {
        // If item does not exist, add it to the cart array
        state.cart = [
          ...state.cart,
          {
            ...newItem,
            attributes: { ...newItem.attributes, quantity: newItemQuantity },
          },
        ];
      }
    },
  },
});

export const { getCart } = cartSlice.actions;

export default cartSlice.reducer;
