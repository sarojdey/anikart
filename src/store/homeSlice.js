import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    categories: {},
    products: {},
  },
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { getCategories, getProducts } = homeSlice.actions;

export default homeSlice.reducer;
