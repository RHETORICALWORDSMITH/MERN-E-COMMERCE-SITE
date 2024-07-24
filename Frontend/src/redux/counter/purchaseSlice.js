import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  //Load from local storage or set empty object
  selectedItems: localStorage.getItem("selectedItems")
    ? JSON.parse(localStorage.getItem("selectedItems"))
    : {},
 
};

export const purchaseSlice = createSlice({
  name: "selectedItems",
  initialState,
  reducers: {
    increment: (state, action) => {
      const { id } = action.payload;
      if (!state.selectedItems[id]) {
        state.selectedItems[id] = { value: 0 };
      }
      state.selectedItems[id].value += 1;

      localStorage.setItem(
        "selectedItems",
        JSON.stringify(current(state.selectedItems))
      ); // Save to local storage
    },
    decrement: (state, action) => {
      const { id } = action.payload;
      if (!state.selectedItems[id]) {
        state.selectedItems[id] = { value: 0 };
      } else if (state.selectedItems[id].value > 0) {
        state.selectedItems[id].value -= 1;
      }
      localStorage.setItem(
        "selectedItems",
        JSON.stringify(current(state.selectedItems))
      ); // Save to local storage
    },
    buyUpdate: (state, action) => {
      const { id } = action.payload;
      if (!state.selectedItems[id]) {
        state.selectedItems[id] = { value: 0 };
      } else if (state.selectedItems[id].value > 0) {
        state.selectedItems[id].value = 0;
      }
      console.log("buy is working");
      console.log(state.selectedItems[id]);
      localStorage.setItem(
        "selectedItems",
        JSON.stringify(current(state.selectedItems))
      ); // Save to local storage
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, buyUpdate } = purchaseSlice.actions;

export default purchaseSlice.reducer;
