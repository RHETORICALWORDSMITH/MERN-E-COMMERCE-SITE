import { configureStore } from "@reduxjs/toolkit";
import purchaseReducer from "./counter/purchaseSlice";
import cartReducer from "./counter/cartSlice";
import emailReducer from "./counter/transferEmailSlice";
import emptyCartReducer from "./counter/emptyCartSlice";
export const store = configureStore({
  reducer: {
    boughtItem: purchaseReducer,
    cartItems: cartReducer,
    isCartEmpty: emptyCartReducer,
    email: emailReducer,
  },
});
