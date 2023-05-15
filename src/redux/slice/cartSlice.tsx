import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, payload) => {
      state.value.push(payload);
    },  
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
