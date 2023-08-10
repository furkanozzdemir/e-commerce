import { createSlice } from "@reduxjs/toolkit";
export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    value: [],
  },
  reducers: {
    setBasket: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    setEmpty: (state) => {
      state.value = [];
    },
  },
});
export const { setBasket, setEmpty } = basketSlice.actions;

export default basketSlice.reducer;
