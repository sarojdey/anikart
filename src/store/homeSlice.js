import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    categories: {},
    products: {},
    wishList: [],
    cart: {},
  },
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    getWishList: (state, action) => {
      console.log(action.payload);
      const newItem = action.payload.productInfo;
      const newItemQuantity = action.payload.quantity;
      const items = [...state.wishList];
      console.log(items);
      const index = items.findIndex((p) => p.id === newItem.id);
      if (index !== -1) {
        items[index].attributes.quantity += newItemQuantity;
      } else {
        newItem.attributes.quantity=newItemQuantity;
        items.push(newItem);
        console.log(items);
      }
      state.wishList = items;
    },
    getCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { getCategories, getProducts, getWishList, getCart } =
  homeSlice.actions;

export default homeSlice.reducer;
