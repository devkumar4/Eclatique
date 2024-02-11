import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    setUser: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
  },
});

export const { setUserAuthenticated, setUser } = userSlice.actions;
export default userSlice.reducer;
