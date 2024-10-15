import { configureStore } from "@reduxjs/toolkit";
import NavReducer from "./NavReducer";

const store = configureStore({
  reducer: {
    navbar: NavReducer,
  },
});

export default store;
