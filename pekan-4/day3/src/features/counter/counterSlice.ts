import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {value:0},
  reducers: {
    tambah: (state) => {state.value += 1},
    kurang: (state) => {state.value -= 2},
    tambahDenganNilai: (state, action) => {state.value += action.payload},
  },
});
export const { tambah, kurang, tambahDenganNilai } = counterSlice.actions;
export default counterSlice.reducer;
