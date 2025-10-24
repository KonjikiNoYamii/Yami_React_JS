import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import characterReducer from '../features/character/characterSlice'
export const store = configureStore({
  reducer:{
    counter:counterReducer, //harus import manual
    character:characterReducer
  } 
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;