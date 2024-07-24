import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  purchasedItems: localStorage.getItem("purchasedItems")
    ? JSON.parse(localStorage.getItem("purchasedItems"))
    : [], // Load from local storage or set empty array
};

// export const cartSlice = createSlice({
//   name: "purchasedItems",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const { item, noItem } = action.payload;
//       if (purchasedItems.includes(item)) {
//         const index = purchasedItems.indexOf(item);
//         const valueToReplace = (state.purchasedItems[indexItemIn].noItem = noItem); // Store the value at the found index
//         console.log("Value replaced:", valueToReplace);
//       } else {
//         item.noItem = noItem;
//         state.purchasedItems.push(item);
//         console.log("Item added to cart:", item);
//         localStorage.setItem(
//           "purchasedItems",
//           JSON.stringify(current(state.purchasedItems))
//         ); // Save to local storage
//         console.log("The cart looks like this:", current(state.purchasedItems));
//       }
//     },
//   },
// });
export const cartSlice = createSlice({
  name: "purchasedItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { item, noItem } = action.payload;
      const existingItemIndex = state.purchasedItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        console.log(noItem);
        state.purchasedItems[existingItemIndex].noItem += noItem;
        // Save to local storage
        localStorage.setItem(
          "purchasedItems",
          JSON.stringify(current(state.purchasedItems))
        ); // Update quantity directly
        console.log(
          "The existing cart looks like this:",
          current(state.purchasedItems)
        );
      } else {
        item.noItem = noItem;
        state.purchasedItems.push(item);
        console.log("Item added to cart:", item);
        // Save to local storage
        localStorage.setItem(
          "purchasedItems",
          JSON.stringify(current(state.purchasedItems))
        );
        console.log("The cart looks like this:", current(state.purchasedItems));
        console.log(noItem);
      }
    },
    updateIncrement: (state, action) => {
      //this updates when the user makes modification in cart modifications are reflected in purchasedItems
      const { id, noItem } = action.payload;
      const existingItemIndex = state.purchasedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      if (existingItemIndex !== -1) {
        console.log(noItem);
        state.purchasedItems[existingItemIndex].noItem += noItem; // Update quantity directly
        console.log(
          "The existing cart looks like this:",
          current(state.purchasedItems)
        );
        localStorage.setItem(
          "purchasedItems",
          JSON.stringify(current(state.purchasedItems))
        ); // Save to local storage
      }
    },
    // updateDecrement: (state, action) => {
    //   //this updates when the user makes modification in cart modifications are reflected in purchasedItems
    //   const { id, noItem, totalItems } = action.payload;
    //   console.log(totalItems);
    //   if (totalItems > 0) {
    //     const existingItemIndex = state.purchasedItems.findIndex(
    //       (cartItem) => cartItem.id === id
    //     );
    //     if (existingItemIndex !== -1) {
    //       console.log(noItem);
    //       state.purchasedItems[existingItemIndex].noItem -= noItem;

    //       if (state.purchasedItems[existingItemIndex].noItem > 0) {
    //         // Save to local storage
    //         localStorage.setItem(
    //           "purchasedItems",
    //           JSON.stringify(current(state.purchasedItems))
    //         );
    //         console.log(
    //           "The existing cart looks like this:",
    //           current(state.purchasedItems)
    //         );
    //       } else {
    //         localStorage.setItem("purchasedItems", JSON.stringify([]));
    //         console.log(
    //           "The existing cart looks like this for decrement:",
    //           current(state.purchasedItems)
    //         );
    //       }
    //     }
    //   }
    // },
    updateDecrement: (state, action) => {
      const { id, noItem } = action.payload;
      const existingItemIndex = state.purchasedItems.findIndex(
        (cartItem) => cartItem.id === id
      );

      if (existingItemIndex !== -1) {
        state.purchasedItems[existingItemIndex].noItem -= noItem;

        if (state.purchasedItems[existingItemIndex].noItem > 0) {
          localStorage.setItem(
            "purchasedItems",
            JSON.stringify(current(state.purchasedItems))
          );
        } else {
          state.purchasedItems.splice(existingItemIndex, 1);
          localStorage.setItem(
            "purchasedItems",
            JSON.stringify(current(state.purchasedItems))
          );
        }

        console.log(
          "The existing cart looks like this:",
          current(state.purchasedItems)
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateIncrement, updateDecrement } =
  cartSlice.actions;

export default cartSlice.reducer;
