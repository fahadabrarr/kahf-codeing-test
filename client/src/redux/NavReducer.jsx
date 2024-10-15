import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "profile",
};

export const navSlicer = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNavbar: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setNavbar } = navSlicer.actions;
export default navSlicer.reducer;
