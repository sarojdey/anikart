import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    categories: {},
    products: {},
    wishList: [],
  },
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    getWishList: (state, action) => {
      const newItem = action.payload.productInfo;
      const newItemQuantity = action.payload.quantity;
      const index = state.wishList.findIndex((p) => p.id === newItem.id);

      if (index !== -1) {
        // If item already exists, create a new array with updated quantity
        state.wishList = state.wishList.map((item, idx) =>
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
        // If item does not exist, add it to the wishlist array
        state.wishList = [
          ...state.wishList,
          {
            ...newItem,
            attributes: { ...newItem.attributes, quantity: newItemQuantity },
          },
        ];
      }
    },
  },
});

export const { getCategories, getProducts, getWishList } = homeSlice.actions;

export default homeSlice.reducer;
