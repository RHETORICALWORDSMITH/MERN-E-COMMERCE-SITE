import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eliminateCart: setTimeout(() => {
    localStorage.getItem("eliminateCart") || false;
  }, 2000),
};

export const emptyCartSlice = createSlice({
  name: "eliminateCart",
  initialState,
  reducers: {
    removeCartItems: (state, action) => {
      // if this is true then true wwill be passed in cartcards to empty th cart
      const { emptyCart } = action.payload;
      state.eliminateCart = emptyCart;
      localStorage.setItem("eliminateCart", state.eliminateCart);
      console.log(emptyCart);
      console.log("The cart is empty:", state.eliminateCart);
    },
  },
});

// Action creators are generated for each case reducer function
export const { removeCartItems } = emptyCartSlice.actions;

export default emptyCartSlice.reducer;
