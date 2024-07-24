import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currEmail: localStorage.getItem("currEmail") || "", //holds only one email at a time
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    emailTransfer: (state, action) => {
      const { email } = action.payload;
      state.currEmail = email; // Update the email in the state
      localStorage.setItem("currEmail", state.currEmail); // Save to local storage
      console.log("The email is added:", state.currEmail);
    },
  },
});

// Action creators are generated for each case reducer function
export const { emailTransfer } = emailSlice.actions;

export default emailSlice.reducer;
