import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const wishListSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.data.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.data = state.data.filter((elem) => elem._id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = wishListSlice.actions;

export default wishListSlice.reducer;
